import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Box,
  Stack,
  Heading,
  Input,
  Button,
  FormControl,
  Icon,
  ScrollView,
  useColorMode,
  NativeBaseProvider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { colorMode } = useColorMode();
  const onSignInWithGoogle = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <NativeBaseProvider>
      <ScrollView
        style={[styles.outer]}
        bg={colorMode === "dark" ? "coolGray.800" : "primary.100"}
      >
        <View style={{ backgroundColor: "black", height: 50 }}></View>
        <Box h="100%" p={4} safeArea>
          <Stack space={8}>
            <Heading size="2xl">Log In</Heading>
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                size="2xl"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <FormControl.Label mt={3}>Password</FormControl.Label>
              <Input
                size="2xl"
                id="hash"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                name="password"
              />
            </FormControl>
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scope.login(username, password);
                setRedirect(true);
              }}
              type="submit"
              colorScheme="teal"
              w="100%"
            >
              Login
            </Button>
            <Heading size="xl" alignSelf="center">
              or
            </Heading>
            <Button
              size="lg"
              leftIcon={<Icon as={Ionicons} name="logo-google" />}
              onPress={onSignInWithGoogle}
            >
              Sign in with Google
            </Button>
          </Stack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
});

export default Login;
