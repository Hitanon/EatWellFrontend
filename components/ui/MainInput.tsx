import { FC, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import clsx from "clsx";
import { InputType } from "../../constants/types"; // Импортируем enum
import { formatPhoneNumber, cleanDecimalInput, finalizeDecimal } from "../../utils/inputFormatters";

interface MainInputProps extends TextInputProps {
  label?: string;
  inputType?: InputType;
  containerStyle?: string;
}

const MainInput: FC<MainInputProps> = ({
  label,
  inputType = InputType.TEXT,
  containerStyle,
  onChangeText,
  ...props
}) => {
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [decimal, setDecimal] = useState("");

  // При фокусе добавляем "+7" если поле пустое
  const handlePhoneFocus = () => {
    if (!phone || phone === "") {
      setPhone("+7");
      if (onChangeText) {
        onChangeText("+7");
      }
    }
  };

  const handlePhoneChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhone(formatted);
    if (onChangeText) {
      onChangeText(formatted);
    }
  };

  const handleDecimalChange = (text: string) => {
    const cleaned = cleanDecimalInput(text);
    setDecimal(cleaned);
    if (onChangeText) {
      onChangeText(cleaned);
    }
  };

  const handleDecimalBlur = () => {
    const finalValue = finalizeDecimal(decimal);
    setDecimal(finalValue);
  };

  const keyboardType =
    inputType === InputType.NUMERIC || inputType === InputType.DECIMAL
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
        placeholder={inputType === InputType.PHONE ? "+7 ___-___-__-__" : props.placeholder}
        value={
          inputType === InputType.PHONE ? (phone === undefined ? "" : phone) :
            inputType === InputType.DECIMAL ? decimal :
              props.value
        }
        onFocus={inputType === InputType.PHONE ? handlePhoneFocus : props.onFocus}
        onChangeText={
          inputType === InputType.PHONE ? handlePhoneChange :
            inputType === InputType.DECIMAL ? handleDecimalChange :
              onChangeText
        }
        onBlur={inputType === InputType.DECIMAL ? handleDecimalBlur : props.onBlur}
        maxLength={inputType === InputType.PHONE ? 16 : undefined}
        {...props}
      />
    </View>
  );
};

export default MainInput;
