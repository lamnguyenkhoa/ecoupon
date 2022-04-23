import { StyleSheet, Button } from "react-native";
import { View } from "../components/Themed";
import { SingleCoupon } from "../types";
import { useState } from "react";
import { CouponItemDetail } from "../components/coupons/CouponItemDetail";
import { Ionicons } from "@expo/vector-icons";

//@ts-ignore
export function CouponDetailScreen({ navigation }) {
  const dummyData: SingleCoupon = {
    id: "1",
    title: "25% OFF",
    desc: "Get 25% at your next KFC buy. Redeemable at all KFC restaurants in the UK, Not valid with any other discounts and promotions. No cash value.",
    company: "KFC",
    validBefore: "11/1/2023",
    remaining: 1,
    logo: "https://toppng.com/uploads/preview/kfc-is-the-popular-fried-chicken-savouring-joint-that-kfc-logo-11563906943d5egjqipew.png",
  };
  const [couponDetail, setCouponDetail] = useState<SingleCoupon>();
  // setCouponDetail(dummyData);
  return (
    <View style={styles.container}>
      {/* {couponDetail && (
        <CouponItemDetail
          id={couponDetail!.id}
          title={couponDetail!.title}
          company={couponDetail!.company}
          desc={couponDetail!.desc}
          validBefore={couponDetail!.validBefore}
          remaining={couponDetail!.remaining}
        />
      )}
       */}
      <CouponItemDetail
        id={dummyData.id}
        title={dummyData.title}
        company={dummyData.company}
        desc={dummyData.desc}
        validBefore={dummyData.validBefore}
        remaining={dummyData.remaining}
        logo={dummyData.logo}
      />
      <Button
        title="Back to Coupons"
        onPress={() => navigation.navigate("Coupons")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
