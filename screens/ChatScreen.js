import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
const ChatScreen = (props) => {
  const onPress = () => {
    props.navigation.navigate('HomePageScreen');
  };

  const onPress4 = () => {
    props.navigation.navigate('BookingListScreen');
  };

  const onPress5 = () => {
    props.navigation.navigate('ProfileScreen');
  };
  return (
    <View style={styles.calendarlistscreen}>
      <View style={styles.header}>
        <Text style={{ color: "white" , textAlign: "center", top: 50, fontSize:  15, fontFamily: FontFamily.robotoBold}}>Tin nhắn</Text>
        <Image
          style={{ height: 15, width: 15, top: 30, alignSelf: "flex-end", right: 20 }}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
      </View>
      <View style={{ height: 650, width: "100%" }}>
                    <Image
                        style={{ width: 150, height: 150, alignSelf: "center", top: 100}}
                        contentFit="contain"
                        source={require("../assets/image-56.png")}
                    />
                    <View style={{ top: 130, alignSelf: "center", width: 300  }}>
                      <Text style={{ fontSize: 15 }}>Bạn cần tư vấn về sức khỏe thú cưng?</Text>
                      <Text style={{ fontSize: 15 }}>Bạn có thể chat miễn phí với: </Text>
                      <Text style={{ fontSize: 15, paddingTop: 10}}>- Chăm sóc khách hàng </Text>
                      <Text style={{ fontSize: 15 , paddingTop: 10}}>- Nhân viên tư vấn bệnh viện đã từng đặt khám hoặc tư vấn trực tuyến thông qua CSKH </Text>
                    </View>

                    <TouchableOpacity>
                      <View style={{ width:100, height: 40, backgroundColor: Color.colorBrown, borderRadius: 20, alignSelf:"center", top: 150}}>
                        <Image
                            style={{top: 10, left: 10, width: 20, height: 20, alignSelf: "flex-start"}}
                            contentFit="contain"
                            source={require("../assets/vector70.png")}
                        />
                        <Text style={{ color: "white", top: -10, left: 35}}>Chat ngay</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={{ width:200, height: 40, backgroundColor: Color.colorGray, borderRadius: 20, alignSelf:"flex-end", top: 180, right: 50}}>
                        <View style={{ width:40, height: 40, backgroundColor: Color.colorBrown, borderRadius: 20, alignSelf:"flex-end"}}>
                          <Image
                              style={{top: 10, left: 10, width: 20, height: 20, alignSelf: "flex-start"}}
                              contentFit="contain"
                              source={require("../assets/vector60.png")}
                          />
                        </View>
                        <Text style={{ color: "white", top: -35, fontSize: 12, left: 15, fontFamily: FontFamily.robotoBold}}>Nhắn tin với CSKH Petpals</Text>
                        <Text style={{ color: "white", top: -35, fontSize: 12, left: 15}}>Hỗ trợ thắc mắc miễn phí</Text>

                      </View>
                      
                    </TouchableOpacity>

                    <View style={{ width: "100%", top: 620, height: 60, backgroundColor: "white", position: "absolute"}}>
                  <TouchableOpacity onPress={onPress}>
                  <View style={{width: "25%", left: 10, top: 10}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector48.png")}
                        />
                        <Text style={{textAlign: "center" }}>Trang chủ</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPress4}>
                  <View style={{width: "25%", top: -27, left: 95}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector12.png")}
                        />
                        <Text style={{ textAlign: "center" }}>Lịch khám</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={{width: "25%", top: -64, left: 180}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector58.png")}
                        />
                        <Text style={{ textAlign: "center", color: Color.colorBrown }}>Tin nhắn</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPress5}>
                  <View style={{width: "25%", top: -101, left: 260 }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector14.png")}
                        />
                        <Text style={{ textAlign: "center" }}>Tài khoản</Text>
                  </View>
                  </TouchableOpacity>
                  
                </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorBrown,
    height: 80,
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


// const ChatScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.mnHnhChat}>
//       <View style={styles.image56Parent}>
//         <Image
//           style={[styles.image56Icon, styles.image56IconPosition]}
//           contentFit="cover"
//           source={require("../assets/image-56.png")}
//         />
//         <View style={[styles.bnCnTVnScKhe, styles.footerPosition]}>
//           <Text style={styles.bnCnT}>
//             Bạn cần tư vấn về sức khỏe thú cưng? Bạn có thể chat miễn phí với:
//           </Text>
//           <Text style={[styles.chmScKhch, styles.tVnPhngTypo]}>
//             Chăm sóc khách hàng
//           </Text>
//           <Text style={[styles.tVnPhng, styles.tVnPhngTypo]}>
//             Tư vấn phòng khám đã từng đặt khám hoặc tư vấn trực tuyến thông qua
//             CSKH
//           </Text>
//         </View>
//       </View>
//       <View style={{ width: "100%", top: 700, height: 80, backgroundColor: "white", position: "absolute"}}>
//                   <View style={{width: "25%", left: 10, top: 10}}>
//                         <Image
//                             style={{ width: 20, height: 20, alignSelf: "center"}}
//                             contentFit="contain"
//                             source={require("../assets/vector11.png")}
//                         />
//                         <Text style={{color: Color.colorBrown, textAlign: "center" }}>Trang chủ</Text>
//                   </View>
//                   <TouchableOpacity>
//                   <View style={{width: "25%", top: -27, left: 95}}>
//                         <Image
//                             style={{ width: 20, height: 20, alignSelf: "center"}}
//                             contentFit="contain"
//                             source={require("../assets/vector12.png")}
//                         />
//                         <Text style={{ textAlign: "center" }}>Lịch khám</Text>
//                   </View>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                   <View style={{width: "25%", top: -64, left: 180}}>
//                         <Image
//                             style={{ width: 20, height: 20, alignSelf: "center"}}
//                             contentFit="contain"
//                             source={require("../assets/vector13.png")}
//                         />
//                         <Text style={{ textAlign: "center" }}>Tin nhắn</Text>
//                   </View>
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                   <View style={{width: "25%", top: -101, left: 260 }}>
//                         <Image
//                             style={{ width: 20, height: 20, alignSelf: "center"}}
//                             contentFit="contain"
//                             source={require("../assets/vector14.png")}
//                         />
//                         <Text style={{ textAlign: "center" }}>Tài khoản</Text>
//                   </View>
//                   </TouchableOpacity>
                  
//                 </View>
//       <View style={[styles.topBarStatus, styles.topBarStatusLayout]}>
//         <View style={[styles.topBarStatus1, styles.childPosition]}>
//           <View style={[styles.topBarStatus2, styles.footerItemPosition]}>
//             <View style={styles.action}>
//               <Text style={[styles.time, styles.timePosition]}>9:41</Text>
//             </View>
//             <View style={[styles.container, styles.timePosition]}>
//               <Image
//                 style={[styles.batteryIcon, styles.timePosition]}
//                 contentFit="cover"
//                 source={require("../assets/battery.png")}
//               />
//               <Image
//                 style={styles.combinedShapeIcon}
//                 contentFit="cover"
//                 source={require("../assets/combined-shape.png")}
//               />
//               <Image
//                 style={styles.wiFiIcon}
//                 contentFit="cover"
//                 source={require("../assets/wifi.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
//         <View style={[styles.topBarStatus2, styles.footerItemPosition]} />
//         <Image
//           style={[styles.vectorIcon1, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector112.png")}
//         />
//         <Text style={styles.tinNhn1}>Tin nhắn</Text>
//       </View>
//       <Pressable
//         style={styles.chatNgay}
//         onPress={() => navigation.navigate("MnHnhChatViCSKH")}
//       >
//         <View style={[styles.chatNgayChild, styles.footerItemPosition]} />
//         <Image
//           style={[styles.vectorIcon2, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector59.png")}
//         />
//         <Text style={[styles.chatNgay1, styles.nhnTinViTypo]}>Chat ngay</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.nhnTinCskhWrapper, styles.rectangleParentLayout]}
//         onPress={() => navigation.navigate("MnHnhChatViCSKH")}
//       >
//         <View style={[styles.topBarStatus1, styles.childPosition]}>
//           <View style={[styles.nhnTinCskhChild, styles.childPosition]} />
//           <Image
//             style={[styles.nhnTinCskhItem, styles.iconLayout]}
//             contentFit="cover"
//             source={require("../assets/ellipse-167.png")}
//           />
//           <Image
//             style={[styles.vectorIcon3, styles.iconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector60.png")}
//           />
//           <Text style={[styles.nhnTinViContainer, styles.chatNgay1Typo]}>
//             <Text style={styles.nhnTinViContainer1}>
//               <Text style={styles.nhnTinViTypo}>{`Nhắn tin với CSKH Petpals
// `}</Text>
//               <Text style={styles.hTr}>
//                 Hỗ trợ / giải đáp thắc mắc miễn phí
//               </Text>
//             </Text>
//           </Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// };

export default ChatScreen;
