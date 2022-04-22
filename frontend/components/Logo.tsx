import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

const styles = {
  container: {
    alignItems: "center",
  },
  logo: {
    width: imageWidth / 2,
  },
};

export const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require("../assets/images/title-logo.png")}
    />
  </View>
);
