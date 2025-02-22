import { FC } from "react";
import { View, Text, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons";

interface CalorieRequirementCardProps {
    calorieTarget: number;
    containerStyle?: string;
}

const CalorieRequirementCard: FC<CalorieRequirementCardProps> = ({ calorieTarget, containerStyle }) => {
    return (
        <View className={clsx("bg-white w-full rounded-3xl px-6 py-7", containerStyle)}>
            {/* Заголовок */}
            <Text className="text-gray-placeholder text-[16px] font-mmedium mb-3">В день необходимо</Text>

            {/* Значение */}
            <View className="flex-row items-center">
                <Image source={icons.calorieOrange} className="w-5 h-5 mr-2" resizeMode="contain" />
                <Text className="text-label text-[16px] font-mbold">{calorieTarget.toFixed(1)} ккал</Text>
            </View>
        </View>
    );
};

export default CalorieRequirementCard;
