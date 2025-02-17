import { FC } from "react";
import { View, Text, Image } from "react-native";
import Svg, { Circle } from "react-native-svg";
import icons from "@/constants/icons"; // Подключаем иконки

interface CalorieProgressProps {
  currentCalories: number;
  targetCalories: number;
}

const CalorieProgress: FC<CalorieProgressProps> = ({ currentCalories, targetCalories }) => {
  const radius = 80; // Радиус круга увеличен в 3 раза
  const strokeWidth = 8; // Немного увеличиваем толщину линии
  const diameter = radius * 2 + strokeWidth; // Рассчитываем размер SVG
  const circumference = 2 * Math.PI * radius; // Длина окружности
  const progress = Math.min(currentCalories / targetCalories, 1); // Ограничение 100%
  const strokeDashoffset = circumference * (1 - progress); // Смещение линии

  return (
    <View className="items-center justify-center">
      {/* SVG Прогресс-бар */}
      <Svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
        {/* Серый незаполненный круг */}
        <Circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="#DEDEDE"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Заполненная часть круга */}
        <Circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="#509505" // Primary color
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`} // Разворачиваем прогресс сверху
        />
      </Svg>

      {/* Контент внутри круга (оставляем неизменным) */}
      <View className="absolute items-center justify-center">
        <Image source={icons.calorieGray} className="w-12 h-12 mb-1" resizeMode="contain" />
        <Text className="text-2xl font-mbold text-label">{currentCalories}</Text>
        <Text className="text-sm font-mmedium text-label">ккал</Text>
      </View>
    </View>
  );
};

export default CalorieProgress;
