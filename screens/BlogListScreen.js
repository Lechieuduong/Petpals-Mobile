import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BlogListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bloglistscreen}>
      <View style={[styles.bloglistscreenInner, styles.topBarStatusPosition]}>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector90.png")}
          />
          <Image
            style={styles.ionmedicalSharpIcon}
            contentFit="cover"
            source={require("../assets/ionmedicalsharp.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector91.png")}
          />
          <Text style={styles.tinYTContainer}>
            <Text style={styles.tinYT}>{`Tin Y tế
`}</Text>
            <Text style={styles.thSau29}>THỨ SAU 29, THÁNG 3, 20204</Text>
          </Text>
          <Text style={styles.ngunThngTin}>
            Nguồn thông tin sức khỏe đáng tin cậy, dễ đọc, dễ hiểu cho mọi đối
            tượng độc giả. Biên soạn 100% bởi Bác sĩ chuyên thú y
          </Text>
          <View style={[styles.groupChild, styles.childBorder]} />
          <View style={[styles.biVitPh, styles.vitLayout]}>
            <View style={[styles.biVitPhChild, styles.childBorder]} />
            <Text style={styles.cchPhngNga}>
              Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
            </Text>
            <Image
              style={[styles.image27Icon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/image-273.png")}
            />
            <Image
              style={styles.biVitPhItem}
              contentFit="cover"
              source={require("../assets/ellipse-1532.png")}
            />
            <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
              ThS.BS Lê Chiếu...
            </Text>
            <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>
              12 ngày trước
            </Text>
          </View>
          <Pressable
            style={[styles.biVitPh1, styles.vitLayout]}
            onPress={() => navigation.navigate("BlogDetailScreen")}
          >
            <View style={[styles.biVitPhChild, styles.childBorder]} />
            <Text style={styles.cchPhngNga}>
              Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
            </Text>
            <Image
              style={[styles.image27Icon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/image-273.png")}
            />
            <Image
              style={styles.biVitPhItem}
              contentFit="cover"
              source={require("../assets/ellipse-1532.png")}
            />
            <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
              ThS.BS Lê Chiếu...
            </Text>
            <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>
              12 ngày trước
            </Text>
          </Pressable>
          <Pressable
            style={styles.image26Parent}
            onPress={() => navigation.navigate("BlogDetailScreen")}
          >
            <Image
              style={[styles.image26Icon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/image-264.png")}
            />
            <View style={[styles.biVit, styles.biVitPosition]}>
              <Text style={styles.nuiThCng}>
                Nuôi thú cưng - liệu pháp cho sức khỏe tinh thần
              </Text>
              <Text style={[styles.tsbsNguynXun, styles.giTrcTypo]}>
                TS.BS Nguyễn Xuân Nam
              </Text>
              <Text style={[styles.giTrc, styles.giTrcTypo]}>4 giờ trước</Text>
            </View>
            <Image
              style={[styles.bcSTrung, styles.biVitPosition]}
              contentFit="cover"
              source={require("../assets/bc-s-trung.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarStatusPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  topPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  containerPosition: {
    top: "50%",
    position: "absolute",
  },
  vectorPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  vitLayout: {
    height: 161,
    left: 2,
    width: 338,
    position: "absolute",
  },
  ngyTrcTypo: {
    top: "74.26%",
    height: "9.18%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  biVitPosition: {
    left: "5.03%",
    position: "absolute",
  },
  giTrcTypo: {
    height: "22.12%",
    color: Color.darkInk,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.poppinsMedium14_size,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 54,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  action: {
    height: "40.91%",
    width: "14.32%",
    top: "31.82%",
    right: "80.37%",
    bottom: "27.27%",
    left: "5.31%",
    position: "absolute",
    overflow: "hidden",
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
  topBarStatus2: {
    left: "0%",
    position: "absolute",
    backgroundColor: Color.darkInk,
    height: "100%",
  },
  topBarStatus1: {
    left: "0%",
    position: "absolute",
  },
  topBarStatus: {
    top: 0,
    height: 44,
  },
  vectorIcon: {
    height: "26.17%",
    width: "44.25%",
    bottom: "73.83%",
    left: "55.75%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  ionmedicalSharpIcon: {
    top: 146,
    width: 30,
    height: 30,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "1.62%",
    width: "2.09%",
    top: "2.49%",
    right: "97.91%",
    bottom: "95.88%",
    left: "0%",
    position: "absolute",
  },
  tinYT: {
    fontSize: FontSize.size_xl,
  },
  thSau29: {
    fontSize: FontSize.size_xs,
  },
  tinYTContainer: {
    top: 68,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 256,
    height: 46,
    textAlign: "left",
    color: Color.lightInk,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  ngunThngTin: {
    top: 138,
    left: 43,
    width: 285,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.poppinsMedium14_size,
    height: 46,
    textAlign: "left",
    color: Color.lightInk,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild: {
    top: 205,
    left: 5,
    borderColor: Color.foundationBrownBrown500,
    borderTopWidth: 2,
    width: 332,
    height: 2,
  },
  biVitPhChild: {
    borderRadius: Border.br_2xs,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  cchPhngNga: {
    height: "33.13%",
    width: "57.37%",
    top: "14.08%",
    alignItems: "center",
    display: "flex",
    left: "6.12%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.lightInk,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  image27Icon: {
    height: "47.21%",
    width: "23.61%",
    top: "11.66%",
    right: "5.83%",
    bottom: "41.13%",
    left: "70.56%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  biVitPhItem: {
    height: "20.84%",
    width: "10.44%",
    top: "67.49%",
    right: "83.43%",
    bottom: "11.66%",
    left: "6.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  thsbsLChiu: {
    width: "33.14%",
    left: "18.4%",
    color: Color.colorGray_400,
  },
  ngyTrc: {
    width: "30.98%",
    left: "69.02%",
    color: Color.colorGray_300,
  },
  biVitPh: {
    top: 762,
  },
  biVitPh1: {
    top: 585,
  },
  image26Icon: {
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  nuiThCng: {
    height: "61.18%",
    width: "98.06%",
    color: Color.darkInk,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  tsbsNguynXun: {
    width: "51.29%",
    top: "77.88%",
    left: "12.26%",
  },
  giTrc: {
    width: "21.61%",
    top: "77.65%",
    left: "78.39%",
  },
  biVit: {
    height: "25.15%",
    width: "91.72%",
    top: "66.57%",
    right: "3.25%",
    bottom: "8.28%",
  },
  bcSTrung: {
    height: "10.65%",
    width: "10.65%",
    top: "83.73%",
    right: "84.32%",
    bottom: "5.62%",
    borderRadius: Border.br_26xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image26Parent: {
    top: 231,
    left: 3,
    height: 338,
    width: 338,
    position: "absolute",
  },
  vectorParent: {
    height: "120.21%",
    width: "95.47%",
    bottom: "-20.21%",
    left: "4.53%",
  },
  bloglistscreenInner: {
    top: 44,
    height: 768,
  },
  bloglistscreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.darkInk,
  },
});

export default BlogListScreen;
