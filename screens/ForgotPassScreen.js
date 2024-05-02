import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ForgotPassScreen = (props) => {
    const onPress = () => {
        props.navigation.navigate('RegisterScreen');
    };

  return (
    <View style={styles.forgotpassscreen}>
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.component7, styles.formLayout]}>
        <View style={[styles.component7Child, styles.childPosition]} />
        <Text style={[styles.tipTc, styles.tipTcTypo]}>Tiếp tục</Text>
      </View>
    </TouchableOpacity>
      <Text style={styles.qunMtKhu}>Quên mật khẩu</Text>
      <View style={[styles.form, styles.formLayout]}>
        <View style={[styles.formChild, styles.childPosition]} />
        <Text style={[styles.newPassword, styles.chmScThLayout]}>Email</Text>
      </View>
      <Text style={[styles.chmScTh, styles.chmScThLayout]}>
        Chăm sóc thú cưng dễ dàng - Đặt lịch ngay cùng chúng tôi
      </Text>
      <Text style={styles.bnCContainer}>
        <Text style={styles.bnC}>Bạn đã có tài khoản rồi?</Text>
        <Text style={[styles.ngNhp, styles.tipTcTypo]}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.ngNhp1}>Đăng nhập</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formLayout: {
    height: 60,
    width: 327,
    left: 24,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  tipTcTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  chmScThLayout: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  component7Child: {
    borderRadius: Border.br_11xl_5,
    backgroundColor: Color.colorBrown,
  },
  tipTc: {
    top: "26.67%",
    left: "40.98%",
    fontSize: FontSize.size_base,
    lineHeight: 29,
    color: Color.greyscaleBlackWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  component7: {
    top: 728,
  },
  qunMtKhu: {
    top: 90,
    fontSize: FontSize.size_21xl,
    lineHeight: 56,
    fontWeight: "600",
    width: 331,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    left: 24,
    position: "absolute",
  },
  formChild: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.greyscaleBlack10,
    borderWidth: 1,
  },
  newPassword: {
    top: "33.33%",
    left: "7.34%",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.greyscaleBlack30,
    textAlign: "left",
  },
  form: {
    top: 308,
  },
  chmScTh: {
    top: 234,
    color: Color.colorGray_100,
    textAlign: "justify",
    fontFamily: FontFamily.robotoRegular,
    width: 327,
    fontSize: FontSize.size_sm,
    left: 24,
  },
  bnC: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    color: Color.colorBlack,
  },
  ngNhp1: {
    color: Color.colorBrown,
  },
  ngNhp: {
    fontFamily: FontFamily.robotoBold,
  },
  bnCContainer: {
    top: "84.24%",
    left: "24.8%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  forgotpassscreen: {
    backgroundColor: Color.greyscaleBlackWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassScreen;
