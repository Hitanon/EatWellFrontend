import { FC } from "react";
import { View, Text } from "react-native";

interface NutrientProgressProps {
  title: string;
  color: string;
  currentValue: number;
  targetValue: number;
}

const NutrientProgress: FC<NutrientProgressProps> = ({ title, color, currentValue, targetValue }) => {
  const progress = Math.min(currentValue / targetValue, 1); // Ограничиваем максимум 100%

  return (
    <View className="w-full mb-2">
      {/* Заголовок */}
      <Text className="text-sm font-mmedium mb-1" style={{ color }}>
        {title}
      </Text>

      {/* Текущее и необходимое значение */}
      <Text className="text-lg">
        <Text className="font-mbold">{currentValue}</Text>
        <Text className="font-mregular">/{targetValue}</Text>
      </Text>

      {/* Контейнер для прогресс-бара с закругленными концами */}
      <View className="relative mt-2">
        {/* Серый фон (незаполненная часть) */}
        <View
          style={{
            height: 6,
            borderRadius: 6,
            backgroundColor: "#DEDEDE",
            width: "100%",
          }}
        />

        {/* Заполненная часть */}
        <View
          style={{
            position: "absolute",
            left: 0,
            height: 6,
            borderRadius: 6,
            backgroundColor: color,
            width: `${progress * 100}%`, // Длина зависит от заполненности
          }}
        />

        {/* Закругленный конец (если progress > 0) */}
        {progress > 0 && (
          <View
            style={{
              position: "absolute",
              left: `${progress * 100}%`,
              width: 6,
              height: 6,
              borderRadius: 6,
              backgroundColor: color,
              transform: [{ translateX: -6 }], // Чтобы центрировать конец
            }}
          />
        )}
      </View>
    </View>
  );
};

export default NutrientProgress;
