import { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import { InputType } from "@/constants/types";
import icons from "@/constants/icons";

const RegisterScreen = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView className="flex-1 items-start justify-center p-7">
      <View className="w-full flex-1 items-start justify-center mt-[-40px]">
        <Image source={icons.smallLogo} className="w-48 mb-12" resizeMode="contain" />

        <Text className="text-3xl font-mbold mb-12">Регистрация</Text>

        <MainInput
          label="Имя"
          placeholder="Ваше имя..."
          inputType={InputType.TEXT}
          containerStyle="mb-4"
          value={name}
          onChangeText={setName}
        />
        <MainInput
          label="Телефон"
          placeholder="+7 ___-___-__-__"
          inputType={InputType.PHONE}
          containerStyle="mb-8"
          value={phone}
          onChangeText={setPhone}
        />

        <MainButton text="Далее" onPress={() => router.push("/verification")} />

        <View className="w-full flex-row justify-center items-center mt-6">
          <Text className="text-label text-lg font-mregular">Уже есть аккаунт?</Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-primary text-lg font-mbold ml-1">Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
