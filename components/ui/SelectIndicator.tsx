import React, { FC } from "react";
import { View, Image, ImageSourcePropType, StyleSheet, StyleProp, ViewStyle } from "react-native";
import clsx from "clsx";

interface SelectIndicatorProps {
    size?: number;         // Размер кнопки
    iconSize?: number;     // Размер иконки внутри
    icon?: ImageSourcePropType; // Опциональная иконка
    containerStyle?: string | StyleProp<ViewStyle>;
}

const SelectIndicator: FC<SelectIndicatorProps> = ({
    size = 38,
    iconSize = 14,
    icon,
    containerStyle,
}) => {
    return (
        <View
            style={[
                styles.base, 
                { width: size, height: size }, 
                typeof containerStyle === "object" ? containerStyle : null
            ]}
            className={typeof containerStyle === "string" ? clsx(containerStyle) : undefined}
        >
            {icon && (
                <Image
                    source={icon}
                    style={{ width: iconSize, height: iconSize }}
                    resizeMode="contain"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        backgroundColor: "#F5F5F5", // Серый светлый по умолчанию
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999, // Делаем круг
    },
});

export default SelectIndicator;
