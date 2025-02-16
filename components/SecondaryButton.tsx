import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FC } from "react";
// import { ViewStyle, TextStyle } from "react-native";
import clsx from "clsx";

interface SecondaryButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    containerStyle?: string;
    textStyle?: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text, onPress, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={clsx(
                "w-full p-5 rounded-2xl items-center justify-center border-2 border-primary",
                containerStyle
            )}
        >
            <Text className={clsx("text-label text-xl font-mbold", textStyle)}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;
