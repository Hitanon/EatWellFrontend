import { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import GrayRoundButton from "../ui/GrayRoundButton";
import CalorieInfo from "./CalorieInfo";
import clsx from "clsx";

interface FoodItemProps {
    image?: any;
    name: string;
    weight: number;
    calories: number;
    editable?: boolean;
    onDelete: () => void;
    onEdit?: () => void;
    onPress?: () => void;
    containerStyle?: string;
}

const FoodItem: FC<FoodItemProps> = ({
    image,
    name,
    weight,
    calories,
    editable = false,
    onDelete,
    onEdit,
    onPress,
    containerStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            className={clsx("w-full bg-white rounded-3xl p-3 flex-row items-center", containerStyle)}
        >
            {/* Изображение еды */}
            <Image
                source={image || images.foodPlaceholder}
                className="w-[80px] h-[80px] rounded-xl mr-4"
                resizeMode="cover"
            />

            {/* Информация о еде */}
            <View className="flex-1 mr-3">
                {/* Название с усечением до 2 строк */}
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    className="text-label text-[18px] font-mbold leading-6"
                >
                    {name}
                </Text>
                <Text className="text-gray-placeholder text-[14px] font-mregular">{weight} г</Text>
                <CalorieInfo calories={calories} containerStyle="mt-2" />
            </View>

            {/* Если продукт редактируемый - показываем две кнопки */}
            {editable ? (
                <View className="flex-col justify-between h-[84px]">
                    <GrayRoundButton size={40} icon={icons.close} iconSize={14} onPress={onDelete} />
                    {onEdit && (
                        <GrayRoundButton size={40} icon={icons.edit} iconSize={16} onPress={onEdit} />
                    )}
                </View>
            ) : (
                // Если НЕ редактируемый - показываем только кнопку удаления вверху
                <View className="flex-col justify-start h-[84px]">
                    <GrayRoundButton size={40} icon={icons.close} iconSize={14} onPress={onDelete} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default FoodItem;
