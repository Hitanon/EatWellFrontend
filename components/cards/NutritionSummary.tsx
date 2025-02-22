import { FC } from "react";
import { View } from "react-native";
import CalorieProgress from "../CalorieProgress";
import NutrientProgress from "../NutrientProgress";
import clsx from "clsx";

interface NutritionSummaryProps {
  currentCalories: number;
  targetCalories: number;
  currentProteins: number;
  targetProteins: number;
  currentFats: number;
  targetFats: number;
  currentCarbs: number;
  targetCarbs: number;
  containerStyle?: string;
}

const NutritionSummary: FC<NutritionSummaryProps> = ({
  currentCalories,
  targetCalories,
  currentProteins,
  targetProteins,
  currentFats,
  targetFats,
  currentCarbs,
  targetCarbs,
  containerStyle,
}) => {
  return (
    <View className={clsx("bg-white rounded-3xl px-6 py-8 flex-row items-center justify-between", containerStyle)}>
      {/* Левая часть - Калории */}
      <CalorieProgress currentCalories={currentCalories} targetCalories={targetCalories} />

      {/* Правая часть - БЖУ */}
      <View className="flex-1 ml-6">
        <NutrientProgress title="Белки" currentValue={currentProteins} targetValue={targetProteins} color="#509505" />
        <NutrientProgress title="Жиры" currentValue={currentFats} targetValue={targetFats} color="#E38D0C" />
        <NutrientProgress title="Углеводы" currentValue={currentCarbs} targetValue={targetCarbs} color="#1198D2" />
      </View>
    </View>
  );
};

export default NutritionSummary;
