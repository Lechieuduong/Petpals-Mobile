import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginScreen = (props) => {
    const onPress = () => {
        props.navigation.navigate('RegisterScreen');
    };

    const onPress2 = () => {
        props.navigation.navigate('ForgotPassScreen');
    };

    const onPress3 = () => {
        props.navigation.navigate('HomePageScreen');
    };
    
    return (
        <ScrollView scrollEnabled={false}>
            <View style={styles.loginscreen}>
                <Text style={styles.titleSize}>Xin chào,</Text>
                <Text style={styles.titleSize2}>mừng bạn trở lại</Text>
                <Text style={[styles.subtileSize, styles.subtileLayout]}>
                    Chăm sóc thú cưng dễ dàng - Đặt lịch ngay cùng chúng tôi
                </Text>
                
                <View style={[styles.emailTextInputPosition]}>
                    <TextInput style={[styles.emailTextInside]} placeholder="Email"></TextInput>
                </View>

                <View style={[styles.emailTextInputPosition2]}>
                    <TextInput style={[styles.emailTextInside]} placeholder="Mật khẩu" secureTextEntry={true}></TextInput>
                </View>

                <TouchableOpacity onPress={onPress2}>
                    <Text style={[styles.forgotPasswordText]}>Quên mật khẩu</Text>
                </TouchableOpacity>
                
                <View style={[styles.orPosition]}>
                    <View style={[styles.orChild, styles.orItemPosition]} />
                    <View style={[styles.orItem, styles.orItemPosition]} />
                    <Text style={styles.or1}>or</Text>
                </View>

                <View style={styles.googleComponent}>
                    <View style={styles.googleChildComponent} />
                    <View style={styles.googleParentComponent}>
                    <Text style={styles.google}>Google</Text>
                    <Image
                        style={[
                        styles.a951939c4ffc33e8c148af21Icon,
                        styles.topBarStatus1Position,
                        ]}
                        contentFit="cover"
                        source={require("../assets/google-icon.png")}
                    />
                    </View>
                </View>

                <View style={styles.facebookComponent}>
                    <View style={styles.googleChildComponent} />
                    <View style={styles.facebookParentComponent}>
                        <Text style={styles.facebook}>Facebook</Text>
                    </View>
                </View>

                <Text style={styles.bnChaCContainer}>Bạn chưa có tài khoản?</Text>
                
                <TouchableOpacity onPress={onPress} >
                    <Text style={styles.registerText}> Đăng ký ngay</Text>
                </TouchableOpacity>

                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={onPress3}>
                        <View style={styles.loginButtonChild}>
                            <Text style={styles.btnLogin}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    
    forgotPasswordText: {
        top: 345,
        fontSize: 10,
        fontWeight: "300",
        fontFamily: FontFamily.robotoBold,
        color: Color.colorBrown,
        left: 24,
        position: 'absolute'
    },

    registerText: {
        top: 547,
        left: 205,        
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
    
    topBarStatus1Position: {
        height: "100%",
        position: "absolute",
    },
    
    facebookComponent: {
        top: 475,
        left: 180,
        width: 150,
        height: 60,
        position: "absolute",
    },

    facebookParentComponent: {
        top: 25,
        left:  45,
        position: "absolute",
    },
  
    titleSize: {
        top: 90,
        fontSize: FontSize.size_21xl,
        lineHeight: 50,
        width: 250,
        left: 24,
        fontWeight: "600",
        fontFamily: FontFamily.robotoBold,
        color: Color.colorBlack,
        textAlign: "left",
        position: "absolute",
    },
    titleSize2: {
        top: 130,
        fontSize: FontSize.size_21xl,
        lineHeight: 50,
        width: 300,
        left: 24,
        fontWeight: "600",
        fontFamily: FontFamily.robotoBold,
        color: Color.colorBlack,
        textAlign: "left",
        position: "absolute",
    },

    subtileSize: {
        top: 200,
        color: Color.colorGray,
        textAlign: "justify",
        lineHeight: 20,
        fontSize: FontSize.size_sm,
        position: "absolute",
        fontFamily: FontFamily.robotoRegular,
    },
    subtileLayout: {
        width: 280,
        left: 24,
    },

    emailTextInputPosition: {
        width: 300,
        top: 260,
        left: 24,
        height: "10%",
    },

    emailTextInputPosition2: {
        width: 300,
        left: 24,
        height: "10%",
        top: 340,
        position: "absolute",
    },

    emailTextInside: {
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
    },

    
    orPosition: {
        height: 15,
        width: 295,
        top: 445,
        left: 32,
        position: "absolute",
    },

    googleComponent: {
        width: 150,
        top: 475,
        left: 24,
        height: 60,
        position: "absolute",
    },

    googleParentComponent: {
        height: "41.67%",
        top: "28.33%",
        right: "22.48%",
        bottom: "30%",
        left:  30,
        position: "absolute",
    },

    googleChildComponent: {
        borderRadius: Border.br_base,
        borderColor: Color.colorGainsboro,
        borderWidth: 1,
        borderStyle: "solid",
        height: "100%",
        position: "absolute",
        width: "100%",
    },

    a951939c4ffc33e8c148af21Icon: {
        width: "28.85%",
        right: "71.15%",
        maxWidth: "100%",
        maxHeight: "100%",
        left: "0%",
        bottom: "0%",
        height: "100%",
        overflow: "hidden",
    },

    

    facebook: {
        fontSize: FontSize.size_mini_8,
        lineHeight: 15,
        fontFamily: FontFamily.robotoBold,
        color: Color.colorRoyalblue,
        fontWeight: "700",
        textAlign: "center",
        textAlignVertical: 'center',
        position: "absolute",
    },

    

    




    

    

  orItemPosition: {
    borderTopWidth: 1,
    borderColor: Color.colorAliceblue,
    bottom: "41.18%",
    top: "52.94%",
    width: "37.17%",
    height: "5.88%",
    borderStyle: "solid",
    position: "absolute",
  },
  
  chmScThLayout1: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  
  
  google: {
    width: "62.03%",
    top: "22.4%",
    left: "37.97%",
    fontSize: FontSize.size_mini_8,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorRoyalblue,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  a951939c4ffc33e8c148af21Icon: {
    width: "28.85%",
    right: "71.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
  },
  
  orChild: {
    right: "62.83%",
    left: "0%",
  },
  orItem: {
    right: "-0.33%",
    left: "63.16%",
  },
  or1: {
    left: "48.03%",
    lineHeight: 17,
    fontFamily: FontFamily.robotoBold,
    color: "#c6cedd",
    opacity: 0.8,
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  
  loginscreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.greyscaleBlackWhite,
  },
});

export default LoginScreen;
