import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomePageScreen = (props) => {
    const onPress = () => {
        props.navigation.navigate('ServiceListScreen');
      };

      const onPress1 = () => {
        props.navigation.navigate('BookingListScreen');
      };

      const onPress2 = () => {
        props.navigation.navigate('DoctorListScreen');
      };

      const onPress3 = () => {
        props.navigation.navigate('BookingStep1Screen');
      };

      const onPress4 = () => {
        props.navigation.navigate('BookingListScreen');
      };

      const onPress5 = () => {
        props.navigation.navigate('ChatScreen');
      };

      const onPress6 = () => {
        props.navigation.navigate('ProfileScreen');
      };
    return (
            <View style={styles.homepagescreen}>
                <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Text style={styles.headerText}>
                                <Text style={{ color: "#fff"}}>{`Buổi tối an lành! `}</Text>
                                <Text style={{ color: "#fff", fontWeight: "bold"}}>Dương Lê</Text>
                            </Text>
                            <Image
                                style={styles.avatar}
                                contentFit="cover"
                                source={require("../assets/image-55.png")}
                            />
                        </View>
                        <View style={[styles.searchInput]}>
                            <TextInput style={[styles.emailTextInside]} placeholder="Tên bác sĩ, triệu chứng bệnh, chuyên khoa..."></TextInput>
                        </View>
                </View>

                <View style={{ height: 600, width: "100%" }}>
                    <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                        <Image style={{ height: 170, width: 340, alignSelf: "center", top: 10, borderRadius: 15}}
                            contentFit="cover"
                            source={require("../assets/banner.png")}/>
                        <View style={{ backgroundColor: "white", alignSelf: "center", width: 340, top: 20, height: 210, borderRadius: 15 }}>
                            <TouchableOpacity style={{ top: 10, left: 30, alignSelf: "flex-start"}} onPress={onPress2}>
                                <Image
                                        style={{ width: 50, height: 50 }}
                                        contentFit="cover"
                                        source={require("../assets/ellipse-142.png")}
                                    />
                                    <Text style={{top: 10, left: 7}}>Bác sĩ</Text>
                                    <Image
                                        style={{ width: 30, left: 10, top: -58, height: 30 }}
                                        contentFit="cover"
                                        source={require("../assets/vector8.png")}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: -89, alignSelf: "center"}} onPress={onPress3}>
                                <Image
                                    style={{ width: 50, height: 50, alignSelf: "center" }}
                                    contentFit="cover"
                                    source={require("../assets/ellipse-143.png")}
                                />
                                <Text style={{top: 5, width: 80, textAlign: "center"}}>Đặt khám bệnh viện</Text>
                                <Image
                                    style={{ width: 30, left: 25, top: -70, height: 30 }}
                                    contentFit="cover"
                                    source={require("../assets/vector7.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: -187, alignSelf: "flex-end", right: 30 }}>
                            <Image
                                    style={{left: 28, width: 50, height: 50, top: -12 }}
                                    contentFit="cover"
                                    source={require("../assets/ellipse-144.png")}
                                />
                                <Text style={{top: -10, left: 12, width: 80, textAlign: "center"}}>Đặt lịch spa-grooming</Text>
                                <Image
                                    style={{ width: 30, left: 38, top: -85, height: 30 }}
                                    contentFit="cover"
                                    source={require("../assets/vector6.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: -205, left: 30, alignSelf: "flex-start"}}>
                            <Image
                                    style={{ width: 50, height: 50 }}
                                    contentFit="cover"
                                    source={require("../assets/ellipse-145.png")}
                                />
                                <Text style={{left: -7,  width: 70, textAlign: "center"}}>Đặt lịch khách sạn</Text>
                                <Image
                                    style={{ width: 25, left: 12, top: -68, height: 25 }}
                                    contentFit="cover"
                                    source={require("../assets/vector5.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: -310, alignSelf: "center"}} onPress={onPress}>
                            <Image
                                    style={{ width: 50, height: 50 }}
                                    contentFit="cover"
                                    source={require("../assets/ellipse-146.png")}
                                />
                                <Text style={{left: 1, width: 49, textAlign: "center"}}>Dịch vụ khác</Text>
                                <Image
                                    style={{ width: 30, left: 11, top: -72, height: 30 }}
                                    contentFit="cover"
                                    source={require("../assets/vector4.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{top: -420, alignSelf: "flex-end", right: 30 }} onPress={onPress1}>
                            <Image
                                    style={{ width: 50, height: 50, left: 5 }}
                                    contentFit="cover"
                                    source={require("../assets/ellipse-147.png")}
                                />
                                <Text style={{ width: 60, textAlign: "center"}}>Kết quả đặt khám</Text>
                                <Image
                                    style={{ width: 30, left: 15, top: -70, height: 25 }}
                                    contentFit="cover"
                                    source={require("../assets/handbag.png")}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "auto", height: 150, top: 30, backgroundColor: "white" }}>
                                <TouchableOpacity style={{ width: "100%", height: 30, left: 20, top: 10 }} onPress={onPress2}>
                                    <Image
                                        style={{ width: 16, height: 18}}
                                        contentFit="cover"
                                        source={require("../assets/image-25.png")}
                                    />
                                    <Text style={{ top: -18, left: 25}}>Bác sĩ</Text>
                                </TouchableOpacity>
                            <ScrollView horizontal>
                                <TouchableOpacity style={{ left: 20, width: 100, top: 20}}>
                                    <Image
                                        style={{ width: 65, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets/bc-s-hng.png")}
                                    />
                                    <Text style={{textAlign: "center", left: -16, paddingTop: 5}}>Bác sĩ Hồng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 100, top: 20}}>
                                    <Image
                                        style={{ width: 65, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets/bc-s-hoa.png")}
                                    />
                                    <Text style={{textAlign: "center", left: -18, paddingTop: 5}}>Bác sĩ Hoa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 100, top: 20}}>
                                    <Image
                                        style={{ width: 65, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets/bc-s-trung.png")}
                                    />
                                    <Text style={{textAlign: "center", left: -16, paddingTop: 5}}>Bác sĩ Trung</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 100, top: 20}}>
                                    <Image
                                        style={{ width: 65, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets/bc-s-tng.png")}
                                    />
                                    <Text style={{textAlign: "center", left: -16, paddingTop: 5}}>Bác sĩ Tùng</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={{ width: "auto", height: 150, top: 40, backgroundColor: "white" }}>
                                <TouchableOpacity style={{ width: "100%", height: 30, left: 20, top: 10 }}>
                                    <Image
                                        style={{ width: 14.5, height: 15}}
                                        contentFit="cover"
                                        source={require("../assets/group.png")}
                                    />
                                    <Text style={{ top: -16, left: 25}}>Bệnh viện</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 150, top: 20}}>
                                    <View style={{ width: 75, height: 75, borderColor: "black", borderWidth: 1, borderRadius: 10}}>
                                        <Image
                                            style={{ width: 55, height: 35, alignSelf: "center", top: 20}}
                                            contentFit="cover"
                                            source={require("../assets/artboard-14removebgpreview.png")}
                                        />
                                    </View>
                                    <Text style={{textAlign: "center", left: 75, top: -70, fontSize: 18}}>Bệnh viện Petpals</Text>
                                    <Text style={{textAlign: "left", left: 85, top: -70, fontSize: 13, color: Color.colorGray}}>96 Định Công, Thanh Xuân, Hà Nội</Text>
                                </TouchableOpacity>
                        </View>

                        <View style={{ width: "auto", height: 150, top: 50, backgroundColor: "white" }}>
                                <TouchableOpacity style={{ width: "100%", height: 30, left: 20, top: 10 }}>
                                    <Image
                                        style={{ width: 17, height: 15}}
                                        contentFit="cover"
                                        source={require("../assets/vector2.png")}
                                    />
                                    <Text style={{ top: -16, left: 25}}>Dịch vụ</Text>
                                </TouchableOpacity>
                            <ScrollView horizontal>
                                <TouchableOpacity style={{ left: 20, width: 200, top: 20}}>
                                    <Image
                                        style={{ width: 90, height: 65 }}
                                        contentFit="cover"
                                        source={require("../assets/image-58.png")}
                                    />
                                    <Text style={{textAlign: "left", left: 100, top: -45,fontSize: 15}}>Spa - grooming</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 240, top: 20}}>
                                    <Image
                                        style={{ width: 90, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets//group-427322653.png")}
                                    />
                                    <Text style={{textAlign: "left", left: 100, top: -45,fontSize: 15}}>Khách sạn thú cưng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 200, top: 20}}>
                                    <Image
                                        style={{ width: 90, height: 65}}
                                        contentFit="cover"
                                        source={require("../assets/image-60.png")}
                                    />
                                    <Text style={{textAlign: "left", left: 100, top: -45,fontSize: 15}}>Khám bệnh</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={{ width: "auto", height: 600, top: 60, backgroundColor: "white" }}>
                                <TouchableOpacity style={{ width: "100%", height: 30, left: 20, top: 10 }}>
                                    <Image
                                        style={{ width: 17, height: 15}}
                                        contentFit="cover"
                                        source={require("../assets/vector1.png")}
                                    />
                                    <Text style={{ top: -16, left: 25}}>Tin y tế</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 330, top: 20, alignSelf: "center" }}>
                                    <Image
                                        style={{ width: 330, height: 190,  borderRadius:15 }}
                                        contentFit="cover"
                                        source={require("../assets/image-26.png")}
                                    />
                                    <Text style={{fontSize: 20, paddingTop: 5, left: 5}}>Nuôi thú cưng - liệu pháp cho sức khỏe tinh thần</Text>
                                    <Image
                                        style={{ width: 40, height: 40, top: 5}}
                                        contentFit="cover"
                                        source={require("../assets/bc-s-trung.png")}
                                    />
                                    <Text style={{fontSize: 15, top: -28, left: 50}}>TS.BS Nguyễn Xuân Tùng</Text>
                                </TouchableOpacity>
                            <ScrollView horizontal style={{ paddingTop: 10, width: "auto"}}>
                                <TouchableOpacity style={{ left: 10, width: 300, height: 160, borderRadius: 10, borderWidth: 1, alignSelf: "center"}}>
                                    {/* <Image
                                        style={{ width: 330, height: 160}}
                                        contentFit="cover"
                                        source={require("../assets/image-60.png")}
                                    /> */}
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 20, width: 300, height: 160, borderRadius: 10, borderWidth: 1, alignSelf: "center"}}>
                                    {/* <Image
                                        style={{ width: 330, height: 160}}
                                        contentFit="cover"
                                        source={require("../assets/image-60.png")}
                                    /> */}
                                </TouchableOpacity>
                            </ScrollView>
                                <TouchableOpacity style={{ width: 300, height: 50, borderRadius: 30, borderWidth: 1, borderColor: "gray", alignSelf: "center"}}>
                                    <Text style={{ textAlign: "center", top: 15}}>Xem các bài viết khác</Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>    
                </View>

                <View style={{ width: "100%", top: 700, height: 80, backgroundColor: "white", position: "absolute"}}>
                  <View style={{width: "25%", left: 10, top: 10}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector11.png")}
                        />
                        <Text style={{color: Color.colorBrown, textAlign: "center" }}>Trang chủ</Text>
                  </View>
                  <TouchableOpacity onPress={onPress4}>
                  <View style={{width: "25%", top: -27, left: 95}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector12.png")}
                        />
                        <Text style={{ textAlign: "center" }}>Lịch khám</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPress5}>
                  <View style={{width: "25%", top: -64, left: 180}}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector13.png")}
                        />
                        <Text style={{ textAlign: "center" }}>Tin nhắn</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPress6}>
                  <View style={{width: "25%", top: -101, left: 260 }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: "center"}}
                            contentFit="contain"
                            source={require("../assets/vector14.png")}
                        />
                        <Text style={{ textAlign: "center" }}>Tài khoản</Text>
                  </View>
                  </TouchableOpacity>
                  
                </View>
                
                    {/* <View style={{ width: "100%", top: 690, height: 69, position: "absolute"}}>
                    <TouchableOpacity>
                        <Image
                        style={{ width: 21, height: 21, top: 10}}
                        contentFit="cover"
                        source={require("../assets/vector48.png")}
                        />
                        <Text>Trang chủ</Text>
                    </TouchableOpacity>
                    <View style={styles.childPosition} />
                    
                    <Image
                    style={[styles.vectorIcon1, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector49.png")}
                    />
                    <Text style={styles.lchKhm}>Lịch khám</Text>
                    <Text style={[styles.tinNhn, styles.tinNhnTypo]}>Tin nhắn</Text>
                    <Text style={[styles.tiKhon, styles.tinNhnTypo]}>Tài khoản</Text>
                    <Image
                    style={[styles.vectorIcon2, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector13.png")}
                    />
                    <Image
                    style={[styles.vectorIcon3, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector14.png")}
                    />
                    <View style={[styles.footerItem, styles.footerItemPosition]} />
                </View>  */}
            </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Color.colorBrown,
        height: 130,
        width: "100%"
      },
      footerPosition: {
        width: 374,
        top: 690,
        height: 69,
        left: 0,
        position: "absolute",
      },
      vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        position: "absolute",
      },
      stt1FlexBox: {
        justifyContent: "center",
        textAlign: "center",
      },
      tinNhnTypo: {
        top: "56.52%",
        fontFamily: FontFamily.interRegular,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: FontSize.size_2xs,
        width: "15.24%",
        height: "24.64%",
        position: "absolute",
      },
      footerItemPosition: {
        backgroundColor: Color.foundationBrownBrown500,
        top: "0%",
        position: "absolute",
      },
      searchPosition: {
        width: 375,
        left: 0,
        position: "absolute",
      },
      tmTheoMPosition: {
        top: "17.54%",
        height: "64.91%",
        position: "absolute",
      },
      timeTypo: {
        fontSize: FontSize.size_mini,
        letterSpacing: 0,
      },
      vectorIconPosition: {
        bottom: "26.67%",
        maxHeight: "100%",
        overflow: "hidden",
        maxWidth: "100%",
        position: "absolute",
      },
      barPosition: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        width: "100%",
      },
      timePosition: {
        top: "50%",
        position: "absolute",
      },
      rectangleParentLayout: {
        height: 196,
        width: 347,
        left: 13,
        position: "absolute",
      },
      childPosition: {
        backgroundColor: Color.greyscaleBlackWhite,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%",
      },
      groupPosition: {
        borderRadius: Border.br_11xl,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%",
      },
      hyTypo: {
        fontSize: FontSize.size_smi,
        left: "19.1%",
        width: "70.79%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        letterSpacing: 0,
        position: "absolute",
      },
      khmLayout1: {
        height: "6.63%",
        fontSize: FontSize.size_mini,
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        letterSpacing: 0,
        position: "absolute",
      },
      khmLayout: {
        width: "39.48%",
        left: "4.61%",
        textAlign: "left",
      },
      textTypo: {
        left: "44.96%",
        width: "50.14%",
        textAlign: "right",
        height: "6.63%",
        fontSize: FontSize.size_mini,
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoRegular,
        letterSpacing: 0,
        position: "absolute",
      },
      dngLPosition: {
        top: "83.16%",
        height: "6.63%",
        fontSize: FontSize.size_mini,
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoRegular,
        letterSpacing: 0,
        position: "absolute",
      },
      vectorIcon: {
        right: "84.76%",
        left: "9.63%",
        bottom: "49.28%",
        top: "20.29%",
        width: "5.61%",
        height: "30.43%",
        maxHeight: "100%",
        maxWidth: "100%",
      },
      trangCh: {
        left: "5.08%",
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        fontSize: FontSize.size_2xs,
        top: "55.07%",
        width: "15.24%",
        height: "24.64%",
        justifyContent: "center",
        fontFamily: FontFamily.robotoRegular,
        letterSpacing: 0,
        position: "absolute",
      },
      lchKhm: {
        left: "30.21%",
        color: Color.foundationBrownBrown500,
        fontFamily: FontFamily.interRegular,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        letterSpacing: 0,
        fontSize: FontSize.size_2xs,
        top: "55.07%",
        width: "15.24%",
        height: "24.64%",
        position: "absolute",
      },
      tinNhn: {
        left: "55.35%",
      },
      tiKhon: {
        left: "80.21%",
      },
      vectorIcon1: {
        right: "59.36%",
        left: "35.03%",
        bottom: "49.28%",
        top: "20.29%",
        width: "5.61%",
        height: "30.43%",
        maxHeight: "100%",
        maxWidth: "100%",
      },
      vectorIcon2: {
        right: "34.22%",
        left: "60.16%",
        bottom: "49.28%",
        top: "20.29%",
        width: "5.61%",
        height: "30.43%",
        maxHeight: "100%",
        maxWidth: "100%",
      },
      vectorIcon3: {
        height: "31.45%",
        width: "5.8%",
        top: "18.84%",
        right: "9.39%",
        bottom: "49.71%",
        left: "84.81%",
      },
      footerItem: {
        height: "4.35%",
        width: "25.08%",
        right: "49.52%",
        bottom: "95.65%",
        left: "25.4%",
        borderBottomRightRadius: Border.br_8xs,
        borderBottomLeftRadius: Border.br_8xs,
      },
      footer: {
        top: 690,
        height: 69,
      },
      searchBarChild: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        width: "100%",
        backgroundColor: Color.foundationBrownBrown500,
      },
      searchBarItem: {
        width: "90.67%",
        right: "4.53%",
        bottom: "17.54%",
        left: "4.8%",
        borderRadius: Border.br_24xl,
        backgroundColor: Color.colorMaroon_200,
      },
      tmTheoM: {
        width: "79.73%",
        left: "16.53%",
        color: Color.colorGainsboro_200,
        textAlign: "left",
        top: "17.54%",
        height: "64.91%",
        position: "absolute",
        alignItems: "center",
        display: "flex",
        fontFamily: FontFamily.robotoRegular,
      },
      vectorIcon4: {
        height: "26.49%",
        top: "36.84%",
        right: "88.53%",
        bottom: "36.67%",
        left: "7.47%",
        width: "4%",
      },
      searchBar: {
        top: 73,
        height: 57,
      },
      lchKhm1: {
        width: "30.93%",
        left: "34.67%",
        fontSize: FontSize.size_base,
        fontWeight: "600",
        color: Color.greyscaleBlackWhite,
        fontFamily: FontFamily.robotoBold,
        alignItems: "center",
        display: "flex",
        letterSpacing: 0,
        justifyContent: "center",
        top: "0%",
        height: "100%",
        position: "absolute",
      },
      vectorIcon5: {
        height: "50%",
        top: "23.33%",
        right: "5.87%",
        left: "90.13%",
        width: "4%",
      },
      vectorIcon6: {
        height: "46.67%",
        width: "2.13%",
        top: "26.67%",
        right: "94.4%",
        left: "3.47%",
      },
      searchBar1: {
        top: 44,
        height: 30,
      },
      time: {
        marginTop: -9,
        fontFamily: FontFamily.robotoBold,
        color: Color.colorWhitesmoke_100,
        width: 54,
        fontSize: FontSize.size_mini,
        letterSpacing: 0,
        textAlign: "center",
        top: "50%",
        left: 0,
      },
      action: {
        height: "40.91%",
        width: "14.32%",
        top: "31.82%",
        right: "80.37%",
        bottom: "27.27%",
        left: "5.31%",
        overflow: "hidden",
        position: "absolute",
      },
      batteryIcon: {
        marginTop: -5.8,
        right: 1,
        width: 25,
        height: 12,
      },
      combinedShapeIcon: {
        width: 17,
        height: 11,
      },
      wiFiIcon: {
        width: 15,
        height: 11,
      },
      container: {
        marginTop: -6,
        right: 14,
        width: 68,
        height: 14,
        overflow: "hidden",
      },
      topBarStatus1: {
        top: "0%",
        bottom: "0%",
        right: "0%",
        height: "100%",
        position: "absolute",
      },
      topBarStatus: {
        top: 0,
        height: 44,
      },
      instanceChild: {
        borderRadius: Border.br_3xs,
      },
      groupChild: {
        backgroundColor: Color.colorLimegreen_300,
      },
      groupItem: {
        height: "33.33%",
        width: "8.99%",
        right: "84.27%",
        bottom: "33.33%",
        left: "6.74%",
        top: "33.33%",
        maxHeight: "100%",
        overflow: "hidden",
        maxWidth: "100%",
        position: "absolute",
      },
      tLch: {
        color: Color.colorForestgreen,
        height: "37.5%",
        left: "19.1%",
        width: "70.79%",
        top: "33.33%",
      },
      rectangleGroup: {
        height: "12.24%",
        width: "25.65%",
        top: "7.65%",
        right: "69.74%",
        bottom: "80.1%",
        left: "4.61%",
        position: "absolute",
      },
      stt1: {
        width: "12.1%",
        top: "10.71%",
        left: "84.15%",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
      },
      bnhVinTh: {
        top: "32.14%",
        fontWeight: "700",
        width: "51.01%",
        left: "4.61%",
        fontFamily: FontFamily.robotoBold,
        textAlign: "left",
      },
      giKhmD: {
        top: "55.61%",
        height: "6.63%",
        fontSize: FontSize.size_mini,
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        letterSpacing: 0,
        position: "absolute",
        fontFamily: FontFamily.robotoRegular,
      },
      text: {
        top: "56.12%",
        textAlign: "right",
      },
      text1: {
        top: "69.9%",
        textAlign: "right",
      },
      dngL: {
        left: "44.09%",
        textAlign: "right",
        width: "51.01%",
      },
      khnhHng: {
        width: "39.48%",
        left: "4.61%",
        textAlign: "left",
      },
      giKhm: {
        top: "69.39%",
        height: "6.63%",
        fontSize: FontSize.size_mini,
        alignItems: "center",
        display: "flex",
        color: Color.colorBlack,
        letterSpacing: 0,
        position: "absolute",
        fontFamily: FontFamily.robotoRegular,
      },
      artboard14RemovebgPreview4Icon: {
        height: "15.82%",
        width: "13.83%",
        top: "27.55%",
        right: "3.75%",
        bottom: "56.63%",
        left: "82.42%",
      },
      rectangleParent: {
        top: 7,
      },
      groupInner: {
        backgroundColor: Color.colorBrown_500,
      },
      hy: {
        height: "37.5%",
        left: "19.1%",
        width: "70.79%",
        top: "33.33%",
        color: Color.foundationBrownBrown500,
      },
      rectangleContainer: {
        top: 210,
      },
      rectangleView: {
        backgroundColor: Color.colorRoyalblue_400,
      },
      khm: {
        height: "41.67%",
        top: "29.17%",
        color: Color.colorRoyalblue_100,
      },
      rectangleParent1: {
        top: 413,
      },
      instanceParent: {
        top: 130,
        height: 613,
        overflow: "hidden",
      },
      calendarlistscreen: {
        backgroundColor: Color.colorWhitesmoke_100,
        flex: 1,
        height: 812,
        width: "100%",
      },
    vectorIconLayout: {
        bottom: "49.28%",
        top: "20.29%",
        width: "5.61%",
        height: "30.43%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        position: "absolute",
      },
    footerChild: {
        backgroundColor: Color.greyscaleBlackWhite,
        bottom: "0%",
        right: "0%",
        height: "100%",
        left: "0%",
        top: "0%",
        width: "100%",
      },
      footerIconPosition: {
        left: "0%",
        position: "absolute",
      },
      vectorIcon13: {
        right: "84.76%",
        left: "9.63%",
      },
    footer: {
        top: 743,
        height: 69,
        width: 374,
        left: 0,
        position: "absolute",
      },
    vectorIcon: {
        backgroundColor: "#fff",
        top: -50
    },
    searchInput: {
        top: 110,
        backgroundColor: Color.colorWhitesmoke,
    },
    emailTextInside: {
        borderRadius: 20,
        borderColor: Color.colorGainsboro,
        backgroundColor: Color.colorGainsboro,
        borderWidth: 1,
        height: 40,
        position: "absolute",
        flex: 1,
        width: 320,
        top: 0,
        left: 20,
        textAlign: "left",
        padding: 10,
    },
    searchLayout: {
        height: 41,
        width: 364,
        backgroundColor: Color.colorWhitesmoke,
        position: "absolute",
      },
    search: {
        top: 108,
        left: 5,
      },
  homepagescreen: {
    flex: 1,
    height: 820,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
  header: {
    width: "100%",
    height: 160,
    backgroundColor: Color.colorBrown
  },
  headerContent: {
    top: 65,
    width: 195,
    height: 35,
    left: 20,
    position: "absolute",
  },
  headerText: {
    left: 40,
    width: 100,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    height: 35,
    position: "absolute",
  },
  avatar: {
    top: "5.56%",
    right: "84.46%",
    bottom: "11.11%",
    borderRadius: Border.br_11xl,
    left: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buiTiAn: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  dngL: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_mini,
  }, 
  
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default HomePageScreen;
