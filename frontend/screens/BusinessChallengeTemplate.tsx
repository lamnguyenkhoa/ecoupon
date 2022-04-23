import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";

export function BChallenge() {
  const [checked, setChecked] = React.useState("first");
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup Challenges</Text>
      <View style={styles.pickArea}>
        <Text style={styles.text}>Select Category</Text>
        <Picker style={{ paddingLeft: 200 }}>
          <Picker.Item label="Food & Diet" value="fd" />
          <Picker.Item label="Carbon footprint" value="cf" />
          <Picker.Item label="Martiral" value="ml" />
        </Picker>
      </View>
      <View style={styles.pickArea}>
        <Text style={styles.text}>Select Challenge</Text>
        <Picker style={{ paddingLeft: 200 }}>
          <Picker.Item label="Green Food" value="fd" />
          <Picker.Item label="No motor vehicle" value="cf" />
          <Picker.Item label="Bring your own bag" value="ml" />
        </Picker>
      </View>
      <Text style={{ fontWeight: "bold" }}>Coupon Options</Text>
      <View style={styles.pickArea}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        ></RadioButton>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Input a number"
          keyboardType="numeric"
        />
        <Text>% OFF</Text>
      </View>

      <View style={styles.pickArea}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Input a number"
          keyboardType="numeric"
        />
        <Text>AUD OFF</Text>
      </View>

      <View style={styles.pickArea}>
        <RadioButton
          value="third"
          status={checked === "fthird" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
        ></RadioButton>
        <Text>Free</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Input an item"
        />
      </View>

      <Button color="#077D28" title="Create" onPress={() => { }} />

      <View style={styles.footer}>
        <Text style={{ fontSize: 24, color: "#C4C4C4" }}>
          Ecoupon Business platform
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    color: "black",
    marginRight: 10
  },
  button: {
    backgroundColor: "#077D28",
  },
  middleButton: {
    backgroundColor: "#DDDDDD",
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    position: "relative",
  },
  buttonContainer: {
    backgroundColor: "#DDDDDD",
  },

  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    marginLeft: 16,
  },
});
