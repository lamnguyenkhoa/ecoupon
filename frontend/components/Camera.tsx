import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";

const { height, width } = Dimensions.get("window");
const screenRatio = height / width;
const staticImage = require("../assets/images/panda.png");

export function ChallengeCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [desiredRatio, setDesiredRatio] = useState("16:9");
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

  const setRatio = async () => {
    if (Platform.OS !== "android") return;
    // @ts-ignore
    const ratios = await cameraRef.current?.getSupportedRatiosAsync();
    // @ts-ignore
    let desiredRatio = ratios.map((r) => r.split(":")).reduce(([a, b], [c, d]) =>
      Math.abs(a / b - screenRatio) < Math.abs(c / d - screenRatio)
        ? [a, b]
        : [c, d]
    );
    setDesiredRatio(`${desiredRatio[0]}:${desiredRatio[1]}`);
  };

  return (
    // @ts-ignore
    <Animated.View style={[styles.effectcontainer, { opacity: fadeAnim }]}>
      <Camera
        style={styles.camera}
        ratio={desiredRatio}
        type={Camera.Constants.Type.front}
        ref={cameraRef}
        onCameraReady={() => {
          setCameraReady(true);
          setRatio();
        }}
      >


        <View style={styles.carouselContainer}>
          {/* Carousel */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carousel}>
            <View style={{ width: width / 2 - challengeSize / 2 }}></View>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <ImageBackground source={staticImage} imageStyle={imageStyle} style={styles.challenge}></ImageBackground>
            <View style={{ width: width / 2 - challengeSize / 2 }}></View>
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          {/* Snap button */}
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
          ></TouchableOpacity>
        </View>

      </Camera>
    </Animated.View>
  );
}

const snapButtonSize = 120;
const snapButtonBorderThickness = 15;
const challengeSize = snapButtonSize - snapButtonBorderThickness * 2;
const roundBorderRadius = Math.round((width + height) / 2)

const imageStyle = {
  borderRadius: roundBorderRadius,
}

const styles = StyleSheet.create({
  effectcontainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
  },
  carouselContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    borderRadius: roundBorderRadius,
    width: snapButtonSize,
    height: snapButtonSize,
    left: (width - snapButtonSize) / 2,
    top: height - (snapButtonSize + 20),
    borderWidth: snapButtonBorderThickness,
    borderColor: "white",
    backgroundColor: 'transparent'
  },
  carousel: {
    alignSelf: "flex-end",
    marginBottom: 20 + snapButtonBorderThickness
  },
  challenge: {
    width: challengeSize,
    height: challengeSize,
    borderColor: "red",
    alignItems: "center",
  }
});
