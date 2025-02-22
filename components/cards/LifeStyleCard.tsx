import { FC } from "react";
import { View, Text } from "react-native";
import clsx from "clsx";

interface LifestyleCardProps {
  lifestyle: string;
  containerStyle?: string;
}

const LifestyleCard: FC<LifestyleCardProps> = ({ lifestyle, containerStyle }) => {
  return (
    <View className={clsx("bg-white w-full rounded-3xl px-6 py-7", containerStyle)}>
      {/* Заголовок */}
      <Text className="text-gray-placeholder text-[16px] font-mmedium mb-3">Образ жизни</Text>
      {/* Значение */}
      <Text className="text-label text-[16px] font-mbold">{lifestyle}</Text>
    </View>
  );
};

export default LifestyleCard;
