import { FC } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import SelectIndicator from "../ui/SelectIndicator";
import GrayRoundButton from "../ui/GrayRoundButton";
import RoundButton from "../ui/RoundButton";
import CalorieInfo from "./CalorieInfo";
import clsx from "clsx";

interface FoodItemProps {
  image?: any;
  name: string;
  weight: number;
  calories: number;
  isInRation?: boolean;
  isSelected: boolean;
  isSelecting: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  onDelete: () => void;
  onAddToRation?: () => void;
  containerStyle?: string;
}

const FoodItem: FC<FoodItemProps> = ({
  image,
  name,
  weight,
  calories,
  isInRation = false,
  isSelected,
  isSelecting,
  onPress,
  onLongPress,
  onDelete,
  onAddToRation,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress} // Долгое нажатие включает выбор
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
      <View className="flex-1">
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

      {/* Если идет множественное выделение, показываем чекбокс */}
      {isSelecting ? (
        <SelectIndicator
          size={40}
          iconSize={18}
          icon={isSelected ? icons.check : undefined}
          containerStyle={[
            isSelected ? styles.selected : styles.unselected
          ]}
        />
      ) : (
        // В обычном режиме – кнопки удаления и добавления
        <View className="flex-col justify-between h-[84px]">
          <GrayRoundButton size={40} icon={icons.close} iconSize={14} onPress={onDelete} />
          {!isInRation && <RoundButton size={40} iconSize={16} onPress={onAddToRation ? onAddToRation : () => { }} />}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  unselected: {
    backgroundColor: "#EAEAEA", // Серый светлый (bg-gray-light)
  },
  selected: {
    backgroundColor: "#509505", // Зеленый (bg-primary)
  },
});