import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RegisterScreen = (props) => {
  const [isChecked, setChecked] = useState(false);
  const onPress = () => {
    props.navigation.navigate('LoginScreen');
};
  return (
    <ScrollView style={{flex: 1}} scrollEnabled={false}>
      <View style={styles.registerscreen}>
        <Text style={styles.headerContentContainer}>
          <Text>Tạo tài khoản </Text>
          <Text style={{ color: Color.colorBrown }}>Petpals</Text>
        </Text>

        <Text style={styles.chmScTh}>
          Chăm sóc thú cưng dễ dàng - Đặt lịch ngay cùng chúng tôi
      </Text>

      <View style={styles.nameInputContainer}>
        <TextInput style={styles.nameTextInside} placeholder="Họ và tên của bạn"></TextInput>
      </View>

      <View style={styles.emailInputContainer}>
        <TextInput style={styles.nameTextInside} placeholder="Email"></TextInput>
      </View>

      <View style={styles.passwordInputContainer}>
        <TextInput style={styles.nameTextInside} placeholder="Mật khẩu" secureTextEntry={true}></TextInput>
      </View>

      <View style={styles.component5}>
          <Checkbox
            style={{ width: 15, height: 15, top: -20, left: 3 }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#911a1d' : undefined}
          />
          <View style={styles.checkBoxText}>
            <Text style={styles.tiNgContainer}>
              <Text style={{ color: Color.greyscaleBlack30 }}>{`Tôi đồng ý với `}</Text>
              <Text style={{ color: Color.colorBrown }}>Điều khoản dịch vụ</Text>
              <Text style={{ color: Color.greyscaleBlack30 }}>{` và `}</Text>
              <Text style={{ color: Color.colorBrown }}>Chính sách về quyền riêng tư</Text>
            </Text>
        </View>
      </View>

      <Text style={styles.bnChaCContainer}>Bạn đã có tài khoản rồi?</Text>
                
      <TouchableOpacity onPress={onPress} >
          <Text style={styles.registerText}> Đăng nhập</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
          <TouchableOpacity onPress={onPress}>
              <View style={styles.loginButtonChild}>
                  <Text style={styles.btnLogin}>Đăng ký ngay</Text>
              </View>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Header
  registerscreen: {
    backgroundColor: Color.greyscaleBlackWhite,
    flex: 1,
    height: 812,
  },
  headerContentContainer: {
    top: 90,
    fontSize: FontSize.size_21xl,
    lineHeight: 56,
    fontWeight: "600",
    width: 331,
    fontFamily: FontFamily.robotoBold,
    left: 24,
    textAlign: "left",
    textAlign: "left",
    position: "absolute",
  },

  // Content
  chmScTh: {
    width: 327,
    left: 24,
    position: "absolute",
    top: 234,
    color: Color.colorGray_100,
    textAlign: "justify",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
  },

  // Input
  nameInputContainer: {
    top: 300,
    width: 310,
    left: 24,
    position: "absolute",
  },

  nameTextInside: {
    borderRadius: Border.br_base,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    height: 60,
    position: "absolute",
    flex: 1,
    width: "100%",
    top: 0,
    left: 0,
    textAlign: "left",
    padding: 10,
  } ,

  emailInputContainer: {
    top: 370,
    width: 310,
    left: 24,
    position: "absolute",
  },

  passwordInputContainer: {
    top: 440,
    width: 310,
    left: 24,
    position: "absolute",
  },
  
  // Checkbox
  component5: {
    width: "100%",
    top: "67.12%",
    right: "89.87%",
    bottom: "31.16%",
    opacity: 1,
    left: "6.4%",
    position: "absolute",
  },

  checkBoxText: {
    top: -25,
    right: 50,
    left: 24,
    position: "absolute",
  },

  tiNgContainer: {
    lineHeight: 19,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },

  registerText: {
    top: 628,
    left: 210,        
    fontFamily: FontFamily.robotoBold,
    fontWeight: "500",
    color: Color.colorBrown,
},

  bnChaCContainer: {
    top: 630,
    left: 88,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },  

  loginButton: {
    top: 670,
    width: 300,
    left: 30,
    height: 60,
    position: "absolute"
  },
  loginButtonChild: {
      height: 60,
      width: 300,
      borderRadius: Border.br_11xl_5,
      backgroundColor: Color.colorLightpink,
  },
  btnLogin: {
      fontFamily: FontFamily.robotoBold,
      fontWeight: "700",
      top: "26.67%",
      fontSize: FontSize.size_base,
      lineHeight: 29,
      color: Color.greyscaleBlackWhite,
      textAlign: "center",
  },
});

export default RegisterScreen;
