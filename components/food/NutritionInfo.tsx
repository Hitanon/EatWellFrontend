import { FC } from "react";
import { View, Text, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons";

interface NutritionInfoProps {
    weight: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    containerStyle?: string;
}

const NutritionInfo: FC<NutritionInfoProps> = ({
    weight,
    calories,
    protein,
    fat,
    carbs,
    containerStyle,
}) => {
    return (
        <View className={clsx("w-full", containerStyle)}>
            {/* Вес и калории */}
            <View className="flex-row items-center mb-4">
                <Text className="text-label text-[16px] font-mmedium">Вес: {weight} г</Text>
                <View className="flex-row items-center ml-6">
                    <Image
                        source={icons.calorieOrange}
                        style={{ width: 20, height: 20, marginRight: 4 }}
                        resizeMode="contain"
                    />
                    <Text className="text-label text-[16px] font-mmedium">{calories} ккал</Text>
                </View>
            </View>

            {/* БЖУ */}
            <View className="flex-row justify-between">
                <Text className="text-primary text-[16px] font-mmedium">{protein} Белки</Text>
                <Text className="text-orange text-[16px] font-mmedium">{fat} Жиры</Text>
                <Text className="text-blue text-[16px] font-mmedium">{carbs} Углеводы</Text>
            </View>
        </View>
    );
};

export default NutritionInfo;
