import { Text, TouchableOpacity, GestureResponderEvent, View, Image, ImageSourcePropType } from "react-native";
import { FC } from "react";
import clsx from "clsx";

interface SecondaryButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    containerStyle?: string;
    textStyle?: string;
    icon?: ImageSourcePropType; // Опциональная иконка
    iconSize?: number; // Размер иконки
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text, onPress, containerStyle, textStyle, icon, iconSize = 20 }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={clsx(
                "w-full p-5 rounded-2xl flex-row items-center justify-center border-2 border-primary",
                containerStyle
            )}
        >
            {/* Если передана иконка, то отображаем */}
            {icon && (
                <Image
                    source={icon}
                    style={{ width: iconSize, height: iconSize, marginRight: 8 }}
                    resizeMode="contain"
                />
            )}
            <Text className={clsx("text-label text-xl font-mbold", textStyle)}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;
