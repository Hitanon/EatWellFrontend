import { FC } from "react";
import { View, Text, Image } from "react-native";
import icons from "@/constants/icons";
import clsx from "clsx";

interface CalorieInfoProps {
  calories: number;
  containerStyle?: string;
}

const CalorieInfo: FC<CalorieInfoProps> = ({ calories, containerStyle }) => {
  return (
    <View className={clsx("flex-row items-center", containerStyle)}>
      <Image source={icons.calorieOrange} className="w-[15px] h-[20px] mr-2" resizeMode="contain" />
      <Text className="text-label text-[18px] font-mbold">{calories}</Text>
      <Text className="text-label text-[14px] font-mmedium ml-1">ккал</Text>
    </View>
  );
};

export default CalorieInfo;
