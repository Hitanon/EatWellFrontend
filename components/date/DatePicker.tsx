import { FC, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import clsx from "clsx";
import icons from "@/constants/icons"; // Импортируем иконки

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  onSelect: (date: Date) => void;
  initialDate?: Date;
  containerStyle?: string;
}

const DatePicker: FC<DatePickerProps> = ({
  label,
  placeholder = "Выберите дату",
  onSelect,
  initialDate,
  containerStyle,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    onSelect(date);
    setIsDatePickerVisible(false);
  };

  return (
    <View className={clsx("w-full", containerStyle)}>
      {label && <Text className="text-label text-lg font-mmedium mb-2">{label}</Text>}

      {/* Поле выбора даты */}
      <TouchableOpacity
        className="w-full bg-white p-4 rounded-lg flex-row justify-between items-center"
        onPress={() => setIsDatePickerVisible(true)}
      >
        <Text className={clsx("text-lg font-mregular", selectedDate ? "text-black" : "text-gray-placeholder")}>
          {selectedDate ? selectedDate.toLocaleDateString("ru-RU") : placeholder}
        </Text>
        <Image source={icons.calendar} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>

      {/* Окно выбора даты */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsDatePickerVisible(false)}
        confirmTextIOS="Выбрать"
        cancelTextIOS="Отмена"
        buttonTextColorIOS="#509505"
        accentColor="#509505"
      />
    </View>
  );
};

export default DatePicker;
