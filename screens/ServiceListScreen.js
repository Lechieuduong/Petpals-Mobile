// import * as React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { Image } from "expo-image";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const ServiceListScreen = () => {
//   return (
//     <View style={styles.servicelistscreen}>
//       <View style={[styles.headerFixed, styles.searchBarLayout]}>
//         <View style={[styles.searchBar, styles.searchBarLayout]}>
//           <View style={[styles.searchBar1, styles.searchPosition]}>
//             <View style={[styles.searchBarChild, styles.groupInnerBg]} />
//             <Image
//               style={[styles.vectorIcon, styles.itemIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector18.png")}
//             />
//             <View style={styles.searchBarItem} />
//             <Text style={[styles.tnBcS, styles.bLcTypo]}>
//               Tên dịch vụ, mô tả,...
//             </Text>
//           </View>
//           <Image
//             style={[styles.vectorIcon1, styles.itemIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector19.png")}
//           />
//         </View>
//       </View>
//       <View style={[styles.dchVContent, styles.barPosition]}>
//         <View style={[styles.serviceItem, styles.serviceItemShadowBox]}>
//           <View
//             style={[styles.rectangleParent, styles.rectangleParentPosition]}
//           >
//             <View style={[styles.groupChild, styles.groupChildPosition]} />
//             <Image
//               style={[styles.groupItem, styles.groupItemPosition]}
//               contentFit="cover"
//               source={require("../assets/rectangle-79.png")}
//             />
//           </View>
//           <Text style={[styles.dchVHot, styles.dchVHotTypo]}>
//             Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng
//             tôi hỗ trợ bạn kịp thời.
//           </Text>
//           <View style={[styles.rectangleGroup, styles.searchPosition]}>
//             <View style={[styles.groupInner, styles.groupItemPosition]} />
//             <Text style={[styles.cpCu2424, styles.timeTypo]}>
//               Cấp cứu 24/24
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.serviceItem1, styles.serviceItemShadowBox]}>
//           <View
//             style={[styles.rectangleParent, styles.rectangleParentPosition]}
//           >
//             <View style={[styles.groupChild, styles.groupChildPosition]} />
//             <Image
//               style={[styles.groupItem, styles.groupItemPosition]}
//               contentFit="cover"
//               source={require("../assets/rectangle-791.png")}
//             />
//           </View>
//           <Text style={[styles.dchVHot, styles.dchVHotTypo]}>
//             Chúng tôi sử dụng vaccine hàng đầu từ Mỹ và Châu Âu. Bạn sẽ luôn an
//             tâm với lựa chọn tiêm chủng tại Petpals
//           </Text>
//           <View style={[styles.rectangleGroup, styles.searchPosition]}>
//             <View style={[styles.groupInner, styles.groupItemPosition]} />
//             <Text style={[styles.timPhngVaccine, styles.khmVIuTypo]}>
//               Tiêm phòng vaccine
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.serviceItem2, styles.serviceItemShadowBox]}>
//           <View
//             style={[styles.serviceItemInner, styles.rectangleParentPosition]}
//           >
//             <View style={[styles.groupChild2, styles.groupChildPosition]} />
//           </View>
//           <Image
//             style={[styles.serviceItemChild, styles.groupItemPosition]}
//             contentFit="cover"
//             source={require("../assets/rectangle-82.png")}
//           />
//           <Text style={styles.dchVHotTypo}>
//             Thực hiện tiếp nhận, sàng lọc, khám chuyên khoa, xét nghiệm, chuẩn
//             đoán và điều trị bệnh cho thú cưng.
//           </Text>
//           <View style={[styles.rectangleGroup, styles.searchPosition]}>
//             <View style={[styles.groupInner, styles.groupItemPosition]} />
//             <Text style={[styles.khmVIu, styles.khmVIuTypo]}>
//               Khám và điều trị
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.topBarStatus, styles.barPosition]}>
//         <View style={[styles.searchBar1, styles.searchPosition]}>
//           <View style={[styles.searchBarChild, styles.groupInnerBg]}>
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
//                 source={require("../assets/wifi1.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.filterBar, styles.barPosition]}>
//         <View style={[styles.filterBarChild, styles.groupChildPosition]} />
//         <View style={[styles.filter1, styles.filterPosition]}>
//           <View style={[styles.filter1Child, styles.childBorder]} />
//           <Text style={[styles.ttC, styles.ttCTypo]}>Tất cả</Text>
//           <Image
//             style={[styles.vectorIcon2, styles.itemIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector15.png")}
//           />
//         </View>
//         <View style={[styles.filter2, styles.filterPosition]}>
//           <View style={[styles.filter2Child, styles.childBorder]} />
//           <Text style={[styles.dchV, styles.ttCTypo]}>Dịch vụ</Text>
//           <Image
//             style={[styles.vectorIcon3, styles.itemIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector16.png")}
//           />
//         </View>
//         <View style={styles.filter3}>
//           <Image
//             style={[styles.vectorIcon4, styles.itemIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector17.png")}
//           />
//           <Text style={[styles.bLc, styles.bLcTypo]}>Bộ lọc</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   searchBarLayout: {
//     height: 57,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   searchPosition: {
//     left: "0%",
//     position: "absolute",
//   },
//   groupInnerBg: {
//     backgroundColor: Color.foundationBrownBrown500,
//     bottom: "0%",
//     height: "100%",
//   },
//   itemIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   bLcTypo: {
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_mini,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   barPosition: {
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   serviceItemShadowBox: {
//     height: 348,
//     width: 343,
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     left: 16,
//     position: "absolute",
//   },
//   rectangleParentPosition: {
//     bottom: "5.55%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   groupChildPosition: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   groupItemPosition: {
//     borderRadius: Border.br_3xs,
//     left: "0%",
//     right: "0%",
//     top: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   dchVHotTypo: {
//     textAlign: "justify",
//     color: Color.colorBlack,
//     lineHeight: 19,
//     fontSize: FontSize.size_base,
//     left: "5.54%",
//     top: "63.51%",
//     width: "88.92%",
//     fontFamily: FontFamily.robotoRegular,
//     position: "absolute",
//   },
//   timeTypo: {
//     textAlign: "center",
//     fontSize: FontSize.size_mini,
//   },
//   khmVIuTypo: {
//     top: "20%",
//     textAlign: "center",
//     color: Color.greyscaleBlackWhite,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "600",
//     lineHeight: 18,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   timePosition: {
//     top: "50%",
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
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
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
//   searchBarChild: {
//     left: "0%",
//     position: "absolute",
//     right: "0%",
//     width: "100%",
//     top: "0%",
//   },
//   vectorIcon: {
//     height: "30.18%",
//     width: "2.67%",
//     top: "35.79%",
//     right: "92%",
//     bottom: "34.04%",
//     left: "5.33%",
//     display: "none",
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
//   },
//   searchBar1: {
//     bottom: "0%",
//     left: "0%",
//     top: "0%",
//     height: "100%",
//     right: "0%",
//     width: "100%",
//   },
//   vectorIcon1: {
//     height: "24.56%",
//     width: "2.13%",
//     top: "36.84%",
//     right: "93.6%",
//     bottom: "38.6%",
//     left: "4.27%",
//     position: "absolute",
//   },
//   searchBar: {
//     top: 0,
//   },
//   headerFixed: {
//     top: 43,
//   },
//   groupChild: {
//     height: "44.6%",
//     top: "55.4%",
//     borderBottomLeftRadius: Border.br_3xs,
//     borderBottomRightRadius: Border.br_3xs,
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
//   groupItem: {
//     height: "57.04%",
//     bottom: "42.96%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   rectangleParent: {
//     height: "94.45%",
//     top: "0%",
//   },
//   dchVHot: {
//     height: "16.38%",
//   },
//   groupInner: {
//     backgroundColor: Color.foundationBrownBrown500,
//     bottom: "0%",
//     height: "100%",
//   },
//   cpCu2424: {
//     height: "43.33%",
//     width: "53.19%",
//     top: "30%",
//     left: "23.4%",
//     justifyContent: "center",
//     color: Color.greyscaleBlackWhite,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "600",
//     lineHeight: 18,
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     position: "absolute",
//   },
//   rectangleGroup: {
//     height: "8.62%",
//     width: "54.81%",
//     top: "49.71%",
//     right: "45.19%",
//     bottom: "41.67%",
//   },
//   serviceItem: {
//     top: 0,
//   },
//   timPhngVaccine: {
//     left: "13.83%",
//   },
//   serviceItem1: {
//     top: 348,
//   },
//   groupChild2: {
//     borderBottomLeftRadius: Border.br_3xs,
//     borderBottomRightRadius: Border.br_3xs,
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: "0%",
//     height: "100%",
//   },
//   serviceItemInner: {
//     height: "42.13%",
//     top: "52.33%",
//   },
//   serviceItemChild: {
//     height: "53.88%",
//     bottom: "46.12%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   khmVIu: {
//     left: "20.74%",
//   },
//   serviceItem2: {
//     top: 696,
//   },
//   dchVContent: {
//     top: 161,
//     height: 651,
//   },
//   time: {
//     marginTop: -9,
//     fontFamily: FontFamily.sFProText,
//     color: Color.colorWhitesmoke_100,
//     width: 54,
//     textAlign: "center",
//     fontSize: FontSize.size_mini,
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
//   topBarStatus: {
//     height: 44,
//     top: 0,
//   },
//   filterBarChild: {
//     top: "0%",
//     height: "100%",
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
//   vectorIcon2: {
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
//     width: "75.42%",
//     right: "24.58%",
//   },
//   dchV: {
//     height: "38.24%",
//     width: "71.19%",
//     top: "29.41%",
//     left: "28.81%",
//   },
//   vectorIcon3: {
//     height: "40%",
//     width: "12.29%",
//     top: "26.76%",
//     right: "78.47%",
//     bottom: "33.24%",
//     left: "9.24%",
//     position: "absolute",
//   },
//   filter2: {
//     height: "72.34%",
//     width: "31.47%",
//     right: "42.93%",
//     bottom: "14.89%",
//     left: "25.6%",
//   },
//   vectorIcon4: {
//     width: "26.47%",
//     right: "73.53%",
//     left: "0%",
//     position: "absolute",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//   },
//   bLc: {
//     width: "63.24%",
//     left: "36.76%",
//     color: Color.colorDimgray,
//     top: "0%",
//     height: "100%",
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
//     top: 100,
//     height: 47,
//   },
//   servicelistscreen: {
//     backgroundColor: Color.colorWhitesmoke_100,
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default ServiceListScreen;
