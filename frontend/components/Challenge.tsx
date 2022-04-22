import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from "react-native";


const { height, width } = Dimensions.get("window");
const staticImage = require("../assets/images/panda.png");

// @ts-ignore
export function Challenge(props) {
    console.log('!', props)
    return (
        <TouchableOpacity onPress={props.onPress}>
            <ImageBackground source={staticImage} imageStyle={{ borderRadius: Math.round((width + height) / 2) }} style={{
                width: props.challengeSize,
                height: props.challengeSize,
                borderColor: "red",
                alignItems: "center"
            }}></ImageBackground>
        </TouchableOpacity>
    );
}

