// import * as React from "react";
// import { Text, StyleSheet, View, Pressable } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontFamily, FontSize } from "../GlobalStyles";

// const FavouriteDoctorScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.favouritedoctorscreen}>
//       <View style={[styles.topBarStatus, styles.topBarStatusPosition]}>
//         <View style={[styles.topBarStatus1, styles.topPosition]}>
//           <View style={[styles.topBarStatus2, styles.topPosition]}>
//             <View style={[styles.action, styles.actionPosition]}>
//               <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
//             </View>
//             <View style={[styles.container, styles.actionPosition]}>
//               <Image
//                 style={styles.batteryIcon}
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
//       <View style={styles.component1}>
//         <Image
//           style={[styles.groupIcon, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/group2.png")}
//         />
//         <Text style={styles.bnChaQuanContainer}>
//           <Text style={styles.bnChaQuanContainer1}>
//             <Text style={styles.bnChaQuanTmBcSNo}>
//               <Text style={styles.bnChaQuan}>{`Bạn chưa quan tâm bác sĩ nào
// `}</Text>
//               <Text style={styles.blankLine}> </Text>
//             </Text>
//             <Text style={styles.thmBcS}>
//               Thêm bác sĩ vào danh sách quan tâm để đặt khám nhanh hơn
//             </Text>
//           </Text>
//         </Text>
//       </View>
//       <View style={[styles.rectangleParent, styles.topBarStatusPosition]}>
//         <View style={[styles.topBarStatus2, styles.topPosition]} />
//         <Text style={[styles.danhSchQuan, styles.timeFlexBox]}>
//           Danh sách quan tâm
//         </Text>
//         <Image
//           style={[styles.vectorIcon, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector53.png")}
//         />
//         <Image
//           style={[styles.vectorIcon1, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector6.png")}
//         />
//       </View>
//       <View
//         style={[styles.favouritedoctorscreenInner, styles.rectangleGroupLayout]}
//       >
//         <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
//           <View style={[styles.instanceItem, styles.instanceBorder]} />
//           <Text style={[styles.bcS, styles.bcSFlexBox]}>Bác sĩ</Text>
//           <Pressable
//             style={styles.biVit}
//             onPress={() => navigation.navigate("FavouriteBlogScreen")}
//           >
//             <Text style={[styles.biVit1, styles.bcSFlexBox]}>Bài viết</Text>
//           </Pressable>
//           <Pressable
//             style={styles.dchV}
//             onPress={() => navigation.navigate("FavouriteServiceScreen")}
//           >
//             <Text style={[styles.biVit1, styles.bcSFlexBox]}>Dịch vụ</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.bnhVin, styles.topPosition]}
//             onPress={() => navigation.navigate("FavouriteHospitalScreen")}
//           >
//             <Text style={[styles.biVit1, styles.bcSFlexBox]}>Bệnh viện</Text>
//           </Pressable>
//           <View style={[styles.instanceInner, styles.instanceBorder]} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   topBarStatusPosition: {
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   topPosition: {
//     left: "0%",
//     top: "0%",
//   },
//   actionPosition: {
//     overflow: "hidden",
//     position: "absolute",
//   },
//   timeFlexBox: {
//     textAlign: "center",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   rectangleGroupLayout: {
//     height: 50,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   instanceBorder: {
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   bcSFlexBox: {
//     justifyContent: "center",
//     fontFamily: FontFamily.robotoRegular,
//     width: "33.33%",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     letterSpacing: 0,
//     height: "100%",
//   },
//   time: {
//     marginTop: -9,
//     fontSize: FontSize.size_mini,
//     fontFamily: FontFamily.sFProText,
//     width: 54,
//     top: "50%",
//     left: 0,
//     textAlign: "center",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//   },
//   action: {
//     height: "40.91%",
//     width: "14.32%",
//     top: "31.82%",
//     right: "80.37%",
//     bottom: "27.27%",
//     left: "5.31%",
//   },
//   batteryIcon: {
//     marginTop: -5.8,
//     right: 1,
//     width: 25,
//     height: 12,
//     top: "50%",
//     position: "absolute",
//   },
//   combinedShapeIcon: {
//     width: 17,
//     height: 11,
//   },
//   wiFiIcon: {
//     width: 15,
//     height: 11,
//   },
//   container: {
//     marginTop: -6,
//     right: 14,
//     width: 68,
//     height: 14,
//     top: "50%",
//   },
//   topBarStatus2: {
//     backgroundColor: Color.foundationBrownBrown500,
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   topBarStatus1: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   topBarStatus: {
//     height: 44,
//     top: 0,
//   },
//   groupIcon: {
//     height: "37.55%",
//     width: "15.43%",
//     right: "42.28%",
//     bottom: "62.45%",
//     left: "42.28%",
//     top: "0%",
//   },
//   bnChaQuan: {
//     fontSize: FontSize.size_xl,
//   },
//   blankLine: {
//     fontSize: FontSize.size_base,
//   },
//   bnChaQuanTmBcSNo: {
//     color: Color.colorBlack,
//   },
//   thmBcS: {
//     fontSize: FontSize.size_smi,
//     color: Color.colorGray_200,
//   },
//   bnChaQuanContainer1: {
//     width: "100%",
//   },
//   bnChaQuanContainer: {
//     height: "50.97%",
//     top: "49.03%",
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     letterSpacing: 0,
//     left: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   component1: {
//     top: 193,
//     left: 20,
//     width: 324,
//     height: 155,
//     position: "absolute",
//   },
//   danhSchQuan: {
//     top: "31.25%",
//     left: "30.93%",
//     fontWeight: "600",
//     fontFamily: FontFamily.robotoBold,
//     fontSize: FontSize.size_base,
//   },
//   vectorIcon: {
//     height: "33.33%",
//     width: "4.27%",
//     top: "33.33%",
//     right: "4.53%",
//     bottom: "33.33%",
//     left: "91.2%",
//   },
//   vectorIcon1: {
//     height: "29.17%",
//     width: "2.13%",
//     top: "35.42%",
//     right: "93.6%",
//     bottom: "35.42%",
//     left: "4.27%",
//   },
//   rectangleParent: {
//     top: 43,
//     height: 48,
//   },
//   instanceItem: {
//     width: "133.33%",
//     right: "-33.33%",
//     backgroundColor: Color.greyscaleBlackWhite,
//     borderColor: Color.colorGainsboro_100,
//     borderBottomWidth: 1,
//     left: "0%",
//     top: "0%",
//     bottom: "0%",
//     height: "100%",
//     borderStyle: "solid",
//   },
//   bcS: {
//     left: "33.33%",
//     color: Color.foundationBrownBrown500,
//     top: "0%",
//     position: "absolute",
//   },
//   biVit1: {
//     color: Color.colorBlack,
//   },
//   biVit: {
//     left: "66.67%",
//     top: "0%",
//     position: "absolute",
//   },
//   dchV: {
//     left: "100%",
//     top: "0%",
//     position: "absolute",
//   },
//   bnhVin: {
//     position: "absolute",
//   },
//   instanceInner: {
//     height: "4%",
//     width: "33.87%",
//     top: "98%",
//     right: "33.07%",
//     bottom: "-2%",
//     left: "33.07%",
//     borderColor: Color.foundationBrownBrown500,
//     borderTopWidth: 2,
//   },
//   rectangleGroup: {
//     top: 0,
//   },
//   favouritedoctorscreenInner: {
//     top: 91,
//   },
//   favouritedoctorscreen: {
//     backgroundColor: Color.colorWhitesmoke_100,
//     flex: 1,
//     height: 812,
//     width: "100%",
//   },
// });

// export default FavouriteDoctorScreen;
