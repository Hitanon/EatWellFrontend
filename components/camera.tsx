import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions, BarcodeBounds } from "expo-camera";
import clsx from "clsx";
import CaptureButton from "./ui/CaptureButton";

interface CameraProps {
  isScanner?: boolean;
  onBarcodeScanned?: (barcode: string) => void;
  onPhotoTaken?: (photoUri: string) => void;
  containerStyle?: string;
}

const { width, height } = Dimensions.get("window");
const SCAN_AREA_WIDTH = width * 0.7;
const SCAN_AREA_HEIGHT = width * 0.5;

const Camera: FC<CameraProps> = ({ isScanner = false, onBarcodeScanned, onPhotoTaken, containerStyle }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [camera, setCamera] = useState<CameraView | null>(null);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const handleBarcodeScanned = ({ data, bounds }: { data: string; bounds: BarcodeBounds }) => {
    if (!scanned && isScanner && onBarcodeScanned) {
      const scanAreaX = (width - SCAN_AREA_WIDTH) / 2;
      const scanAreaY = (height * 0.65 - SCAN_AREA_HEIGHT) / 2;
      
      const isInside =
        bounds.origin.x >= scanAreaX &&
        bounds.origin.y >= scanAreaY &&
        bounds.origin.x + bounds.size.width <= scanAreaX + SCAN_AREA_WIDTH &&
        bounds.origin.y + bounds.size.height <= scanAreaY + SCAN_AREA_HEIGHT;

      if (isInside) {
        setScanned(true);
        console.log("Штрихкод:", data);
        onBarcodeScanned(data);
        setTimeout(() => setScanned(false), 2000);
      }
    }
  };

  const takePhoto = async () => {
    if (camera) {
      try {
        const photo = await camera.takePictureAsync();
        photo?.uri ? onPhotoTaken?.(photo.uri) : console.warn("Фото не было сделано");
      } catch (error) {
        console.error("Ошибка при съемке фото:", error);
      }
    }
  };

  if (!permission?.granted) {
    return (
      <View className={clsx("flex-1 justify-center items-center", containerStyle)}>
        <Text className="text-center text-lg pb-2">Разрешите доступ к камере</Text>
        <TouchableOpacity className="bg-primary p-4 rounded-xl mt-4" onPress={requestPermission}>
          <Text className="text-white font-mmedium">Предоставить доступ</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className={clsx("items-center", containerStyle)}>
      <CameraView
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        facing="back"
        onBarcodeScanned={isScanner ? handleBarcodeScanned : undefined}
        barcodeScannerSettings={isScanner ? { barcodeTypes: ["ean13", "ean8", "qr"] } : undefined}
      />

      {isScanner && (
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />
          <View style={styles.middleOverlay}>
            <View style={styles.sideOverlay} />
            <View style={styles.scanArea}>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </View>
            <View style={styles.sideOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
        </View>
      )}

      {!isScanner && <CaptureButton onPress={takePhoto} containerStyle="mt-6" />}
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: height * 0.65,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  middleOverlay: {
    flexDirection: 'row',
    height: SCAN_AREA_HEIGHT,
  },
  sideOverlay: {
    width: (width - SCAN_AREA_WIDTH) / 2,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  scanArea: {
    width: SCAN_AREA_WIDTH,
    height: SCAN_AREA_HEIGHT,
    backgroundColor: 'transparent',
  },
  corner: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: '#509505',
  },
  topLeft: {
    top: -3,
    left: -3,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderTopLeftRadius: 8,
    zIndex: 999,
  },
  topRight: {
    top: -3,
    right: -3,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderTopRightRadius: 8,
    zIndex: 999,
  },
  bottomLeft: {
    bottom: -3,
    left: -3,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderBottomLeftRadius: 8,
    zIndex: 999,
  },
  bottomRight: {
    bottom: -3,
    right: -3,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderBottomRightRadius: 8,
    zIndex: 999,
  },
});