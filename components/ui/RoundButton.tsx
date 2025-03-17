import { FC } from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons";

interface RoundButtonProps {
  size?: number; // Размер кнопки
  iconSize?: number; // Размер иконки
  icon?: ImageSourcePropType; // Корректный тип для иконки
  containerStyle?: string; // Дополнительные стили (nativewind)
  onPress: () => void; // Действие по нажатию
}

const RoundButton: FC<RoundButtonProps> = ({
  size = 38,
  iconSize = 14,
  icon = icons.plus, // Используем "plus" по умолчанию
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: size,
        height: size,
      }}
      className={clsx(
        "bg-primary items-center justify-center rounded-full",
        containerStyle
      )}
    >
      <Image
        source={icon} // Используем переданную иконку или дефолтную
        style={{
          width: iconSize,
          height: iconSize,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default RoundButton;
