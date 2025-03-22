import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import clsx from "clsx";

interface WaterEntryItemProps {
    amount: number;
    time: string;
    onPress: () => void;
}

const WaterEntryItem: FC<WaterEntryItemProps> = ({ amount, time, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className="bg-white rounded-3xl p-4 items-center w-[80px] shadow-sm"
        >
            <Text className="text-label text-[16px] text-center font-mbold">{amount}</Text>
            <Text className="text-label text-[14px] text-center font-mmedium mt-[-3px]">мл</Text>
            <Text className="text-gray-placeholder text-[12px] font-mmedium mt-3">{time}</Text>
        </TouchableOpacity>
    );
};

export default WaterEntryItem;
