<View style={[styles.chiNhnh, styles.chiLayout]}>
              <View style={[styles.chiNhnhChild, styles.childBorder]} />
              <Text style={[styles.chn, styles.chnFlexBox]}>Chọn</Text>
              <Text style={[styles.chiNhnh1, styles.cSTypo]}>Chi nhánh 1</Text>
              <View style={styles.angChn}>
                <View style={[styles.angChnChild, styles.angChnChildPosition]} />
                <Text style={[styles.angChn1, styles.cSFlexBox]}>ĐANG CHỌN</Text>
              </View>
            </View>
            
            <View style={[styles.stepBar, styles.barPosition]}>
              <View style={[styles.stepBarChild, styles.chiNhnhItemPosition]} />
              <Text style={[styles.cS, styles.cSFlexBox]}>Cơ sở</Text>
              <View style={styles.step1}>
                <Image
                  style={[styles.step1Child, styles.step1IconLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-162.png")}
                />
                <Image
                  style={[styles.step1Item, styles.step1IconLayout]}
                  contentFit="cover"
                  source={require("../assets/polygon-1.png")}
                />
                <Text style={[styles.text, styles.cSFlexBox]}>1</Text>
              </View>
            </View>
            <Pressable
              style={[styles.chiNhnh2, styles.chiLayout]}
              onPress={() => navigation.navigate("BookingStep1Screen")}
            >
              <View style={[styles.chiNhnhItem, styles.chiNhnhItemPosition]} />
              <Text style={[styles.chn, styles.chnFlexBox]}>Chọn</Text>
              <Text style={[styles.chiNhnh1, styles.cSTypo]}>Chi nhánh 1</Text>
            </Pressable>


















return (
    <View style={styles.homepagescreen}>
        <View style={[styles.ngKNgNhp, styles.userLayout]}>
          <View style={[styles.user, styles.userLayout]}>
            <Text style={[styles.buiTiAnContainer, styles.userLayout]}>
              <Text style={styles.buiTiAn}>{`Buổi tối an lành!`}</Text>
              <Text style={[styles.dngL, styles.dngLTypo]}>Dương Lê</Text>
            </Text>
            <Image
              style={[styles.image55Icon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/image-55.png")}
            />
          </View>
        </View>
        <View style={[styles.search, styles.searchLayout]}>
          <View style={[styles.searchChild, styles.searchLayout]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.tnBcS, styles.tnBcSFlexBox]}>
            Tên bác sĩ, triệu chứng bệnh, chuyên khoa...
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={[styles.contentScroll, styles.actionPosition]}>
          <View style={[styles.tinYT, styles.tinLayout]}>
            <View style={[styles.tinYTChild, styles.tinLayout]} />
            <View style={styles.tinYT1}>
              <View style={styles.biVitPh2Parent}>
                <View style={[styles.biVitPh2, styles.vitLayout1]}>
                  <View style={[styles.biVitPh2Child, styles.vitChildBorder]} />
                  <Text style={[styles.cchPhngNga, styles.tnBcSFlexBox]}>
                    Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
                  </Text>
                  <Image
                    style={styles.image27Icon}
                    contentFit="cover"
                    source={require("../assets/image-27.png")}
                  />
                  <Image
                    style={styles.biVitPh2Item}
                    contentFit="cover"
                    source={require("../assets/ellipse-153.png")}
                  />
                  <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
                    ThS.BS Lê Chiếu...
                  </Text>
                  <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>
                    12 ngày trước
                  </Text>
                </View>
                <View style={[styles.biVitPh1, styles.vitLayout1]}>
                  <View style={[styles.biVitPh2Child, styles.vitChildBorder]} />
                  <Text style={[styles.cchPhngNga, styles.tnBcSFlexBox]}>
                    Cách phòng ngừa và điều trị bệnh nấm da ở thú cưng hiệu quả
                  </Text>
                  <Image
                    style={styles.image27Icon}
                    contentFit="cover"
                    source={require("../assets/image-27.png")}
                  />
                  <Image
                    style={styles.biVitPh2Item}
                    contentFit="cover"
                    source={require("../assets/ellipse-153.png")}
                  />
                  <Text style={[styles.thsbsLChiu, styles.ngyTrcTypo]}>
                    ThS.BS Lê Chiếu...
                  </Text>
                  <Text style={[styles.ngyTrc, styles.ngyTrcTypo]}>
                    12 ngày trước
                  </Text>
                </View>
              </View>
              <View style={styles.tinYTFixed}>
                <Text style={[styles.tinYT2, styles.dchVLayout]}>Tin y tế</Text>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <View style={[styles.biVit, styles.vitLayout]}>
                <Image
                  style={[styles.image26Icon, styles.nuiThCngPosition]}
                  contentFit="cover"
                  source={require("../assets/image-26.png")}
                />
                <Text style={[styles.nuiThCng, styles.nuiThCngPosition]}>
                  Nuôi thú cưng - liệu pháp cho sức khỏe tinh thần
                </Text>
                <Image
                  style={[styles.biVitChild, styles.userLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-152.png")}
                />
                <Text style={[styles.tsbsNguynXun, styles.giTrcTypo]}>
                  TS.BS Nguyễn Xuân Nam
                </Text>
                <Text style={[styles.giTrc, styles.giTrcTypo]}>
                  4 giờ trước
                </Text>
              </View>
            </View>
            <View style={[styles.xemBiVitKhcBtn, styles.vitLayout]}>
              <View
                style={[styles.xemBiVitKhcBtnChild, styles.nuiThCngPosition]}
              />
              <Text style={[styles.xemCcBi, styles.xemCcBiFlexBox]}>
                Xem các bài viết khác
              </Text>
            </View>
          </View>
          <View style={[styles.dchVScroll, styles.scrollPosition]}>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <View style={[styles.groupParent, styles.groupParentPosition]}>
                <View style={[styles.khmBnhWrapper, styles.khmLayout1]}>
                  <Text style={[styles.khmBnh, styles.khmLayout1]}>
                    Khám bệnh
                  </Text>
                </View>
                <Image
                  style={[styles.image60Icon, styles.groupItemPosition]}
                  contentFit="cover"
                  source={require("../assets/image-60.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupParentPosition]}>
                <View style={[styles.khchSnThCngWrapper, styles.khchLayout]}>
                  <Text style={[styles.khchSnTh, styles.dchVTypo]}>
                    Khách sạn thú cưng
                  </Text>
                </View>
                <Image
                  style={styles.groupItemPosition}
                  contentFit="cover"
                  source={require("../assets/group-427322653.png")}
                />
              </View>
              <View
                style={[styles.spaGroomingParent, styles.groupParentPosition]}
              >
                <Text style={[styles.spaGrooming, styles.spaGroomingPosition]}>
                  Spa - Grooming
                </Text>
                <Image
                  style={[styles.image60Icon, styles.groupItemPosition]}
                  contentFit="cover"
                  source={require("../assets/image-58.png")}
                />
              </View>
            </View>
            <View style={[styles.dchVHorizontal, styles.bcSFixedPosition]}>
              <Text style={[styles.dchV, styles.dchVTypo]}>Dịch vụ</Text>
              <Image
                style={[styles.vectorIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition3]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <View style={styles.phngKhmScroll}>
            <View style={styles.bnhPosition}>
              <View style={[styles.bnhVinChild, styles.bnhPosition]} />
              <View style={[styles.bnhVin1, styles.bnhLayout]}>
                <View style={[styles.bnhVinItem, styles.bnhLayout]} />
                <Image
                  style={[
                    styles.artboard14RemovebgPreview1Icon,
                    styles.timeLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/artboard-14removebgpreview-1.png")}
                />
                <Text style={[styles.bnhVinTh, styles.bnhVinThPosition]}>
                  Bệnh viện thú ý Petpals
                </Text>
                <Text style={[styles.nhCngHong, styles.bnhVinThPosition]}>
                  96 Định Công, Hoàng Mai, TP. Hà Nội
                </Text>
              </View>
            </View>
            <View style={[styles.bnhVinParent, styles.bnhVinParentPosition]}>
              <Text style={[styles.bnhVin2, styles.dchVTypo]}>Bệnh viện</Text>
              <Image
                style={[styles.groupIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition3]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <View style={[styles.bcSScroll, styles.scrollPosition]}>
            <View style={[styles.bcS, styles.scrollPosition]}>
              <View style={[styles.bcSChild, styles.scrollPosition]} />
              <View style={[styles.bcSProfile1, styles.profileLayout]}>
                <Image
                  style={[styles.bcSHng, styles.bcSHngLayout]}
                  contentFit="cover"
                  source={require("../assets/bc-s-hng.png")}
                />
                <Text style={[styles.bcSHng1, styles.bcSHng1Position]}>
                  Bác sĩ Hồng
                </Text>
              </View>
              <View style={[styles.bcSProfile2, styles.profileLayout]}>
                <Image
                  style={[styles.bcSTrung, styles.bcSTngPosition]}
                  contentFit="cover"
                  source={require("../assets/bc-s-trung.png")}
                />
                <Text style={[styles.bcSTrung1, styles.bcSHng1Position]}>
                  Bác sĩ Trung
                </Text>
              </View>
              <View style={[styles.bcSProfile3, styles.profileLayout]}>
                <Image
                  style={[styles.bcSTng, styles.bcSTngPosition]}
                  contentFit="cover"
                  source={require("../assets/bc-s-tng.png")}
                />
                <Text style={[styles.bcSTrung1, styles.bcSHng1Position]}>
                  Bác sĩ Tùng
                </Text>
              </View>
              <View style={[styles.bcSProfile4, styles.profileLayout]}>
                <Image
                  style={[styles.bcSHoa, styles.bcSHngLayout]}
                  contentFit="cover"
                  source={require("../assets/bc-s-hoa.png")}
                />
                <Text style={[styles.bcSTrung1, styles.bcSHng1Position]}>
                  Bác sĩ Hoa
                </Text>
              </View>
            </View>
            <View style={[styles.bcSFixed, styles.bcSFixedPosition]}>
              <Image
                style={styles.image25Icon}
                contentFit="cover"
                source={require("../assets/image-25.png")}
              />
              <Text style={[styles.bcS1, styles.bnhTypo]}>Bác sĩ</Text>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition3]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <View style={[styles.dchVFixed, styles.dchLayout]}>
            <View style={[styles.dchVFixedChild, styles.dchLayout]} />
            <View style={[styles.ktQuKhm, styles.ktQuKhmLayout]}>
              <Image
                style={[styles.ktQuKhmChild, styles.khmChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-147.png")}
              />
              <Text style={[styles.ktQuT, styles.bcS2FlexBox]}>
                Kết quả đặt khám
              </Text>
              <Image
                style={styles.handbagIcon}
                contentFit="cover"
                source={require("../assets/handbag.png")}
              />
            </View>
            <View style={[styles.giVideoViBcS, styles.ktQuKhmLayout]}>
              <Image
                style={[styles.ktQuKhmChild, styles.khmChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-146.png")}
              />
              <Image
                style={[styles.vectorIcon6, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <Text style={[styles.ktQuT, styles.bcS2FlexBox]}>
                Các dịch vụ khác
              </Text>
            </View>
            <View style={[styles.chatViBcS, styles.ktQuKhmLayout]}>
              <Image
                style={[styles.ktQuKhmChild, styles.khmChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-145.png")}
              />
              <Image
                style={[styles.vectorIcon7, styles.vectorIconPosition1]}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.ktQuT, styles.bcS2FlexBox]}>
                Đặt lịch khách sạn
              </Text>
            </View>
            <View style={[styles.tKhmBnhVin, styles.khmLayout]}>
              <Image
                style={[styles.tKhmBnhVinChild, styles.khmChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-144.png")}
              />
              <Image
                style={[styles.vectorIcon8, styles.vectorIconPosition2]}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
              <Text style={[styles.tLchSpaGrooming, styles.khmLayout]}>
                Đặt lịch spa-grooming
              </Text>
            </View>
            
            <View style={[styles.tKhmBcS, styles.khmPosition]}>
              <Image
                style={[styles.tKhmBcSChild, styles.khmChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-142.png")}
              />
              <Text style={[styles.bcS2, styles.bcS2FlexBox]}>Bác sĩ</Text>
              <Image
                style={[styles.vectorIcon10, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
            </View>
          </View>
          <View style={styles.contentScrollInner}>
            <View style={[styles.topBarStatus1, styles.footerIconPosition]}>
              <Image
                style={[styles.image64Icon, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/image-64.png")}
              />
              <Image
                style={styles.bcSQuyn}
                contentFit="cover"
                source={require("../assets/bc-s-quyn.png")}
              />
              <Image
                style={styles.bcSQuyn1}
                contentFit="cover"
                source={require("../assets/bc-s-quyn1.png")}
              />
              <Image
                style={styles.image55Icon1}
                contentFit="cover"
                source={require("../assets/image-551.png")}
              />
              <Image
                style={[styles.image66Icon, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/image-66.png")}
              />
              <Image
                style={styles.image65Icon}
                contentFit="cover"
                source={require("../assets/image-65.png")}
              />
              <View style={[styles.groupInner, styles.groupChildShadowBox]} />
              <View
                style={[styles.rectangleView, styles.groupChild1ShadowBox]}
              />
              <View style={[styles.groupChild1, styles.groupChild1ShadowBox]} />
              <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
              <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
              <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
              <Text style={[styles.dEmCho, styles.cngTypo]}>
                Dạ em chào bác sĩ
              </Text>
              <Text style={[styles.doNyEm, styles.doNyEmTypo]}>
                Dạo này em thấy thú cưng của em lên nhiều nấm.
              </Text>
              <Text style={[styles.khong2Ngy, styles.doNyEmTypo]}>
                Khoảng 2 ngày rồi ạ
              </Text>
              <Text style={[styles.text, styles.textTypo]}>...</Text>
              <Text style={[styles.thCngCa, styles.cngTypo]}>
                Thú cưng của em đang gặp vấn đề gì?
              </Text>
              <Text style={[styles.thCngCa1, styles.cngFlexBox]}>
                Thú cưng của em có tiếp xúc với các động vật khác hay những nơi
                ẩm mốc không?
              </Text>
              <Image
                style={[styles.ellipseIcon, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/ellipse-170.png")}
              />
              <Image
                style={[styles.vectorIcon11, styles.chatCskhPosition]}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <LinearGradient
                style={[
                  styles.rectangleLineargradient,
                  styles.chatNgayPosition,
                ]}
                locations={[0, 0.47]}
                colors={["#d0b6b7", "#911a1d"]}
              />
              <Text style={[styles.chatNgay, styles.chatNgayPosition]}>
                CHAT NGAY
              </Text>
              <Image
                style={[styles.vectorIcon12, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/vector10.png")}
              />
              <Text style={[styles.chatCskh, styles.chatCskhPosition]}>
                <Text style={styles.chatCskhTxtContainer}>
                  <Text style={[styles.chat, styles.dngLTypo]}>CHAT</Text>
                  <Text style={styles.cskh}>
                    <Text style={styles.text1}>{` 
`}</Text>
                    <Text style={styles.cskh1}>
                      <Text style={styles.cskh2}>CSKH</Text>
                      <Text style={styles.text2}>{` `}</Text>
                    </Text>
                  </Text>
                </Text>
              </Text>
              <View style={[styles.groupChild5, styles.cngPosition]} />
              <Text style={[styles.cng, styles.cngPosition]}>CÙNG</Text>
              <View style={[styles.groupChild6, styles.groupChildPosition]} />
              <View style={styles.groupChild7} />
              <View style={[styles.groupChild8, styles.groupChildPosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={[styles.footerChild, styles.footerIconPosition]} />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Text style={[styles.trangCh, styles.lchKhmFlexBox]}>Trang chủ</Text>
        <Text style={[styles.lchKhm, styles.lchKhmFlexBox]}>Lịch khám</Text>
        <Text style={[styles.tinNhn, styles.tinNhnFlexBox]}>Tin nhắn</Text>
        <Text style={[styles.tiKhon, styles.tinNhnFlexBox]}>Tài khoản</Text>
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.vectorIcon16, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <View style={[styles.footerItem, styles.footerIconPosition]} />
      </View>
    </View>
  );

headerPosition: {
    height: 160,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  footerIconPosition: {
    left: "0%",
    position: "absolute",
  },
  actionPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  userLayout: {
    height: 36,
    position: "absolute",
  },
  dngLTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  searchLayout: {
    height: 41,
    width: 364,
    position: "absolute",
  },
  tnBcSFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  tinLayout: {
    height: 626,
    width: 374,
    left: 0,
    position: "absolute",
  },
  vitLayout1: {
    width: 326,
    height: 161,
    position: "absolute",
  },
  vitChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  ngyTrcTypo: {
    height: 15,
    top: 120,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  dchVLayout: {
    width: 95,
    height: 18,
  },
  vitLayout: {
    width: 348,
    position: "absolute",
  },
  nuiThCngPosition: {
    width: 347,
    left: 0,
    position: "absolute",
  },
  giTrcTypo: {
    height: 19,
    top: 265,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  xemCcBiFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  scrollPosition: {
    height: 193,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 68,
    width: 724,
    left: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 67,
    top: 0,
    position: "absolute",
  },
  khmLayout1: {
    width: 94,
    height: 17,
    position: "absolute",
  },
  groupItemPosition: {
    width: 89,
    height: 67,
    left: 0,
    top: 0,
    position: "absolute",
  },
  khchLayout: {
    width: 148,
    height: 17,
  },
  dchVTypo: {
    top: 1,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  spaGroomingPosition: {
    top: 24,
    position: "absolute",
  },
  bcSFixedPosition: {
    width: 343,
    left: 15,
    position: "absolute",
  },
  iconLayout: {
    height: "78.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    position: "absolute",
  },
  vectorIconPosition3: {
    left: "97.08%",
    width: "2.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    position: "absolute",
  },
  bnhPosition: {
    width: 586,
    height: 193,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bnhLayout: {
    height: 75,
    position: "absolute",
  },
  bnhVinThPosition: {
    left: 89,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  bnhVinParentPosition: {
    top: 22,
    height: 19,
  },
  profileLayout: {
    height: 95,
    top: 70,
    width: 89,
    position: "absolute",
  },
  bcSHngLayout: {
    height: 65,
    width: 65,
    top: 0,
    position: "absolute",
  },
  bcSHng1Position: {
    top: 78,
    width: 89,
    height: 17,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
  },
  bcSTngPosition: {
    left: 12,
    height: 65,
    width: 65,
    top: 0,
    position: "absolute",
  },
  bnhTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  dchLayout: {
    height: 222,
    width: 363,
    position: "absolute",
  },
  ktQuKhmLayout: {
    height: 88,
    top: 122,
    width: 74,
    position: "absolute",
  },
  khmChildLayout: {
    height: 48,
    width: 48,
    top: 0,
    position: "absolute",
  },
  bcS2FlexBox: {
    height: 32,
    top: 56,
    justifyContent: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
  },
  vectorIconPosition1: {
    left: "36.49%",
    right: "36.49%",
    width: "27.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  khmLayout: {
    width: 83,
    position: "absolute",
  },
  vectorIconPosition2: {
    bottom: "61.36%",
    height: "22.73%",
    top: "15.91%",
  },
  vectorIconPosition: {
    bottom: "58.98%",
    top: "12.5%",
    height: "28.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  khmPosition: {
    top: 11,
    height: 88,
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.colorGray_400,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    backgroundColor: Color.greyscaleBlackWhite,
    position: "absolute",
  },
  groupChild1ShadowBox: {
    left: "70.39%",
    right: "17.05%",
    borderWidth: 0.5,
    borderColor: Color.colorGray_400,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "12.56%",
    height: "6.86%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    backgroundColor: Color.greyscaleBlackWhite,
    position: "absolute",
  },
  cngTypo: {
    fontSize: FontSize.size_10xs,
    color: Color.colorBrown,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  doNyEmTypo: {
    left: "71.79%",
    color: Color.colorBrown,
    fontSize: FontSize.size_10xs,
    width: "8.93%",
    height: "5.71%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
  },
  cngFlexBox: {
    width: "11.46%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  chatCskhPosition: {
    top: "17.14%",
    position: "absolute",
  },
  chatNgayPosition: {
    top: "72%",
    height: "15.43%",
    position: "absolute",
  },
  cngPosition: {
    top: "18.29%",
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorGainsboro_100,
    bottom: "2.86%",
    top: "96%",
    width: "5.59%",
    height: "1.14%",
    borderRadius: Border.br_8xs,
    position: "absolute",
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
  lchKhmFlexBox: {
    top: "55.07%",
    width: "15.24%",
    height: "24.64%",
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  tinNhnFlexBox: {
    top: "56.52%",
    width: "15.24%",
    height: "24.64%",
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorBrown,
  },
  time: {
    marginTop: -9,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    width: 54,
    color: Color.colorWhitesmoke,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
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
  },
  batteryIcon: {
    marginTop: -5.8,
    right: 1,
    width: 25,
    height: 12,
    top: "50%",
    position: "absolute",
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
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  topBarStatus2: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.colorBrown,
  },
  topBarStatus1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  topBarStatus: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buiTiAn: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,image55Icon
  },
  dngL: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_mini,
  },
  buiTiAnContainer: {
    left: 37,
    width: 156,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    height: 36,
    letterSpacing: 0,
    top: 0,
  },
  image55Icon: {
    height: "83.33%",
    width: "15.54%",
    top: "5.56%",
    right: "84.46%",
    bottom: "11.11%",
    borderRadius: Border.br_11xl,
    left: "0%",
    position: "absolute",
  },
  buiTiAnContainer
  
  searchChild: {
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
  },
  vectorIcon: {
    height: "36.83%",
    width: "4.12%",
    top: "33.41%",
    right: "91.76%",
    bottom: "29.76%",
    left: "4.12%",
    position: "absolute",
  },
  tnBcS: {
    top: 15,
    color: "#6b747d",
    width: 313,
    fontSize: FontSize.size_sm,
    display: "flex",
    left: 42,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    height: 12,
    letterSpacing: 0,
    position: "absolute",
  },
  search: {
    top: 108,
    left: 5,
  },
  tinYTChild: {
    backgroundColor: Color.greyscaleBlackWhite,
    top: 0,
  },
  biVitPh2Child: {
    borderRadius: Border.br_2xs,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 326,
    height: 161,
    position: "absolute",
    left: 0,
  },
  cchPhngNga: {
    width: 187,
    height: 53,
    color: Color.colorBlack,
    top: 23,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  image27Icon: {
    top: 19,
    left: 230,
    width: 77,
    height: 76,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  biVitPh2Item: {
    top: 109,
    width: 34,
    height: 34,
    left: 20,
    position: "absolute",
  },
  thsbsLChiu: {
    left: 60,
    color: Color.colorGray_200,
    width: 108,
  },
  ngyTrc: {
    left: 225,
    width: 101,
    color: Color.colorGray_100,
  },
  biVitPh2: {
    left: 363,
    top: 0,
  },
  biVitPh1: {
    left: 15,
    top: 0,
  },
  biVitPh2Parent: {
    top: 344,
    height: 161,
    backgroundColor: Color.greyscaleBlackWhite,
    width: 374,
    left: 0,
    position: "absolute",
  },
  tinYT2: {
    top: 2,
    height: 18,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 26,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "64.32%",
    width: "13.27%",
    right: "86.73%",
    bottom: "35.68%",
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  tinYTFixed: {
    height: 20,
    width: 121,
    left: 15,
    top: 0,
    position: "absolute",
  },
  image26Icon: {
    height: 190,
    borderRadius: Border.br_mini,
    top: 0,
  },
  nuiThCng: {
    top: 197,
    height: 52,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  biVitChild: {
    top: 256,
    width: 36,
    left: 0,
  },
  tsbsNguynXun: {
    width: 159,
    color: Color.colorBlack,
    left: 42,
    top: 265,
  },
  giTrc: {
    left: 281,
    width: 67,
    color: Color.colorGray_100,
  },
  biVit: {
    top: 46,
    height: 292,
    left: 15,
  },
  tinYT1: {
    top: 21,
    height: 505,
    width: 374,
    left: 0,
    position: "absolute",
  },
  xemBiVitKhcBtnChild: {
    borderRadius: 36,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    borderColor: Color.colorGray_100,
    height: 44,
  },
  xemCcBi: {
    left: 1,
    fontSize: FontSize.size_2xs,
    justifyContent: "center",
    width: 347,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    height: 44,
    top: 0,
    position: "absolute",
  },
  xemBiVitKhcBtn: {
    top: 558,
    left: 14,
    height: 44,
  },
  tinYT: {
    top: 1049,
  },
  groupChild: {
    backgroundColor: Color.greyscaleBlackWhite,
    top: 0,
  },
  khmBnh: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  khmBnhWrapper: {
    top: 25,
    left: 107,
    height: 17,
  },
  image60Icon: {
    borderRadius: Border.br_3xs,
  },
  groupParent: {
    left: 523,
    width: 201,
  },
  khchSnTh: {
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    width: 148,
    height: 17,
    alignItems: "center",
    display: "flex",
    left: 0,
  },
  khchSnThCngWrapper: {
    left: 99,
    top: 24,
    position: "absolute",
  },
  groupContainer: {
    left: 249,
    width: 247,
  },
  spaGrooming: {
    left: 95,
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 121,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  spaGroomingParent: {
    width: 216,
    left: 15,
  },
  rectangleParent: {
    top: 81,
  },
  dchV: {
    left: 27,
    height: 18,
    width: 95,
  },
  vectorIcon2: {
    width: "4.96%",
    top: "10.53%",
    right: "95.04%",
    bottom: "10.53%",
  },
  vectorIcon3: {
    height: "84.21%",
    bottom: "15.79%",
    top: "0%",
  },
  dchVHorizontal: {
    top: 22,
    height: 19,
  },
  dchVScroll: {
    top: 842,
    backgroundColor: Color.greyscaleBlackWhite,
    width: 374,
  },
  bnhVinChild: {
    backgroundColor: Color.greyscaleBlackWhite,
  },
  bnhVinItem: {
    borderRadius: 13,
    borderColor: Color.colorBlack,
    width: 75,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 75,
    left: 0,
  },
  artboard14RemovebgPreview1Icon: {
    top: 20,
    left: 10,
    height: 35,
  },
  bnhVinTh: {
    top: 4,
    width: 211,
    height: 17,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  nhCngHong: {
    top: 26,
    fontSize: 13,
    width: 171,
    height: 33,
    color: Color.colorGray_100,
  },
  bnhVin1: {
    top: 72,
    width: 300,
    left: 14,
  },
  bnhVin2: {
    height: 18,
    width: 95,
    left: 26,
  },
  groupIcon: {
    width: "4.39%",
    top: "5.26%",
    right: "95.61%",
    bottom: "15.79%",
  },
  bnhVinParent: {
    width: 342,
    left: 15,
    position: "absolute",
  },
  phngKhmScroll: {
    top: 634,
    height: 194,
    backgroundColor: Color.greyscaleBlackWhite,
    width: 374,
    left: 0,
    position: "absolute",
  },
  bcSChild: {
    backgroundColor: Color.greyscaleBlackWhite,
    width: 375,
    top: 0,
  },
  bcSHng: {
    left: 11,
    borderRadius: 52,
  },
  bcSHng1: {
    fontFamily: FontFamily.robotoRegular,
  },
  bcSProfile1: {
    left: 0,
  },
  bcSTrung: {
    borderRadius: 45,
  },
  bcSTrung1: {
    fontFamily: FontFamily.interRegular,
  },
  bcSProfile2: {
    left: 106,
  },
  bcSTng: {
    borderRadius: 46,
  },
  bcSProfile3: {
    left: 212,
  },
  bcSHoa: {
    borderRadius: 35,
    left: 15,
  },
  bcSProfile4: {
    left: 318,
  },
  bcS: {
    width: 407,
    top: 0,
  },
  image25Icon: {
    height: 18,
    width: 15,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bcS1: {
    width: 51,
    height: 18,
    fontFamily: FontFamily.interRegular,
    left: 26,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon5: {
    height: "88.89%",
    top: "11.11%",
    bottom: "0%",
  },
  bcSFixed: {
    height: 18,
    top: 23,
  },
  bcSScroll: {
    top: 427,
    backgroundColor: Color.greyscaleBlackWhite,
    width: 375,
  },
  dchVFixedChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.greyscaleBlackWhite,
    left: 0,
    top: 0,
  },
  ktQuKhmChild: {
    left: 13,
  },
  ktQuT: {
    width: 74,
    top: 56,
    position: "absolute",
  },
  handbagIcon: {
    height: "21.82%",
    width: "32.43%",
    right: "33.78%",
    bottom: "62.27%",
    left: "33.78%",
    top: "15.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  ktQuKhm: {
    left: 266,
  },
  vectorIcon6: {
    bottom: "61.36%",
    height: "22.73%",
    top: "15.91%",
  },
  giVideoViBcS: {
    left: 144,
  },
  vectorIcon7: {
    height: "20.45%",
    top: "17.05%",
    bottom: "62.5%",
  },
  chatViBcS: {
    left: 22,
  },
  tKhmBnhVinChild: {
    left: 17,
  },
  vectorIcon8: {
    width: "24.1%",
    right: "38.55%",
    left: "37.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  tLchSpaGrooming: {
    height: 32,
    top: 56,
    justifyContent: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
  },
  tKhmBnhVin: {
    left: 262,
    top: 11,
    height: 88,
  },
  vectorIcon9: {
    width: "28.92%",
    right: "36.14%",
    left: "34.94%",
  },
  tKhmPhngKhm: {
    left: 140,
    top: 11,
    height: 88,
  },
  tKhmBcSChild: {
    left: 8,
  },
  bcS2: {
    width: 65,
    position: "absolute",
  },
  vectorIcon10: {
    width: "38.46%",
    right: "30.77%",
    left: "30.77%",
  },
  tKhmBcS: {
    width: 65,
    position: "absolute",
    left: 27,
  },
  dchVFixed: {
    top: 191,
    left: 6,
    height: 222,
  },
  image64Icon: {
    borderRadius: Border.br_3xs,
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  bcSQuyn: {
    top: "29.71%",
    right: "0.55%",
    bottom: "59.43%",
    left: "94.13%",
    borderRadius: Border.br_40xl,
    width: "5.32%",
    height: "10.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  bcSQuyn1: {
    width: "3.36%",
    top: "61.14%",
    right: "5.56%",
    bottom: "32%",
    left: "91.07%",
    height: "6.86%",
    borderRadius: Border.br_40xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  image55Icon1: {
    top: "20.57%",
    right: "31.54%",
    bottom: "68.57%",
    left: "63.14%",
    width: "5.32%",
    height: "10.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    position: "absolute",
  },
  image66Icon: {
    height: "8.57%",
    width: "4.19%",
    top: "39.43%",
    right: "31.02%",
    bottom: "52%",
    left: "64.79%",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  image65Icon: {
    height: "75.43%",
    width: "17.33%",
    top: "12%",
    right: "10.61%",
    left: "72.07%",
    borderRadius: Border.br_8xs,
    bottom: "12.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupInner: {
    top: "22.86%",
    right: "18.15%",
    bottom: "70.29%",
    left: "69.28%",
    width: "12.56%",
    borderWidth: 0.5,
    borderColor: Color.colorGray_400,
    elevation: 2,
    shadowRadius: 2,
    height: "6.86%",
  },
  rectangleView: {
    top: "40.57%",
    bottom: "52.57%",
  },
  groupChild1: {
    top: "50.29%",
    bottom: "42.86%",
  },
  groupChild2: {
    height: "9.14%",
    width: "13.97%",
    top: "60%",
    right: "9.5%",
    bottom: "30.86%",
    left: "76.53%",
  },
  groupChild3: {
    height: "5.14%",
    width: "5.04%",
    top: "70.86%",
    right: "9.48%",
    bottom: "24%",
    left: "85.48%",
  },
  groupChild4: {
    top: "32%",
    right: "6.72%",
    bottom: "61.14%",
    left: "80.72%",
    width: "12.56%",
    borderWidth: 0.5,
    borderColor: Color.colorGray_400,
    elevation: 2,
    shadowRadius: 2,
    height: "6.86%",
  },
  dEmCho: {
    top: "23.43%",
    left: "70.66%",
    color: Color.colorBrown,
    width: "8.93%",
    height: "5.71%",
    fontSize: FontSize.size_10xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  doNyEm: {
    top: "41.14%",
  },
  khong2Ngy: {
    top: "50.86%",
  },
  text: {
    height: "2.86%",
    width: "2.51%",
    top: "70.29%",
    left: "86.86%",
    color: Color.colorBrown,
    textAlign: "left",
    position: "absolute",
  },
  thCngCa: {
    top: "32.57%",
    left: "82.12%",
    color: Color.colorBrown,
    width: "8.93%",
    height: "5.71%",
    fontSize: FontSize.size_10xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  thCngCa1: {
    height: "7.43%",
    top: "60.57%",
    left: "78.21%",
    color: Color.colorBrown,
    fontSize: FontSize.size_10xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  ellipseIcon: {
    height: "19.43%",
    width: "9.5%",
    top: "13.14%",
    right: "83.8%",
    bottom: "67.43%",
    left: "6.69%",
    position: "absolute",
  },
  vectorIcon11: {
    height: "11.43%",
    width: "6.14%",
    right: "85.48%",
    left: "8.37%",
    bottom: "71.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    width: "32.4%",
    right: "47.77%",
    left: "19.83%",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: "15.43%",
    bottom: "12.57%",
    borderRadius: Border.br_mini,
  },
  chatNgay: {
    width: "23.2%",
    left: "24.57%",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 2,
    color: Color.greyscaleBlackWhite,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    justifyContent: "center",
    textAlign: "center",
  },
  vectorIcon12: {
    height: "17.94%",
    width: "8.76%",
    top: "77.71%",
    right: "74.49%",
    bottom: "4.34%",
    left: "16.75%",
    position: "absolute",
  },
  chat: {
    fontSize: FontSize.size_6xl,
    color: Color.colorIndianred,
    fontFamily: FontFamily.robotoBold,
  },
  text1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
  },
  cskh2: {
    fontSize: FontSize.size_21xl,
  },
  text2: {
    fontSize: FontSize.size_xl,
  },
  cskh1: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  cskh: {
    color: Color.greyscaleBlackWhite,
  },
  chatCskhTxtContainer: {
    width: "100%",
  },
  chatCskh: {
    height: "41.71%",
    width: "44.96%",
    left: "18.43%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  groupChild5: {
    height: "10.29%",
    width: "16.2%",
    right: "46.64%",
    left: "37.16%",
    backgroundColor: Color.colorIndianred,
    bottom: "71.43%",
    borderRadius: Border.br_mini,
  },
  cng: {
    left: "39.67%",
    color: Color.colorMaroon,
    width: "11.46%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    height: "10.86%",
    top: "18.29%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  groupChild6: {
    right: "47.19%",
    left: "47.22%",
  },
  groupChild7: {
    right: "54.19%",
    left: "40.22%",
    bottom: "2.86%",
    top: "96%",
    width: "5.59%",
    height: "1.14%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.greyscaleBlackWhite,
    position: "absolute",
  },
  groupChild8: {
    right: "40.22%",
    left: "54.19%",
  },
  contentScrollInner: {
    top: 10,
    height: 175,
    width: 363,
    left: 6,
    position: "absolute",
  },
  contentScroll: {
    height: 1675,
    width: 375,
    left: 0,
    top: 0,
  },
  content: {
    top: 160,
    height: 583,
    width: 374,
    left: 0,
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
  vectorIcon13: {
    right: "84.76%",
    left: "9.63%",
  },
  trangCh: {
    left: "5.08%",
    color: Color.colorBrown,
    fontFamily: FontFamily.robotoRegular,
  },
  lchKhm: {
    left: "30.21%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  tinNhn: {
    left: "55.35%",
  },
  tiKhon: {
    left: "80.21%",
  },
  vectorIcon14: {
    right: "59.36%",
    left: "35.03%",
  },
  vectorIcon15: {
    right: "34.22%",
    left: "60.16%",
  },
  vectorIcon16: {
    height: "31.45%",
    width: "5.8%",
    top: "18.84%",
    right: "9.39%",
    bottom: "49.71%",
    left: "84.81%",
    position: "absolute",
  },
  footerItem: {
    height: "4.35%",
    width: "25.08%",
    right: "74.92%",
    bottom: "95.65%",
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    top: "0%",
    backgroundColor: Color.colorBrown,
  },
  footer: {
    top: 743,
    height: 69,
    width: 374,
    left: 0,
    position: "absolute",
  },
  homepagescreen: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },