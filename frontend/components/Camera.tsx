import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import { Challenge } from "./Challenge";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
const screenRatio = height / width;

const vest = require("../assets/images/greenvest.jpg");
const HnM = require("../assets/images/HnM.png");
const shirt = require("../assets/images/shirt.png");

const salad = require("../assets/images/greenfood.png");
const coles = require("../assets/images/Coles.png");
const vegetable = require("../assets/images/salad.jpg");

const sticker = require("../assets/images/sticker.webp");
const pepsi = require("../assets/images/pepsi.png");

const challenges = [{
  'icon': vest,
  'brand': HnM,
  'preview': shirt,
  'percentage': '15%'
}, {
  'icon': vegetable,
  'brand': coles,
  'preview': salad,
  'percentage': '2%'
},
{
  'icon': pepsi,
  'brand': pepsi,
  'preview': sticker,
  'percentage': '🌳'
}
]

// @ts-ignore
export function ChallengeCamera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [desiredRatio, setDesiredRatio] = useState("16:9");
  const [scroll, setScroll] = useState(0);
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const shutterEffect = () => {
    Animated.sequence([
      // @ts-ignore
      Animated.timing(fadeAnim, {
        toValue: 0.1,
        duration: 150,
        useNativeDriver: true,
      }),
      // @ts-ignore
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
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
    let desiredRatio = ratios
      // @ts-ignore
      .map((r) => r.split(":"))
      // @ts-ignore
      .reduce(([a, b], [c, d]) =>
        Math.abs(a / b - screenRatio) < Math.abs(c / d - screenRatio)
          ? [a, b]
          : [c, d]
      );
    setDesiredRatio(`${desiredRatio[0]}:${desiredRatio[1]}`);
  };

  const snap = async () => {
    if (cameraReady) {
      // @ts-ignore 44147937
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      // shutterEffect();
    }

    // Check if snap is valid
    let challengeDone = true
    if (challengeDone) {

    }


  };

  let challengeObjs = [];
  for (let [i, challenge] of challenges.entries()) {
    challengeObjs.push(
      <Challenge
        key={i}
        onPress={snap}
        challengeSize={challengeSize}
        centerLeft={fromLeft + snapButtonBorderThickness}
        scroll={scroll}
        icon={challenge.icon}
        brand={challenge.brand}
        preview={challenge.preview}
        percentage={challenge.percentage}
      ></Challenge>
    );
  }

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

        {/* <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You got a coupon!</Text>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}

        {/* Carousel */}
        <ScrollView
          decelerationRate="fast"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          snapToInterval={width / 3}
          onScroll={(event) => {
            setScroll(event.nativeEvent.contentOffset.x);
          }}
          scrollEventThrottle={8}
        >
          {/* Padding, Android only accepts this not padding-top */}
          <View style={{ width: width / 3 }}></View>

          {challengeObjs}

          {/* Padding, Android only accepts this not padding-top */}
          <View style={{ width: width / 3 }}></View>
        </ScrollView>

        {/* Snap button border */}
        <View pointerEvents="none" style={styles.button}></View>

        {/*@ts-ignore */}
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          //@ts-ignore
          style={{
            position: "absolute",
            left: "5%",
            top: "10%",
            backgroundColor: "#fff",
            borderRadius: 50,
            height: 35,
            width: 35,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="arrow-back-outline" size={20} color="black" />
        </TouchableOpacity>
      </Camera>
    </Animated.View>
  );
}

const snapButtonSize = 120;
const snapButtonBorderThickness = 10;
const challengeSize = snapButtonSize - snapButtonBorderThickness * 2;
const fromLeft = (width - snapButtonSize) / 2;
const paddingBottom = 20;
const fromTop = height - (snapButtonSize + paddingBottom);

const styles = StyleSheet.create({
  effectcontainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    borderRadius: Math.round((width + height) / 2),
    width: snapButtonSize,
    height: snapButtonSize,
    left: fromLeft,
    top: fromTop,
    borderWidth: snapButtonBorderThickness,
    borderColor: "white",
    position: "absolute",
  },
  carousel: {
    alignSelf: "flex-end",
    marginBottom: 20 + snapButtonBorderThickness,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});
