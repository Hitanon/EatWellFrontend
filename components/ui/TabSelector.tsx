import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import clsx from "clsx";

interface TabSelectorProps {
  tabs: string[];
  activeTab: string;
  onSelect: (tab: string) => void;
  containerStyle?: string;
}

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, activeTab, onSelect, containerStyle }) => {
  return (
    <View className={clsx("absolute bg-gray-light bottom-0 w-full py-6", containerStyle)}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        <View className="flex-row gap-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => onSelect(tab)}
              className={clsx(
                "px-6 py-4 rounded-3xl",
                activeTab === tab ? "bg-primary" : "bg-white",
              )}
            >
              <Text
                className={clsx(
                  "text-[16px] font-mmedium",
                  activeTab === tab ? "text-white" : "text-label"
                )}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabSelector;
