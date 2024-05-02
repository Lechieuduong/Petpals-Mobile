// import * as React from "react";
// import { StyleSheet, View, Pressable, Text } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const HospitalDetailScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.hospitaldetailscreen}>
//       <View style={[styles.thanhIuHngThngTinPh, styles.thngPosition]}>
//         <View style={[styles.searchBar, styles.searchIconPosition]}>
//           <View style={[styles.searchBarChild, styles.searchBarChildBg]} />
//           <Pressable
//             style={styles.vector}
//             onPress={() => navigation.navigate("HospitalListScreen")}
//           >
//             <Image
//               style={[styles.icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector18.png")}
//             />
//           </Pressable>
//           <Text style={styles.thngTinBnh}>Thông tin bệnh viện</Text>
//           <Text style={[styles.luLi, styles.khmFlexBox]}>Lưu lại</Text>
//           <Text style={[styles.hTr, styles.khmFlexBox]}>Hỗ trợ</Text>
//         </View>
//         <Image
//           style={[styles.vectorIcon, styles.vectorIconPosition1]}
//           contentFit="cover"
//           source={require("../assets/vector21.png")}
//         />
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconPosition1]}
//           contentFit="cover"
//           source={require("../assets/vector22.png")}
//         />
//         <View style={[styles.thanhIuHngThngTinPhChild, styles.childBorder1]} />
//       </View>
//       <View style={[styles.footerButton, styles.thngPosition]}>
//         <View style={[styles.footerButtonChild, styles.childBorder1]} />
//         <View style={[styles.footerButtonItem, styles.searchBarChildBg]} />
//         <Text style={[styles.tKhm, styles.khmTypo]}>Đặt khám</Text>
//       </View>
//       <View style={[styles.thngTinSBParent, styles.thngPosition]}>
//         <View style={[styles.thngTinSB, styles.thngLayout]}>
//           <View style={[styles.thngTinSBChild, styles.childBg]} />
//           <View style={[styles.logo, styles.logoLayout]}>
//             <Text style={[styles.bnhVinTh, styles.chaLnhTLayout]}>
//               Bệnh viện thú y Petpals
//             </Text>
//             <Text style={[styles.chaLnhT, styles.chaLnhTLayout]}>
//               Chữa lành từ trái tim
//             </Text>
//             <Image
//               style={[styles.logoIcon, styles.logoLayout]}
//               contentFit="cover"
//               source={require("../assets/logo.png")}
//             />
//           </View>
//           <Image
//             style={[styles.nhPhngKhm, styles.mapPosition]}
//             contentFit="cover"
//             source={require("../assets/nh-phng-khm.png")}
//           />
//           <View style={styles.lchSThanhTonBtn}>
//             <View style={styles.lchSThanhTonBtnChild} />
//             <Image
//               style={[styles.walletVectorIcon, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/wallet-vector.png")}
//             />
//             <Text style={[styles.lchSKhm, styles.mBnTypo]}>Lịch sử khám</Text>
//           </View>
//           <View style={[styles.map, styles.mapPosition]}>
//             <Image
//               style={[styles.image32Icon, styles.iconPosition]}
//               contentFit="cover"
//               source={require("../assets/image-321.png")}
//             />
//             <View style={styles.mapChild} />
//             <Text style={[styles.pNhCng, styles.hTrFlexBox]}>
//               96 P. Định Công, Phương Liệt, Thanh Xuân, Hà Nội
//             </Text>
//             <View style={styles.mapItem} />
//             <Image
//               style={[styles.vectorIcon2, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector26.png")}
//             />
//             <Text style={[styles.mBn, styles.mBnTypo]}>Mở bản đồ</Text>
//           </View>
//         </View>
//         <View style={[styles.giLmVic, styles.vicLayout]}>
//           <View style={[styles.giLmVicChild, styles.vicLayout]} />
//           <View style={[styles.content, styles.chaLnhTLayout]}>
//             <Text style={[styles.th2, styles.th2Layout]}>Thứ 2 - Chủ Nhật</Text>
//             <Text style={[styles.text, styles.th2Layout]}>06:00 - 16:30</Text>
//           </View>
//           <View style={[styles.header, styles.headerPosition]}>
//             <Text style={[styles.giLmVic1, styles.tngIHClr]}>Giờ làm việc</Text>
//             <Image
//               style={[styles.vectorIcon3, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector33.png")}
//             />
//             <Image
//               style={[styles.vectorIcon4, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector34.png")}
//             />
//           </View>
//         </View>
//         <View style={[styles.giiThiu, styles.giiLayout]}>
//           <View style={[styles.giiThiuChild, styles.giiLayout]} />
//           <Text style={styles.phngKhmXy}>{`
// Phòng khám xây dựng vào năm 2008 với quy mô ban đầu chỉ 60 giường bệnh, thực hiện nghĩa vụ khám, chữa bệnh cho nhân dân trên địa bàn sau 10 năm xây dựng và trưởng thành, Phòng khám đã có sự "lột xác" nhanh
// chóng. Phát triển toàn diện về quy mô, cơ sở hạ tầng nguồn nhân lực và chất lượng khám chữa bệnh. Nhiều kỹ thuật y khoa phức tạp đã được
// thực hiện ngay tại Bệnh Viện giúp người dân tiết kiện chi phí khám chữa bệnh và giảm tải áp lực cho ...`}</Text>
//           <View style={styles.header1}>
//             <Image
//               style={[styles.vectorIcon5, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector35.png")}
//             />
//             <Text style={[styles.giiThiu1, styles.giiThiu1Typo]}>
//               Giới thiệu
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.chuynKhoa, styles.chuynLayout]}>
//           <View style={[styles.chuynKhoaChild, styles.chuynLayout]} />
//           <View style={styles.header2}>
//             <Text style={[styles.chuynKhoa1, styles.giiThiu1Typo]}>
//               Chuyên khoa
//             </Text>
//             <Image
//               style={[styles.vectorIcon6, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector36.png")}
//             />
//           </View>
//           <View style={[styles.content1, styles.contentLayout]}>
//             <View style={[styles.contentChild, styles.childBorder]} />
//             <View style={[styles.contentItem, styles.aKhoaLayout]} />
//             <View style={[styles.contentInner, styles.contentPosition]} />
//             <View style={[styles.rectangleView, styles.aKhoaLayout]} />
//             <Text style={[styles.aKhoa, styles.aKhoaLayout]}>Đa khoa</Text>
//             <Text style={[styles.daLiu, styles.aKhoaLayout]}>Da liễu</Text>
//             <Text style={[styles.snPh, styles.snPhPosition]}>
//               Sản - Phụ khia
//             </Text>
//             <Text style={[styles.taiMi, styles.taiMiPosition]}>
//               Tai - Mũi - Họng
//             </Text>
//             <Text style={[styles.niTngHp, styles.aKhoaLayout]}>
//               Nội tổng hợp
//             </Text>
//             <Text style={styles.cpCu}>Cấp cứu</Text>
//           </View>
//         </View>
//         <View style={[styles.chuynKhm, styles.chuynLayout]}>
//           <View style={[styles.chuynKhoaChild, styles.chuynLayout]} />
//           <View style={[styles.content2, styles.contentLayout]}>
//             <View style={[styles.contentChild, styles.childBorder]} />
//             <View style={[styles.contentItem, styles.aKhoaLayout]} />
//             <View style={[styles.contentChild3, styles.contentPosition]} />
//             <View style={[styles.rectangleView, styles.aKhoaLayout]} />
//             <Text style={[styles.aKhoa, styles.aKhoaLayout]}>
//               Soi bàng quang
//             </Text>
//             <Text style={[styles.daLiu, styles.aKhoaLayout]}>Nội soi tai</Text>
//             <Text style={[styles.tStentThc, styles.snPhPosition]}>
//               Đặt Stent thực quản qua nội soi
//             </Text>
//             <Text style={[styles.niSoiBung, styles.taiMiPosition]}>
//               Nội soi buồng tử cung để sinh thiết
//             </Text>
//             <Text style={[styles.niTngHp, styles.aKhoaLayout]}>
//               Nội soi ống mật chủ
//             </Text>
//             <Text style={styles.cpCu}>Nội soi đường mật</Text>
//           </View>
//           <View style={[styles.header3, styles.headerPosition]}>
//             <Text style={[styles.chuynKhm1, styles.tngIHClr]}>Chuyên khám</Text>
//             <Image
//               style={[styles.vectorIcon7, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector36.png")}
//             />
//           </View>
//         </View>
//         <View style={[styles.tngIHTr, styles.tngLayout1]}>
//           <View style={[styles.tngIHTrChild, styles.tngLayout1]} />
//           <Text style={styles.trongTrngHp}>
//             Trong trường hợp bạn cần thêm thông tin vui lòng liên hệ tổng đài để
//             được hỗ trợ.
//           </Text>
//           <View style={[styles.tVn, styles.tngLayout]}>
//             <Image
//               style={[styles.image38Icon, styles.iconPosition]}
//               contentFit="cover"
//               source={require("../assets/image-38.png")}
//             />
//             <Text style={[styles.tVnT, styles.tngLayout]}>Tư vấn đặt khám</Text>
//           </View>
//           <View style={[styles.tngI, styles.tngLayout]}>
//             <Text style={[styles.tngIPhng, styles.tVnTTypo]}>
//               Tổng đài phòng khám: (028) 1234 8888
//             </Text>
//             <Image
//               style={[styles.vectorIcon8, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector37.png")}
//             />
//           </View>
//           <View style={[styles.hTrTKhm, styles.tngLayout]}>
//             <Text style={[styles.hTrT, styles.tVnTTypo]}>
//               Hỗ trợ đặt khám: 19008888
//             </Text>
//             <Image
//               style={[styles.vectorIcon9, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector37.png")}
//             />
//           </View>
//           <View style={[styles.website, styles.tngLayout]}>
//             <Text style={[styles.tngIPhng, styles.tVnTTypo]}>
//               Website: petpals.com.vn
//             </Text>
//             <Image
//               style={[styles.vectorIcon10, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector38.png")}
//             />
//           </View>
//           <View style={[styles.header4, styles.tngLayout]}>
//             <Text style={[styles.tngIH, styles.tngLayout]}>
//               Tổng đài hỗ trợ
//             </Text>
//             <Image
//               style={[styles.vectorIcon11, styles.vectorIconPosition]}
//               contentFit="cover"
//               source={require("../assets/vector39.png")}
//             />
//           </View>
//         </View>
//         <View style={[styles.footer, styles.footerLayout]}>
//           <View style={[styles.footerChild, styles.footerLayout]} />
//           <View style={styles.lnUTrangParent}>
//             <Text style={[styles.lnUTrang, styles.tngIHClr]}>
//               Lên đầu trang
//             </Text>
//             <Image
//               style={[styles.vectorIcon12, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector40.png")}
//             />
//           </View>
//           <View style={[styles.rectangleParent, styles.groupChildLayout]}>
//             <View style={[styles.groupChild, styles.groupChildLayout]} />
//             <Text style={[styles.ccCuHi, styles.aKhoaLayout]}>
//               Các câu hỏi thường gặp
//             </Text>
//             <Text style={[styles.quyTrnhThanh, styles.phnHiThngTypo]}>
//               Quy trình thanh toán và hoàn/hủy
//             </Text>
//             <Text style={[styles.phnHiThng, styles.phnHiThngTypo]}>
//               Phản hồi thông tin
//             </Text>
//             <Image
//               style={[styles.vectorIcon13, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector41.png")}
//             />
//             <Image
//               style={[styles.vectorIcon14, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector41.png")}
//             />
//             <Image
//               style={[styles.vectorIcon15, styles.vectorIconLayout]}
//               contentFit="cover"
//               source={require("../assets/vector41.png")}
//             />
//           </View>
//         </View>
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
//   searchIconPosition: {
//     bottom: "0%",
//     left: "0%",
//     top: "0%",
//     height: "100%",
//   },
//   searchBarChildBg: {
//     backgroundColor: Color.colorBrown,
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   khmFlexBox: {
//     justifyContent: "center",
//     textAlign: "center",
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
//   childBorder1: {
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   khmTypo: {
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//   },
//   thngLayout: {
//     height: 485,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   childBg: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   logoLayout: {
//     height: 79,
//     position: "absolute",
//   },
//   chaLnhTLayout: {
//     height: 19,
//     position: "absolute",
//   },
//   mapPosition: {
//     left: 13,
//     width: 348,
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
//   iconPosition: {
//     top: 1,
//     position: "absolute",
//   },
//   hTrFlexBox: {
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
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
//   headerPosition: {
//     top: 19,
//     height: 15,
//     left: 17,
//     position: "absolute",
//   },
//   tngIHClr: {
//     color: Color.colorBrown,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//   },
//   giiLayout: {
//     height: 294,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   giiThiu1Typo: {
//     width: 94,
//     color: Color.colorBrown,
//     top: 0,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   chuynLayout: {
//     height: 304,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   contentLayout: {
//     height: 240,
//     top: 51,
//     width: 344,
//     position: "absolute",
//   },
//   childBorder: {
//     borderWidth: 1,
//     borderColor: Color.greyscaleBlack10,
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//     borderStyle: "solid",
//     left: 0,
//   },
//   aKhoaLayout: {
//     height: 40,
//     position: "absolute",
//   },
//   contentPosition: {
//     borderBottomLeftRadius: Border.br_3xs,
//     borderBottomRightRadius: Border.br_3xs,
//     top: 200,
//     height: 40,
//     backgroundColor: Color.greyscaleBlack10,
//     position: "absolute",
//   },
//   snPhPosition: {
//     top: 81,
//     height: 40,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   taiMiPosition: {
//     top: 121,
//     height: 40,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   tngLayout1: {
//     height: 229,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   tngLayout: {
//     height: 18,
//     position: "absolute",
//   },
//   tVnTTypo: {
//     letterSpacing: 0,
//     left: 24,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
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
//   footerLayout: {
//     height: 210,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   groupChildLayout: {
//     height: 120,
//     width: 345,
//     position: "absolute",
//   },
//   phnHiThngTypo: {
//     width: 225,
//     height: 40,
//     left: 15,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     left: "91.59%",
//     right: "5.22%",
//     width: "3.19%",
//     height: "12.5%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   searchBarChild: {
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     right: "0%",
//     width: "100%",
//   },
//   icon: {
//     height: "100%",
//     maxWidth: "100%",
//     width: "100%",
//   },
//   vector: {
//     left: "5.33%",
//     top: "35.79%",
//     right: "92%",
//     bottom: "34.04%",
//     width: "2.67%",
//     height: "30.18%",
//     position: "absolute",
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
//     justifyContent: "center",
//     position: "absolute",
//     top: "40.35%",
//     width: "11.2%",
//     height: "19.3%",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//   },
//   hTr: {
//     left: "85.87%",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     fontSize: FontSize.size_xs,
//     justifyContent: "center",
//     position: "absolute",
//     top: "40.35%",
//     width: "11.2%",
//     height: "19.3%",
//     color: Color.colorGainsboro_100,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//   },
//   searchBar: {
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorIcon: {
//     width: "4.27%",
//     right: "33.6%",
//     left: "62.13%",
//   },
//   vectorIcon1: {
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
//     bottom: "0%",
//     top: "0%",
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
//     justifyContent: "center",
//     textAlign: "center",
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   footerButton: {
//     top: 735,
//     height: 77,
//   },
//   thngTinSBChild: {
//     height: 485,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   bnhVinTh: {
//     top: 21,
//     fontSize: FontSize.size_xl,
//     width: 210,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 127,
//     height: 19,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//   },
//   chaLnhT: {
//     top: 45,
//     color: Color.colorGray_200,
//     width: 189,
//     fontFamily: FontFamily.robotoRegular,
//     left: 127,
//     height: 19,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//   },
//   logoIcon: {
//     width: 121,
//     top: 0,
//     left: 0,
//   },
//   logo: {
//     width: 337,
//     left: 20,
//     top: 15,
//   },
//   nhPhngKhm: {
//     top: 99,
//     borderRadius: 14,
//     height: 163,
//     width: 348,
//   },
//   lchSThanhTonBtnChild: {
//     left: 8,
//     backgroundColor: "rgba(180, 71, 73, 0.5)",
//     width: 48,
//     height: 48,
//     borderRadius: Border.br_3xs,
//     top: 0,
//     position: "absolute",
//   },
//   walletVectorIcon: {
//     height: "23.6%",
//     width: "39.5%",
//     top: "14.61%",
//     right: "27.17%",
//     bottom: "61.8%",
//     left: "33.33%",
//     position: "absolute",
//   },
//   lchSKhm: {
//     top: 65,
//     height: 24,
//     width: 60,
//     color: Color.colorBlack,
//     justifyContent: "center",
//     textAlign: "center",
//     left: 0,
//   },
//   lchSThanhTonBtn: {
//     top: 284,
//     left: 12,
//     height: 89,
//     width: 60,
//     position: "absolute",
//   },
//   image32Icon: {
//     height: 76,
//     borderRadius: Border.br_3xs,
//     width: 348,
//     left: 0,
//   },
//   mapChild: {
//     backgroundColor: Color.colorGray_500,
//     borderRadius: Border.br_3xs,
//     width: 348,
//     top: 0,
//     height: 77,
//     left: 0,
//     position: "absolute",
//   },
//   pNhCng: {
//     top: 24,
//     left: 11,
//     fontSize: FontSize.size_sm,
//     width: 244,
//     height: 36,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
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
//   vectorIcon2: {
//     height: "22.08%",
//     width: "4.89%",
//     top: "38.96%",
//     right: "23.28%",
//     bottom: "38.96%",
//     left: "71.84%",
//     position: "absolute",
//   },
//   mBn: {
//     top: 34,
//     left: 272,
//     width: 63,
//     height: 11,
//     color: Color.greyscaleBlackWhite,
//     textAlign: "left",
//   },
//   map: {
//     top: 395,
//     width: 348,
//     height: 77,
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
//     width: 344,
//     left: 17,
//   },
//   giLmVic1: {
//     width: 107,
//     height: 13,
//     left: 25,
//     top: 1,
//     position: "absolute",
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     textAlign: "left",
//   },
//   vectorIcon3: {
//     width: "4.36%",
//     right: "95.64%",
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//   },
//   vectorIcon4: {
//     height: "46.67%",
//     width: "3.49%",
//     top: "26.67%",
//     bottom: "26.67%",
//     left: "96.51%",
//     right: "0%",
//     position: "absolute",
//   },
//   header: {
//     height: 15,
//     width: 344,
//   },
//   giLmVic: {
//     top: 490,
//   },
//   giiThiuChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   phngKhmXy: {
//     top: 42,
//     height: 199,
//     width: 344,
//     left: 17,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_base,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   vectorIcon5: {
//     height: "93.75%",
//     width: "12.71%",
//     right: "87.29%",
//     bottom: "6.25%",
//     left: "0%",
//     top: "0%",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   giiThiu1: {
//     height: 16,
//     left: 24,
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
//     top: 581,
//   },
//   chuynKhoaChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   chuynKhoa1: {
//     left: 25,
//     height: 15,
//   },
//   vectorIcon6: {
//     width: "15.97%",
//     right: "84.03%",
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//   },
//   header2: {
//     top: 17,
//     width: 119,
//     height: 15,
//     left: 17,
//     position: "absolute",
//   },
//   contentChild: {
//     height: 235,
//     width: 344,
//     position: "absolute",
//   },
//   contentItem: {
//     width: 343,
//     backgroundColor: Color.greyscaleBlack10,
//     height: 40,
//     left: 1,
//     top: 40,
//   },
//   contentInner: {
//     width: 343,
//     left: 1,
//   },
//   rectangleView: {
//     top: 120,
//     width: 343,
//     backgroundColor: Color.greyscaleBlack10,
//     height: 40,
//     left: 0,
//   },
//   aKhoa: {
//     width: 126,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     top: 0,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   daLiu: {
//     width: 126,
//     top: 40,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   snPh: {
//     width: 126,
//   },
//   taiMi: {
//     width: 126,
//   },
//   niTngHp: {
//     top: 160,
//     width: 126,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   cpCu: {
//     width: 126,
//     top: 200,
//     height: 40,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     left: 20,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   content1: {
//     left: 15,
//   },
//   chuynKhoa: {
//     top: 881,
//   },
//   contentChild3: {
//     width: 344,
//     left: 0,
//   },
//   tStentThc: {
//     width: 221,
//   },
//   niSoiBung: {
//     width: 264,
//   },
//   content2: {
//     left: 17,
//   },
//   chuynKhm1: {
//     top: 4,
//     width: 115,
//     height: 8,
//     left: 24,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIcon7: {
//     width: "13.67%",
//     right: "86.33%",
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//   },
//   header3: {
//     width: 139,
//     height: 15,
//   },
//   chuynKhm: {
//     top: 1191,
//   },
//   tngIHTrChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   trongTrngHp: {
//     left: 16,
//     width: 342,
//     height: 41,
//     top: 51,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   image38Icon: {
//     width: 15,
//     height: 15,
//     left: 0,
//   },
//   tVnT: {
//     width: 294,
//     left: 24,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     textAlign: "left",
//     letterSpacing: 0,
//     fontSize: FontSize.size_mini,
//   },
//   tVn: {
//     top: 123,
//     width: 318,
//     left: 17,
//   },
//   tngIPhng: {
//     left: 24,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIcon8: {
//     width: "5.34%",
//     right: "94.66%",
//   },
//   tngI: {
//     top: 91,
//     width: 281,
//     left: 17,
//   },
//   hTrT: {
//     width: 179,
//     left: 24,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIcon9: {
//     width: "7.39%",
//     right: "92.61%",
//   },
//   hTrTKhm: {
//     top: 154,
//     width: 203,
//     left: 17,
//   },
//   vectorIcon10: {
//     width: "8.15%",
//     right: "91.85%",
//   },
//   website: {
//     top: 187,
//     width: 184,
//     left: 17,
//   },
//   tngIH: {
//     width: 112,
//     left: 24,
//     color: Color.colorBrown,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     top: 0,
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     textAlign: "left",
//   },
//   vectorIcon11: {
//     width: "7.35%",
//     right: "92.65%",
//   },
//   header4: {
//     top: 18,
//     width: 136,
//     left: 17,
//   },
//   tngIHTr: {
//     top: 845,
//   },
//   footerChild: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//   },
//   lnUTrang: {
//     left: 7,
//     width: 79,
//     height: 12,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     justifyContent: "center",
//     textAlign: "center",
//     fontSize: FontSize.size_xs,
//     position: "absolute",
//   },
//   vectorIcon12: {
//     height: "75%",
//     width: "8.14%",
//     top: "8.33%",
//     right: "91.86%",
//     bottom: "16.67%",
//     left: "0%",
//     position: "absolute",
//   },
//   lnUTrangParent: {
//     top: 169,
//     left: 144,
//     width: 86,
//     height: 12,
//     position: "absolute",
//   },
//   groupChild: {
//     borderWidth: 1,
//     borderColor: Color.greyscaleBlack10,
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.greyscaleBlackWhite,
//     top: 0,
//     borderStyle: "solid",
//     left: 0,
//   },
//   ccCuHi: {
//     width: 166,
//     left: 15,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoRegular,
//     top: 0,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//   },
//   quyTrnhThanh: {
//     top: 40,
//   },
//   phnHiThng: {
//     top: 80,
//   },
//   vectorIcon13: {
//     top: "10%",
//     bottom: "77.5%",
//   },
//   vectorIcon14: {
//     top: "43.33%",
//     bottom: "44.17%",
//   },
//   vectorIcon15: {
//     top: "76.67%",
//     bottom: "10.83%",
//   },
//   rectangleParent: {
//     left: 17,
//     top: 15,
//   },
//   footer: {
//     top: 1080,
//   },
//   thngTinSBParent: {
//     top: 101,
//     height: 634,
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
//   hospitaldetailscreen: {
//     backgroundColor: Color.colorWhitesmoke_100,
//     flex: 1,
//     height: 812,
//     width: "100%",
//   },
// });

// export default HospitalDetailScreen;
