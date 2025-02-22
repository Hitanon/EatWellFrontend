import { FC } from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import clsx from "clsx";

interface GrayRoundButtonProps {
    size?: number; // Размер кнопки
    icon: ImageSourcePropType; // Иконка
    iconSize?: number; // Размер иконки
    containerStyle?: string; // Дополнительные стили (nativewind)
    onPress: () => void; // Действие по нажатию
}

const GrayRoundButton: FC<GrayRoundButtonProps> = ({
    size = 38,
    icon,
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
                "bg-gray-light items-center justify-center rounded-full",
                containerStyle
            )}
        >
            <Image
                source={icon}
                style={{
                    width: iconSize,
                    height: iconSize,
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default GrayRoundButton;
