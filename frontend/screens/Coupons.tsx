import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { TouchableOpacity } from "react-native";
import { Text } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { CouponItem } from "../components/coupons/CouponItem";
import { SingleCoupon, CouponList } from "../types";
import { FlatList } from "react-native";
import { useState } from "react";
import { RootTabScreenProps } from "../types";
import { TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
  },
  name: {
    flexDirection: "column",
    fontSize: "1rem",
    textAlign: "center",
  },
  avatar: {
    width: 135,
    height: 128,
  },
  rightBulkArea: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "1rem",
  },
  trees: {
    flexDirection: "row",
    fontSize: "1.25rem",
  },
  treeLogo: {
    height: 63,
    width: 63,
  },
  list: {},
  listTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: "1rem",
  },
});
export function Coupons({ navigation }: RootTabScreenProps<"Coupons">) {
  const dummyData: CouponList = [
    {
      id: "1",
      title: "1 Free Coffee",
      desc: "Blister (nonthermal) of oral cavity, subsequent encounter",
      company: "Starbucks",
      validBefore: "5/20/2021",
      remaining: 1,
    },
    {
      id: "4",
      title: "25% OFF",
      desc: "Pnctr w/o fb of right great toe w damage to nail, sequela",
      company: "KFC",
      validBefore: "11/1/2021",
      remaining: 4,
    },
    {
      id: "5",
      title: "5$ OFF",
      desc: "Activity, oth w oth sports and athletics played individ",
      company: "H&M",
      validBefore: "4/2/2022",
      remaining: 5,
    },
  ];
  // const [couponList, setCouponList] = useState<Coupons>([]);
  // setCouponList(dummyData);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*@ts-ignore */}
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="arrow-back-outline" size={12} color="black" />
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={styles.name}>
          <Image
            source={require("../assets/images/avatar-face.png")}
            style={styles.avatar}
          ></Image>
          <Text style={{ fontSize: 16 }}>Kevie</Text>
        </View>
        <View style={styles.rightBulkArea}>
          <View style={styles.trees}>
            <Image
              source={require("../assets/images/tree.png")}
              style={styles.treeLogo}
            ></Image>
            <Text style={{ fontSize: 20 }}>12</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ fontSize: 12 }}>Account Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.listTitle}>Collected Coupons</Text>
      <View style={styles.list}>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CouponDetail")}
            >
              <CouponItem
                id={item.id}
                title={item.title}
                company={item.company}
                desc={item.desc}
                validBefore={item.validBefore}
                remaining={item.remaining}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
