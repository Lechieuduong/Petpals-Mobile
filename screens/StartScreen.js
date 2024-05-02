import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const StartScreen = (props) => {

  const onPress = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.startscreen}>
      <Text style={[styles.mainTitleSize, styles.mainTitleTypo]}>
        Đặt lịch khám cho thú cưng của bạn 1
      </Text>
      <View style={styles.imageSlider}>
        
        <Image
          style={[styles.imageSliderChild, styles.imageSliderChildLayout]}
          contentFit="cover"
          source={require("../assets/frame-1.png")}
        />
        <Image
          style={[styles.pageIndicatorIcon, styles.imageSliderChildLayout]}
          contentFit="cover"
          source={require("../assets/page-indicator.png")}
        />
      </View>
      <Text style={[styles.subtitleSize, styles.subtitlePosition]}>
        Trở thành thành viên để trải nghiệm những tiện ích chăm sóc sức khỏe cho
        thú cưng của bạn từ Petpals
      </Text>
      <TouchableOpacity onPress={onPress}>
          <View style={[styles.registerButton, styles.registerButtonPosition]}>
          <View style={[styles.registerButtonChild, styles.registerButtonChildPosition]} />
            <Text style={[styles.registerButtonText, styles.registerButtonTextTypo]}>Đăng ký ngay</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main title
  mainTitleTypo: {
    fontFamily: FontFamily.robotoBold,
    position: "absolute"
  },
  mainTitleSize: {
    top: 70,
    fontSize: 40,
    lineHeight: 55,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    width: 350,
    left: 35
  },
  // Image Slider
  imageSlider: {
    top: 220,
    left: 25,
    width: 320,
    height: 460,
    position: "absolute",
  },
  imageSliderChild: {
    height: "60%",
    bottom: "30%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  imageSliderChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  // Page Indicator
  pageIndicatorIcon: {
    height: 8,
    width: "13.7%",
    top: "80%",
    right: "50%",
    left: 135,
  },
  // Subtitle
  subtitleSize: {
    top: 520,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: "#898989",
    textAlign: 'center',
  },
  subtitlePosition: {
    width: 300,
    left: 32,
    position: "absolute",
    alignContent: "center"
  },
  // Register button
  registerButton: {
    top: 650,
    height: 60,
  },
  registerButtonPosition: {
    width: 300,
    left: 31,
    position: "absolute",
  },
  registerButtonChild: {
    borderRadius: Border.br_11xl_5,
    backgroundColor: Color.colorBrown,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  registerButtonChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  registerButtonText: {
    top: "27%",
    left: "35%",
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.greyscaleBlackWhite,
    textAlign: "center",
  },
  registerButtonTextTypo: {
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
});

export default StartScreen;
