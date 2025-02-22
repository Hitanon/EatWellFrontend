import { FC } from "react";
import { View, Text } from "react-native";
import clsx from "clsx";
import WaterIntakeInfo from "../water/WaterIntakeInfo";
import RoundButton from "../ui/RoundButton";

interface WaterIntakeCardProps {
  percentage: number;
  currentValue: number;
  targetValue: number;
  showButton?: boolean; // Флаг для отображения кнопки
  onPress?: () => void; // Действие при нажатии на кнопку
  containerStyle?: string; // Дополнительные стили
}

const WaterIntakeCard: FC<WaterIntakeCardProps> = ({
  percentage,
  currentValue,
  targetValue,
  showButton = false,
  onPress,
  containerStyle,
}) => {
  return (
    <View className={clsx("w-full bg-white rounded-3xl px-8 py-6 flex-row items-center justify-between", containerStyle)}>
      <View>
        <Text className="text-gray-placeholder text-[16px] font-mmedium mb-4">За день выпито:</Text>
        <WaterIntakeInfo percentage={percentage} currentValue={currentValue} targetValue={targetValue} />
      </View>

      {/* Кнопка отображается только если showButton === true */}
      {showButton && onPress && <RoundButton size={50} iconSize={18} onPress={onPress} />}
    </View>
  );
};

export default WaterIntakeCard;
