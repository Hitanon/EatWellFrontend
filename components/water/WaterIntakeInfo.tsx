import { FC } from "react";
import { View, Text, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons";

interface WaterIntakeInfoProps {
  percentage: number; // Процент выпитой воды
  currentValue: number; // Текущее значение (литры)
  targetValue: number; // Норма (литры)
  containerStyle?: string; // Дополнительные стили (nativewind)
}

const WaterIntakeInfo: FC<WaterIntakeInfoProps> = ({
  percentage,
  currentValue,
  targetValue,
  containerStyle,
}) => {
  return (
    <View className={clsx("flex-row items-center", containerStyle)}>
      {/* Иконка воды */}
      <Image source={icons.waterIcon} className="w-8 h-8 mr-2" resizeMode="contain" />

      {/* Текст с процентом и объемом */}
      <Text className="text-[18px] font-mbold">{percentage.toFixed(0)}%</Text>
      <Text className="text-[16px] font-mmedium text-black ml-1">
        ({currentValue.toFixed(1)} из {targetValue.toFixed(1)} л)
      </Text>
    </View>
  );
};

export default WaterIntakeInfo;
