import { useState } from "react";
import { View } from "react-native";
import DateSelector from "@/components/DateSelector"; // Компонент выбора даты
import NutritionSummary from "@/components/NutritionSummary";

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // По умолчанию текущая дата

  // Состояние для данных NutritionSummary
  const [nutritionData, setNutritionData] = useState({
    currentCalories: 1500,
    targetCalories: 2200,
    currentProteins: 180,
    targetProteins: 300,
    currentFats: 180,
    targetFats: 300,
    currentCarbs: 180,
    targetCarbs: 300,
  });

  return (
    <View className="flex-1 items-center justify-start px-7 py-3">
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
    </View>
  );
};

export default HomeScreen;
