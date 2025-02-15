import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FC } from "react";
import { ViewStyle, TextStyle } from "react-native";
import clsx from "clsx";

interface MainButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const MainButton: FC<MainButtonProps> = ({ text, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={clsx(
                "w-full bg-primary p-4 rounded-2xl items-center justify-center",
                style
            )}
        >
            <Text className={clsx("text-white text-xl font-mbold", textStyle)}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default MainButton;
