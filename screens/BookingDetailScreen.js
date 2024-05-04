import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BookingDetailScreen = (props) => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onPress = () => {
    props.navigation.navigate("BookingStep5Screen");
  };

  const onPress1 = () => {
    props.navigation.navigate("LoginScreen");
  };

  const onPress2 = () => {
    props.navigation.navigate("BookingStep1Screen");
  };

  const onPress3 = () => {
    props.navigation.navigate("HomePageScreen");
  };
  

  return (
    <View style={styles.bookingstep1screen}>
      <View style={styles.header}>
        <Text style={styles.selectHeader}>Thông tin phiếu khám</Text>
        <TouchableOpacity onPress={onPress}>
            <Image
            style={{ height: 15, width: 15, top: 33, alignSelf: "flex-start", left: 20 }}
            contentFit="cover"
            source={require("../assets/cancel1.png")}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress1}>
        <Image
          style={styles.supportIcon}
          contentFit="contain"
          source={require("../assets/share1.png")}
        />
        </TouchableOpacity>
      </View>

      

      <View style={{ height: 650, width: "100%" }}>
        <ScrollView contentContainerStyle={{ height: 1150 }}>
            <View style={{ height: 220, width: 330, backgroundColor: "white", alignSelf: "center", top: 100, borderRadius: 10}}>
                <Text style={{textAlign: "center",top: 10, fontSize: 15}}>Bệnh viện thú y Petpals</Text>
                <View style={{ alignSelf: "flex-start", left: 80, top: 20}}>
                    <Text style={{ fontSize: 20}}>STT</Text>
                    <Text style={{color: Color.colorGreen, left: 5, fontSize: 40}}>1</Text>
                </View>
                <View style={{ alignSelf: "flex-end", right: 50, top: -35}}>
                    <Image
                        style={{ height: 100, width: 100, top: -13 }}
                        contentFit="contain"
                        source={require("../assets/image-46.png")}
                    />
                </View>
                <View style={{ top: -40, left: 20 , backgroundColor: '#BBFDC6', borderRadius: 10, height: 20, width: 300 }}>
                    <Text style={{ color: "#4CD964", textAlign: "center", left: 4, fontSize: 12, top: 2 }}>Đã đặt lịch</Text>
                </View>
                <View style={{ top: -54, left: 25 , backgroundColor: '#4CD964', borderRadius: 10, height: 8, width: 8, }}/>
                <Text style={{ top: -40, left: 25 , color: '#4CD964', borderRadius: 10, height: 50, width: 300, }}>Đã đặt lịch. Lịch khám đã được đặt bởi bạn. Để được hỗ trợ vui lòng liên hệ <Text style={{ color: Color.colorBrown}}>1900-8888</Text></Text>
            </View>
            <View style={{ height: 160, width: 330, backgroundColor: "white", alignSelf: "center", top: 100, borderRadius: 10}}>
            <View style={{ alignSelf: "flex-start", left: 20, top: 20}}>
                <Text>Mã phiếu khám</Text>
                <Text style={{ top: 15}}>Ngày khám</Text>
                <Text style={{ top: 30}}>Giờ đăng ký khám</Text>
                <Text style={{ top: 45}}>Giờ khám dự kiến</Text>
            </View>
            <View style={{ alignSelf: "flex-end", right: 20, top: -35}}>
                <Text style={{textAlign: "right", top: -15}}>YMA2403281414</Text>
                <Text style={{textAlign: "right"}}>28/04/2024</Text>
                <Text style={{textAlign: "right", top: 15}}>09:00 - 12:00 (Buổi sáng)</Text>
                <Text style={{textAlign: "right", top: 30, color: Color.colorGreen}}>09:00</Text>
            </View>
            </View>

            <Text
              style={{
                top: 120,
                left: 15,
                fontSize: 15,
                fontFamily: FontFamily.robotoBold
              }}
            >
              Thông tin khách hàng
            </Text>

            <View style={{ height: 120, width: 330, backgroundColor: "white", alignSelf: "center", top: 140, borderRadius: 10}}>
            <View style={{ alignSelf: "flex-start", left: 20, top: 20}}>
                <Text>Mã khách hàng</Text>
                <Text style={{ top: 15}}>Họ và tên</Text>
                <Text style={{ top: 30}}>Số điện thoại</Text>
            </View>
            <View style={{ alignSelf: "flex-end", right: 20, top: -15}}>
                <Text style={{textAlign: "right", top: -15, color: Color.colorBrown}}>YMA2403281414</Text>
                <Text style={{textAlign: "right"}}>Dương Lê</Text>
                <Text style={{textAlign: "right", top: 15}}>0918792787</Text>
            </View>
            </View>

            <Text
              style={{
                top: 155,
                left: 15,
                fontSize: 15,
                fontFamily: FontFamily.robotoBold
              }}
            >
              Thông tin thú cưng
            </Text>

            <View style={{ height: 155, width: 330, backgroundColor: "white", alignSelf: "center", top: 170, borderRadius: 10}}>
            <View style={{ alignSelf: "flex-start", left: 20, top: 20}}>
                <Text>Số thứ tự</Text>
                <Text style={{ top: 15}}>Tên</Text>
                <Text style={{ top: 30}}>Chủng loại</Text>
                <Text style={{ top: 45}}>Giống loài</Text>

            </View>
            <View style={{ alignSelf: "flex-end", right: 20, top: -20}}>
                <Text style={{textAlign: "right", top: -30, color: Color.colorBrown}}>1</Text>
                <Text style={{textAlign: "right", top: -15}}>Trần</Text>
                <Text style={{textAlign: "right"}}>Chó</Text>
                <Text style={{textAlign: "right", top: 15}}>Husky</Text>

            </View>
            </View>


            <Text
              style={{
                top: 180,
                left: 15,
                fontSize: 15,
              }}
            >
              Thông tin hỗ trợ đặt khám
            </Text>
            <View style={{ alignSelf: "flex-start", left: 1, top: 50}}>
                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/vector73.png")}
                />
                <Text style={{ left: 50, top: 122} }>Chat với CSKH</Text>

                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/vector75.png")}
                />
                <Text style={{ left: 50, top: 122} }>Quy trình hủy lịch / hoàn tiền</Text>

                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/vector76.png")}
                />
                <Text style={{ left: 50, top: 122} }>Một số câu hỏi thường gặp</Text>

                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/vector77.png")}
                />
                <Text style={{ left: 50, top: 122} }>Báo cáo sự cố</Text>

                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/folder-2.png")}
                />
                <Text style={{ left: 50, top: 122} }>Hướng dẫn đặt khám</Text>

                <Image
                    style={{ width: 18, height: 18, left: 15, top: 140}}
                    contentFit="contain"
                    source={require("../assets/folder-2.png")}
                />
                <Text style={{ left: 50, top: 122} }>Hướng dẫn thanh toán</Text>
            </View>
            <View style={{ alignSelf: "flex-end", left: 1, top: -160}}>
                <Image
                    style={{ width: 14, height: 17, right: 15, top: 135}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
               <Image
                    style={{ width: 14, height: 17, right: 15, top: 155}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
                <Image
                    style={{ width: 14, height: 17, right: 15, top: 175}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
                <Image
                    style={{ width: 14, height: 17, right: 15, top: 195}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
                <Image
                    style={{ width: 14, height: 17, right: 15, top: 215}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
                <Image
                    style={{ width: 14, height: 17, right: 15, top: 235}}
                    contentFit="contain"
                    source={require("../assets/vector74.png")}
                />
            </View>
        </ScrollView>
      </View>

      <View style={{ height: 100, backgroundColor: "white", top: 20 }}>
        <TouchableOpacity
        onPress={onPress2}
          style={{
            right: 30,
            width: 300,
            backgroundColor: Color.colorBrown,
            height: 50,
            alignSelf: "flex-end",
            top: 20,
            borderRadius: 10,
            
          }}
        >
          <Text style={{ color: "white", textAlign: "center", top: 15 }}>
            Đặt lịch khám khác
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    notificationContainer: {
        borderLeftColor: Color.colorBrown,
        borderStartWidth: 5,
        width: 330,
        alignSelf: "center",
        top: 80,
        height: 75,
        backgroundColor: '#FADADD', // Màu hồng nhạt
        borderRadius: 5, // Viền bo tròn
        padding: 10, // Đệm xung quanh nội dung
        margin: 10, // Khoảng cách xung quanh hộp thoại
      },
      notificationText: {
        color: '#000', // Màu chữ đen
        fontSize: 14, // Cỡ chữ
        textAlign: 'left', // Căn giữa nội dung
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

  emailTextInputPosition2: {
    width: 300,
    left: 24,
    height: "10%",
    top: 500,
    position: "absolute",
},
  phone: {
    left: -18,
    top: -35,
    fontSize: 15,
  },
  vectorIcon7: {
    height: 14,
    width: 14,
    left: -73,
    top: -20,
  },
  birthday: {
    top: 47,
    top: -30,
    fontSize: 15,
  },
  vectorIcon6: {
    left: -73,
    top: -15,
    width: 15,
    height: 17,
  },
  name: {
    top: -20,
    left: -50,
    fontSize: 15,
    fontWeight: "500",
  },
  image48Icon: {
    left: -120,
    top: 30,
    width: 54,
    height: 54,
  },
  rectangleContainer: {
    top: 10,
    left: 15,
    width: 330,
    height: 165,
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: Color.colorGainsboro,
    borderWidth: 0.5,
    flexDirection: "row",
  },
  mingcuteuserAddFillIcon: {
    left: 15,
    top: 10,
    height: 15,
    width: 15,
  },
  groupItem: {
    top: 10,
    left: 40,
    width: 100,
    height: 35,
    borderRadius: 10,
    backgroundColor: Color.colorBrown,
  },
  toMi: {
    top: 9,
    left: 40,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
    display: "flex",
    color: Color.greyscaleBlackWhite,
    position: "absolute",
  },
  createNew: {
    borderColor: Color.greyscaleBlack30,
    borderWidth: 0.5,
    height: 50,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    top: 72,
  },
  createNewText: {
    left: 20,
    width: 200,
    top: 10,
  },
  container: {
    left: -234,
    top: 130,
    width: 330,
    height: 200,
    backgroundColor: "white",
  },
  timeSlot1: {
    left: 10,
    top: 30,
    width: 100,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  timeSlot: {
    left: 10,
    top: 20,
    width: 100,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    left: 10,
    color: "black",
  },
  selectedTimeSlot: {
    backgroundColor: Color.colorBrown,
  },
  selectedTimeSlot1: {
    backgroundColor: Color.colorBrown,
  },
  selectedText: {
    color: "white",
  },
  labelMorning: {
    left: 10,
    top: 10,
    fontWeight: "bold",
    marginRight: 8,
  },
  labelAfternoon: {
    left: 10,
    top: 25,
    fontWeight: "bold",
    marginRight: 8,
  },
  icon: {
    fontSize: 20,
  },
  instruction: {
    top: 15,
    left: 25,
  },
  hand: {
    top: 30,
    left: 10,
    width: 12,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    top: 20,
    left: -30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
  },
  circle1: {
    top: -20,
    left: 1,
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: Color.colorBrown,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    top: -20,
    width: 12,
    height: 12,
    borderRadius: 30,
    left: -20,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  square1: {
    top: -20,
    width: 12,
    height: 12,
    borderRadius: 30,
    left: -20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    top: 2,
    left: 65,
    width: 100,
    height: 20,
    fontSize: 12,
    color: "black",
  },
  squareText: {
    top: 2,
    left: 65,
    width: 100,
    height: 20,
    fontSize: 12,
    color: "black",
  },
  prompt: {
    left: 40,
    top: -7,
    color: "gray",
  },
  calendarDescription: {
    top: 10,
    width: 330,
    left: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    fontSize: 10,
    height: 80,
    backgroundColor: "white",
  },
  vectorIcon2: {
    top: 10,
    height: 17,
    width: 9,
    left: 30,
  },
  vectorIcon3: {
    top: 10,
    height: 17,
    width: 9,
    left: 50,
  },
  vectorIcon4: {
    top: 10,
    height: 17,
    width: 9,
    left: 100,
  },
  calendar: {
    top: 10,
    width: 330,
    left: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontSize: 10,
    height: 330,
  },
  contentContainer: {
    top: 3,
    height: 40,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    top: 9,
    left: 20,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.colorBrown,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circle2: {
    top: 9,
    left: 40,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.colorBrown,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circle3: {
    top: 9,
    left: 50,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.colorBrown,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circle4: {
    top: 9,
    left: 50,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.colorBrown,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circle5: {
    top: 9,
    left: -15,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.colorGreen,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  triangle: {
    top: 15,
    left: -50,
    height: 1,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Color.colorGreen,
    transform: [{ rotate: "360deg" }],
  },
  number: {
    color: "white",
  },
  label: {
    top: -12,
    left: 50,
    color: "black",
  },
  label2: {
    top: -12,
    width: 80,
    left: 70,
    color: "black",
  },
  label3: {
    top: -12,
    width: 80,
    left: 80,
    color: "black",
  },
  label4: {
    top: -12,
    width: 80,
    left: 80,
    color: "black",
  },
  label5: {
    top: -12,
    width: 80,
    left: 15,
    color: "black",
  },
  selectText2: {
    color: Color.colorBrown,
    left: 100,
    top: -10,
    fontSize: 15,
  },
  button: {
    top: 80,
    width: 330,
    height: 165,
    left: 15,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    backgroundColor: "white",
  },
  active: {
    borderColor: Color.colorBrown,
  },
  inactive: {
    borderColor: "#D9D9D9",
  },
  buttonText: {
    color: "black",
    top: 10,
    left: -100,
    fontSize: 15,
  },
  selectedTextContainer: {
    position: "absolute",
    top: 0,
    right: 10,
    height: 15,
    width: 130,
    backgroundColor: Color.colorBrown,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  selectedText: {
    color: "white",
    bottom: 5,
    height: 12,
    fontSize: 10,
    textAlign: "center",
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: Color.colorBrown,
    zIndex: 1,
    position: "absolute",
  },

  selectHeader: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    verticalAlign: "middle",
    fontFamily: FontFamily.robotoBold,
    color: Color.greyscaleBlackWhite,
    fontWeight: "600",
    top: 50,
  },

  cancelIcon: {
    verticalAlign: "middle",
    height: 15,
    width: 15,
    top: 32,
    left: 30,
  },

  supportIcon: {
    top: 15,
    width: 18,
    height: 20,
    verticalAlign: "middle",
    left: 325,
  },

  supportText: {
    top: 15,
    left: 300,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_base,
    color: Color.greyscaleBlackWhite,
  },

  topBarStatus1: {
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  topBarStatus: {
    top: 0,
    height: 44,
  },
  bookingstep1screen: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default BookingDetailScreen;
