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
    const challengeRef = useRef(null);

    return (
        <View
            style={{
                width: width / 3,
                alignItems: "center",
                justifyContent: "center"
            }}

            ref={challengeRef}
            collapsable={false}
        >
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                challengeRef.current?.measure((w, h, px, py, fx, fy) => {
                    let currentPosition = fx + (width / 3 - props.challengeSize) / 2
                    // Comparing floats, 5.1234 is chosen arbitrarily
                    let isInsideSnapButton = Math.abs(currentPosition - props.centerLeft) < 5.1234
                    if (isInsideSnapButton) props.onPress()
                })
            }}>
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
