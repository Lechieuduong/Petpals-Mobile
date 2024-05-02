// import * as React from "react";
// import { StyleSheet, View, Pressable, Text } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

// const HospitalListScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.hospitallistscreen}>
//       <View style={styles.phngKhm1Wrapper}>
//         <View style={[styles.phngKhm1, styles.phngPosition]}>
//           <Pressable
//             style={[styles.phngKhm1Child, styles.phngPosition]}
//             onPress={() => navigation.navigate("HospitalDetailScreen")}
//           />
//           <Text style={[styles.bnhVinTh, styles.tnBcSFlexBox]}>
//             Bệnh viện thú y Petpals
//           </Text>
//           <View style={[styles.pNhCngPhngLitThaParent, styles.cngLayout]}>
//             <Text style={[styles.pNhCng, styles.cngLayout]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <Image
//               style={[styles.vectorIcon, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector31.png")}
//             />
//           </View>
//           <Image
//             style={styles.artboard14RemovebgPreview2Icon}
//             contentFit="cover"
//             source={require("../assets/artboard-14removebgpreview-2.png")}
//           />
//           <View style={styles.bookButton}>
//             <Image
//               style={[styles.bookButtonChild, styles.barChildPosition]}
//               contentFit="cover"
//               source={require("../assets/rectangle-1991.png")}
//             />
//             <Text style={[styles.tLchNgay, styles.bLcPosition]}>
//               Đặt lịch ngay
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.header}>
//         <View style={styles.filterBar}>
//           <View style={[styles.filterBarChild, styles.barChildPosition]} />
//           <View style={[styles.filter1, styles.filterPosition]}>
//             <View style={[styles.filter1Child, styles.childBorder]} />
//             <Text style={[styles.ttC, styles.ttCTypo]}>Tất cả</Text>
//             <Image
//               style={[styles.vectorIcon1, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector15.png")}
//             />
//           </View>
//           <View style={[styles.filter2, styles.filterPosition]}>
//             <View style={[styles.filter2Child, styles.childBorder]} />
//             <Text style={[styles.bnhVin, styles.ttCTypo]}>Bệnh viện</Text>
//             <Image
//               style={[styles.vectorIcon2, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector32.png")}
//             />
//           </View>
//           <View style={styles.filter3}>
//             <Image
//               style={[styles.vectorIcon3, styles.barChildPosition]}
//               contentFit="cover"
//               source={require("../assets/vector17.png")}
//             />
//             <Text style={[styles.bLc, styles.bLcTypo]}>Bộ lọc</Text>
//           </View>
//         </View>
//         <View style={[styles.searchBar, styles.searchChildPosition]}>
//           <View style={[styles.searchBarChild, styles.barChildPosition]} />
//           <Image
//             style={[styles.vectorIcon4, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector18.png")}
//           />
//           <View style={styles.searchBarItem} />
//           <Text style={[styles.tnBcS, styles.bLcTypo]}>Tên Bệnh viện...</Text>
//         </View>
//       </View>
//       <View style={styles.topBarStatus}>
//         <View style={[styles.topBarStatus1, styles.barChildPosition]}>
//           <View style={[styles.searchBarChild, styles.barChildPosition]}>
//             <View style={styles.action}>
//               <Text style={[styles.time, styles.timePosition]}>9:41</Text>
//             </View>
//             <View style={[styles.container, styles.timePosition]}>
//               <Image
//                 style={[styles.batteryIcon, styles.timePosition]}
//                 contentFit="cover"
//                 source={require("../assets/battery1.png")}
//               />
//               <Image
//                 style={styles.combinedShapeIcon}
//                 contentFit="cover"
//                 source={require("../assets/combined-shape1.png")}
//               />
//               <Image
//                 style={styles.wiFiIcon}
//                 contentFit="cover"
//                 source={require("../assets/wifi2.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   phngPosition: {
//     height: 195,
//     top: 0,
//     left: 0,
//     position: "absolute",
//   },
//   tnBcSFlexBox: {
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//   },
//   cngLayout: {
//     height: 36,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   barChildPosition: {
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "0%",
//     position: "absolute",
//   },
//   bLcPosition: {
//     top: "0%",
//     position: "absolute",
//   },
//   filterPosition: {
//     top: "12.77%",
//     position: "absolute",
//   },
//   childBorder: {
//     borderWidth: 1,
//     borderColor: Color.colorGray_200,
//     borderStyle: "solid",
//     borderRadius: Border.br_14xl,
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "0%",
//     position: "absolute",
//   },
//   ttCTypo: {
//     color: Color.colorDarkslategray,
//     fontSize: FontSize.size_smi,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   bLcTypo: {
//     fontSize: FontSize.size_mini,
//     letterSpacing: 0,
//   },
//   searchChildPosition: {
//     right: "0%",
//     width: "100%",
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   phngKhm1Child: {
//     width: 373,
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
//   bnhVinTh: {
//     top: 37,
//     left: 131,
//     fontSize: FontSize.size_xl,
//     color: Color.colorBlack,
//     width: 213,
//     height: 19,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   pNhCng: {
//     left: 21,
//     fontSize: FontSize.size_sm,
//     color: Color.colorGray_200,
//     width: 335,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     letterSpacing: 0,
//     top: 0,
//   },
//   vectorIcon: {
//     height: "41.67%",
//     width: "3.59%",
//     top: "27.78%",
//     right: "96.41%",
//     bottom: "30.56%",
//     left: "0%",
//     position: "absolute",
//   },
//   pNhCngPhngLitThaParent: {
//     top: 85,
//     width: 356,
//     left: 19,
//   },
//   artboard14RemovebgPreview2Icon: {
//     top: 18,
//     width: 88,
//     height: 57,
//     left: 19,
//     position: "absolute",
//   },
//   bookButtonChild: {
//     borderRadius: Border.br_5xs,
//     right: "0%",
//     width: "100%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   tLchNgay: {
//     fontSize: FontSize.size_base,
//     color: Color.greyscaleBlackWhite,
//     justifyContent: "center",
//     textAlign: "center",
//     height: "100%",
//     top: "0%",
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     left: "0%",
//     letterSpacing: 0,
//     width: "100%",
//   },
//   bookButton: {
//     top: 129,
//     left: 179,
//     width: 178,
//     height: 48,
//     position: "absolute",
//   },
//   phngKhm1: {
//     width: 375,
//   },
//   phngKhm1Wrapper: {
//     top: 161,
//     height: 651,
//     width: 375,
//     left: 0,
//     position: "absolute",
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
//   filterBarChild: {
//     right: "0%",
//     width: "100%",
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
//   filter1Child: {
//     right: "0%",
//     width: "100%",
//   },
//   ttC: {
//     height: "44.64%",
//     width: "56.92%",
//     top: "26.38%",
//     left: "39.49%",
//   },
//   vectorIcon1: {
//     height: "49.28%",
//     width: "22.18%",
//     top: "19.42%",
//     right: "61.54%",
//     bottom: "31.3%",
//     left: "16.28%",
//     position: "absolute",
//   },
//   filter1: {
//     height: "73.4%",
//     width: "20.8%",
//     right: "76.53%",
//     bottom: "13.83%",
//     left: "2.67%",
//   },
//   filter2Child: {
//     width: "58.72%",
//     right: "41.28%",
//   },
//   bnhVin: {
//     height: "38.24%",
//     width: "79.51%",
//     top: "29.41%",
//     left: "20.49%",
//   },
//   vectorIcon2: {
//     height: "40%",
//     width: "8.75%",
//     top: "26.76%",
//     right: "84.72%",
//     bottom: "33.24%",
//     left: "6.53%",
//     position: "absolute",
//   },
//   filter2: {
//     height: "72.34%",
//     width: "44.51%",
//     right: "29.89%",
//     bottom: "14.89%",
//     left: "25.6%",
//   },
//   vectorIcon3: {
//     width: "26.47%",
//     right: "73.53%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   bLc: {
//     width: "63.24%",
//     left: "36.76%",
//     color: Color.colorDimgray,
//     top: "0%",
//     position: "absolute",
//     height: "100%",
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   filter3: {
//     height: "36.17%",
//     width: "18.13%",
//     top: "31.91%",
//     right: "2.4%",
//     bottom: "31.91%",
//     left: "79.47%",
//     position: "absolute",
//   },
//   filterBar: {
//     top: 57,
//     height: 47,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   searchBarChild: {
//     backgroundColor: Color.colorBrown,
//     right: "0%",
//     width: "100%",
//   },
//   vectorIcon4: {
//     height: "30.18%",
//     width: "2.67%",
//     top: "35.79%",
//     right: "92%",
//     bottom: "34.04%",
//     left: "5.33%",
//     position: "absolute",
//   },
//   searchBarItem: {
//     height: "65.96%",
//     width: "83.2%",
//     top: "17.02%",
//     right: "3.73%",
//     bottom: "17.02%",
//     left: "13.07%",
//     borderRadius: Border.br_24xl,
//     backgroundColor: Color.colorMaroon_200,
//     position: "absolute",
//   },
//   tnBcS: {
//     height: "64.91%",
//     width: "79.73%",
//     top: "17.54%",
//     left: "16.53%",
//     color: Color.colorGainsboro_100,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     position: "absolute",
//   },
//   searchBar: {
//     height: "54.81%",
//     bottom: "45.19%",
//     top: "0%",
//     position: "absolute",
//     left: "0%",
//   },
//   header: {
//     top: 43,
//     height: 104,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   time: {
//     marginTop: -9,
//     fontFamily: FontFamily.sFProText,
//     color: Color.colorWhitesmoke_100,
//     width: 54,
//     fontSize: FontSize.size_mini,
//     letterSpacing: 0,
//     textAlign: "center",
//     left: 0,
//   },
//   action: {
//     height: "40.91%",
//     width: "14.32%",
//     top: "31.82%",
//     right: "80.37%",
//     bottom: "27.27%",
//     left: "5.31%",
//     position: "absolute",
//     overflow: "hidden",
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
//     right: "0%",
//     width: "100%",
//   },
//   topBarStatus: {
//     height: 44,
//     top: 0,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   hospitallistscreen: {
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
// });

// export default HospitalListScreen;
