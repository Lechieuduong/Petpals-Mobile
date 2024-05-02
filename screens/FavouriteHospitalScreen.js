// import * as React from "react";
// import { StyleSheet, View, Text, Pressable } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontFamily, FontSize } from "../GlobalStyles";

// const FavouriteHospitalScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.favouritehospitalscreen}>
//       <View style={styles.customerProfile}>
//         <View
//           style={[styles.customerProfileChild, styles.topBarStatus2Position]}
//         />
//         <Text style={[styles.danhSchQuan, styles.danhFlexBox]}>
//           Danh sách quan tâm
//         </Text>
//         <Image
//           style={[styles.vectorIcon, styles.vectorIconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector52.png")}
//         />
//       </View>
//       <Image
//         style={[styles.groupIcon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../assets/group1.png")}
//       />
//       <View style={[styles.topBarStatus, styles.rectanglePosition]}>
//         <View style={[styles.topBarStatus1, styles.bnhVinPosition]}>
//           <View style={styles.topBarStatus2Position}>
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
//       <View style={styles.component1}>
//         <Image
//           style={[styles.groupIcon1, styles.vectorIconLayout]}
//           contentFit="cover"
//           source={require("../assets/group2.png")}
//         />
//         <Text style={styles.bnChaQuanContainer}>
//           <Text style={styles.bnChaQuanContainer1}>
//             <Text style={styles.bnChaQuanTmBnhVinN}>
//               <Text style={styles.bnChaQuan}>{`Bạn chưa quan tâm bệnh viện nào
// `}</Text>
//               <Text style={styles.blankLine}> </Text>
//             </Text>
//             <Text style={styles.thmBnhVin}>
//               Thêm bệnh viện vào danh sách quan tâm để đặt khám nhanh hơn
//             </Text>
//           </Text>
//         </Text>
//       </View>
//       <View style={[styles.rectangleParent, styles.rectanglePosition]}>
//         <View style={styles.topBarStatus2Position} />
//         <Text style={[styles.danhSchQuan1, styles.danhFlexBox]}>
//           Danh sách quan tâm
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector53.png")}
//         />
//         <Image
//           style={[styles.vectorIcon2, styles.vectorIconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector6.png")}
//         />
//       </View>
//       <View
//         style={[styles.favouritehospitalscreenInner, styles.rectanglePosition]}
//       >
//         <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
//           <View style={[styles.instanceItem, styles.instanceBorder]} />
//           <Pressable
//             style={styles.bcS}
//             onPress={() => navigation.navigate("FavouriteDoctorScreen")}
//           >
//             <Text style={[styles.bcS1, styles.bcS1FlexBox]}>Bác sĩ</Text>
//           </Pressable>
//           <Pressable
//             style={styles.biVit}
//             onPress={() => navigation.navigate("FavouriteBlogScreen")}
//           >
//             <Text style={[styles.bcS1, styles.bcS1FlexBox]}>Bài viết</Text>
//           </Pressable>
//           <Pressable
//             style={styles.dchV}
//             onPress={() => navigation.navigate("FavouriteServiceScreen")}
//           >
//             <Text style={[styles.bcS1, styles.bcS1FlexBox]}>Dịch vụ</Text>
//           </Pressable>
//           <Text style={[styles.bnhVin, styles.bcS1FlexBox]}>Bệnh viện</Text>
//           <View style={[styles.instanceInner, styles.instanceBorder]} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   topBarStatus2Position: {
//     backgroundColor: Color.foundationBrownBrown500,
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   danhFlexBox: {
//     textAlign: "center",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//   },
//   vectorIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   iconLayout: {
//     width: "4.27%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   rectanglePosition: {
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   bnhVinPosition: {
//     left: "0%",
//     top: "0%",
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   instanceBorder: {
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   bcS1FlexBox: {
//     justifyContent: "center",
//     fontFamily: FontFamily.robotoRegular,
//     width: "33.33%",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     letterSpacing: 0,
//     fontSize: FontSize.size_base,
//     height: "100%",
//   },
//   customerProfileChild: {
//     display: "none",
//   },
//   danhSchQuan: {
//     top: "24.05%",
//     left: "24.19%",
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "600",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   vectorIcon: {
//     height: "29.19%",
//     width: "2.15%",
//     top: "35.41%",
//     right: "93.58%",
//     bottom: "35.41%",
//     left: "4.27%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//   },
//   customerProfile: {
//     top: 44,
//     width: 279,
//     height: 37,
//     left: 0,
//     position: "absolute",
//   },
//   groupIcon: {
//     height: "2.04%",
//     top: "7.65%",
//     right: "5.07%",
//     bottom: "90.31%",
//     left: "90.67%",
//   },
//   time: {
//     marginTop: -9,
//     fontSize: FontSize.size_mini,
//     fontFamily: FontFamily.sFProText,
//     width: 54,
//     textAlign: "center",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//     top: "50%",
//     left: 0,
//   },
//   action: {
//     height: "40.91%",
//     width: "14.32%",
//     top: "31.82%",
//     right: "80.37%",
//     bottom: "27.27%",
//     left: "5.31%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   batteryIcon: {
//     marginTop: -5.8,
//     right: 1,
//     width: 25,
//     height: 12,
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
//     overflow: "hidden",
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
//     width: 375,
//   },
//   groupIcon1: {
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
//   bnChaQuanTmBnhVinN: {
//     color: Color.colorBlack,
//   },
//   thmBnhVin: {
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
//     left: 26,
//     width: 324,
//     height: 155,
//     position: "absolute",
//   },
//   danhSchQuan1: {
//     top: "31.25%",
//     left: "30.93%",
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "600",
//     color: Color.colorWhitesmoke_100,
//     letterSpacing: 0,
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   vectorIcon1: {
//     height: "33.33%",
//     top: "33.33%",
//     right: "4.53%",
//     bottom: "33.33%",
//     left: "91.2%",
//   },
//   vectorIcon2: {
//     height: "29.17%",
//     width: "2.13%",
//     top: "35.42%",
//     right: "93.6%",
//     bottom: "35.42%",
//     left: "4.27%",
//     maxHeight: "100%",
//     maxWidth: "100%",
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
//   bcS1: {
//     color: Color.colorBlack,
//   },
//   bcS: {
//     left: "33.33%",
//     top: "0%",
//     position: "absolute",
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
//     color: Color.foundationBrownBrown500,
//     left: "0%",
//     top: "0%",
//     position: "absolute",
//   },
//   instanceInner: {
//     height: "4%",
//     width: "33.87%",
//     top: "98%",
//     right: "66.4%",
//     bottom: "-2%",
//     left: "-0.27%",
//     borderColor: Color.foundationBrownBrown500,
//     borderTopWidth: 2,
//   },
//   rectangleGroup: {
//     height: 50,
//     top: 0,
//     width: 375,
//   },
//   favouritehospitalscreenInner: {
//     top: 91,
//     height: 51,
//   },
//   favouritehospitalscreen: {
//     backgroundColor: Color.colorWhitesmoke_100,
//     flex: 1,
//     height: 812,
//     width: "100%",
//   },
// });

// export default FavouriteHospitalScreen;
