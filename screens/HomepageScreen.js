// import * as React from "react";
// import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
// import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
// import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

// const HomePageScreen = () => {
//     return (
//         <ScrollView>
//             <View style={styles.homepagescreen}>
//                 <View style={styles.header}>
//                         <View style={styles.headerContent}>
//                             <Text style={styles.headerText}>
//                                 <Text style={{ color: "#fff"}}>{`Buổi tối an lành! `}</Text>
//                                 <Text style={{ color: "#fff", fontWeight: "bold"}}>Dương Lê</Text>
//                             </Text>
//                             <Image
//                                 style={styles.avatar}
//                                 contentFit="cover"
//                                 source={require("../assets/image-55.png")}
//                             />
//                         </View>
//                 </View>

//                 <View style={[styles.searchInput]}>
//                     <TextInput style={[styles.emailTextInside]} placeholder="Tên bác sĩ, triệu chứng bệnh, chuyên khoa..."></TextInput>
//                 </View>
                
//                     <Image
//                         style={[styles.vectorIcon]}
//                         contentFit="cover"
//                         source={require("../assets/vector.png")}
//                     />

//                 <View style={{ left: 30 }}>
//                     <Image
//                         style={{ width: 50, top: 100, height: 50 }}
//                         contentFit="cover"
//                         source={require("../assets/ellipse-142.png")}
//                     />
//                     <Text style={{ top: 110, left: 7}}>Bác sĩ</Text>
//                     <Image
//                         style={{ width: 30, left: 10, top: 40, height: 30 }}
//                         contentFit="cover"
//                         source={require("../assets/vector8.png")}
//                     />
//                 </View>

//                 <View style={{ left: 90}}>
//                     <Image
//                         style={{ width: 50, top: 5, height: 50 }}
//                         contentFit="cover"
//                         source={require("../assets/ellipse-143.png")}
//                     />
//                     <Text style={{ top: 110, left: 7}}>
//                         Đặt khám Bệnh viện
//                     </Text>
//                     <Image
//                         style={{ width: 30, left: 10, top: 43, height: 31 }}
//                         contentFit="cover"
//                         source={require("../assets/vector7.png")}
//                     />
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     vectorIcon: {
//         backgroundColor: "#fff",
//         top: -50
//     },
//     searchInput: {
//         top: -50,
//         backgroundColor: Color.colorWhitesmoke,
//     },
//     emailTextInside: {
//         borderRadius: 20,
//         borderColor: Color.colorGainsboro,
//         backgroundColor: Color.colorGainsboro,
//         borderWidth: 1,
//         height: 40,
//         position: "absolute",
//         flex: 1,
//         width: 320,
//         top: 0,
//         left: 20,
//         textAlign: "left",
//         padding: 10,
//     },
//     searchLayout: {
//         height: 41,
//         width: 364,
//         backgroundColor: Color.colorWhitesmoke,
//         position: "absolute",
//       },
//     search: {
//         top: 108,
//         left: 5,
//       },
//   homepagescreen: {
//     flex: 1,
//     height: 820,
//     width: "100%",
//     backgroundColor: Color.colorWhitesmoke,
//   },
//   header: {
//     width: "100%",
//     height: 160,
//     backgroundColor: Color.colorBrown
//   },
//   headerContent: {
//     top: 65,
//     width: 195,
//     height: 35,
//     left: 20,
//     position: "absolute",
//   },
//   headerText: {
//     left: 40,
//     width: 100,
//     textAlign: "left",
//     color: Color.colorWhitesmoke,
//     height: 35,
//     position: "absolute",
//   },
//   avatar: {
//     top: "5.56%",
//     right: "84.46%",
//     bottom: "11.11%",
//     borderRadius: Border.br_11xl,
//     left: "0%",
//     position: "absolute",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   buiTiAn: {
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_xs,
//   },
//   dngL: {
//     fontFamily: FontFamily.robotoBold,
//     fontSize: FontSize.size_mini,
//   }, 
  
//   vectorIconLayout1: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
// });

// export default HomePageScreen;
