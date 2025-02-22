import { FC, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import clsx from "clsx";
import icons from "@/constants/icons"; // Импортируем иконки
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

interface DateSelectorProps {
    date: Date;
    onSelect: (date: Date) => void;
}

const DateSelector: FC<DateSelectorProps> = ({ date, onSelect }) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const today = dayjs().startOf("day");

    const handleConfirm = (selectedDate: Date) => {
        onSelect(selectedDate);
        setIsDatePickerVisible(false);
    };

    const handlePreviousDay = () => {
        onSelect(dayjs(date).subtract(1, "day").toDate());
    };

    const handleNextDay = () => {
        if (!dayjs(date).isSame(today, "day")) {
            onSelect(dayjs(date).add(1, "day").toDate());
        }
    };

    const formattedDate = dayjs(date).isSame(today, "day")
        ? "Сегодня"
        : dayjs(date).format("DD.MM dd").toUpperCase();

    return (
        <View className="w-full flex-row items-center justify-between bg-white px-6 py-4 rounded-3xl">
            {/* Левая стрелка */}
            <TouchableOpacity onPress={handlePreviousDay} className="p-2">
                <Image source={icons.arrowLeft} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>

            {/* Дата с иконкой */}
            <TouchableOpacity onPress={() => setIsDatePickerVisible(true)} className="flex-row items-center mx-4">
                <Image source={icons.calendarFill} className="w-6 h-6 mr-2" resizeMode="contain" />
                <Text className="text-black text-lg font-mmedium">{formattedDate}</Text>
            </TouchableOpacity>

            {/* Правая стрелка */}
            <TouchableOpacity
                onPress={handleNextDay}
                className={clsx("p-2", dayjs(date).isSame(today, "day") && "opacity-50")}
                disabled={dayjs(date).isSame(today, "day")}
            >
                <Image source={icons.arrowRight} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>

            {/* Модальное окно выбора даты */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={date}
                maximumDate={new Date()} // Запрещаем выбор будущих дат
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

export default DateSelector;
