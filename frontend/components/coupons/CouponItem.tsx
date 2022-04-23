import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { Image } from "react-native";
import { Text } from "../Themed";
import { SingleCoupon } from "../../types";

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 12,
  },
  card: {
    width: 340,
    height: 94,
    borderRadius: 8,
    // boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingRight: 10,
    position: "relative",
  },
  left: {
    position: "absolute",
    // content: `''`,
    height: 32,
    left: -20,
    borderRadius: 32,
    zIndex: 1,
    top: 31,
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  right: {
    position: "absolute",
    // content: `''`,
    height: 32,
    right: -20,
    borderRadius: 32,
    zIndex: 1,
    top: 31,
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  main: {
    flexDirection: "row",
    paddingTop: 0,
    paddingRight: 10,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FBFBFB",
  },
  imgBox: {
    width: 111,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "rgba(102, 102, 102, 0.2)",
    borderRightWidth: 2,
    borderStyle: "dashed",
    backgroundColor: "#FBFBFB",
    marginRight: 12,
  },
  coImg: {
    height: 45,
    width: 45,
  },
  content: {},
  couponTitle: {
    fontSize: 20,
    fontWeight: '900',
    backgroundColor: "#FBFBFB",
  },
  couponComp: {
    fontSize: 12,
    backgroundColor: "#FBFBFB",
    marginBottom: 8,
  },
  couponValid: {
    fontSize: 8,
    backgroundColor: "#FBFBFB",
    color: "rgba(0,0,0,0.3)",
  },
});
export function CouponItem(props: SingleCoupon) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.card}>
        <View style={styles.main}>
          <View style={styles.left}></View>
          <View style={styles.right}></View>
          <View style={styles.imgBox}>
            <Image
              source={{
                uri: props.logo,
              }}
              style={styles.coImg}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.couponTitle}>{props.title}</Text>
            <Text style={styles.couponComp}>{props.company}</Text>
            <Text style={styles.couponValid}>{props.validBefore}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
