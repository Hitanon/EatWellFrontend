import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScrollView, View, Dimensions } from "react-native";
import { observer } from "mobx-react-lite";
import Header from "@/components/ui/Header";
import { useStores } from "@/context/MobXContext";
import WaterIntakeCard from "@/components/cards/WaterIntakeCard";
import WaterEntryItem from "@/components/water/WaterEntryItem";
import { WaterValueType } from "@/constants/types";
import icons from "@/constants/icons";
import SecondaryButton from "@/components/ui/SecondaryButton";

// Получаем высоту экрана
const screenHeight = Dimensions.get("window").height;

// Задаем размеры элементов (можно подстроить под ваш UI)
const headerHeight = 60; // Высота заголовка
const waterCardHeight = 140; // Высота карточки воды
const buttonBlockHeight = 230; // Примерная высота блока с кнопками

// Рассчитываем доступное место для списка
const maxListHeight = screenHeight - (headerHeight + waterCardHeight + buttonBlockHeight + 80); // 80px — отступы

const CreateProductScreen = observer(() => {
    const router = useRouter();
    const { waterStore } = useStores();

    // Функция добавления воды
    const handleAddWater = (amount: number) => {
        waterStore.addWaterEntry(amount);
    };

    // Функция удаления записи о воде
    const handleRemoveWater = (index: number) => {
        waterStore.removeWaterEntry(index);
    };

    return (
        <SafeAreaView className="flex-1 py-3 px-7 bg-gray-light">
            <Header title="Добавление воды" onBackPress={() => router.back()} />
            <WaterIntakeCard
                percentage={waterStore.percentage}
                currentValue={waterStore.current}
                targetValue={waterStore.target}
                containerStyle="mt-6"
            />

            {/* Список записей воды (ограничен динамической высотой) */}
            <View className="flex-1 mt-6">
                <ScrollView style={{ maxHeight: maxListHeight }}>
                    <View className="flex-row flex-wrap gap-2 justify-start mb-1">
                        {waterStore.entries.map((entry, index) => (
                            <WaterEntryItem 
                                key={index} 
                                amount={entry.amount} 
                                time={entry.time} 
                                onPress={() => handleRemoveWater(index)} 
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* Блок с кнопками добавления воды */}
            <View className="mt-auto bg-white rounded-3xl p-5 shadow-md mb-4">
                <View className="flex-row justify-between mb-4">
                    <SecondaryButton
                        text="150 мл"
                        icon={icons.water150}
                        iconSize={30}
                        onPress={() => handleAddWater(WaterValueType.v150)}
                        containerStyle="w-[48%]"
                    />
                    <SecondaryButton
                        text="200 мл"
                        icon={icons.water200}
                        iconSize={25}
                        onPress={() => handleAddWater(WaterValueType.v200)}
                        containerStyle="w-[48%]"
                    />
                </View>
                <View className="flex-row justify-between mb-4">
                    <SecondaryButton
                        text="300 мл"
                        icon={icons.water300}
                        iconSize={25}
                        onPress={() => handleAddWater(WaterValueType.v300)}
                        containerStyle="w-[48%]"
                    />
                    <SecondaryButton
                        text="500 мл"
                        icon={icons.water500}
                        iconSize={30}
                        onPress={() => handleAddWater(WaterValueType.v500)}
                        containerStyle="w-[48%]"
                    />
                </View>
                <View className="w-full">
                    <SecondaryButton
                        text="1000 мл"
                        icon={icons.water1000}
                        iconSize={30}
                        onPress={() => handleAddWater(WaterValueType.v1000)}
                        containerStyle="w-full"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
});

export default CreateProductScreen;
