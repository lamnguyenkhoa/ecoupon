import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");

// @ts-ignore
export function Challenge(props) {
    const [active, setActive] = useState(props.challengeSize);
    const challengeRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        challengeRef.current?.measure((w, h, px, py, fx, fy) => {
            let currentPosition = fx + (width / 3 - props.challengeSize) / 2;
            // Comparing floats, 5.1234 is chosen arbitrarily
            let isInsideSnapButton =
                Math.abs(currentPosition - props.centerLeft) < 5.1234;
            setActive(isInsideSnapButton);
        });
    }, [props.scroll]);

    return (
        <View
            style={{
                flex: 1,
                width: width / 3,
                alignItems: "center",
            }}
            ref={challengeRef}
            collapsable={false}
        >
            <View
                style={{
                    alignItems: "center",
                    opacity: active ? 1 : 0,
                }}
            >
                <ImageBackground
                    source={props.preview}
                    imageStyle={{
                        resizeMode: 'center'
                    }}
                    style={{ width: width, height: 500 }}
                ></ImageBackground>
            </View>

            <View
                style={{
                    backgroundColor: "white",
                    marginBottom: 20,
                    borderRadius: Math.round((width + height) / 2),
                    flexDirection: "row",
                    width: 120,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: active ? 1 : 0,
                    elevation: 5,
                }}
            >
                <ImageBackground
                    source={props.brand}
                    style={{ flex: 1, height: "90%" }}
                    imageStyle={{
                        resizeMode: "contain",
                        marginLeft: 5,
                    }}
                ></ImageBackground>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#E00026",
                        fontFamily: "serif",
                    }}
                >
                    {props.percentage}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    active && props.onPress();
                }}
            >
                <ImageBackground
                    source={props.icon}
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
