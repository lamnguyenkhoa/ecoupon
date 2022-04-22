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
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  card: {
    width: "340px",
    height: "94px",
    borderRadius: 8,
    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
    padding: "10px 10px",
    position: "relative",
  },
  left: {
    position: "absolute",
    content: `''`,
    height: 32,
    left: "-20px",
    borderRadius: 32,
    zIndex: 1,
    top: "31px",
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  right: {
    position: "absolute",
    content: `''`,
    height: 32,
    right: "-20px",
    borderRadius: 32,
    zIndex: 1,
    top: "31px",
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  main: {
    flexDirection: "row",
    padding: "0 10px",
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
    marginRight: "1rem",
  },
  coImg: {
    height: 35,
    width: 35,
  },
  content: {},
  couponTitle: {
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#FBFBFB",
  },
  couponComp: {
    fontSize: 12,
    backgroundColor: "#FBFBFB",
    marginBottom: "0.75rem",
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
              source={require("../../assets/images/starbucks-logo.png")}
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
