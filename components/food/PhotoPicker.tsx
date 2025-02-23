import { FC, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import clsx from "clsx";
import images from "@/constants/images";
import icons from "@/constants/icons";
import PermissionModal from "../modals/PermissionModal";

interface PhotoPickerProps {
  image?: string;
  containerStyle?: string;
  onImageSelect: (imageUri: string) => void;
}

const PhotoPicker: FC<PhotoPickerProps> = ({ image, containerStyle, onImageSelect }) => {
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  // Функция выбора фото
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      setShowPermissionModal(true);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      onImageSelect(result.assets[0].uri);
    }
  };

  return (
    <View className={clsx("w-full items-start", containerStyle)}>
      <Text className="text-gray-placeholder text-[16px] font-mmedium mb-2">Фото</Text>

      <TouchableOpacity onPress={pickImage} className="relative">
        {/* Фото */}
        <Image
          source={image ? { uri: image } : images.foodPlaceholder}
          className="w-[200px] h-[200px] rounded-3xl"
          resizeMode="cover"
        />

        {/* Иконка редактирования, если фото уже загружено */}
        {image && (
          <View
            className="absolute top-4 right-4 bg-transparent"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 10, // Для Android
            }}
          >
            <Image source={icons.editPhoto} className="w-8 h-8" resizeMode="contain" />
          </View>

        )}
      </TouchableOpacity>

      {/* Модальное окно согласия на доступ */}
      <PermissionModal
        visible={showPermissionModal}
        onClose={() => setShowPermissionModal(false)}
      />
    </View>
  );
};

export default PhotoPicker;
