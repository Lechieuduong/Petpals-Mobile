import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BookingStep4Screen = (props) => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);


  const onPress = () => {
    props.navigation.navigate("HomePageScreen");
  };

  const onPress1 = () => {
    props.navigation.navigate("HomePageScreen");
  };

  const onPress2 = () => {
    props.navigation.navigate("BookingStep1Screen");
  };

  const onPress3 = () => {
    props.navigation.navigate("BookingStep2Screen");
  };

  const onPress5 = () => {
    props.navigation.navigate("BookingStep3Screen");
  };

  const onPress4 = () => {
    props.navigation.navigate("BookingStep5Screen");
  };

  const handlePress = () => {
    // if (isActive) {
    //   navigation.navigate("BookingStep2Screen");
    // } else {
      setIsActive((current) => !current);
    // }
  };

  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.bookingstep1screen}>
        <View style={styles.header}>
          <Text style={styles.selectHeader}>Chọn Hồ sơ</Text>
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.cancelIcon}
              contentFit="cover"
              source={require("../assets/vector54.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress1}>
            <Text style={styles.supportText}>Hỗ trợ</Text>
          </TouchableOpacity>
          <Image
            style={styles.supportIcon}
            contentFit="cover"
            source={require("../assets/vector55.png")}
          />
        </View>
        
        <View style={{ width: 400, height: 40, top: 75, left: -10 }}>
            <ScrollView horizontal>
              <TouchableOpacity onPress={onPress2} style={{ width: 60 }}>
                <View style={styles.circle}>
                  <Text style={styles.number}>1</Text>
                </View>
                <Text style={styles.label}>Cơ sở</Text>
              </TouchableOpacity>

              <Image
                style={{top: 12, height: 17, width: 9, left: 30}}
                contentFit="cover"
                source={require("../assets/vector56.png")}
              />

              <TouchableOpacity onPress={onPress3} style={{ width: 100 }}>
                <View style={styles.circle2}>
                  <Text style={styles.number}>2</Text>
                </View>
                <Text style={styles.label2}>Ngày khám</Text>
              </TouchableOpacity>

              <Image
                style={{top: 12, height: 17, width: 9, left: 40}}
                contentFit="cover"
                source={require("../assets/vector56.png")}
              />

              <TouchableOpacity onPress={onPress5} style={{ width: 100 }}>
                <View style={styles.circle3}>
                  <Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.label3}>Giờ khám</Text>
              </TouchableOpacity>

              <Image
                style={{top: 12, height: 17, width: 9, left: 40}}
                contentFit="cover"
                source={require("../assets/vector56.png")}
              />
              <View style={{ width: 150 }}>
                <View style={styles.circle4}>
                  <Text style={styles.number}>4</Text>
                </View>
                <Text style={styles.label4}>Hồ sơ</Text>
              </View>
              
            </ScrollView>
          </View>
          
          <View style={styles.createNew}>
            <Text style={styles.createNewText}>
              Chọn một hồ sơ trong danh sách hoặc tạo mới hồ sơ khách hàng
            </Text>
            <View style={styles.groupItem}>
              <Image
                style={styles.mingcuteuserAddFillIcon}
                contentFit="cover"
                source={require("../assets/mingcuteuseraddfill.png")}
              />
              <Text style={styles.toMi}>Tạo mới</Text>
            </View>
          </View>

          <TouchableOpacity
            onPressIn={handlePress}
            style={[styles.button, isActive ? styles.active : styles.inactive]}
          >
            <Image
              style={styles.image48Icon}
              contentFit="cover"
              source={require("../assets/image-48.png")}
            />
            <Text style={styles.name}>Dương Lê</Text>
            <Image
              style={styles.vectorIcon6}
              contentFit="cover"
              source={require("../assets/vector64.png")}
            />
            <Text style={styles.birthday}>02/03/2002 - Nam</Text>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require("../assets/vector65.png")}
            />
            <Text style={styles.phone}>0918792787</Text>
            <View style={{ width: 30, height: 15, backgroundColor: Color.colorBrown, borderRadius: 10, top: -50, left: -120}}>
              <Text style={{ color: "white", textAlign: "center", fontSize: 10 }}>Tôi</Text>
            </View>
            <View style={{ width: 100, height: 40, backgroundColor: Color.colorGainsboro, borderRadius: 10, top: -25, left: -98 }}>
              <Text style={{textAlign: "center", top: 10}}>
                Xem chi tiết
              </Text>
            </View>
            {isActive && (
              <View style={styles.selectedTextContainer}>
                <Text style={styles.selectedText}>ĐANG CHỌN</Text>
              </View>
            )}
          </TouchableOpacity>
            <View style={{ top: 400, height: 100 , backgroundColor: "white" }}>
                <Text style={{ width: 170, top: 35, left: 15}}>Để nhập thông tin của thú cưng hãy nhấn nút “Tiếp tục”</Text>
                <TouchableOpacity onPress={onPress4} style={{width: 120, backgroundColor: Color.colorBrown, height: 50, alignSelf: "flex-end", right: 20, top: -5, borderRadius: 10}}>
                  <Text style={{ color: "white", textAlign: "center", top: 15 }}> Tiếp tục</Text>
                </TouchableOpacity>
            </View>
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
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
    height: 17
  },
  name: {
    top: -20,
    left: -50,
    fontSize: 15,
    fontWeight: "500"
  },
  image48Icon: {
    left: -120,
    top: 30,
    width: 54,
    height: 54
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
    width: 15
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
    top: 72
  },
  createNewText: {
    left: 20,
    width: 200,
    top: 10
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
    top: -5,
    width: 20,
    height: 23,
    verticalAlign: "middle",
    left: 270,
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

export default BookingStep4Screen;
