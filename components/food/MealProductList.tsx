import { FC } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import clsx from "clsx";
import FoodItem from "./FoodItem";

interface ProductItem {
  id: string;
  name: string;
  weight: number;
  calories: number;
  image?: string;
}

interface MealProductListProps {
  products: ProductItem[];
  onRemove: (id: string) => void;
  onAddPress: () => void;
  containerStyle?: string;
}

const MealProductList: FC<MealProductListProps> = ({ products, onRemove, onAddPress, containerStyle }) => {
  return (
    <View className={clsx("w-full flex-1", containerStyle)}>
      {/* Заголовок */}
      <Text className="text-gray-placeholder text-[16px] font-mmedium mb-5">Список продуктов в блюде</Text>

      {/* Список продуктов */}
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }} keyboardShouldPersistTaps="handled">
        {products.map((item) => (
          <FoodItem
            key={item.id}
            image={item.image}
            name={item.name}
            weight={item.weight}
            calories={item.calories}
            onDelete={() => onRemove(item.id)}
            containerStyle="mb-3"
            isInRation={true}
            isSelected={false}
            isSelecting={false}
          />
        ))}

        {/* Кнопка "Добавить продукт" */}
        <TouchableOpacity onPress={onAddPress} className="bg-white rounded-2xl px-6 py-6 mt-2">
          <Text className="text-gray-placeholder text-[16px] font-mmedium">Добавить продукт...</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MealProductList;
