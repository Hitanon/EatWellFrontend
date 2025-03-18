import { useState } from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, View, Text } from "react-native";
import { useRouter } from "expo-router";
import TabSwitcher from "@/components/ui/TabSwitcher";
import FoodItem from "@/components/food/FoodItem";
import MainButton from "@/components/ui/MainButton";
import { useStores } from "@/context/MobXContext";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { TabType } from "@/constants/types";

const ProductsScreen = observer(() => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>(TabType.Meals);
  const { productsStore, mealsStore } = useStores();

  /** Режим множественного выбора */
  const [isSelecting, setIsSelecting] = useState(false);
  /** Множество выбранных айтемов */
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Получаем список текущих элементов
  const items = activeTab === TabType.Meals ? mealsStore.meals : productsStore.products;

  // Долгое нажатие включает режим множественного выбора
  const handleLongPress = (id: string) => {
    setIsSelecting(true);
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  // Обычное нажатие (выделение в режиме, или редактирование, если режим не включен)
  const handlePress = (id: string) => {
    if (isSelecting) {
      toggleSelection(id);
    } else {
      router.push(activeTab === TabType.Meals ? `/meal?id=${id}` : `/product?id=${id}`);
    }
  };

  // Добавление/удаление из множ. выбора
  const toggleSelection = (id: string) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      // Если все сняли, выходим из режима
      if (newSelection.size === 0) {
        setIsSelecting(false);
      }
      return newSelection;
    });
  };

  // Отмена режима выбора
  const resetSelection = () => {
    setIsSelecting(false);
    setSelectedItems(new Set());
  };

  // Удаление элемента
  const handleDelete = (id: string) => {
    if (activeTab === TabType.Meals) {
      mealsStore.meals = mealsStore.meals.filter((item) => item.id !== id);
    } else {
      productsStore.products = productsStore.products.filter((item) => item.id !== id);
    }
  };

  // Обработка добавления в рацион всех выбранных
  const handleAddSelectedItems = () => {
    console.log("Добавить в рацион эти элементы:", Array.from(selectedItems));
    resetSelection();
  };

  return (
    <View className="flex-1 items-center justify-start px-7 py-3">
      {/* Переключатель вкладок */}
      <TabSwitcher
        tabs={[TabType.Meals, TabType.Products]}
        onSelect={(tab) => setActiveTab(tab as TabType)}
      />

      {/* Список продуктов / блюд */}
      <ScrollView className="flex-1 w-full mt-4" showsVerticalScrollIndicator={false}>
        {/* Заголовок с количеством выбранных элементов, если идет множественный выбор */}
        {isSelecting && (
          <Text className="text-label text-[20px] text-center font-mmedium mb-4">
            Выбрано: {selectedItems.size}
          </Text>
        )}
        {items.map((item) => (
          <FoodItem
            key={item.id}
            image={item.image}
            name={item.name}
            weight={item.weight}
            calories={item.calories}
            isSelecting={isSelecting}
            isSelected={selectedItems.has(item.id)}
            onPress={() => handlePress(item.id)}
            onLongPress={() => handleLongPress(item.id)}
            onDelete={() => handleDelete(item.id)}
            onAddToRation={() => {}}
            containerStyle="mb-3"
          />
        ))}
      </ScrollView>

      {/* Кнопка создания или добавления в рацион */}
      <MainButton
        text={
          isSelecting
            ? "Добавить в рацион"
            : activeTab === TabType.Meals
            ? "Создать новое блюдо"
            : "Создать новый продукт"
        }
        onPress={
          isSelecting
            ? handleAddSelectedItems
            : activeTab === TabType.Meals
            ? () => router.push("/meal")
            : () => router.push("/product")
        }
        containerStyle="mt-4 mb-2"
      />

      {/* Кнопка "Отмена" при множественном выборе */}
      {isSelecting && (
        <SecondaryButton text="Отмена" onPress={resetSelection} containerStyle="mb-4" />
      )}
    </View>
  );
});

export default ProductsScreen;
