import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
const DoctorListScreen = (props) => {
  const onPress = () => {
    props.navigation.navigate('HomePageScreen');
  };
  return (
    <View style={styles.calendarlistscreen}>
      <View style={styles.header}>
        <Text style={{ color: "white" , textAlign: "center", top: 50, fontSize:  15, fontFamily: FontFamily.robotoBold}}>Danh sách bác sĩ</Text>
        <Image
          style={{ height: 15, width: 15, top: 30, alignSelf: "flex-end", right: 20 }}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
        <TouchableOpacity onPress={onPress}>
            <Image
            style={{ height: 14, width: 8, top: 17, alignSelf: "flex-start", left: 20 }}
            contentFit="cover"
            source={require("../assets/vector19.png")}
            />
        </TouchableOpacity>
        <TextInput style={{ height: 40, width: 300, alignSelf: "center", backgroundColor: "#54090B", top: 30, borderRadius: 20, textAlign: "center", color: "white"}} placeholder="  Tìm theo mã phiếu khám, tên khách hàng,..." placeholderTextColor={"white"}></TextInput>
        <Image
            style={{ height: 15, width: 15, top: 2 , left: 40}}
            contentFit="cover"
            source={require("../assets/vector50.png")}
        />
      </View>
      <View style={{ height: 650, width: "100%" }}>
        <ScrollView contentContainerStyle={{paddingBottom: 80}}>
          <View style={{ height: 200, backgroundColor: "white", width: 330, alignSelf: "center", top: 10, borderRadius: 15 }}>
            <View style={{ top: 20, left: 20 }}>
                    <Image
                        style={{ width: 90, height: 90}}
                        contentFit="cover"
                        source={require("../assets/bc-s-hoa.png")}
                    />
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15 }}>TS. BS</Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 20, fontFamily: FontFamily.robotoBold }}>Bùi Thị Hồng</Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15, color: "gray" }}>21 năm kinh nghiệm</Text>
                    <View style={{ top: -85, left: 100, width: 80 ,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Da liễu</Text>
                    </View>
                    <View style={{ top: -105, left: 190, width: 80,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Sản khoa</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ top: -70, left: 120, width: 180,borderRadius: 10, height: 50, backgroundColor: Color.colorBrown }}>
                            <Text style={{  textAlign: 'center',  fontSize: 15, color: "white", top: 15 }}>Xem thông tin</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View>
          <View style={{ height: 200, backgroundColor: "white", width: 330, alignSelf: "center", top: 20, borderRadius: 15 }}>
            <View style={{ top: 20, left: 20 }}>
                    <Image
                        style={{ width: 90, height: 90}}
                        contentFit="cover"
                        source={require("../assets/bc-s-tng.png")}
                    />
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15 }}>TS. BS</Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 20, fontFamily: FontFamily.robotoBold }}>Nguyễn Văn Tùng</Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15, color: "gray" }}>21 năm kinh nghiệm</Text>
                    <View style={{ top: -85, left: 100, width: 80 ,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Da liễu</Text>
                    </View>
                    <View style={{ top: -105, left: 190, width: 80,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Sản khoa</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ top: -70, left: 120, width: 180,borderRadius: 10, height: 50, backgroundColor: Color.colorBrown }}>
                            <Text style={{  textAlign: 'center',  fontSize: 15, color: "white", top: 15 }}>Xem thông tin</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View>
          <View style={{ height: 200, backgroundColor: "white", width: 330, alignSelf: "center", top: 30, borderRadius: 15 }}>
            <View style={{ top: 20, left: 20 }}>
                    <Image
                        style={{ width: 90, height: 90}}
                        contentFit="cover"
                        source={require("../assets/bc-s-trung.png")}
                    />
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15 }}>TS. BS</Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 20, fontFamily: FontFamily.robotoBold }}>Đặng Tiến Trung </Text>
                    <Text style={{ top: -90, textAlign: 'left', left: 100, fontSize: 15, color: "gray" }}>21 năm kinh nghiệm</Text>
                    <View style={{ top: -85, left: 100, width: 80 ,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Da liễu</Text>
                    </View>
                    <View style={{ top: -105, left: 190, width: 80,borderRadius: 10, height: 20, backgroundColor: Color.colorGainsboro }}>
                        <Text style={{  textAlign: 'center',  fontSize: 15, color: "black" }}>Sản khoa</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ top: -70, left: 120, width: 180,borderRadius: 10, height: 50, backgroundColor: Color.colorBrown }}>
                            <Text style={{  textAlign: 'center',  fontSize: 15, color: "white", top: 15 }}>Xem thông tin</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorBrown,
    height: 130,
    width: "100%"
  },
  footerPosition: {
    width: 374,
    top: 690,
    height: 69,
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
    top: 690,
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

export default DoctorListScreen;
