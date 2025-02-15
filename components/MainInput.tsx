import { FC, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import clsx from "clsx";
import { InputType } from "../constants/types"; // Импортируем enum

interface MainInputProps extends TextInputProps {
  label?: string;
  inputType?: InputType;
  containerStyle?: string;
}

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, ""); // Удаляем все нецифровые символы
  let formatted = "+";

  if (cleaned.length > 0) formatted += cleaned[0];
  if (cleaned.length > 1) formatted += ` ${cleaned.slice(1, 4)}`;
  if (cleaned.length > 4) formatted += `-${cleaned.slice(4, 7)}`;
  if (cleaned.length > 7) formatted += `-${cleaned.slice(7, 9)}`;
  if (cleaned.length > 9) formatted += `-${cleaned.slice(9, 11)}`;

  return formatted;
};

const MainInput: FC<MainInputProps> = ({ label, inputType = InputType.TEXT, containerStyle, ...props }) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (text: string) => {
    setPhone(formatPhoneNumber(text)); // Форматируем ввод в номер телефона
  };

  const keyboardType =
    inputType === InputType.NUMERIC
      ? "numeric"
      : inputType === InputType.PHONE
      ? "phone-pad"
      : "default";

  return (
    <View className={clsx("w-full", containerStyle)}>
      {label && <Text className="text-label text-lg font-mmedium mb-2">{label}</Text>}
      <TextInput
        className="w-full bg-white p-4 rounded-lg text-black text-lg font-mregular placeholder-gray-placeholder"
        keyboardType={keyboardType}
        value={inputType === InputType.PHONE ? phone : props.value}
        onChangeText={inputType === InputType.PHONE ? handlePhoneChange : props.onChangeText}
        maxLength={16} // Ограничиваем длину номера
        {...props}
      />
    </View>
  );
};

export default MainInput;
