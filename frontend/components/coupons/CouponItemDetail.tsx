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
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  card: {
    width: "340px",
    height: "530px",
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
    bottom: "200px",
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
    bottom: "200px",
    backgroundColor: "#fff",
    width: 32,
    flexDirection: "row",
  },
  main: {
    padding: "0 10px",
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
    marginTop: "2rem",
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
    marginTop: "1rem",
  },
  couponValid: {
    fontSize: 8,
    backgroundColor: "#FBFBFB",
    color: "rgba(0,0,0,0.3)",
  },
  desc: {
    backgroundColor: "#FBFBFB",
    margin: "2rem",
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
    marginTop: "2rem",
    marginBottom: "2rem",
    backgroundColor: "#FBFBFB",
    width: "100%",
    alignItems: "center",
  },
  actionArea: {
    marginTop: "1.5rem",
    width: "100%",
    backgroundColor: "#FBFBFB",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
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
              <p>{props.desc}</p>
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
                <Ionicons name="info" size={24} color="#004165" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
