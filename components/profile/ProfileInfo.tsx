import { FC } from "react";
import { View, Text, Image } from "react-native";
import icons from "@/constants/icons";
import clsx from "clsx";

interface ProfileInfoProps {
    name: string;
    phone: string;
    age: number;
    gender: string;
    containerStyle?: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ name, phone, age, gender, containerStyle }) => {
    return (
        <View className={clsx("flex-row items-center", containerStyle)}>
            {/* Аватар */}
            <Image source={icons.avatar} className="w-[100px] h-[100px] mr-4" resizeMode="contain" />

            {/* Текстовая информация */}
            <View className="flex-1">
                <Text className="text-label text-[24px] font-mbold mb-1">{name}</Text>
                <Text className="text-label text-[16px] font-mregular mb-1">{phone}</Text>
                <Text className="text-gray-placeholder text-[18px] font-mregular">
                    {age} ({gender})
                </Text>
            </View>
        </View>
    );
};

export default ProfileInfo;
