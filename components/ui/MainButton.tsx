import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FC } from "react";
// import { ViewStyle, TextStyle } from "react-native";
import clsx from "clsx";

interface MainButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    containerStyle?: string;
    textStyle?: string;
}

const MainButton: FC<MainButtonProps> = ({ text, onPress, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={clsx(
                "w-full bg-primary p-5 rounded-2xl items-center justify-center",
                containerStyle
            )}
        >
            <Text className={clsx("text-white text-xl font-mbold", textStyle)}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default MainButton;
