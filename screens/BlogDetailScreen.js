// import * as React from "react";
// import { StyleSheet, View, Pressable, Text } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const BlogDetailScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.blogdetailscreen}>
//       <View style={[styles.rectangleParent, styles.parentLayout]}>
//         <View style={[styles.instanceChild, styles.instanceChildPosition]} />
//         <Pressable
//           style={[styles.vector, styles.vectorPosition]}
//           onPress={() => navigation.navigate("BlogListScreen")}
//         >
//           <Image
//             style={[styles.icon, styles.iconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector44.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.vectorIcon, styles.iconLayout]}
//           contentFit="cover"
//           source={require("../assets/vector45.png")}
//         />
//         <Text style={[styles.luLi, styles.luLiFlexBox]}>Lưu lại</Text>
//       </View>
//       <View style={[styles.topBarStatus, styles.topBarStatusPosition]}>
//         <View style={[styles.topBarStatus1, styles.instanceChildPosition]}>
//           <View style={[styles.instanceChild, styles.instanceChildPosition]}>
//             <View style={styles.action}>
//               <Text style={[styles.time, styles.timePosition]}>9:41</Text>
//             </View>
//             <View style={[styles.container, styles.timePosition]}>
//               <Image
//                 style={[styles.batteryIcon, styles.timePosition]}
//                 contentFit="cover"
//                 source={require("../assets/battery.png")}
//               />
//               <Image
//                 style={styles.combinedShapeIcon}
//                 contentFit="cover"
//                 source={require("../assets/combined-shape.png")}
//               />
//               <Image
//                 style={styles.wiFiIcon}
//                 contentFit="cover"
//                 source={require("../assets/wifi.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.nuiThCngLiuPhpChoParent, styles.parentLayout]}>
//         <Text style={[styles.nuiThCng, styles.containerPosition]}>
//           Nuôi thú cưng - liệu pháp cho sức khỏe tinh thần
//         </Text>
//         <Image
//           style={[styles.bcSTrung, styles.bcSTrungPosition]}
//           contentFit="cover"
//           source={require("../assets/bc-s-trung1.png")}
//         />
//         <Text style={[styles.tsbsNguynXun, styles.cchPhngNgaFlexBox]}>
//           TS.BS Nguyễn Xuân Nam
//         </Text>
//         <Text style={[styles.plvnTrcSContainer, styles.containerPosition]}>
//           <Text
//             style={styles.plvnTrcSTypo}
//           >{`(PLVN) - Trước sự tất bật, hối hả của cuộc sống hiện đại, nhiều người phải đối mặt với những áp lực, căng thẳng và mệt mỏi. Những điều đó ảnh hưởng trực tiếp đến cơ thể vì thế để “xoa dịu” sức khoẻ tinh thần nhiều người đã lựa chọn nuôi “thú cưng” như một liệu pháp.

// Cải thiện sức khỏe tinh thần
// `}</Text>
//           <Text style={styles.nhiuNmTr}>{`
// Nhiều năm trở lại đây, trào lưu nuôi “thú cưng” đang ngày càng “nở rộ” hơn bao giờ hết, nhất là với các bạn trẻ. Giờ đây, “thú cưng” không đơn thuần chỉ nuôi để trông nhà hay cho vui cửa vui nhà mà còn được xem như “bạn đồng hành” giúp nhiều người tìm được niềm vui, giải toả căng thẳng trong cuộc sống thường nhật.

// Dù là các giống loài khác nhau, không hiểu được ngôn ngữ của nhau nhưng bằng một cách kỳ diệu nào đó con người lại có thể thu được tần số tâm lý phù hợp với “thú cưng” của mình. Cảm giác yêu thương gần gũi, sẻ chia lẫn nhau cứ thế mà phát triển, ngày qua ngày thú cưng làm phong phú đời sống tinh thần của chủ nuôi lúc nào mà không hay biết.

// M.Nhật (23 tuổi, Hà Nội) là một du học sinh xa nhà đã hơn 4 năm cho biết ở nơi xứ người anh coi bé mèo mình nuôi như người thân trong gia đình và luôn mong đến lúc về nhà để được gặp em. “Tại nơi đất khách không có gia đình bên cạnh tôi đã từng cảm thấy lạc lõng và cô đơn cho đến khi tôi nuôi em Đậu (tên bé mèo M.Nhật nuôi). Tuy chỉ là một chú mèo nhưng nhờ có Đậu mà tôi đã vượt qua được những áp lực của cuộc sống vừa học vừa làm. 
// Không biết mọi người có giống như tôi không nhưng cảm giác đi làm về cả ngày mệt mỏi mà sau cánh cửa có ai đó đang chờ mình dù chỉ là một chú mèo cũng khiến tôi cảm thấy an tâm và mong chờ được trở về”, M.Nhật chia sẻ.

// Cũng giống như M.Nhật, nhiều người sống một mình đã lựa chọn nuôi thú cưng để bớt cô đơn và hơn nữa còn là để giúp họ “chữa lành” những bất ổn tinh thần. H.Nhi (27 tuổi, Thanh Hoá) đã lên Hà Nội sinh sống và làm việc được gần 10 năm cho biết đối với cô, “thú cưng” không đơn giản chỉ là vật nuôi mà còn là một thành viên không thể thiếu trong căn trọ của mình.

// “Dù thời gian đã trôi qua khá lâu nhưng tôi vẫn nhớ cái cảm giác cô đơn của hồi đầu khi mới lên Hà Nội và thuê trọ một mình. Khoảng thời gian đó, mỗi lần về nhà là tôi lại cảm thấy trống rỗng có lẽ là vì khi ở dưới quê tôi đã quá quen với cảnh gia đình đông đủ, tiếng nói cười khắp nơi rồi”, H.Nhi tâm sự.

// Sau một thời gian thấy tâm trạng không ổn, H.Nhi đã quyết định nuôi một chú chó giống phốc sóc và đặt tên là Panda. Từ lúc nuôi Panda sức khoẻ tinh thần của H.Nhi trở nên phong phú, nhiều màu sắc hơn hẳn từ đó cuộc sống của cô cũng trở nên nhẹ nhàng, dễ chịu hơn. “Không còn những tối thui thủi một mình với bốn bức tường nữa mà thay vào đó là hàng giờ chúng tôi dành thời gian cho nhau. Những ngày stress, căng thẳng vì công việc, tôi thường có thói quen dắt Panda đi dạo ở sân chung cư, hoạt động này khiến cho cả tôi và Panda đều hạnh phúc”, H.Nhi cho biết.

// Trên thực tế, không chỉ có những người sống một mình hay cô đơn mới cần nuôi “thú cưng” như một cách cải thiện sức khoẻ tinh thần. Mà bất cứ ai cũng có thể áp dụng cách này, hãy tưởng tượng sau một ngày làm việc mệt mỏi, điều đầu tiên chúng ta nhìn thấy khi về đến nhà là một chú “thú cưng” đang ngồi đợi sẵn ở cửa, chạy vào lòng và trao cho chúng ta sự chào đón thật nồng nhiệt. Điều này không chỉ là liệu pháp an ủi cho những người có vấn đề tinh thần mà đối với những người bình thường cũng khiến họ càng hạnh phúc hơn nữa. Các nhà khoa học cho rằng, việc dành vài phút bên cạnh “thú cưng” sẽ giúp não tiết ra serotonin và dopamine - hai hoóc môn hạnh phúc của con người nhiều hơn bình thường.

// `}</Text>
//           <Text style={styles.plvnTrcSTypo}>{`Và hơn thế nữa…
// `}</Text>
//           <Text style={styles.nhiuNmTr}>{`
// Có thể có nhiều người chưa biết, việc nuôi “thú cưng” bên cạnh cải thiện sức khoẻ tinh thần, tăng sự yêu thương, yên bình thì còn có rất nhiều lợi ích khác. Một trong số đó chính là cải thiện cả sức khoẻ thể chất của bạn. Thật tuyệt vời phải không khi mà chỉ với việc nuôi thú cưng lại có thể mang lại nhiều lợi ích cho sức khoẻ đến vậy.

// Kết quả từ một nghiên cứu cho thấy những người nuôi “thú cưng” thường vận động nhiều hơn đến 30 phút/ngày so với những người không nuôi. Lợi ích này được nhìn thấy nhiều nhất ở những người nuôi chó, vì chó là loài vật có năng lượng cao, chúng cần hoạt động thường xuyên để giữ sức khỏe. Còn với những “thú cưng” ít vận động như mèo, chim, cá,… chủ nuôi vẫn có cơ hội vận động thông qua các hoạt động chăm sóc, chơi đùa, huấn luyện cho chúng. Nhìn chung, thú cưng chính là động lực để chúng ta vận động nhiều hơn, từ đó sức khoẻ thể chất cũng tốt hơn.

// Ngoài ra “thú cưng” còn là sợi dây kết nối tuyệt vời giữa bạn và rất nhiều mối quan hệ xung quanh. Việc nuôi một loại “thú cưng” và yêu thích chúng sẽ thôi thúc người chủ tìm hiểu và tham gia vào các hội nhóm trên mạng xã hội. Do cùng sở thích, cùng mối quan tâm nên những người trong nhóm rất nhanh chóng đã có thể làm quen và thân thiết với nhau hơn. Hay khi dắt “thú cưng” đi ngoài đường, chúng có thể là lý do cho sự khởi đầu câu chuyện của rất nhiều mối quan hệ, điều mà trước đây rất khó có thể xảy ra. Và trong vô vàn những mối quan hệ mới đó có thể chúng ta sẽ tìm thấy được tri kỉ hay một người bạn đồng hành khác cho mình.

// Bên cạnh những mối quan hệ mới, “thú cưng” cũng là sợi dây gắn kết những mối quan hệ cũ lại gần nhau hơn. Đối với gia đình, bạn bè, người yêu,… có những lúc các mối quan hệ đều có một khoảng lặng hay những mâu thuẫn chưa thể giải quyết được. Khi đó một chú cún đáng yêu hay một cô mèo đỏng đảnh có thể mang đến tiếng cười và sự đồng điệu về tâm hồn cho mọi người. Từ đó những điều khó nói, những hiềm khích, những hiểu lầm cũng vì thế mà được xoá bỏ.

// Gia đình chị B.Linh (38 tuổi, Hà Nội) cũng đã từng trải qua trường hợp tương tự: “Đợt con gái tôi đến độ tuổi dậy thì, tâm tính thay đổi, tôi với cháu cãi nhau rất nhiều và dần dần hai mẹ con có bức tường khoảng cách không thể nào xoá bỏ. Có nhiều ngày hai mẹ con chẳng nói câu gì với nhau khiến tôi rất buồn nhưng cũng không biết làm thế nào để có thể hàn gắn lại. Thấy thế chồng tôi liền mua một cún con về với mục đích lúc đầu để cho vui cửa vui nhà”.
// “Nhưng thế nào cún con ấy lại là sợi dây kéo hai mẹ con tôi lại gần với nhau hơn khi dành thời gian chăm sóc, chơi đùa với cún. Không biết từ bao giờ tiếng cười nói vui vẻ lại vang lên trong căn nhà của tôi. Dù chưa bao giờ nói chuyện rõ ràng với nhau về những gì đã qua nhưng hai mẹ con đều đã hiểu cho nhau. Giờ đây gia đình 4 thành viên chúng tôi đang rất hạnh phúc”, chị B.Linh tâm sự.

// Có thể thấy, với mỗi người chủ nuôi, “thú cưng” đều có một vai trò và chỗ đứng nhất định trong trái tim của họ. Với những người có gia đình, chúng được coi như thành viên được “đặc cách” của cả nhà. Còn với người độc thân, thú cưng là nguồn vui, an ủi, là “bạn đồng hành”, là nơi “bấu víu” những lúc đơn côi. Và chẳng biết từ lúc nào, “thú cưng” đã trở thành một phần quen thuộc không thể thiếu trong cuộc sống của nhiều người.`}</Text>
//         </Text>
//         <View style={[styles.frameChild, styles.parentLayout]} />
//         <Text style={[styles.ngunThamKho, styles.plvnTrcSTypo]}>
//           Nguồn tham khảo
//         </Text>
//         <Text
//           style={[styles.acuteOtitisMediaContainer, styles.containerPosition]}
//         >
//           <Text style={styles.acuteOtitisMedia}>
//             <Text style={styles.plvnTrcSTypo}>1. Acute Otitis Media</Text>
//           </Text>
//           <Text style={styles.nhiuNmTr}>
//             <Text style={styles.acuteOtitisMedia}>{` - 18/03/2024 
// `}</Text>
//             <Text style={styles.httpsemedicinemedscapecom1}>
//               https://emedicine.medscape.com/article/859316-overv...
//             </Text>
//             <Text style={styles.acuteOtitisMedia}> </Text>
//           </Text>
//           <Text style={styles.acuteOtitisMedia}>
//             <Text style={styles.plvnTrcSTypo}>2. Acute Otitis Media</Text>
//           </Text>
//           <Text style={styles.nhiuNmTr}>
//             <Text style={styles.acuteOtitisMedia}>{` - 18/03/2024
// `}</Text>
//             <Text style={styles.httpsemedicinemedscapecom1}>
//               https://www.ncbi.nlm.nih.gov/books/NBK470332/
//             </Text>
//           </Text>
//           <Text style={styles.acuteOtitisMedia}>
//             <Text style={styles.nhiuNmTr}> </Text>
//             <Text style={styles.plvnTrcSTypo}>
//               3. Magaretha (2015), "Acute otitis media and otitis media with
//               effusion", Cumming Pediatric Otolaryngology, p 209-227. -
//             </Text>
//             <Text style={styles.nhiuNmTr}> </Text>
//             <Text style={styles.plvnTrcSTypo}>
//               4. Unit Four: Middle Ear Disease Diagnosis
//             </Text>
//             <Text style={styles.nhiuNmTr}>{` - 18/03/2024 
// `}</Text>
//           </Text>
//           <Text style={styles.nhiuNmTr}>
//             <Text style={styles.httpsemedicinemedscapecom1}>
//               https://app1.unmc.edu/medicine/heywood/otology/unit
//             </Text>
//             <Text style={styles.acuteOtitisMedia}>...</Text>
//           </Text>
//           <Text style={styles.acuteOtitisMedia}>
//             <Text style={styles.plvnTrcSTypo}>
//               5. Acute otitis media in children: Treatment
//             </Text>
//           </Text>
//           <Text style={styles.nhiuNmTr}>
//             <Text style={styles.acuteOtitisMedia}> - 18/03/2024</Text>
//             <Text style={styles.httpsemedicinemedscapecom1}>
//               https://www.uptodate.com/contents/acute-otitis-media...
//             </Text>
//             <Text style={styles.acuteOtitisMedia}> </Text>
//           </Text>
//         </Text>
//         <Text style={[styles.cThBn, styles.containerPosition]}>
//           Có thể bạn quan tâm
//         </Text>
//         <View style={[styles.biVitPh, styles.vitLayout]}>
//           <View style={[styles.biVitPhChild, styles.vitLayout]} />
//           <Text style={[styles.cchPhngNga, styles.cchPhngNgaPosition]}>
//             Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
//           </Text>
//           <Image
//             style={styles.image27Icon}
//             contentFit="cover"
//             source={require("../assets/image-271.png")}
//           />
//           <Image
//             style={[styles.biVitPhItem, styles.cchPhngNgaPosition]}
//             contentFit="cover"
//             source={require("../assets/ellipse-1531.png")}
//           />
//           <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
//             ThS.BS Lê Chiếu...
//           </Text>
//           <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>12 ngày trước</Text>
//         </View>
//         <View style={[styles.biVitPh1, styles.vitLayout]}>
//           <View style={[styles.biVitPhChild, styles.vitLayout]} />
//           <Text style={[styles.cchPhngNga, styles.cchPhngNgaPosition]}>
//             Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
//           </Text>
//           <Image
//             style={styles.image27Icon}
//             contentFit="cover"
//             source={require("../assets/image-271.png")}
//           />
//           <Image
//             style={[styles.biVitPhItem, styles.cchPhngNgaPosition]}
//             contentFit="cover"
//             source={require("../assets/ellipse-1531.png")}
//           />
//           <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
//             ThS.BS Lê Chiếu...
//           </Text>
//           <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>12 ngày trước</Text>
//         </View>
//         <View style={[styles.groupWrapper, styles.topBarStatusPosition]}>
//           <View style={[styles.groupWrapper, styles.topBarStatusPosition]}>
//             <Image
//               style={[styles.groupWrapper, styles.topBarStatusPosition]}
//               contentFit="cover"
//               source={require("../assets/image-261.png")}
//             />
//             <View style={[styles.groupChild, styles.groupChildPosition]} />
//             <Image
//               style={[
//                 styles.artboard261RemovebgPreviewIcon,
//                 styles.groupChildPosition,
//               ]}
//               contentFit="cover"
//               source={require("../assets/artboard-26-1removebgpreview-1.png")}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   parentLayout: {
//     width: 375,
//     position: "absolute",
//   },
//   instanceChildPosition: {
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     left: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorPosition: {
//     bottom: "34.78%",
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   luLiFlexBox: {
//     alignItems: "center",
//     display: "flex",
//   },
//   topBarStatusPosition: {
//     top: 0,
//     left: 0,
//   },
//   timePosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   containerPosition: {
//     width: 338,
//     textAlign: "left",
//     left: 18,
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   bcSTrungPosition: {
//     left: 18,
//     position: "absolute",
//   },
//   cchPhngNgaFlexBox: {
//     textAlign: "left",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//   },
//   plvnTrcSTypo: {
//     fontFamily: FontFamily.robotoBold,
//     fontWeight: "700",
//   },
//   vitLayout: {
//     height: 161,
//     width: 326,
//     position: "absolute",
//   },
//   cchPhngNgaPosition: {
//     left: 20,
//     position: "absolute",
//   },
//   ngyTrcTypo: {
//     height: 15,
//     top: 120,
//     textAlign: "left",
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     letterSpacing: 0,
//     fontSize: FontSize.size_xs,
//     position: "absolute",
//   },
//   groupChildPosition: {
//     bottom: "85.28%",
//     top: "4.57%",
//     height: "10.15%",
//     position: "absolute",
//   },
//   instanceChild: {
//     left: "0%",
//     backgroundColor: Color.greyscaleBlackWhite,
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//   },
//   icon: {
//     height: "100%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     width: "100%",
//   },
//   vector: {
//     left: "4.27%",
//     top: "32.61%",
//     right: "93.73%",
//     width: "2%",
//     height: "32.61%",
//   },
//   vectorIcon: {
//     height: "30.43%",
//     width: "4.27%",
//     top: "34.78%",
//     right: "16.8%",
//     left: "78.93%",
//     bottom: "34.78%",
//     position: "absolute",
//   },
//   luLi: {
//     height: "23.91%",
//     width: "11.2%",
//     top: "36.96%",
//     left: "83.73%",
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     justifyContent: "center",
//     textAlign: "center",
//     letterSpacing: 0,
//     color: Color.colorBlack,
//     fontSize: FontSize.size_xs,
//     display: "flex",
//     position: "absolute",
//   },
//   rectangleParent: {
//     top: 44,
//     height: 46,
//     left: 0,
//     width: 375,
//   },
//   time: {
//     marginTop: -9,
//     fontFamily: FontFamily.sFProText,
//     color: Color.colorDarkslategray,
//     width: 54,
//     fontSize: FontSize.size_mini,
//     textAlign: "center",
//     letterSpacing: 0,
//     top: "50%",
//     left: 0,
//   },
//   action: {
//     height: "40.91%",
//     width: "14.32%",
//     top: "31.82%",
//     right: "80.37%",
//     bottom: "27.27%",
//     left: "5.31%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   batteryIcon: {
//     marginTop: -5.8,
//     right: 1,
//     width: 25,
//     height: 12,
//   },
//   combinedShapeIcon: {
//     width: 17,
//     height: 11,
//   },
//   wiFiIcon: {
//     width: 15,
//     height: 11,
//   },
//   container: {
//     marginTop: -6,
//     right: 14,
//     width: 68,
//     height: 14,
//     overflow: "hidden",
//   },
//   topBarStatus1: {
//     left: "0%",
//   },
//   topBarStatus: {
//     height: 44,
//     width: 375,
//     position: "absolute",
//   },
//   nuiThCng: {
//     top: 212,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_xl,
//     width: 338,
//   },
//   bcSTrung: {
//     top: 274,
//     borderRadius: Border.br_26xl,
//     width: 36,
//     height: 36,
//   },
//   tsbsNguynXun: {
//     top: 283,
//     fontSize: FontSize.size_sm,
//     width: 159,
//     height: 19,
//     left: 60,
//     fontFamily: FontFamily.robotoRegular,
//     alignItems: "center",
//     display: "flex",
//     position: "absolute",
//   },
//   nhiuNmTr: {
//     fontFamily: FontFamily.robotoRegular,
//   },
//   plvnTrcSContainer: {
//     top: 326,
//     fontSize: FontSize.size_mini,
//   },
//   frameChild: {
//     top: 3231,
//     backgroundColor: "#f1f4f9",
//     height: 303,
//     left: 0,
//     width: 375,
//   },
//   ngunThamKho: {
//     top: 3240,
//     fontSize: FontSize.size_base,
//     width: 277,
//     height: 20,
//     textAlign: "left",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     left: 18,
//     position: "absolute",
//   },
//   acuteOtitisMedia: {
//     fontSize: FontSize.size_mini,
//   },
//   httpsemedicinemedscapecom1: {
//     fontSize: FontSize.size_smi,
//   },
//   acuteOtitisMediaContainer: {
//     top: 3262,
//     height: 241,
//   },
//   cThBn: {
//     top: 3547,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_xl,
//     width: 338,
//   },
//   biVitPhChild: {
//     borderRadius: Border.br_2xs,
//     borderColor: Color.colorGray_200,
//     borderWidth: 1,
//     borderStyle: "solid",
//     top: 0,
//     left: 0,
//   },
//   cchPhngNga: {
//     top: 23,
//     width: 187,
//     height: 53,
//     textAlign: "left",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_mini,
//     alignItems: "center",
//     display: "flex",
//   },
//   image27Icon: {
//     top: 19,
//     left: 230,
//     borderRadius: Border.br_xs,
//     width: 77,
//     height: 76,
//     position: "absolute",
//   },
//   biVitPhItem: {
//     top: 109,
//     width: 34,
//     height: 34,
//   },
//   thsbsLChiu: {
//     color: Color.colorGray_300,
//     width: 108,
//     left: 60,
//   },
//   ngyTrc: {
//     left: 225,
//     color: Color.colorGray_200,
//     width: 101,
//   },
//   biVitPh: {
//     top: 3583,
//     left: 24,
//     width: 326,
//   },
//   biVitPh1: {
//     top: 3757,
//     left: 24,
//     width: 326,
//   },
//   groupWrapper: {
//     height: 197,
//     width: 375,
//     position: "absolute",
//   },
//   groupChild: {
//     width: "17.33%",
//     right: "82.67%",
//     borderTopRightRadius: Border.br_3xs,
//     borderBottomRightRadius: Border.br_3xs,
//     backgroundColor: Color.foundationBrownBrown500,
//     borderColor: Color.greyscaleBlackWhite,
//     borderTopWidth: 1,
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderStyle: "solid",
//     left: "0%",
//   },
//   artboard261RemovebgPreviewIcon: {
//     width: "8.29%",
//     right: "84.77%",
//     left: "6.93%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   nuiThCngLiuPhpChoParent: {
//     top: 90,
//     height: 722,
//     left: 0,
//     width: 375,
//   },
//   blogdetailscreen: {
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.greyscaleBlackWhite,
//   },
// });

// export default BlogDetailScreen;
