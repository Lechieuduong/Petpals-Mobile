import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const BookingStep2Screen = (props) => {
    const [selected, setSelected] = useState('');

    const onPress = () => {
      props.navigation.navigate('RegisterScreen');
    };
  
    const onPress1 = () => {
      props.navigation.navigate('LoginScreen');
    };

    const onPress2 = () => {
      props.navigation.navigate('BookingStep1Screen');
    };

    const onPress3 = () => {
      props.navigation.navigate('BookingStep3Screen');
    };
  
    const [isActive, setIsActive] = useState(false);
  
    const handlePress = () => {
      if (isActive) {
        navigation.navigate('LoginScreen')
      } else {
        setIsActive(current => !current);
      }
    };
  
    const navigation = useNavigation();
  
    return (
      <ScrollView>
        <View style={styles.bookingstep1screen}>
          <View style={styles.header}>
            <Text style={styles.selectHeader}>Chọn Ngày khám</Text>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={styles.cancelIcon}
                contentFit="cover"
                source={require("../assets/vector54.png")}
              />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={onPress1} >
              <Text style={styles.supportText}>Hỗ trợ</Text>
            </TouchableOpacity>
            <Image
              style={styles.supportIcon}
              contentFit="cover"
              source={require("../assets/vector55.png")}
            />

            <View style={styles.contentContainer}>
            <TouchableOpacity onPress={onPress2} style={{ width: 60}}>
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

              <View style={styles.circle2}>
                <Text style={styles.number}>2</Text>
              </View>
              <Text style={styles.label2}>Ngày khám</Text>
            </View>
              
            <Calendar style={styles.calendar}
                onDayPress={day => {
                    if (selected) {
                      navigation.navigate('BookingStep3Screen')
                    } else {
                      setSelected(day.dateString)
                    }
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
            />
           <View style={styles.calendarDescription}>
           <View style={styles.row}>
                <View style={styles.circle1}>
                <Text style={styles.circleText}>Ngày chọn</Text>
                </View>
                <View style={styles.square}>
                <Text style={styles.squareText}>Ngày đặt khám</Text>
                </View>
                <View style={styles.square1}>
                <Text style={styles.squareText}>Ngày lịch đầy</Text>
                </View>
            </View>
            <Image
              style={styles.hand}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
            <Text style={styles.prompt}>Chọn một ngày để đặt khám</Text>
           </View>
          </View> 
          </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    hand: {
      top: 10,
      left: 20,
      width: 12,
      height: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
        top: 20, 
        left: -30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 16,
      },
      circle1: {
        top: -20,
        left: 1,
        width: 12,
        height: 12,
        borderRadius: 30,
        backgroundColor: Color.colorBrown,
        justifyContent: 'center',
        alignItems: 'center',
      },
      square: {
        top: -20,
        width: 12,
        height: 12,
        borderRadius: 30,
        left: -20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      },
      square1: {
        top: -20,
        width: 12,
        height: 12,
        borderRadius: 30,
        left: -20,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
      },
      circleText: {
        top: 2,
        left: 65,
        width: 100,
        height: 20,
        fontSize: 12,
        color: 'black',
      },
      squareText: {
        top: 2,
        left: 65,
        width: 100,
        height: 20,
        fontSize: 12,
        color: 'black',
      },
      prompt: {
        left: 40,
        top: -7,
        color: "gray"
      },
    calendarDescription: {
        top: 10,
        width: 330,
        left: 15,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        fontSize: 10,
        height: 80,
        backgroundColor: "white"
    },
    vectorIcon2: {
        height: 17,
        width: 9,
        left: 30,
    },
    calendar: {
        top: 10,
        width: 330,
        left: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        fontSize: 10,
        height: 330
    },
    contentContainer: {
      top: 3,
      height: 40,
      width: "100%",
      backgroundColor: "white",
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      top: 9,
      left: 20,
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: Color.colorBrown,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    circle2: {
        left: 40,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Color.colorGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    triangle: {
        top: 15,
        left: -50,
        height: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Color.colorGreen,
        transform: [{ rotate: '360deg' }],
      },
    number: {
      color: 'white',
    },
    label: {
      top: -12,
      left: 50,
      color: 'black',
    },
    label2: {
        left: 40,
        color: 'black',
    },
    selectText2: {
      color: Color.colorBrown,
      left: 100,
      top: -10,
      fontSize: 15
    },
    button: {
      top: 60,
      height: 60,
      width: 330,
      left: 15,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#D9D9D9',
      backgroundColor: "white"
    },
    active: {
      borderColor: Color.colorBrown,
    },
    inactive: {
      borderColor: '#D9D9D9',
    },
    buttonText: {
      color: 'black',
      top: 10,
      left: -100,
      fontSize: 15
    },
    selectedTextContainer: {
      position: 'absolute',
      top: 0,
      right: 10,
      height: 15,
      width: 130,
      backgroundColor: Color.colorBrown,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10
    },
    selectedText: {
      color: 'white',
      bottom: 5,
      height: 12,
      fontSize: 10,
      textAlign: "center"
    },
    header: {
      height: 80,
      width: "100%",
      backgroundColor: Color.colorBrown,
      position: "absolute"
    },
  
    selectHeader: {
      fontSize: FontSize.size_base,
      textAlign: 'center',
      verticalAlign: "middle",
      fontFamily: FontFamily.robotoBold,
      color: Color.greyscaleBlackWhite,
      fontWeight: "600",
      top: 50
    },
  
    cancelIcon: {
      verticalAlign: "middle",
      height: 15,
      width: 15,
      top: 32,
      left: 30
    },
  
    supportIcon: {
      top: -5,
      width: 20,
      height: 23,
      verticalAlign: "middle",
      left: 270
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
  
  export default BookingStep2Screen;