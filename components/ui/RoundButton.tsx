import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons";

interface RoundButtonProps {
  size?: number; // Размер кнопки
  iconSize?: number; // Размер иконки
  containerStyle?: string; // Дополнительные стили (nativewind)
  onPress: () => void; // Действие по нажатию
}

const RoundButton: FC<RoundButtonProps> = ({
  size = 38,
  iconSize = 14,
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
        source={icons.plus}
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
