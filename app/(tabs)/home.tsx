import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import DateSelector from "@/components/date/DateSelector";
import NutritionSummary from "@/components/cards/NutritionSummary";
import WaterIntakeCard from "@/components/cards/WaterIntakeCard";
import FoodItem from "@/components/food/FoodItem";
import RoundButton from "@/components/ui/RoundButton";

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [nutritionData, setNutritionData] = useState({
    currentCalories: 500,
    targetCalories: 2200,
    currentProteins: 32,
    targetProteins: 97.5,
    currentFats: 34,
    targetFats: 52,
    currentCarbs: 160,
    targetCarbs: 426.8,
  });

  const [waterData, setWaterData] = useState({
    percentage: 35,
    currentValue: 0.3,
    targetValue: 2.0,
  });

  const [foodList, setFoodList] = useState([
    { id: 1, name: "Яблоко Голден", weight: 150, calories: 78 },
    { id: 2, name: "Куриная грудка", weight: 200, calories: 165 },
    { id: 3, name: "Овсянка с медом", weight: 100, calories: 350 },
  ]);

  return (
    <View className="h-full">
      <ScrollView className="flex-1 px-7 py-3" showsVerticalScrollIndicator={false}>
        <DateSelector date={selectedDate} onSelect={setSelectedDate} />

        <NutritionSummary
          currentCalories={nutritionData.currentCalories}
          targetCalories={nutritionData.targetCalories}
          currentProteins={nutritionData.currentProteins}
          targetProteins={nutritionData.targetProteins}
          currentFats={nutritionData.currentFats}
          targetFats={nutritionData.targetFats}
          currentCarbs={nutritionData.currentCarbs}
          targetCarbs={nutritionData.targetCarbs}
          containerStyle="mt-6"
        />

        <Text className="text-xl text-center font-mmedium text-label mt-4 mb-3">Вода</Text>

        <WaterIntakeCard
          percentage={waterData.percentage}
          currentValue={waterData.currentValue}
          targetValue={waterData.targetValue}
          showButton
          onPress={() => console.log("Добавить воду")}
        />

        <Text className="text-xl text-center font-mmedium text-label mt-4 mb-3">Дневной рацион</Text>
        <View className="mb-16">
          {foodList.map((food) => (
            <FoodItem
              key={food.id}
              name={food.name}
              weight={food.weight}
              calories={food.calories}
              editable={false}
              onDelete={() => console.log(`Удалено ${food.name}`)}
              onPress={() => console.log(`Открыто ${food.name}`)}
              containerStyle="mb-3"
            />
          ))}
        </View>

      </ScrollView>
      {/* Кнопка в правом нижнем углу */}
      <View className="absolute bottom-6 right-10 shadow-xl">
        <RoundButton size={60} iconSize={20} onPress={() => console.log("Добавить продукт")} />
      </View>
    </View>

  );
};

export default HomeScreen;
