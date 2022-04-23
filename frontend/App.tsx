import * as React from "react";
import { Button, View, Text, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChallengeCamera } from "./components/Camera";
import { Coupons } from "./screens/Coupons";
import { CouponDetailScreen } from "./screens/CouponDetailScreen";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

// Will be replaced by a proper Login page
// @ts-ignore
function HomeScreen({ navigation }) {
  const imageWidth = Dimensions.get("window").width / 2;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // @ts-ignore
        gap: "10vh",
      }}
    >
      {/* <Image
        resizeMode="contain"
        source={require("./assets/images/title-logo.png")}
        style={{ width: "75vw", height: "50vh" }}
      ></Image> */}

      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate("ChallengeCamera")}
      />
      <Button
        title="Go to Coupons page"
        onPress={() => navigation.navigate("Coupons")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ChallengeCamera" component={ChallengeCamera} />
          <Stack.Screen name="Coupons" component={Coupons} />
          <Stack.Screen name="CouponDetail" component={CouponDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
