import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { Image } from "react-native";
import { Text } from "../Themed";
import { SingleCoupon } from "../../types";
import QRCode from "react-native-qrcode-svg";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    height: 530,
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
    bottom: 200,
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
    bottom: 200,
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  main: {
    paddingTop: 0,
    paddingRight: 10,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FBFBFB",
  },
  info: {
    flexDirection: "row",
    // borderRightColor: "rgba(102, 102, 102, 0.2)",
    // borderRightWidth: 2,
    // borderStyle: "dashed",
    backgroundColor: "#FBFBFB",
    marginTop: 24,
    width: "100%",
    justifyContent: "space-around",
  },
  coImg: {
    height: 26,
    width: 82,
  },
  content: {
    flexDirection: "column",
  },
  couponTitle: {
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#FBFBFB",
  },
  couponComp: {
    fontSize: 12,
    backgroundColor: "#FBFBFB",
    marginTop: 12,
  },
  couponValid: {
    fontSize: 8,
    backgroundColor: "#FBFBFB",
    color: "rgba(0,0,0,0.3)",
  },
  desc: {
    backgroundColor: "#FBFBFB",
    margin: 24,
  },
  contentArea: {
    backgroundColor: "#FBFBFB",
    height: 314,
    borderBottomColor: "rgba(102, 102, 102, 0.2)",
    borderBottomWidth: 2,
    borderStyle: "dashed",
    overflow: "hidden",
  },
  qrCodeArea: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "#FBFBFB",
    width: "100%",
    alignItems: "center",
  },
  actionArea: {
    marginTop: 18,
    width: "100%",
    backgroundColor: "#FBFBFB",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: "center",
  },
});
export function CouponItemDetail(props: SingleCoupon) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.card}>
        <View style={styles.main}>
          <View style={styles.left}></View>
          <View style={styles.right}></View>
          <View style={styles.contentArea}>
            <View style={styles.info}>
              <Image
                source={require("../../assets/images/kfc-logo.png")}
                style={styles.coImg}
              />
              <View style={styles.content}>
                <Text style={styles.couponTitle}>{props.title}</Text>
                <Text style={styles.couponComp}>{props.company}</Text>
              </View>
            </View>
            <View style={styles.desc}>
              <Text>{props.desc}</Text>
            </View>
          </View>
          <View style={styles.qrCodeArea}>
            <QRCode value={props.id.toString()} logoSize={95} />
            <View style={styles.actionArea}>
              <TouchableOpacity>
                <Ionicons name="share" size={24} color="#004165" />
              </TouchableOpacity>
              <Text style={styles.couponValid}>{props.validBefore}</Text>
              <TouchableOpacity>
                <Ionicons name='analytics' size={24} color="#004165" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
