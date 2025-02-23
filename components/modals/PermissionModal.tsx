import { FC } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

interface PermissionModalProps {
  visible: boolean;
  onClose: () => void;
}

const PermissionModal: FC<PermissionModalProps> = ({ visible, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center px-6">
        <View className="bg-white rounded-2xl p-6 w-full max-w-md">
          <Text className="text-label text-lg font-mbold mb-4">Доступ к галерее</Text>
          <Text className="text-gray-placeholder text-[16px] font-mmedium mb-6">
            Приложению требуется доступ к вашим фото для загрузки изображения.
          </Text>

          <TouchableOpacity onPress={onClose} className="bg-primary rounded-2xl py-3 items-center">
            <Text className="text-white text-[16px] font-mmedium">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PermissionModal;
