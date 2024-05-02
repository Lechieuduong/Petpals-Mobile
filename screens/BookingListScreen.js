import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BookingListScreen = () => {
  return (
    <View style={styles.calendarlistscreen}>
      <View style={[styles.footer, styles.footerPosition]}>
        <View style={styles.childPosition} />
        {/* <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector48.png")}
        /> */}
        <Text style={[styles.trangCh, styles.stt1FlexBox]}>Trang chủ</Text>
        <Text style={styles.lchKhm}>Lịch khám</Text>
        <Text style={[styles.tinNhn, styles.tinNhnTypo]}>Tin nhắn</Text>
        <Text style={[styles.tiKhon, styles.tinNhnTypo]}>Tài khoản</Text>
        {/* <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector49.png")}
        /> */}
        {/* <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        /> */}
        {/* <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        /> */}
        <View style={[styles.footerItem, styles.footerItemPosition]} />
      </View>
      <View style={[styles.searchBar, styles.searchPosition]}>
        <View style={[styles.searchBarChild, styles.footerItemPosition]} />
        <View style={[styles.searchBarItem, styles.tmTheoMPosition]} />
        <Text style={[styles.tmTheoM, styles.timeTypo]}>
          Tìm theo mã phiếu khám, tên khách hàng,...
        </Text>
        {/* <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector50.png")}
        /> */}
      </View>
      <View style={[styles.searchBar1, styles.searchPosition]}>
        <View style={[styles.searchBarChild, styles.footerItemPosition]} />
        <Text style={[styles.lchKhm1, styles.stt1FlexBox]}>Lịch khám</Text>
        {/* <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        /> */}
      </View>
      <View style={[styles.topBarStatus, styles.searchPosition]}>
        <View style={[styles.topBarStatus1, styles.barPosition]}>
          <View style={[styles.searchBarChild, styles.footerItemPosition]}>
            <View style={styles.action}>
              <Text style={[styles.time, styles.timePosition]}>9:41</Text>
            </View>
            <View style={[styles.container, styles.timePosition]}>
              {/* <Image
                style={[styles.batteryIcon, styles.timePosition]}
                contentFit="cover"
                source={require("../assets/battery1.png")}
              />
              <Image
                style={styles.combinedShapeIcon}
                contentFit="cover"
                source={require("../assets/combined-shape1.png")}
              />
              <Image
                style={styles.wiFiIcon}
                contentFit="cover"
                source={require("../assets/wifi1.png")}
              /> */}
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.instanceParent, styles.footerPosition]}>
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            {/* <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-161.png")}
            /> */}
            <Text style={[styles.tLch, styles.hyTypo]}>Đã đặt lịch</Text>
          </View>
          <Text style={[styles.stt1, styles.khmLayout1]}>STT 1</Text>
          <Text style={[styles.bnhVinTh, styles.khmLayout1]}>
            Bệnh viện thú y Petpals
          </Text>
          <Text style={[styles.giKhmD, styles.khmLayout]}>
            Giờ khám dự kiến
          </Text>
          <Text style={[styles.text, styles.textTypo]}>09:00 - 28/04/2024</Text>
          <Text style={[styles.text1, styles.textTypo]}>
            09:00 - 12:00 - 28/04/2024
          </Text>
          <Text style={[styles.dngL, styles.dngLPosition]}>Dương Lê</Text>
          <Text style={[styles.khnhHng, styles.dngLPosition]}>Khánh hàng</Text>
          <Text style={[styles.giKhm, styles.khmLayout]}>Giờ khám</Text>
          {/* <Image
            style={[
              styles.artboard14RemovebgPreview4Icon,
              styles.vectorIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/artboard-14removebgpreview-4.png")}
          /> */}
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Text style={[styles.stt1, styles.khmLayout1]}>STT 1</Text>
          <Text style={[styles.bnhVinTh, styles.khmLayout1]}>
            Bệnh viện thú y Petpals
          </Text>
          <Text style={[styles.giKhmD, styles.khmLayout]}>
            Giờ khám dự kiến
          </Text>
          <Text style={[styles.text, styles.textTypo]}>09:00 - 28/04/2024</Text>
          <Text style={[styles.text1, styles.textTypo]}>
            09:00 - 12:00 - 28/04/2024
          </Text>
          <Text style={[styles.dngL, styles.dngLPosition]}>Dương Lê</Text>
          <Text style={[styles.khnhHng, styles.dngLPosition]}>Khánh hàng</Text>
          <Text style={[styles.giKhm, styles.khmLayout]}>Giờ khám</Text>
          {/* <Image
            style={[
              styles.artboard14RemovebgPreview4Icon,
              styles.vectorIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/artboard-14removebgpreview-4.png")}
          /> */}
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            {/* <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-1611.png")}
            /> */}
            <Text style={[styles.hy, styles.hyTypo]}>Đã hủy</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <View style={styles.rectangleGroup}>
            <View style={[styles.rectangleView, styles.groupPosition]} />
            {/* <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/ellipse-1612.png")}
            /> */}
            <Text style={[styles.khm, styles.hyTypo]}>Đã khám</Text>
          </View>
          <Text style={[styles.stt1, styles.khmLayout1]}>STT 1</Text>
          <Text style={[styles.bnhVinTh, styles.khmLayout1]}>
            Bệnh viện thú y Petpals
          </Text>
          <Text style={[styles.giKhmD, styles.khmLayout]}>
            Giờ khám dự kiến
          </Text>
          <Text style={[styles.text, styles.textTypo]}>09:00 - 28/04/2024</Text>
          <Text style={[styles.text1, styles.textTypo]}>
            09:00 - 12:00 - 28/04/2024
          </Text>
          <Text style={[styles.dngL, styles.dngLPosition]}>Dương Lê</Text>
          <Text style={[styles.khnhHng, styles.dngLPosition]}>Khánh hàng</Text>
          <Text style={[styles.giKhm, styles.khmLayout]}>Giờ khám</Text>
          {/* <Image
            style={[
              styles.artboard14RemovebgPreview4Icon,
              styles.vectorIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/artboard-14removebgpreview-4.png")}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerPosition: {
    width: 374,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  stt1FlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  tinNhnTypo: {
    top: "56.52%",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
    width: "15.24%",
    height: "24.64%",
    position: "absolute",
  },
  footerItemPosition: {
    backgroundColor: Color.foundationBrownBrown500,
    top: "0%",
    position: "absolute",
  },
  searchPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  tmTheoMPosition: {
    top: "17.54%",
    height: "64.91%",
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
  },
  vectorIconPosition: {
    bottom: "26.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  barPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 196,
    width: 347,
    left: 13,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.greyscaleBlackWhite,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    borderRadius: Border.br_11xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  hyTypo: {
    fontSize: FontSize.size_smi,
    left: "19.1%",
    width: "70.79%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  khmLayout1: {
    height: "6.63%",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  khmLayout: {
    width: "39.48%",
    left: "4.61%",
    textAlign: "left",
  },
  textTypo: {
    left: "44.96%",
    width: "50.14%",
    textAlign: "right",
    height: "6.63%",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  dngLPosition: {
    top: "83.16%",
    height: "6.63%",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIcon: {
    right: "84.76%",
    left: "9.63%",
    bottom: "49.28%",
    top: "20.29%",
    width: "5.61%",
    height: "30.43%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  trangCh: {
    left: "5.08%",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    top: "55.07%",
    width: "15.24%",
    height: "24.64%",
    justifyContent: "center",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  lchKhm: {
    left: "30.21%",
    color: Color.foundationBrownBrown500,
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
    top: "55.07%",
    width: "15.24%",
    height: "24.64%",
    position: "absolute",
  },
  tinNhn: {
    left: "55.35%",
  },
  tiKhon: {
    left: "80.21%",
  },
  vectorIcon1: {
    right: "59.36%",
    left: "35.03%",
    bottom: "49.28%",
    top: "20.29%",
    width: "5.61%",
    height: "30.43%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon2: {
    right: "34.22%",
    left: "60.16%",
    bottom: "49.28%",
    top: "20.29%",
    width: "5.61%",
    height: "30.43%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    height: "31.45%",
    width: "5.8%",
    top: "18.84%",
    right: "9.39%",
    bottom: "49.71%",
    left: "84.81%",
  },
  footerItem: {
    height: "4.35%",
    width: "25.08%",
    right: "49.52%",
    bottom: "95.65%",
    left: "25.4%",
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
  },
  footer: {
    top: 743,
    height: 69,
  },
  searchBarChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.foundationBrownBrown500,
  },
  searchBarItem: {
    width: "90.67%",
    right: "4.53%",
    bottom: "17.54%",
    left: "4.8%",
    borderRadius: Border.br_24xl,
    backgroundColor: Color.colorMaroon_200,
  },
  tmTheoM: {
    width: "79.73%",
    left: "16.53%",
    color: Color.colorGainsboro_200,
    textAlign: "left",
    top: "17.54%",
    height: "64.91%",
    position: "absolute",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
  },
  vectorIcon4: {
    height: "26.49%",
    top: "36.84%",
    right: "88.53%",
    bottom: "36.67%",
    left: "7.47%",
    width: "4%",
  },
  searchBar: {
    top: 73,
    height: 57,
  },
  lchKhm1: {
    width: "30.93%",
    left: "34.67%",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.greyscaleBlackWhite,
    fontFamily: FontFamily.robotoBold,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    justifyContent: "center",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "50%",
    top: "23.33%",
    right: "5.87%",
    left: "90.13%",
    width: "4%",
  },
  vectorIcon6: {
    height: "46.67%",
    width: "2.13%",
    top: "26.67%",
    right: "94.4%",
    left: "3.47%",
  },
  searchBar1: {
    top: 44,
    height: 30,
  },
  time: {
    marginTop: -9,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhitesmoke_100,
    width: 54,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
    left: 0,
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
    width: 68,
    height: 14,
    overflow: "hidden",
  },
  topBarStatus1: {
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  topBarStatus: {
    top: 0,
    height: 44,
  },
  instanceChild: {
    borderRadius: Border.br_3xs,
  },
  groupChild: {
    backgroundColor: Color.colorLimegreen_300,
  },
  groupItem: {
    height: "33.33%",
    width: "8.99%",
    right: "84.27%",
    bottom: "33.33%",
    left: "6.74%",
    top: "33.33%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tLch: {
    color: Color.colorForestgreen,
    height: "37.5%",
    left: "19.1%",
    width: "70.79%",
    top: "33.33%",
  },
  rectangleGroup: {
    height: "12.24%",
    width: "25.65%",
    top: "7.65%",
    right: "69.74%",
    bottom: "80.1%",
    left: "4.61%",
    position: "absolute",
  },
  stt1: {
    width: "12.1%",
    top: "10.71%",
    left: "84.15%",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  bnhVinTh: {
    top: "32.14%",
    fontWeight: "700",
    width: "51.01%",
    left: "4.61%",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
  },
  giKhmD: {
    top: "55.61%",
    height: "6.63%",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    top: "56.12%",
    textAlign: "right",
  },
  text1: {
    top: "69.9%",
    textAlign: "right",
  },
  dngL: {
    left: "44.09%",
    textAlign: "right",
    width: "51.01%",
  },
  khnhHng: {
    width: "39.48%",
    left: "4.61%",
    textAlign: "left",
  },
  giKhm: {
    top: "69.39%",
    height: "6.63%",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
  },
  artboard14RemovebgPreview4Icon: {
    height: "15.82%",
    width: "13.83%",
    top: "27.55%",
    right: "3.75%",
    bottom: "56.63%",
    left: "82.42%",
  },
  rectangleParent: {
    top: 7,
  },
  groupInner: {
    backgroundColor: Color.colorBrown_500,
  },
  hy: {
    height: "37.5%",
    left: "19.1%",
    width: "70.79%",
    top: "33.33%",
    color: Color.foundationBrownBrown500,
  },
  rectangleContainer: {
    top: 210,
  },
  rectangleView: {
    backgroundColor: Color.colorRoyalblue_400,
  },
  khm: {
    height: "41.67%",
    top: "29.17%",
    color: Color.colorRoyalblue_100,
  },
  rectangleParent1: {
    top: 413,
  },
  instanceParent: {
    top: 130,
    height: 613,
    overflow: "hidden",
  },
  calendarlistscreen: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default BookingListScreen;
