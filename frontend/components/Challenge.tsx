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
    // const [size, setSize] = useState(props.challengeSize);

    return (
        <View
            style={{
                width: width / 3,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <TouchableOpacity onPress={props.onPress}>
                <ImageBackground
                    source={staticImage}
                    imageStyle={{ borderRadius: Math.round((width + height) / 2) }}
                    style={{
                        width: props.challengeSize,
                        height: props.challengeSize,
                        borderColor: "red",
                        alignItems: "center",
                    }}
                ></ImageBackground>
            </TouchableOpacity>
        </View>
    );
}
