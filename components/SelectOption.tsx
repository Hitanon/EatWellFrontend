import { FC, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons"; // Импортируем иконки
import SelectModal from "@/components/SelectModal"; // Импортируем модалку

interface SelectOptionProps {
  label?: string;
  options: string[];
  onSelect: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  containerStyle?: string;
}

const SelectOption: FC<SelectOptionProps> = ({ 
  label, 
  options, 
  onSelect, 
  initialValue, 
  placeholder = "Выберите значение", 
  containerStyle 
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(initialValue);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <View className={clsx("w-full", containerStyle)}>
      {label && <Text className="text-label text-lg font-mmedium mb-2">{label}</Text>}

      {/* Основное поле выбора */}
      <TouchableOpacity
        className="w-full bg-white p-4 rounded-lg flex-row justify-between items-center"
        onPress={() => setIsModalVisible(true)}
      >
        <Text className={clsx("text-lg font-mregular", selectedValue ? "text-black" : "text-gray-placeholder")}>
          {selectedValue || placeholder}
        </Text>
        <Image source={icons.dropdownIcon} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>

      {/* Модальное окно выбора */}
      <SelectModal 
        visible={isModalVisible} 
        options={options} 
        selectedValue={selectedValue} 
        onSelect={handleSelect} 
        onClose={() => setIsModalVisible(false)} 
      />
    </View>
  );
};

export default SelectOption;
