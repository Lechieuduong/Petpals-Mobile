import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mnHnhHSKhchHng}>
      <View style={styles.component6}>
        <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
          <View style={[styles.groupChild, styles.groupChildPosition2]} />
          <View style={styles.groupItem} />
          <View style={[styles.headerFilterBox, styles.headerPosition]}>
            <Text style={styles.hy}>Hủy</Text>
          </View>
          <View style={[styles.headerFilterBox1, styles.headerPosition]}>
            <Text style={styles.xcNhn}>Xác nhận</Text>
          </View>
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <View style={[styles.lineView, styles.lineViewPosition]} />
            <View style={[styles.groupChild1, styles.groupChildPosition1]} />
            <View style={[styles.groupInner, styles.groupPosition]} />
            <View style={[styles.lineView, styles.lineViewPosition]} />
            <View style={[styles.groupChild1, styles.groupChildPosition1]} />
            <View style={[styles.groupChild5, styles.groupChildPosition]} />
            <View style={[styles.groupChild6, styles.groupChildPosition]} />
            <View style={[styles.groupChild7, styles.groupChildPosition]} />
            <Text style={[styles.text, styles.textFlexBox3]}>31</Text>
            <Text style={[styles.thng12, styles.thngLayout]}>Tháng 12</Text>
            <Text style={[styles.text1, styles.textPosition]}>1989</Text>
            <Text style={[styles.text2, styles.textFlexBox2]}>2</Text>
            <Text style={[styles.thng2, styles.textFlexBox2]}>Tháng 2</Text>
            <Text style={[styles.text3, styles.textFlexBox2]}>1991</Text>
            <Text style={[styles.text4, styles.textFlexBox1]}>1</Text>
            <Text style={[styles.thng1, styles.textFlexBox1]}>Tháng 1</Text>
            <Text style={[styles.text5, styles.textFlexBox1]}>1990</Text>
          </View>
        </View>
      </View>
      <View style={[styles.customerProfile, styles.topBarStatusPosition]}>
        <View style={[styles.topBarStatus1, styles.groupChildPosition2]} />
        <Text style={styles.hSKhch}>Hồ sơ khách hàng</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("MnHnhThngTinTiKhon")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector19.png")}
          />
        </Pressable>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector107.png")}
        />
        <Text style={[styles.thngTinC, styles.iuChnh1FlexBox]}>
          Thông tin cơ bản
        </Text>
        <Pressable
          style={[styles.iuChnh, styles.iuChnhPosition]}
          onPress={() => navigation.navigate("MnHnhToHS3")}
        >
          <Text style={[styles.iuChnh1, styles.iuChnh1FlexBox]}>
            Điều chỉnh
          </Text>
        </Pressable>
        <Text style={[styles.mBnhNhn, styles.textFlexBox]}>Mã bệnh nhân</Text>
        <Text style={[styles.dngL, styles.textFlexBox]}>Dương Lê</Text>
        <Text style={[styles.hVTn, styles.textFlexBox]}>Họ và tên</Text>
        <Text style={[styles.sInThoi, styles.textFlexBox]}>Số điện thoại</Text>
        <Text style={[styles.ngySinh, styles.textFlexBox]}>Ngày sinh</Text>
        <Text style={[styles.giiTnh, styles.textFlexBox]}>Giới tính</Text>
        <Text style={[styles.aCh, styles.textFlexBox]}>Địa chỉ</Text>
        <Text style={[styles.chaCpNht, styles.textFlexBox]}>Chưa cập nhật</Text>
        <Text style={[styles.nghNghip, styles.textFlexBox]}>Nghề nghiệp</Text>
        <Text style={[styles.chaCpNht1, styles.textFlexBox]}>
          Chưa cập nhật
        </Text>
        <Text style={[styles.email, styles.textFlexBox]}>Email</Text>
        <Text style={[styles.lechieuduong0203gmailcom, styles.textFlexBox]}>
          lechieuduong0203@gmail.com
        </Text>
        <Text style={[styles.nam, styles.textFlexBox]}>Nam</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>02/03/2002</Text>
        <Text style={[styles.text7, styles.textFlexBox]}>0918792787</Text>
        <Text style={[styles.ppm24178888, styles.textFlexBox]}>
          PPM24178888
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition2: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  headerPosition: {
    bottom: "75.25%",
    top: "4.62%",
    height: "20.13%",
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 54,
    position: "absolute",
  },
  lineViewPosition: {
    left: 53,
    width: 68,
  },
  groupChildPosition1: {
    left: 130,
    width: 68,
  },
  groupChildPosition: {
    top: 106,
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  textFlexBox3: {
    height: 34,
    color: Color.colorGray_300,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  thngLayout: {
    width: 66,
    left: 53,
  },
  textPosition: {
    left: 131,
    width: 66,
  },
  textFlexBox2: {
    top: 126,
    height: 34,
    color: Color.colorGray_300,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textFlexBox1: {
    top: 63,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightInk,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iuChnhPosition: {
    top: 0,
    position: "absolute",
  },
  containerPosition: {
    top: "50%",
    position: "absolute",
  },
  topBarStatusPosition: {
    left: 0,
    width: 375,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iuChnh1FlexBox: {
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.foundationBrownBrown500,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
  },
  textFlexBox: {
    height: 30,
    textAlign: "left",
    fontSize: FontSize.poppinsBold16_size,
    left: 0,
    alignItems: "center",
    display: "flex",
    color: Color.lightInk,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild: {
    height: "95.05%",
    top: "4.95%",
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.darkInk,
    left: "0%",
  },
  groupItem: {
    height: "1.98%",
    width: "13.6%",
    right: "43.73%",
    bottom: "98.02%",
    left: "42.67%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    top: "0%",
    position: "absolute",
  },
  hy: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightInk,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  headerFilterBox: {
    width: "16.8%",
    right: "83.2%",
    left: "0%",
  },
  xcNhn: {
    color: Color.foundationBrownBrown500,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  headerFilterBox1: {
    width: "21.33%",
    left: "78.67%",
    right: "0%",
    bottom: "75.25%",
    top: "4.62%",
    height: "20.13%",
  },
  groupInner: {
    width: 44,
    left: 0,
  },
  lineView: {
    width: 68,
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 54,
    position: "absolute",
  },
  groupChild1: {
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 54,
    position: "absolute",
  },
  groupChild5: {
    width: 44,
    left: 0,
  },
  groupChild6: {
    width: 68,
    left: 53,
  },
  groupChild7: {
    left: 130,
    width: 68,
  },
  text: {
    width: 42,
    left: 0,
  },
  thng12: {
    height: 34,
    color: Color.colorGray_300,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text1: {
    height: 34,
    color: Color.colorGray_300,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text2: {
    width: 42,
    left: 0,
  },
  thng2: {
    width: 66,
    left: 53,
  },
  text3: {
    left: 131,
    width: 66,
  },
  text4: {
    width: 42,
    left: 0,
  },
  thng1: {
    width: 66,
    left: 53,
  },
  text5: {
    left: 131,
    width: 66,
  },
  lineParent: {
    top: 90,
    left: 89,
    width: 197,
    height: 160,
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  component6: {
    top: 4579,
    left: -1153,
    height: 303,
    width: 375,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhitesmoke_100,
    top: "50%",
    left: 0,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  action: {
    height: "40.91%",
    width: "14.32%",
    top: "31.82%",
    right: "80.37%",
    bottom: "27.27%",
    left: "5.31%",
    overflow: "hidden",
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.8,
    right: 1,
    width: 25,
    height: 12,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -6,
    right: 14,
    height: 14,
    overflow: "hidden",
    width: 68,
  },
  topBarStatus1: {
    backgroundColor: Color.foundationBrownBrown500,
    left: "0%",
    top: "0%",
    height: "100%",
  },
  topBarStatus: {
    height: 44,
    left: 0,
    width: 375,
  },
  hSKhch: {
    height: "62.5%",
    width: "36.8%",
    top: "18.75%",
    left: "31.73%",
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.poppinsBold16_size,
    color: Color.colorWhitesmoke_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "4.27%",
    top: "35.42%",
    right: "93.6%",
    bottom: "35.42%",
    width: "2.13%",
    height: "29.17%",
    position: "absolute",
  },
  customerProfile: {
    top: 43,
    height: 48,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.85%",
    width: "5.7%",
    right: "94.3%",
    bottom: "96.15%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  thngTinC: {
    left: 29,
    width: 151,
    fontSize: FontSize.poppinsBold16_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iuChnh1: {
    width: 92,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  iuChnh: {
    left: 259,
  },
  mBnhNhn: {
    top: 40,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  dngL: {
    top: 130,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  hVTn: {
    top: 100,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  sInThoi: {
    top: 160,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  ngySinh: {
    top: 220,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  giiTnh: {
    top: 280,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  aCh: {
    top: 340,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  chaCpNht: {
    top: 370,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  nghNghip: {
    top: 400,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  chaCpNht1: {
    top: 430,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  email: {
    top: 460,
    width: 110,
    height: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  lechieuduong0203gmailcom: {
    top: 490,
    width: 219,
    fontFamily: FontFamily.robotoRegular,
  },
  nam: {
    top: 310,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  text6: {
    top: 250,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  text7: {
    top: 190,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  ppm24178888: {
    top: 70,
    width: 110,
    height: 30,
    fontFamily: FontFamily.robotoRegular,
  },
  vectorParent: {
    height: "64.04%",
    width: "93.6%",
    top: "13.3%",
    right: "1.87%",
    bottom: "22.66%",
    left: "4.53%",
    position: "absolute",
  },
  mnHnhHSKhchHng: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default ProfileDetailScreen;
