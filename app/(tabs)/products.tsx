import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import TabSwitcher from "@/components/ui/TabSwitcher";
import FoodItem from "@/components/food/FoodItem";
import MainButton from "@/components/ui/MainButton";

const ProductsScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Блюда" | "Продукты">("Блюда");

  // Список блюд
  const [meals, setMeals] = useState([
    { id: "1", name: "Омлет с сыром", weight: 200, calories: 250 },
    { id: "2", name: "Курица с рисом", weight: 300, calories: 400 },
    { id: "3", name: "Салат Цезарь", weight: 250, calories: 330 },
  ]);

  // Список продуктов
  const [products, setProducts] = useState([
    { id: "4", name: "Яблоко", weight: 150, calories: 80 },
    { id: "5", name: "Орехи грецкие", weight: 50, calories: 300 },
    { id: "6", name: "Молоко 1%", weight: 250, calories: 110 },
  ]);

  // Функции для работы с продуктами
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleEditProduct = (id: string) => {
    router.push(`/product?id=${id}`);
  };

  const handleCreateProduct = () => {
    router.push("/product");
  };

  // Функции для работы с блюдами
  const handleDeleteMeal = (id: string) => {
    setMeals(meals.filter((item) => item.id !== id));
  };

  const handleEditMeal = (id: string) => {
    router.push(`/meal?id=${id}`);
  };

  const handleCreateMeal = () => {
    router.push("/meal");
  };

  return (
    <View className="flex-1 items-center justify-start px-7 py-3">
      {/* Переключатель вкладок */}
      <TabSwitcher tabs={["Блюда", "Продукты"]} onSelect={(tab) => setActiveTab(tab as "Блюда" | "Продукты")} />

      {/* Список продуктов / блюд */}
      <ScrollView className="flex-1 w-full mt-4" showsVerticalScrollIndicator={false}>
        {(activeTab === "Блюда" ? meals : products).map((item) => (
          <FoodItem
            key={item.id}
            name={item.name}
            weight={item.weight}
            calories={item.calories}
            editable
            onDelete={activeTab === "Блюда" ? () => handleDeleteMeal(item.id) : () => handleDeleteProduct(item.id)}
            onEdit={activeTab === "Блюда" ? () => handleEditMeal(item.id) : () => handleEditProduct(item.id)}
            containerStyle="mb-3"
          />
        ))}
      </ScrollView>

      <MainButton
        text={activeTab === "Блюда" ? "Создать новое блюдо" : "Создать новый продукт"}
        onPress={activeTab === "Блюда" ? handleCreateMeal : handleCreateProduct}
        containerStyle="mt-4 mb-2"
      />
    </View>
  );
};

export default ProductsScreen;
