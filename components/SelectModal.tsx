import { FC } from "react";
import { View, TouchableOpacity, FlatList, Modal, Text } from "react-native";
import clsx from "clsx";

interface SelectModalProps {
    visible: boolean;
    options: string[];
    selectedValue?: string;
    onSelect: (value: string) => void;
    onClose: () => void;
}

const SelectModal: FC<SelectModalProps> = ({ visible, options, selectedValue, onSelect, onClose }) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <TouchableOpacity
                className="flex-1 bg-black/50 justify-center items-center"
                onPress={onClose}
            >
                <View className="w-4/5 bg-white p-5 rounded-2xl">
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className={clsx(
                                    "my-2 p-3 border-b border-gray-200",
                                    selectedValue === item && "bg-primary rounded-lg" // Подсветка активного элемента
                                )}
                                onPress={() => {
                                    onSelect(item);
                                    onClose();
                                }}
                            >
                                <Text
                                    className={clsx(
                                        "text-lg font-mregular",
                                        selectedValue === item ? "text-white" : "text-black"
                                    )}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default SelectModal;
