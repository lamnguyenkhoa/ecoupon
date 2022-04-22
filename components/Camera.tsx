import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Camera } from 'expo-camera';

export function ChallengeCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null)
  const fadeAnim = useRef(new Animated.Value(1)).current

  const shutterEffect = () => {
    Animated.sequence([
      // @ts-ignore
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      // @ts-ignore
      Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true })
    ]).start()
  }

  useEffect(() => {
    // Request permission 
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === 'granted');
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
      <Camera style={styles.camera} ref={cameraRef}>

        {/* Snap button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef.current) {
                // @ts-ignore 44147937 
                let photo = await cameraRef.current.takePictureAsync();
                console.log(photo)
                shutterEffect()
              }
            }
            }>
            <Text style={styles.text}> Snap </Text>
          </TouchableOpacity>
        </View>

      </Camera>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  effectcontainer: {
    flex: 1
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
