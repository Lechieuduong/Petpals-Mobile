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
import { Calendar, LocaleConfig } from "react-native-calendars";

const BookingStep3Screen = (props) => {
  const [selected, setSelected] = useState("");

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

  const onPress4 = () => {
    props.navigation.navigate("BookingStep3Screen");
  };

  const [isActive, setIsActive] = useState(false);

  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(false);
  
  const handlePress = () => {
    if (selectedTimeSlot) {
      navigation.navigate("BookingStep4Screen");
    } else {
      setSelectedTimeSlot((current) => !current);
    }
  };
  const timeSlots = {
    morning: {
      label: 'Buổi sáng',
      times: '09:00 - 12:00',
      icon: '☀️' // Replace with actual sun icon
    }
  };

  const selectTimeSlot = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handlePressTime = () => {
    setSelectedTimeSlot(current => !current);
  };

  const handlePressTime1 = () => {
    setSelectedTimeSlot(current => !current);
  };
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.bookingstep1screen}>
        <View style={styles.header}>
          <Text style={styles.selectHeader}>Chọn Giờ khám</Text>
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

          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={onPress2} style={{ width: 60 }}>
              <View style={styles.circle}>
                <Text style={styles.number}>1</Text>
              </View>
              <Text style={styles.label}>Cơ sở</Text>
            </TouchableOpacity>

            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector56.png")}
            />
            <TouchableOpacity onPress={onPress3} style={{ width: 60 }}>
              <View style={styles.circle2}>
                <Text style={styles.number}>2</Text>
              </View>
              <Text style={styles.label2}>Ngày khám</Text>
            </TouchableOpacity>
            
            <Image
              style={styles.vectorIcon3}
              contentFit="cover"
              source={require("../assets/vector56.png")}
            />

{/* <TouchableOpacity onPress={onPress4} style={{ width: 60 }}>
              <View style={styles.circle3}>
                <Text style={styles.number}>3</Text>
              </View>
              <Text style={styles.label3}>Giờ khám</Text>
            </TouchableOpacity> */}

              <View style={styles.circle3}>
                <Text style={styles.number}>3</Text>
              </View>
              <Text style={styles.label3}>Giờ khám</Text>

              <View style={styles.container}>
              <Text style={styles.labelMorning}>☀️ Buổi sáng</Text>
              <TouchableOpacity
                onPress={handlePress}
                style={[
                    selectedTimeSlot ? styles.selectedTimeSlot : styles.timeSlot
                ]}
                >
                <Text style={styles.timeText}>09:00 - 12:00</Text>
              </TouchableOpacity>
              {/* <Text style={styles.labelAfternoon}>☁️ Buổi chiều</Text>
              <TouchableOpacity
                onPress={handlePressTime1}
                style={[
                    styles.timeSlot1,
                    selectedTimeSlot ? styles.selectedTimeSlot1 : styles.timeSlot1
                ]}
                >
                <Text style={styles.timeText}>13:00 - 17:00</Text>
              </TouchableOpacity> */}
             
              <Image
                style={styles.hand}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
            <Text style={styles.instruction}>Chọn một khung giờ để đặt khám</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        left: -234,
        top: 130,
        width: 330,
        height: 200,
        backgroundColor: "white"
      },
      timeSlot1: {
        left: 10,
        top: 30,
        width: 100,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
      },
      timeSlot: {
        left: 10,
        top: 20,
        width: 100,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
      },
      timeText: {
        left: 10,
        color: "black"
      },
      selectedTimeSlot: {
        left: 10,
        top: 20,
        width: 100,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.colorBrown,
      },
      selectedTimeSlot1: {
        backgroundColor: Color.colorBrown,
      },
      selectedText: {
        color: "white"
      },
      labelMorning: {
        left: 10,
        top: 10,
        fontWeight: 'bold',
        marginRight: 8
      },
      labelAfternoon: {
        left: 10,
        top: 25,
        fontWeight: 'bold',
        marginRight: 8
      },
      icon: {
        fontSize: 20
      },
      instruction: {
        top: 15,
        left: 25
      },
  hand: {
    top: 30 ,
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
    height: 17,
    width: 9,
    left: 30,
  },
  vectorIcon3: {
    height: 17,
    width: 9,
    left: 80,
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
    top: 1,
    left: 90,
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
    top: 1,
    width: 80,
    left: 90,
    color: "black",
  },
  selectText2: {
    color: Color.colorBrown,
    left: 100,
    top: -10,
    fontSize: 15,
  },
  button: {
    top: 60,
    height: 60,
    width: 330,
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

export default BookingStep3Screen;
