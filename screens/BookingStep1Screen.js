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

const BookingStep1Screen = (props) => {
  const onPress = () => {
    props.navigation.navigate("HomePageScreen");
  };

  const onPress1 = () => {
    props.navigation.navigate("HomePageScreen");
  };

  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    if (isActive) {
      navigation.navigate("BookingStep2Screen");
    } else {
      setIsActive((current) => !current);
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.bookingstep1screen}>
        <View style={styles.header}>
          <Text style={styles.selectHeader}>Chọn Cơ sở</Text>
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

          <TouchableOpacity
            onPressIn={handlePress}
            style={[styles.button, isActive ? styles.active : styles.inactive]}
          >
            <Text style={styles.buttonText}>Chi nhánh 1</Text>
            <Text style={styles.selectText2}>Chọn</Text>
            {isActive && (
              <View style={styles.selectedTextContainer}>
                <Text style={styles.selectedText}>ĐANG CHỌN</Text>
              </View>
            )}
          </TouchableOpacity>

          <View style={styles.contentContainer}>
            <View style={styles.circle}>
              <Text style={styles.number}>1</Text>
            </View>
            <Text style={styles.label}>Cơ sở</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  triangle: {
    top: 15,
    left: -39,
    height: 1,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#4CD964",
    transform: [{ rotate: "360deg" }],
  },
  contentContainer: {
    top: -57,
    height: 40,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    left: 20,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  number: {
    color: "white",
  },
  label: {
    left: 20,
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

export default BookingStep1Screen;
