// import * as React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

// const ForgotPassScreen2 = () => {
//   return (
//     <View style={styles.forgotpassscreen2}>
//       <View style={[styles.component7, styles.componentLayout]}>
//         <View style={[styles.component7Child, styles.childPosition]} />
//         <Text style={[styles.tLiMt, styles.tLiMtTypo]}>Đặt lại mật khẩu</Text>
//       </View>
//       <View style={[styles.form, styles.componentLayout]}>
//         <View style={[styles.formChild, styles.childPosition]} />
//         <Text style={[styles.newPassword, styles.qunMtKhuFlexBox]}>
//           Mật khẩu mới
//         </Text>
//       </View>
//       <View style={[styles.component8, styles.componentLayout]}>
//         <View style={[styles.formChild, styles.childPosition]} />
//         <Text style={[styles.newPassword, styles.qunMtKhuFlexBox]}>
//           Xác nhận mật khẩu
//         </Text>
//       </View>
//       <Text style={[styles.qunMtKhu, styles.qunMtKhuFlexBox]}>
//         Quên mật khẩu
//       </Text>
//       <Text style={[styles.chmScTh, styles.chmScThLayout]}>
//         Chăm sóc thú cưng dễ dàng - Đặt lịch ngay cùng chúng tôi
//       </Text>
//       <Text style={[styles.bnCContainer, styles.qunMtKhuFlexBox]}>
//         <Text style={styles.bnC}>Bạn đã có tài khoản rồi?</Text>
//         <Text style={[styles.ngNhp, styles.tLiMtTypo]}>
//           <Text style={styles.text}>{` `}</Text>
//           <Text style={styles.ngNhp1}>Đăng nhập</Text>
//         </Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   componentLayout: {
//     height: 60,
//     width: 327,
//     left: 24,
//     position: "absolute",
//   },
//   childPosition: {
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   tLiMtTypo: {
//     fontWeight: "700",
//     fontFamily: FontFamily.robotoBold,
//   },
//   qunMtKhuFlexBox: {
//     textAlign: "left",
//     position: "absolute",
//   },
//   chmScThLayout: {
//     lineHeight: 21,
//     fontSize: FontSize.size_sm,
//   },
//   component7Child: {
//     borderRadius: Border.br_11xl_5,
//     backgroundColor: Color.colorBrown,
//   },
//   tLiMt: {
//     top: "26.67%",
//     left: "32.11%",
//     fontSize: FontSize.size_base,
//     lineHeight: 29,
//     color: Color.greyscaleBlackWhite,
//     textAlign: "center",
//     fontFamily: FontFamily.robotoBold,
//     position: "absolute",
//     fontWeight: "700",
//   },
//   component7: {
//     top: 728,
//   },
//   formChild: {
//     borderRadius: Border.br_base,
//     borderStyle: "solid",
//     borderColor: Color.greyscaleBlack10,
//     borderWidth: 1,
//   },
//   newPassword: {
//     top: "33.33%",
//     left: "7.34%",
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     color: Color.greyscaleBlack30,
//     lineHeight: 21,
//     fontSize: FontSize.size_sm,
//   },
//   form: {
//     top: 308,
//   },
//   component8: {
//     top: 384,
//   },
//   qunMtKhu: {
//     top: 90,
//     fontSize: FontSize.size_21xl,
//     lineHeight: 56,
//     fontWeight: "600",
//     width: 331,
//     color: Color.colorBlack,
//     fontFamily: FontFamily.robotoBold,
//     left: 24,
//     textAlign: "left",
//   },
//   chmScTh: {
//     top: 234,
//     color: Color.colorGray_100,
//     textAlign: "justify",
//     fontFamily: FontFamily.robotoRegular,
//     width: 327,
//     fontSize: FontSize.size_sm,
//     left: 24,
//     position: "absolute",
//   },
//   bnC: {
//     color: Color.colorGray_200,
//     fontFamily: FontFamily.robotoRegular,
//   },
//   text: {
//     color: Color.colorBlack,
//   },
//   ngNhp1: {
//     color: Color.colorBrown,
//   },
//   ngNhp: {
//     fontFamily: FontFamily.robotoBold,
//   },
//   bnCContainer: {
//     top: "84.24%",
//     left: "24.8%",
//     fontSize: FontSize.size_xs,
//   },
//   forgotpassscreen2: {
//     backgroundColor: Color.greyscaleBlackWhite,
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default ForgotPassScreen2;
