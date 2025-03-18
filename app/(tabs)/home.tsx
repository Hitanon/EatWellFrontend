import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import DateSelector from "@/components/date/DateSelector";
import NutritionSummary from "@/components/cards/NutritionSummary";
import WaterIntakeCard from "@/components/cards/WaterIntakeCard";
import FoodItem from "@/components/food/FoodItem";
import RoundButton from "@/components/ui/RoundButton";
import { useStores } from "@/context/MobXContext";

const HomeScreen = observer(() => {

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { dailyRationStore, nutritionStore, waterStore } = useStores();

  const handlePressAddProduct = () => {
    router.push('/create-product');
  };

  return (
    <View className="h-full">
      <ScrollView className="flex-1 px-7 py-3" showsVerticalScrollIndicator={false}>
        <DateSelector date={selectedDate} onSelect={setSelectedDate} />

        <NutritionSummary
          currentCalories={nutritionStore.calories.current}
          targetCalories={nutritionStore.calories.target}
          currentProteins={nutritionStore.protein.current}
          targetProteins={nutritionStore.protein.current}
          currentFats={nutritionStore.fat.current}
          targetFats={nutritionStore.fat.target}
          currentCarbs={nutritionStore.fat.current}
          targetCarbs={nutritionStore.protein.target}
          containerStyle="mt-6"
        />

        <Text className="text-xl text-center font-mmedium text-label mt-4 mb-3">Вода</Text>

        <WaterIntakeCard
          percentage={waterStore.percentage}
          currentValue={waterStore.current}
          targetValue={waterStore.target}
          showButton
          onPress={() => console.log("Добавить воду")}
        />

        <Text className="text-xl text-center font-mmedium text-label mt-4 mb-3">Дневной рацион</Text>
        <View className="mb-16">
          {dailyRationStore.dailyMeals.map((food) => (
            <FoodItem
              key={food.id}
              name={food.name}
              weight={food.weight}
              calories={food.calories}
              isSelected={false}
              isSelecting={false}
              onDelete={() => console.log(`Удалено ${food.name}`)}
              onPress={() => console.log(`Открыто ${food.name}`)}
              containerStyle="mb-3"
              isInRation= {true}
            />
          ))}
        </View>

      </ScrollView>
      {/* Кнопка в правом нижнем углу */}
      <View className="absolute bottom-6 right-10 shadow-xl">
        <RoundButton size={60} iconSize={20} onPress={handlePressAddProduct} />
      </View>
    </View>

  );
});

export default HomeScreen;
