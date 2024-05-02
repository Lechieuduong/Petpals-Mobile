// import * as React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { Image } from "expo-image";
// import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

// const ServiceDetailScreen = () => {
//   return (
//     <View style={styles.servicedetailscreen}>
//       <View style={[styles.thanhIuHngThngTinPh, styles.thngPosition]}>
//         <View style={[styles.searchBar, styles.searchIconPosition]}>
//           <View style={[styles.searchBarChild, styles.searchBarChildBg]} />
//           <Image
//             style={[styles.vectorIcon, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector18.png")}
//           />
//           <Text style={styles.thngTinBnh}>Cấp cứu 24/24</Text>
//           <Text style={[styles.luLi, styles.hTrTypo]}>Lưu lại</Text>
//           <Text style={[styles.hTr, styles.hTrTypo]}>Hỗ trợ</Text>
//         </View>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconPosition1]}
//           contentFit="cover"
//           source={require("../assets/vector21.png")}
//         />
//         <Image
//           style={[styles.vectorIcon2, styles.vectorIconPosition1]}
//           contentFit="cover"
//           source={require("../assets/vector22.png")}
//         />
//         <View style={[styles.thanhIuHngThngTinPhChild, styles.childBorder]} />
//       </View>
//       <View style={[styles.footerButton, styles.thngPosition]}>
//         <View style={[styles.footerButtonChild, styles.childBorder]} />
//         <View style={[styles.footerButtonItem, styles.searchBarChildBg]} />
//         <Text style={styles.tKhm}>Đặt lịch</Text>
//       </View>
//       <View style={[styles.topBarStatus, styles.thngPosition]}>
//         <View style={[styles.searchBar, styles.searchIconPosition]}>
//           <View style={[styles.searchBarChild, styles.searchBarChildBg]}>
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
//       <View style={[styles.thngTinSBParent, styles.thngPosition]}>
//         <View style={[styles.thngTinSB, styles.thngLayout]}>
//           <View style={[styles.thngTinSBChild, styles.childBg]} />
//           <View style={styles.map}>
//             <Image
//               style={[styles.image32Icon, styles.mapChildLayout]}
//               contentFit="cover"
//               source={require("../assets/image-321.png")}
//             />
//             <View style={[styles.mapChild, styles.mapChildLayout]} />
//             <Text style={[styles.pNhCng, styles.cngClr]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <View style={styles.mapItem} />
//             <Image
//               style={[styles.vectorIcon3, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector26.png")}
//             />
//             <Text style={styles.mBn}>Mở bản đồ</Text>
//           </View>
//         </View>
//         <View style={[styles.giLmVic, styles.vicLayout]}>
//           <View style={[styles.giLmVicChild, styles.vicLayout]} />
//           <View style={styles.content}>
//             <Text style={[styles.th2, styles.th2Layout]}>Thứ 2 - Chủ Nhật</Text>
//             <Text style={[styles.text, styles.th2Layout]}>06:00 - 16:30</Text>
//           </View>
//           <View style={[styles.header, styles.headerLayout]}>
//             <Text style={[styles.giLmVic1, styles.tngIHTypo]}>
//               Giờ làm việc
//             </Text>
//             <Image
//               style={[styles.vectorIcon4, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector32.png")}
//             />
//             <Image
//               style={[styles.vectorIcon5, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector33.png")}
//             />
//           </View>
//         </View>
//         <View style={[styles.giiThiu, styles.giiLayout]}>
//           <View style={[styles.giiThiuChild, styles.giiLayout]} />
//           <Text style={[styles.khiThCng, styles.headerLayout1]}>
//             Khi thú cưng của bạn gặp phải các tình huống khẩn cấp, nguy hiểm
//             như khó đẻ, nuốt dị vật, ngộ độc, tai nạn, cắn nhau,… hãy liên hệ
//             ngay với chi nhánh Petpals gần bạn nhất để nhận được các hỗ trợ y tế
//             kịp thời. Dịch vụ cấp cứu thú cưng của chúng tôi hoạt động 24/24 tất
//             cả các ngày bao gồm cả các ngày cuối tuần và lễ, tết. Dưới đây là
//             thông tin liên hệ của các chi nhánh Petpals, vì tính cấp bách hãy
//             liên hệ ngay tới hotline chi nhánh gần bạn nhất để nhận được hỗ trợ
//             kịp thời:
//           </Text>
//           <View style={styles.header1}>
//             <Image
//               style={[styles.vectorIcon6, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector34.png")}
//             />
//             <Text style={[styles.giiThiu1, styles.tngPosition]}>
//               Giới thiệu
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.tngIHTr, styles.tngLayout1]}>
//           <View style={[styles.tngIHTrChild, styles.tngLayout1]} />
//           <Text style={[styles.trongTrngHp, styles.trongTrngHpPosition]}>
//             Trong trường hợp bạn cần thêm thông tin vui lòng liên hệ tổng đài để
//             được hỗ trợ.
//           </Text>
//           <View style={[styles.tVn, styles.tngLayout]}>
//             <Image
//               style={[styles.image38Icon, styles.headerLayout]}
//               contentFit="cover"
//               source={require("../assets/image-38.png")}
//             />
//             <Text style={[styles.tVnT, styles.tngLayout]}>Tư vấn đặt khám</Text>
//           </View>
//           <View style={[styles.tngI, styles.tngLayout]}>
//             <Text style={[styles.tngIPhng, styles.tngPosition]}>
//               Tổng đài phòng khám: (028) 1234 8888
//             </Text>
//             <Image
//               style={[styles.vectorIcon7, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector36.png")}
//             />
//           </View>
//           <View style={[styles.hTrTKhm, styles.tngLayout]}>
//             <Text style={[styles.hTrT, styles.tngPosition]}>
//               Hỗ trợ đặt khám: 19008888
//             </Text>
//             <Image
//               style={[styles.vectorIcon8, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector36.png")}
//             />
//           </View>
//           <View style={[styles.website, styles.tngLayout]}>
//             <Text style={[styles.tngIPhng, styles.tngPosition]}>
//               Website: petpals.com.vn
//             </Text>
//             <Image
//               style={[styles.vectorIcon9, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector37.png")}
//             />
//           </View>
//           <View style={[styles.header2, styles.tngLayout]}>
//             <Text style={[styles.tngIH, styles.tngLayout]}>
//               Tổng đài hỗ trợ
//             </Text>
//             <Image
//               style={[styles.vectorIcon10, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector38.png")}
//             />
//           </View>
//         </View>
//         <Image
//           style={[styles.imgItemIcon, styles.trongTrngHpPosition]}
//           contentFit="cover"
//           source={require("../assets/imgitem.png")}
//         />
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
//   searchIconPosition: {
//     left: "0%",
//     top: "0%",
//   },
//   searchBarChildBg: {
//     backgroundColor: Color.foundationBrownBrown500,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   hTrTypo: {
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     fontSize: FontSize.size_xs,
//     top: "40.35%",
//     width: "11.2%",
//     height: "19.3%",
//     textAlign: "center",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   vectorIconPosition1: {
//     bottom: "36.84%",
//     top: "38.6%",
//     height: "24.56%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   childBorder: {
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   thngLayout: {
//     height: 314,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   childBg: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   mapChildLayout: {
//     borderRadius: Border.br_3xs,
//     width: 348,
//     left: 0,
//     position: "absolute",
//   },
//   cngClr: {
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//   },
//   vicLayout: {
//     height: 85,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   th2Layout: {
//     width: 132,
//     height: 19,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   headerLayout: {
//     height: 15,
//     position: "absolute",
//   },
//   tngIHTypo: {
//     color: Color.foundationBrownBrown500,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//   },
//   giiLayout: {
//     height: 294,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   headerLayout1: {
//     width: 344,
//     left: 17,
//   },
//   tngPosition: {
//     left: 24,
//     top: 0,
//     textAlign: "left",
//     letterSpacing: 0,
//   },
//   tngLayout1: {
//     height: 229,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   trongTrngHpPosition: {
//     left: 16,
//     position: "absolute",
//   },
//   tngLayout: {
//     height: 18,
//     position: "absolute",
//   },
//   vectorIconPosition: {
//     bottom: "11.11%",
//     top: "5.56%",
//     height: "83.33%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     left: "0%",
//     position: "absolute",
//   },
//   searchBarChild: {
//     left: "0%",
//     top: "0%",
//     bottom: "0%",
//     height: "100%",
//     right: "0%",
//     width: "100%",
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
//   },
//   hTr: {
//     left: "85.87%",
//   },
//   searchBar: {
//     bottom: "0%",
//     height: "100%",
//     left: "0%",
//     top: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorIcon1: {
//     width: "4.27%",
//     right: "33.6%",
//     left: "62.13%",
//   },
//   vectorIcon2: {
//     width: "3.47%",
//     right: "14.93%",
//     left: "81.6%",
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
//   },
//   thanhIuHngThngTinPh: {
//     top: 43,
//     height: 57,
//   },
//   footerButtonChild: {
//     backgroundColor: Color.colorGray_100,
//     borderColor: Color.colorGainsboro_100,
//     borderTopWidth: 1,
//     left: "0%",
//     top: "0%",
//     bottom: "0%",
//     height: "100%",
//     right: "0%",
//     width: "100%",
//   },
//   footerButtonItem: {
//     height: "64.94%",
//     width: "93.07%",
//     top: "16.88%",
//     right: "3.47%",
//     bottom: "18.18%",
//     left: "3.47%",
//     borderRadius: Border.br_5xs,
//   },
//   tKhm: {
//     height: "24.68%",
//     width: "35.73%",
//     top: "36.36%",
//     left: "32%",
//     color: Color.greyscaleBlackWhite,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   footerButton: {
//     top: 735,
//     height: 77,
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
//   thngTinSBChild: {
//     height: 314,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   image32Icon: {
//     height: 76,
//     top: 1,
//   },
//   mapChild: {
//     backgroundColor: Color.colorGray_500,
//     top: 0,
//     height: 77,
//   },
//   pNhCng: {
//     top: 24,
//     fontSize: FontSize.size_sm,
//     width: 244,
//     height: 36,
//     left: 11,
//     color: Color.colorBlack,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   mapItem: {
//     top: 23,
//     left: 241,
//     borderRadius: Border.br_41xl,
//     backgroundColor: Color.colorLimegreen,
//     width: 103,
//     height: 31,
//     position: "absolute",
//   },
//   vectorIcon3: {
//     height: "22.08%",
//     width: "4.89%",
//     top: "38.96%",
//     right: "23.28%",
//     bottom: "38.96%",
//     left: "71.84%",
//   },
//   mBn: {
//     top: 34,
//     left: 272,
//     fontSize: FontSize.size_smi,
//     width: 63,
//     fontFamily: FontFamily.robotoRegular,
//     height: 11,
//     color: Color.greyscaleBlackWhite,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   map: {
//     top: 219,
//     width: 348,
//     left: 11,
//     height: 77,
//     position: "absolute",
//   },
//   thngTinSB: {
//     top: 0,
//   },
//   giLmVicChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   th2: {
//     textAlign: "left",
//     left: 0,
//   },
//   text: {
//     left: 212,
//     textAlign: "right",
//   },
//   content: {
//     top: 46,
//     height: 19,
//     width: 344,
//     left: 17,
//     position: "absolute",
//   },
//   giLmVic1: {
//     left: 25,
//     width: 107,
//     height: 13,
//     top: 1,
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   vectorIcon4: {
//     width: "4.36%",
//     right: "95.64%",
//     left: "0%",
//     top: "0%",
//     bottom: "0%",
//     height: "100%",
//   },
//   vectorIcon5: {
//     height: "46.67%",
//     width: "3.49%",
//     top: "26.67%",
//     bottom: "26.67%",
//     left: "96.51%",
//     right: "0%",
//   },
//   header: {
//     top: 19,
//     width: 344,
//     left: 17,
//   },
//   giLmVic: {
//     top: 327,
//   },
//   giiThiuChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   khiThCng: {
//     top: 42,
//     lineHeight: 21,
//     height: 237,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_base,
//     width: 344,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIcon6: {
//     height: "93.75%",
//     width: "12.71%",
//     right: "87.29%",
//     bottom: "6.25%",
//     left: "0%",
//     top: "0%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//   },
//   giiThiu1: {
//     width: 94,
//     height: 16,
//     color: Color.foundationBrownBrown500,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     position: "absolute",
//   },
//   header1: {
//     height: "5.44%",
//     width: "31.47%",
//     top: "5.78%",
//     right: "64%",
//     bottom: "88.78%",
//     left: "4.53%",
//     position: "absolute",
//   },
//   giiThiu: {
//     top: 425,
//   },
//   tngIHTrChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   trongTrngHp: {
//     top: 51,
//     width: 342,
//     height: 41,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//   },
//   image38Icon: {
//     top: 1,
//     width: 15,
//     left: 0,
//   },
//   tVnT: {
//     width: 294,
//     left: 24,
//     top: 0,
//     textAlign: "left",
//     letterSpacing: 0,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_mini,
//   },
//   tVn: {
//     top: 123,
//     width: 318,
//     left: 17,
//     height: 18,
//   },
//   tngIPhng: {
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   vectorIcon7: {
//     width: "5.34%",
//     right: "94.66%",
//   },
//   tngI: {
//     top: 91,
//     width: 281,
//     left: 17,
//     height: 18,
//   },
//   hTrT: {
//     width: 179,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   vectorIcon8: {
//     width: "7.39%",
//     right: "92.61%",
//   },
//   hTrTKhm: {
//     top: 154,
//     width: 203,
//     left: 17,
//     height: 18,
//   },
//   vectorIcon9: {
//     width: "8.15%",
//     right: "91.85%",
//   },
//   website: {
//     top: 187,
//     width: 184,
//     left: 17,
//     height: 18,
//   },
//   tngIH: {
//     width: 112,
//     left: 24,
//     top: 0,
//     textAlign: "left",
//     letterSpacing: 0,
//     color: Color.foundationBrownBrown500,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//   },
//   vectorIcon10: {
//     width: "7.35%",
//     right: "92.65%",
//   },
//   header2: {
//     top: 18,
//     width: 136,
//     left: 17,
//     height: 18,
//   },
//   tngIHTr: {
//     top: 732,
//   },
//   imgItemIcon: {
//     top: 10,
//     width: 343,
//     height: 193,
//   },
//   thngTinSBParent: {
//     top: 106,
//     height: 634,
//   },
//   servicedetailscreen: {
//     backgroundColor: Color.colorWhitesmoke_100,
//     flex: 1,
//     height: 812,
//     width: "100%",
//   },
// });

// export default ServiceDetailScreen;
