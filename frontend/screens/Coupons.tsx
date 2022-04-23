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
import { useEffect } from "react";
import { useRef } from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  header: {
    position: "relative",
    height: 170,
    marginTop: 20
  },
  backNav: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row"
  },
  name: {
    position: "absolute",
    flexDirection: "column",
    fontSize: 12,
    textAlign: "center",
    top: 0,
    left: 120,
    right: 0,
    bottom: 0,
    margin: "auto",
    width: 135,
  },
  avatar: {
    width: 135,
    height: 128,
  },
  rightBulkArea: {
    position: "absolute",
    right: 0,
    marginTop: 10,
    marginRight: 10,
  },
  trees: {
    marginTop: 30,
    marginRight: 20,
    flexDirection: "row",
    fontSize: 20,
    marginBottom: 30,
  },
  treeLogo: {
    height: 63,
    width: 63,
  },
  list: {},
  listTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 12,
  },
});
export function Coupons({ navigation }: RootTabScreenProps<"Coupons">) {
  const dummyData: CouponList = [
    {
      id: "1",
      title: "1 Free Coffee",
      desc: "Blister (nonthermal) of oral cavity, subsequent encounter",
      company: "Starbucks",
      validBefore: "25/5/2022",
      remaining: 1,
      logo: "https://i.pinimg.com/736x/15/a1/0b/15a10bcc2406f1b33749e95936920b6c.jpg",
    },
    {
      id: "4",
      title: "25% OFF",
      desc: "Pnctr w/o fb of right great toe w damage to nail, sequela",
      company: "KFC",
      validBefore: "11/1/2023",
      remaining: 4,
      logo: "https://toppng.com/uploads/preview/kfc-is-the-popular-fried-chicken-savouring-joint-that-kfc-logo-11563906943d5egjqipew.png",
    },
    {
      id: "5",
      title: "5$ OFF",
      desc: "Activity, oth w oth sports and athletics played individ",
      company: "KFC",
      validBefore: "4/2/2023",
      remaining: 5,
      logo: "https://toppng.com/uploads/preview/kfc-is-the-popular-fried-chicken-savouring-joint-that-kfc-logo-11563906943d5egjqipew.png",
    },
  ];

  // const [couponList, setCouponList] = useState<CouponList>([]);
  // const componentMounted = useRef(true);
  // useEffect(() => {
  //   fetch("http://localhost:3000/coupon/getall", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       if (componentMounted.current) {
  //         setCouponList(
  //           (res.length > 0 ? res : []).map((item: SingleCoupon) => ({
  //             ...item,
  //           }))
  //         );
  //       }
  //     });
  //   return () => {
  //     componentMounted.current = false;
  //   };
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*@ts-ignore */}
        <TouchableOpacity style={styles.backNav} onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="arrow-back-outline" size={20} color="black" />
          <Text style={{ fontWeight: 'bold' }}>Back</Text>
        </TouchableOpacity>
        <View style={styles.name}>
          <Image
            source={require("../assets/images/avatar-face.png")}
            style={styles.avatar}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 50 }}>Kevie</Text>
        </View>
        <View style={styles.rightBulkArea}>
          <View style={styles.trees}>
            <Image
              source={require("../assets/images/tree.png")}
              style={styles.treeLogo}
            ></Image>
            <Text style={{ fontSize: 20, paddingTop: 14 }}>x12</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ borderRadius: 20, paddingBottom: 2, textAlign: 'center', color: 'white', fontSize: 12, fontWeight: 'bold', backgroundColor: 'black' }}>Account Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.listTitle}>Collected Coupons</Text>
      <View style={styles.list}>
        {dummyData.length !== 0 && (
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
                  logo={item.logo}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}
