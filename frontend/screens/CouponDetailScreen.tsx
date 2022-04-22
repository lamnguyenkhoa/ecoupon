import { StyleSheet, Button } from "react-native";
import { View } from "../components/Themed";
import { SingleCoupon } from "../types";
import { useState } from "react";
import { CouponItemDetail } from "../components/coupons/CouponItemDetail";

//@ts-ignore
export function CouponDetailScreen({ navigation }) {
  const dummyData: SingleCoupon = {
    id: "1",
    title: "1 Free Coffee",
    desc: "Get 25% at your next KFC buy. Redeemable at all KFC restaurants in the UK, Not valid with any other discounts and promotions. No cash value.",
    company: "Starbucks",
    validBefore: "5/20/2021",
    remaining: 1,
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
      />
      <Button
        title="Go to Coupons page"
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
