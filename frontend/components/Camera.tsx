import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";

export function ChallengeCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const shutterEffect = () => {
    Animated.sequence([
      // @ts-ignore
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }),
      // @ts-ignore
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    // Request permission
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    // @ts-ignore
    <Animated.View style={[styles.effectcontainer, { opacity: fadeAnim }]}>
      <Camera style={styles.camera} type={Camera.Constants.Type.front} ref={cameraRef} onCameraReady={() => { setCameraReady(true) }} >
        {/* Snap button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {

              if (cameraReady) {
                // @ts-ignore 44147937
                let photo = await cameraRef.current.takePictureAsync();
                console.log(photo);
                // shutterEffect();
              }

            }}
          >
          </TouchableOpacity>
        </View>
      </Camera>
    </Animated.View>
  );
}

const snapButtonRadius = 120

const styles = StyleSheet.create({
  effectcontainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  button: {
    marginBottom: 20,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: snapButtonRadius,
    height: snapButtonRadius,
    alignSelf: "flex-end",
    left: (Dimensions.get("window").width - snapButtonRadius) / 2,
    borderWidth: 15,
    borderColor: 'white'
  }
});
