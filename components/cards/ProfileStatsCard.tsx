import { FC } from "react";
import { View, Text } from "react-native";
import clsx from "clsx";

interface ProfileStatsCardProps {
  height: number;
  currentWeight: number;
  targetWeight: number;
  containerStyle?: string;
}

const ProfileStatsCard: FC<ProfileStatsCardProps> = ({
  height,
  currentWeight,
  targetWeight,
  containerStyle,
}) => {
  return (
    <View className={clsx("bg-white w-full rounded-3xl px-6 py-7", containerStyle)}>
      {/* Рост */}
      <View className="flex-row justify-between mb-6">
        <Text className="text-gray-placeholder text-[16px] font-mmedium">Рост</Text>
        <Text className="text-label text-[16px] font-mbold">{height.toFixed(1)} см</Text>
      </View>

      {/* Текущий вес */}
      <View className="flex-row justify-between mb-6">
        <Text className="text-gray-placeholder text-[16px] font-mmedium">Текущий вес</Text>
        <Text className="text-label text-[16px] font-mbold">{currentWeight.toFixed(1)} кг</Text>
      </View>

      {/* Цель */}
      <View className="flex-row justify-between">
        <Text className="text-gray-placeholder text-[16px] font-mmedium">Цель</Text>
        <Text className="text-label text-[16px] font-mbold">{targetWeight.toFixed(1)} кг</Text>
      </View>
    </View>
  );
};

export default ProfileStatsCard;
