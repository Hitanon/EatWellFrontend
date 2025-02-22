import { FC, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native";
import clsx from "clsx";

interface TabSwitcherProps {
    tabs: [string, string]; // Две вкладки
    onSelect: (tab: string) => void; // Функция при выборе вкладки
}

const TabSwitcher: FC<TabSwitcherProps> = ({ tabs, onSelect }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;

    // Анимация переключения
    const handleSwitch = (index: number) => {
        setActiveIndex(index);
        Animated.timing(animatedValue, {
            toValue: index === 0 ? 0 : 1,
            duration: 200, // Длительность анимации
            useNativeDriver: false,
        }).start();
        onSelect(tabs[index]);
    };

    // Стили для анимации фона активной вкладки
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.container}>
            <Animated.View
                className="absolute top-1 bottom-1 left-1 w-1/2 bg-primary rounded-3xl"
                style={{ transform: [{ translateX }] }}
            />

            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    className="flex-1 items-center justify-center h-full"
                    onPress={() => handleSwitch(index)}
                >
                    <Text
                        className={clsx(
                            "text-[16px] font-mmedium",
                            activeIndex === index ? "text-white" : "text-label"
                        )}
                    >
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default TabSwitcher;
