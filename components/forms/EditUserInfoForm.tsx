import { useState } from "react";
import { Text, View } from "react-native";
import SelectOption from "../ui/SelectOption";
import DatePicker from "../date/DatePicker";
import MainInput from "../ui/MainInput";
import { InputType } from "@/constants/types";

interface EditUserInfoFormProps {
  onSubmit: (data: {
    gender: string | null;
    birthDate: Date | null;
    weight: string;
    goalWeight: string;
    height: string;
    lifestyle: string | null;
  }) => void;
}

const EditUserInfoForm: React.FC<EditUserInfoFormProps> = ({ onSubmit }) => {
  const [gender, setGender] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [weight, setWeight] = useState<string>("");
  const [goalWeight, setGoalWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string | null>(null);

  const handleSubmit = () => {
    onSubmit({ gender, birthDate, weight, goalWeight, height, lifestyle });
  };

  return (
    <View className="w-full items-start justify-start">
      <Text className="text-3xl font-mbold mb-5">О вас</Text>

      <SelectOption
        label="Ваш пол"
        options={["Мужской", "Женский"]}
        placeholder="Выберите пол..."
        containerStyle="mb-4"
        onSelect={setGender}
      />

      <DatePicker
        label="Дата рождения"
        placeholder="Выберите дату"
        onSelect={setBirthDate}
        containerStyle="mb-4"
      />

      <MainInput
        label="Ваш вес, кг"
        placeholder="Введите текущий вес..."
        inputType={InputType.DECIMAL}
        containerStyle="mb-4"
        value={weight}
        onChangeText={setWeight}
      />

      <MainInput
        label="Желаемый вес, кг"
        placeholder="Введите желаемый вес..."
        inputType={InputType.DECIMAL}
        containerStyle="mb-4"
        value={goalWeight}
        onChangeText={setGoalWeight}
      />

      <MainInput
        label="Ваш рост, см"
        placeholder="Введите рост..."
        inputType={InputType.DECIMAL}
        containerStyle="mb-4"
        value={height}
        onChangeText={setHeight}
      />

      <SelectOption
        label="Образ жизни"
        options={["Мало-подвижный", "Средне-подвижный", "Активный"]}
        placeholder="Выберите..."
        containerStyle="mb-8"
        onSelect={setLifestyle}
      />
    </View>
  );
};

export default EditUserInfoForm;
