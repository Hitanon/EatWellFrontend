import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MainButton from "@/components/ui/MainButton";
import EditUserInfoForm from "@/components/EditUserInfoForm";
import SecondaryButton from "@/components/ui/SecondaryButton";

const RegisterDetails = () => {
    const router = useRouter();

    const handleSubmit = (data: any) => {
        console.log("Регистрация: ", data);
    };

    return (
        <SafeAreaView className="flex-1 items-start justify-start p-7">
            <ScrollView 
                className=""
                contentContainerStyle={{ flexGrow: 1 }} // Позволяет контенту занимать больше места
                showsVerticalScrollIndicator={false}
            >
                <EditUserInfoForm onSubmit={handleSubmit} />
                
                {/* Кнопки */}
                <MainButton text="Создать аккаунт" containerStyle="mb-2" onPress={() => router.replace("/(tabs)/home")} />
                <SecondaryButton text="Заполнить позже" onPress={() => router.replace("/(tabs)/home")} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterDetails;
