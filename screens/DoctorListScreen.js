// import * as React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { Image } from "expo-image";
// import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

// const DoctorListScreen1 = () => {
//   return (
//     <View style={styles.doctorlistscreen}>
//       <View style={[styles.headerFixed, styles.barContentPosition]}>
//         <View style={[styles.filterBar, styles.barContentPosition]}>
//           <View style={[styles.filterBarChild, styles.searchChildPosition]} />
//           <View style={[styles.filter1, styles.filterPosition]}>
//             <View style={[styles.filter1Child, styles.childBorder]} />
//             <Text style={[styles.ttC, styles.ttCFlexBox]}>Tất cả</Text>
//             <Image
//               style={[styles.vectorIcon, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector.png")}
//             />
//           </View>
//           <View style={[styles.filter2, styles.filterPosition]}>
//             <View style={[styles.filter2Child, styles.childBorder]} />
//             <Text style={[styles.bcS, styles.ttCFlexBox]}>Bác sĩ</Text>
//             <Image
//               style={[styles.vectorIcon1, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector1.png")}
//             />
//           </View>
//           <View style={styles.filter3}>
//             <Image
//               style={[styles.vectorIcon2, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector2.png")}
//             />
//             <Text style={[styles.bLc, styles.ttCFlexBox]}>Bộ lọc</Text>
//           </View>
//         </View>
//         <View style={[styles.searchBar, styles.barContentPosition]}>
//           <View style={[styles.searchBar1, styles.searchChildPosition]}>
//             <View style={[styles.searchBarChild, styles.searchChildPosition]} />
//             <Image
//               style={[styles.vectorIcon3, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector3.png")}
//             />
//             <View style={styles.searchBarItem} />
//             <Text style={[styles.tnBcS, styles.ttCFlexBox]}>
//               Tên bác sĩ, chuyên khoa,...
//             </Text>
//           </View>
//           <Image
//             style={[styles.vectorIcon4, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector4.png")}
//           />
//         </View>
//       </View>
//       <View style={[styles.topBarStatus, styles.barContentPosition]}>
//         <View style={[styles.searchBar1, styles.searchChildPosition]}>
//           <View style={[styles.searchBarChild, styles.searchChildPosition]}>
//             <View style={styles.action}>
//               <Text style={styles.time}>9:41</Text>
//             </View>
//             <View style={[styles.container, styles.containerPosition]}>
//               <Image
//                 style={[styles.batteryIcon, styles.containerPosition]}
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
//                 source={require("../assets/wifi2.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.bcSContentWrapper, styles.barContentPosition]}>
//         <View style={[styles.bcSContent, styles.barContentPosition]}>
//           <View style={[styles.bcS1NoFill, styles.fillLayout]}>
//             <View style={[styles.bcS1NoFillChild, styles.fillLayout]} />
//             <Text style={[styles.tsBs, styles.tsBsLayout]}>TS. BS</Text>
//             <Text style={[styles.nmKinhNghim, styles.pNhCngFlexBox]}>
//               21 năm kinh nghiệm
//             </Text>
//             <Text style={[styles.oBiQu, styles.tsBsLayout]}>
//               Đào Bùi Quý Quyền
//             </Text>
//             <View style={[styles.bcS1NoFillItem, styles.snKhoaLayout]} />
//             <Text style={[styles.pNhCng, styles.pNhCngFlexBox]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <Image
//               style={[styles.vectorIcon5, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector5.png")}
//             />
//             <Image
//               style={[styles.bcS1NoFillInner, styles.xemThngTinLayout]}
//               contentFit="cover"
//               source={require("../assets/rectangle-199.png")}
//             />
//             <Text style={[styles.xemThngTin, styles.snKhoaFlexBox]}>
//               Xem thông tin
//             </Text>
//             <View style={[styles.daLiu, styles.liuLayout]}>
//               <View style={[styles.daLiuChild, styles.liuLayout]} />
//               <Text style={[styles.daLiu1, styles.daLiu1FlexBox]}>Da liễu</Text>
//             </View>
//             <Text style={[styles.snKhoa, styles.snKhoaFlexBox]}>Sản khoa</Text>
//             <Image
//               style={[styles.bcSQuyn, styles.bcSQuynPosition]}
//               contentFit="cover"
//               source={require("../assets/bc-s-quyn.png")}
//             />
//           </View>
//           <View style={[styles.bcS2NoFill, styles.fillLayout]}>
//             <View style={[styles.bcS1NoFillChild, styles.fillLayout]} />
//             <Text style={[styles.pgsTsBs, styles.tsBsLayout]}>PGS. TS. BS</Text>
//             <Text style={[styles.nmKinhNghim, styles.pNhCngFlexBox]}>
//               34 năm kinh nghiệm
//             </Text>
//             <Text style={[styles.oBiQu, styles.tsBsLayout]}>
//               Nguyễn Thị Bích Đào
//             </Text>
//             <View style={[styles.bcS2NoFillItem, styles.liuLayout]} />
//             <Text style={[styles.pNhCng, styles.pNhCngFlexBox]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <Image
//               style={[styles.vectorIcon5, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector5.png")}
//             />
//             <Image
//               style={[styles.bcS1NoFillInner, styles.xemThngTinLayout]}
//               contentFit="cover"
//               source={require("../assets/rectangle-199.png")}
//             />
//             <Text style={[styles.xemThngTin, styles.snKhoaFlexBox]}>
//               Xem thông tin
//             </Text>
//             <Text style={[styles.niKhoa, styles.daLiu1FlexBox]}>Nội khoa</Text>
//             <Image
//               style={[styles.bcSQuyn, styles.bcSQuynPosition]}
//               contentFit="cover"
//               source={require("../assets/image-28.png")}
//             />
//           </View>
//           <View style={[styles.bcS3NoFill, styles.fillLayout]}>
//             <View style={[styles.bcS1NoFillChild, styles.fillLayout]} />
//             <Text style={[styles.tsBs, styles.tsBsLayout]}>ThS. BS</Text>
//             <Text style={[styles.nmKinhNghim, styles.pNhCngFlexBox]}>
//               29 năm kinh nghiệm
//             </Text>
//             <Text style={[styles.oBiQu, styles.tsBsLayout]}>Lê Anh Tuấn</Text>
//             <View style={[styles.bcS2NoFillItem, styles.liuLayout]} />
//             <View style={[styles.bcS1NoFillItem, styles.snKhoaLayout]} />
//             <Text style={[styles.pNhCng, styles.pNhCngFlexBox]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <Image
//               style={[styles.vectorIcon5, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector5.png")}
//             />
//             <Image
//               style={[styles.bcS1NoFillInner, styles.xemThngTinLayout]}
//               contentFit="cover"
//               source={require("../assets/rectangle-199.png")}
//             />
//             <Text style={[styles.xemThngTin, styles.snKhoaFlexBox]}>
//               Đặt lịch ngay
//             </Text>
//             <Text style={[styles.niKhoa, styles.daLiu1FlexBox]}>
//               Xét nghiệm
//             </Text>
//             <Text style={[styles.snKhoa, styles.snKhoaFlexBox]}>
//               Khoa cấp cứu
//             </Text>
//             <Image
//               style={[styles.image29Icon, styles.bcSQuynPosition]}
//               contentFit="cover"
//               source={require("../assets/image-29.png")}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barContentPosition: {
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   searchChildPosition: {
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
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
//   ttCFlexBox: {
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   containerPosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   fillLayout: {
//     height: 258,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   tsBsLayout: {
//     height: 19,
//     left: 127,
//   },
//   pNhCngFlexBox: {
//     color: Color.colorGray_200,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   snKhoaLayout: {
//     height: 28,
//     width: 114,
//     left: 214,
//     top: 91,
//   },
//   xemThngTinLayout: {
//     height: 48,
//     width: 179,
//     left: 182,
//     top: 192,
//   },
//   snKhoaFlexBox: {
//     justifyContent: "center",
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   liuLayout: {
//     width: 76,
//     height: 28,
//     position: "absolute",
//   },
//   daLiu1FlexBox: {
//     width: 75,
//     justifyContent: "center",
//     height: 28,
//     color: Color.colorBlack,
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     fontSize: FontSize.size_smi,
//     position: "absolute",
//   },
//   bcSQuynPosition: {
//     height: 92,
//     width: 92,
//     left: 21,
//     top: 13,
//     position: "absolute",
//   },
//   filterBarChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     right: "0%",
//     width: "100%",
//     position: "absolute",
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
//     color: Color.colorDarkslategray,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     fontSize: FontSize.size_smi,
//   },
//   vectorIcon: {
//     height: "49.28%",
//     width: "22.18%",
//     top: "19.42%",
//     right: "61.54%",
//     bottom: "31.3%",
//     left: "16.28%",
//   },
//   filter1: {
//     height: "73.4%",
//     width: "20.8%",
//     right: "76.53%",
//     bottom: "13.83%",
//     left: "2.67%",
//   },
//   filter2Child: {
//     width: "61.48%",
//     right: "38.52%",
//   },
//   bcS: {
//     height: "38.24%",
//     width: "74.81%",
//     top: "29.41%",
//     left: "25.19%",
//     color: Color.colorDarkslategray,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     fontSize: FontSize.size_smi,
//   },
//   vectorIcon1: {
//     height: "40%",
//     width: "10.74%",
//     top: "26.76%",
//     right: "81.19%",
//     bottom: "33.24%",
//     left: "8.07%",
//   },
//   filter2: {
//     height: "72.34%",
//     width: "36%",
//     right: "38.4%",
//     bottom: "14.89%",
//     left: "25.6%",
//   },
//   vectorIcon2: {
//     width: "26.47%",
//     right: "73.53%",
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//   },
//   bLc: {
//     width: "63.24%",
//     left: "36.76%",
//     color: Color.colorDimgray,
//     fontSize: FontSize.size_mini,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
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
//     top: 57,
//     height: 47,
//   },
//   searchBarChild: {
//     backgroundColor: Color.colorBrown,
//     right: "0%",
//     width: "100%",
//     position: "absolute",
//   },
//   vectorIcon3: {
//     height: "30.18%",
//     width: "2.67%",
//     top: "35.79%",
//     right: "92%",
//     bottom: "34.04%",
//     left: "5.33%",
//     display: "none",
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
//     fontSize: FontSize.size_mini,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//   },
//   searchBar1: {
//     right: "0%",
//     width: "100%",
//     position: "absolute",
//   },
//   vectorIcon4: {
//     height: "24.56%",
//     width: "2.13%",
//     top: "36.84%",
//     right: "93.6%",
//     bottom: "38.6%",
//     left: "4.27%",
//   },
//   searchBar: {
//     height: 57,
//     top: 0,
//   },
//   headerFixed: {
//     top: 43,
//     height: 104,
//   },
//   time: {
//     marginTop: -9,
//     fontFamily: FontFamily.sFProText,
//     color: Color.colorWhitesmoke_100,
//     width: 54,
//     textAlign: "center",
//     top: "50%",
//     fontSize: FontSize.size_mini,
//     letterSpacing: 0,
//     left: 0,
//     position: "absolute",
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
//   bcS1NoFillChild: {
//     top: 0,
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
//   tsBs: {
//     width: 56,
//     color: Color.colorBlack,
//     top: 13,
//     left: 127,
//     fontSize: FontSize.size_mini,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   nmKinhNghim: {
//     top: 59,
//     width: 134,
//     height: 19,
//     left: 127,
//     fontSize: FontSize.size_mini,
//   },
//   oBiQu: {
//     top: 37,
//     fontSize: FontSize.size_xl,
//     width: 190,
//     color: Color.colorBlack,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   bcS1NoFillItem: {
//     borderRadius: Border.br_3xl,
//     backgroundColor: Color.colorWhitesmoke_100,
//     position: "absolute",
//   },
//   pNhCng: {
//     top: 145,
//     left: 34,
//     fontSize: FontSize.size_sm,
//     width: 341,
//     height: 36,
//   },
//   vectorIcon5: {
//     height: "5.81%",
//     width: "3.47%",
//     top: "60.08%",
//     right: "93.07%",
//     bottom: "34.11%",
//     left: "3.47%",
//   },
//   bcS1NoFillInner: {
//     borderRadius: Border.br_5xs,
//     position: "absolute",
//   },
//   xemThngTin: {
//     fontSize: FontSize.size_base,
//     color: Color.greyscaleBlackWhite,
//     height: 48,
//     width: 179,
//     left: 182,
//     top: 192,
//   },
//   daLiuChild: {
//     borderRadius: Border.br_3xl,
//     backgroundColor: Color.colorWhitesmoke_100,
//     top: 0,
//     width: 76,
//     left: 0,
//   },
//   daLiu1: {
//     left: 1,
//     top: 0,
//   },
//   daLiu: {
//     left: 128,
//     width: 76,
//     top: 91,
//   },
//   snKhoa: {
//     height: 28,
//     width: 114,
//     left: 214,
//     top: 91,
//     color: Color.colorBlack,
//     fontSize: FontSize.size_smi,
//     justifyContent: "center",
//   },
//   bcSQuyn: {
//     borderRadius: Border.br_40xl,
//   },
//   bcS1NoFill: {
//     top: 0,
//   },
//   pgsTsBs: {
//     width: 87,
//     color: Color.colorBlack,
//     top: 13,
//     left: 127,
//     fontSize: FontSize.size_mini,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   bcS2NoFillItem: {
//     left: 128,
//     width: 76,
//     top: 91,
//     borderRadius: Border.br_3xl,
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
//   niKhoa: {
//     left: 129,
//     top: 91,
//     width: 75,
//   },
//   bcS2NoFill: {
//     top: 267,
//   },
//   image29Icon: {
//     borderRadius: Border.br_41xl,
//   },
//   bcS3NoFill: {
//     top: 535,
//   },
//   bcSContent: {
//     height: 651,
//     top: 0,
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
//   bcSContentWrapper: {
//     top: 147,
//     height: 665,
//     overflow: "hidden",
//   },
//   doctorlistscreen: {
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
// });

// export default DoctorListScreen1;
