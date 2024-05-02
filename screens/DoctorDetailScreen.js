// import * as React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { Image } from "expo-image";
// import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

// const DoctorDetailScreen = () => {
//   return (
//     <View style={styles.doctordetailscreen}>
//       <View style={[styles.thanhIuHngThngTinPh, styles.thngPosition]}>
//         <View style={styles.searchChildPosition}>
//           <View style={[styles.searchBarChild, styles.searchChildPosition]} />
//           <Image
//             style={[styles.vectorIcon, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector3.png")}
//           />
//           <Text style={styles.thngTinBnh}>Thông tin bác sĩ</Text>
//           <Text style={[styles.luLi, styles.hTrFlexBox]}>Lưu lại</Text>
//           <Text style={[styles.hTr, styles.hTrFlexBox]}>Hỗ trợ</Text>
//         </View>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconPosition2]}
//           contentFit="cover"
//           source={require("../assets/vector21.png")}
//         />
//         <Image
//           style={[styles.vectorIcon2, styles.vectorIconPosition2]}
//           contentFit="cover"
//           source={require("../assets/vector22.png")}
//         />
//         <View style={styles.thanhIuHngThngTinPhChild} />
//       </View>
//       <View style={[styles.footer, styles.thngPosition]}>
//         <View style={[styles.footerChild, styles.searchChildPosition]} />
//         <View style={[styles.chatBtn, styles.btnPosition]}>
//           <View style={[styles.chatBtnChild, styles.btnChildPosition]} />
//           <Image
//             style={[styles.vectorIcon3, styles.vectorIconPosition1]}
//             contentFit="cover"
//             source={require("../assets/vector23.png")}
//           />
//           <Text style={[styles.chatViBc, styles.bcSClr]}>Chat với CSKH</Text>
//         </View>
//         <View style={[styles.callBtn, styles.btnPosition]}>
//           <View style={[styles.callBtnChild, styles.btnChildPosition]} />
//           <Text style={[styles.linHVi, styles.linHViTypo]}>
//             Liên hệ với bác sĩ
//           </Text>
//           <Image
//             style={[styles.vectorIcon4, styles.vectorIconPosition1]}
//             contentFit="cover"
//             source={require("../assets/vector24.png")}
//           />
//         </View>
//       </View>
//       <View style={[styles.doctordetailscreenInner, styles.thngPosition]}>
//         <View style={[styles.thngTinSBParent, styles.thngPosition]}>
//           <View style={[styles.thngTinSB, styles.thngLayout1]}>
//             <View style={[styles.thngTinSBChild, styles.childBg]} />
//             <Image
//               style={styles.bcSQuyn}
//               contentFit="cover"
//               source={require("../assets/bc-s-quyn3.png")}
//             />
//             <Text style={[styles.tsBs, styles.tsBsPosition]}>TS. BS</Text>
//             <Text style={[styles.trnAnhTun, styles.trnAnhTunTypo]}>
//               Trần Anh Tuấn
//             </Text>
//             <Text style={[styles.nmKinhNghim, styles.chuynKhoaClr]}>
//               30 năm kinh nghiệm
//             </Text>
//             <Text style={[styles.chuynKhoa, styles.pNhCngPosition]}>
//               Chuyên khoa:
//             </Text>
//             <Text style={[styles.bcS, styles.bcSClr]}>Bác sĩ</Text>
//             <Image
//               style={[styles.vectorIcon5, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector25.png")}
//             />
//             <View style={[styles.daLiu, styles.liuLayout]}>
//               <View style={[styles.daLiuChild, styles.liuLayout]} />
//               <Text style={[styles.daLiu1, styles.mBnTypo]}>Da liễu</Text>
//             </View>
//           </View>
//           <View style={[styles.map, styles.mapLayout]}>
//             <Image
//               style={[styles.image32Icon, styles.thngPosition]}
//               contentFit="cover"
//               source={require("../assets/image-32.png")}
//             />
//             <View style={[styles.mapChild, styles.mapLayout]} />
//             <Text style={[styles.pNhCng, styles.pNhCngPosition]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <View style={[styles.mapItem, styles.tsBsPosition1]} />
//             <Image
//               style={[styles.vectorIcon6, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector26.png")}
//             />
//             <Text style={[styles.mBn, styles.mBnTypo]}>Mở bản đồ</Text>
//           </View>
//           <View style={[styles.thngTinChiTit, styles.thngLayout]}>
//             <View style={[styles.thngTinChiTitChild, styles.thngLayout]} />
//             <Image
//               style={[styles.vectorIcon7, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector27.png")}
//             />
//             <Text style={[styles.giiThiu, styles.giiThiuTypo]}>Giới thiệu</Text>
//             <Text style={[styles.tsbsTrnAnhContainer, styles.daLiu2Position]}>
//               <Text style={styles.tsbsTrnAnhContainer1}>
//                 <Text
//                   style={styles.tsbsTrnAnh}
//                 >{`TS.BS Trần Anh Tuấn với hơn 30 năm kinh nghiệm trong thăm khám và điều trị trong lĩnh vực chuyên khoa Da liễu thú y.

// Bác sĩ Trần Anh Tuấn hiện là bác sĩ cao cấp tại Bệnh viện thú y Petpals

// `}</Text>
//                 <Text style={styles.linHViTypo}>{`Quá trình học vấn:

// `}</Text>
//                 <Text
//                   style={styles.tsbsTrnAnh}
//                 >{`• 1989: Tốt nghiệp Đại học Y Dược TP.HCM
// • 1994: Hoàn thành khoá Đào tạo chuyên sâu về Hồi sức - Cấp cứu Nhi tại Đại học René-Descartes (Pháp).`}</Text>
//               </Text>
//             </Text>
//           </View>
//           <View style={[styles.chuynKhm, styles.chuynLayout]}>
//             <View style={[styles.chuynKhmChild, styles.chuynLayout]} />
//             <Text style={[styles.chuynKhm1, styles.giiThiuTypo]}>
//               Chuyên khám
//             </Text>
//             <Text style={[styles.daLiu2, styles.daLiu2Position]}>
//               • Da liễu
//             </Text>
//             <Image
//               style={styles.image25Icon}
//               contentFit="cover"
//               source={require("../assets/image-251.png")}
//             />
//           </View>
//           <View style={[styles.niCngTc, styles.chuynLayout]}>
//             <View style={[styles.chuynKhmChild, styles.chuynLayout]} />
//             <Text style={[styles.niCngTc1, styles.quTrnhOTypo]}>
//               Nơi công tác
//             </Text>
//             <Text style={[styles.daLiu2, styles.daLiu2Position]}>
//               • Phòng khám thú y Petpals
//             </Text>
//             <Image
//               style={[styles.vectorIcon8, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector28.png")}
//             />
//           </View>
//           <View style={[styles.quTrnh, styles.trnhLayout]}>
//             <View style={[styles.quTrnhChild, styles.trnhLayout]} />
//             <Text style={[styles.quTrnhO, styles.quTrnhOTypo]}>
//               Quá trình đào tạo
//             </Text>
//             <Text
//               style={[styles.ttNghipI1, styles.daLiu2Position]}
//             >{`• 1989: Tốt nghiệp Đại học Y Hà Nội
// • 1994: Hoàn thành khóa Đào tạo chuyên sâu về Da liễu - Cấp cứu Thú y tại Đại học René - Descartes (Pháp)`}</Text>
//             <Image
//               style={[styles.vectorIcon9, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector29.png")}
//             />
//           </View>
//         </View>
//       </View>
//       <View style={[styles.topBarStatus, styles.thngPosition]}>
//         <View style={styles.searchChildPosition}>
//           <View style={[styles.searchBarChild, styles.searchChildPosition]}>
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
//   thngPosition: {
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   searchChildPosition: {
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   hTrFlexBox: {
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   vectorIconPosition2: {
//     bottom: "36.84%",
//     top: "38.6%",
//     height: "24.56%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   btnPosition: {
//     left: "3.47%",
//     right: "3.47%",
//     width: "93.07%",
//     height: "35.71%",
//     position: "absolute",
//   },
//   btnChildPosition: {
//     borderRadius: Border.br_5xs,
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorIconPosition1: {
//     left: "4.87%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   bcSClr: {
//     color: Color.colorBrown,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   linHViTypo: {
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//   },
//   thngLayout1: {
//     height: 168,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   childBg: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   tsBsPosition: {
//     left: 131,
//     height: 13,
//     color: Color.colorBlack,
//   },
//   trnAnhTunTypo: {
//     width: 168,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   chuynKhoaClr: {
//     color: Color.colorGray_200,
//     height: 13,
//   },
//   pNhCngPosition: {
//     left: 13,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   liuLayout: {
//     width: 89,
//     height: 31,
//     position: "absolute",
//   },
//   mBnTypo: {
//     fontSize: FontSize.size_smi,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   mapLayout: {
//     height: 64,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   tsBsPosition1: {
//     top: 17,
//     position: "absolute",
//   },
//   thngLayout: {
//     height: 475,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   vectorIconPosition: {
//     left: "4.53%",
//     right: "91.2%",
//     width: "4.27%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   giiThiuTypo: {
//     left: 41,
//     top: 24,
//     height: 13,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   daLiu2Position: {
//     width: 349,
//     top: 46,
//     left: 17,
//     color: Color.colorBlack,
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   chuynLayout: {
//     height: 85,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   quTrnhOTypo: {
//     top: 21,
//     left: 41,
//     height: 13,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   trnhLayout: {
//     height: 155,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   searchBarChild: {
//     backgroundColor: Color.colorBrown,
//   },
//   vectorIcon: {
//     height: "30.18%",
//     width: "2.67%",
//     top: "35.79%",
//     right: "92%",
//     bottom: "34.04%",
//     left: "5.33%",
//   },
//   thngTinBnh: {
//     top: "33.33%",
//     left: "11.73%",
//     textAlign: "left",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   luLi: {
//     left: "66.93%",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     fontSize: FontSize.size_xs,
//     top: "40.35%",
//     width: "11.2%",
//     height: "19.3%",
//     justifyContent: "center",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     position: "absolute",
//   },
//   hTr: {
//     left: "85.87%",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     fontSize: FontSize.size_xs,
//     top: "40.35%",
//     width: "11.2%",
//     height: "19.3%",
//     justifyContent: "center",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     position: "absolute",
//   },
//   vectorIcon1: {
//     right: "33.6%",
//     left: "62.13%",
//     width: "4.27%",
//     bottom: "36.84%",
//     top: "38.6%",
//     height: "24.56%",
//   },
//   vectorIcon2: {
//     width: "3.47%",
//     right: "14.93%",
//     left: "81.6%",
//     bottom: "36.84%",
//     top: "38.6%",
//     height: "24.56%",
//   },
//   thanhIuHngThngTinPhChild: {
//     height: "29.82%",
//     width: "0.27%",
//     top: "35.96%",
//     right: "20.67%",
//     bottom: "34.21%",
//     left: "79.07%",
//     borderColor: Color.greyscaleBlackWhite,
//     borderRightWidth: 1,
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   thanhIuHngThngTinPh: {
//     top: 43,
//     height: 57,
//   },
//   footerChild: {
//     backgroundColor: Color.colorGray_100,
//   },
//   chatBtnChild: {
//     backgroundColor: Color.colorBrown_100,
//     borderColor: Color.colorBrown,
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
//   vectorIcon3: {
//     width: "5.44%",
//     right: "89.68%",
//     bottom: "30%",
//     top: "32%",
//     height: "38%",
//     left: "4.87%",
//   },
//   chatViBc: {
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     left: "32.09%",
//     width: "38.4%",
//     height: "38%",
//     justifyContent: "center",
//     textAlign: "center",
//     top: "32%",
//   },
//   chatBtn: {
//     top: "9.29%",
//     bottom: "55%",
//   },
//   callBtnChild: {
//     backgroundColor: Color.colorBrown,
//   },
//   linHVi: {
//     top: "30%",
//     color: Color.greyscaleBlackWhite,
//     fontSize: FontSize.size_base,
//     left: "32.09%",
//     width: "38.4%",
//     fontWeight: "700",
//     height: "38%",
//     justifyContent: "center",
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   vectorIcon4: {
//     height: "56%",
//     width: "5.16%",
//     top: "22%",
//     right: "89.97%",
//     bottom: "22%",
//   },
//   callBtn: {
//     top: "55%",
//     bottom: "9.29%",
//   },
//   footer: {
//     top: 672,
//     height: 140,
//   },
//   thngTinSBChild: {
//     height: 168,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   bcSQuyn: {
//     top: 13,
//     left: 12,
//     borderRadius: Border.br_40xl,
//     width: 105,
//     height: 105,
//     position: "absolute",
//   },
//   tsBs: {
//     width: 44,
//     height: 13,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 17,
//     position: "absolute",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   trnAnhTun: {
//     top: 42,
//     fontSize: FontSize.size_xl,
//     height: 13,
//     color: Color.colorBlack,
//     left: 131,
//   },
//   nmKinhNghim: {
//     top: 95,
//     left: 128,
//     fontSize: FontSize.size_sm,
//     width: 168,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   chuynKhoa: {
//     top: 133,
//     width: 94,
//     color: Color.colorGray_200,
//     height: 13,
//     fontSize: FontSize.size_mini,
//   },
//   bcS: {
//     top: 70,
//     left: 147,
//     width: 43,
//     height: 13,
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   vectorIcon5: {
//     height: "7.74%",
//     width: "2.93%",
//     top: "41.07%",
//     right: "62.13%",
//     bottom: "51.19%",
//     left: "34.93%",
//   },
//   daLiuChild: {
//     borderRadius: Border.br_3xl,
//     height: 31,
//     top: 0,
//     left: 0,
//     width: 89,
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
//   daLiu1: {
//     left: 1,
//     width: 88,
//     height: 31,
//     color: Color.colorBlack,
//     top: 0,
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   daLiu: {
//     top: 123,
//     left: 117,
//     height: 31,
//   },
//   thngTinSB: {
//     top: 0,
//   },
//   image32Icon: {
//     top: 1,
//     height: 63,
//   },
//   mapChild: {
//     backgroundColor: "rgba(137, 137, 137, 0.45)",
//     top: 0,
//   },
//   pNhCng: {
//     top: 15,
//     width: 244,
//     height: 36,
//     fontSize: FontSize.size_sm,
//     color: Color.colorBlack,
//   },
//   mapItem: {
//     left: 259,
//     borderRadius: Border.br_41xl,
//     backgroundColor: "#3dc855",
//     width: 103,
//     height: 31,
//   },
//   vectorIcon6: {
//     height: "26.56%",
//     width: "4.53%",
//     top: "37.5%",
//     right: "24%",
//     bottom: "35.94%",
//     left: "71.47%",
//   },
//   mBn: {
//     top: 28,
//     left: 290,
//     width: 63,
//     height: 11,
//     color: Color.greyscaleBlackWhite,
//     textAlign: "left",
//   },
//   map: {
//     top: 172,
//   },
//   thngTinChiTitChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   vectorIcon7: {
//     height: "3.39%",
//     top: "4.67%",
//     bottom: "91.94%",
//   },
//   giiThiu: {
//     width: 94,
//   },
//   tsbsTrnAnh: {
//     fontFamily: FontFamily.robotoRegular,
//   },
//   tsbsTrnAnhContainer1: {
//     width: "100%",
//   },
//   tsbsTrnAnhContainer: {
//     height: 408,
//   },
//   thngTinChiTit: {
//     top: 236,
//   },
//   chuynKhmChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   chuynKhm1: {
//     width: 107,
//   },
//   daLiu2: {
//     height: 19,
//     fontFamily: FontFamily.robotoRegular,
//   },
//   image25Icon: {
//     top: 18,
//     height: 18,
//     width: 15,
//     left: 17,
//     position: "absolute",
//   },
//   chuynKhm: {
//     top: 714,
//   },
//   niCngTc1: {
//     width: 107,
//   },
//   vectorIcon8: {
//     height: "21.18%",
//     top: "17.65%",
//     bottom: "61.18%",
//   },
//   niCngTc: {
//     top: 802,
//   },
//   quTrnhChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   quTrnhO: {
//     width: 133,
//   },
//   ttNghipI1: {
//     height: 91,
//     fontFamily: FontFamily.robotoRegular,
//   },
//   vectorIcon9: {
//     height: "8.39%",
//     top: "13.55%",
//     bottom: "78.06%",
//   },
//   quTrnh: {
//     top: 890,
//   },
//   thngTinSBParent: {
//     height: 1045,
//     top: 0,
//   },
//   doctordetailscreenInner: {
//     top: 100,
//     backgroundColor: "#e9edf0",
//     height: 572,
//   },
//   time: {
//     marginTop: -9,
//     fontFamily: FontFamily.sFProText,
//     color: Color.colorWhitesmoke_100,
//     width: 54,
//     textAlign: "center",
//     top: "50%",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
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
//   topBarStatus: {
//     height: 44,
//     top: 0,
//   },
//   doctordetailscreen: {
//     flex: 1,
//     height: 812,
//     width: "100%",
//     backgroundColor: Color.colorWhitesmoke_100,
//   },
// });

// export default DoctorDetailScreen;
