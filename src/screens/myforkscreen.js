import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyForkScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이포크</Text>

      <View style={styles.profileRow}>
        {/* 프로필 이미지 */}
        <Image
          source={require('../assets/images/defaultProfile.png')}
          style={styles.profileImage}
        />

        <View style={styles.profileTextBox}>
          {/* 닉네임 + > */}
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={styles.nicknameRow}>
              <Text style={styles.nickname}>명상하는포크</Text>
              <Image
                source={require('../assets/images/chevron_right.png')}
                style={styles.chevronIconRight}
              />
            </View>
          </TouchableOpacity>

          {/* 위치 아이콘 + 주소관리 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('AddressManage')}
          >
            <View style={styles.locationRow}>
              <Image
                source={require('../assets/images/location.png')}
                style={styles.locationIcon}
              />
              <Text style={styles.addressText}>주소관리</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.summaryBox}>
        {/* 쿠폰함 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Coupon')}
          style={styles.summaryItem}
        >
          <View style={styles.grayCircle} />
          <Text style={styles.summaryValue}>10장</Text>
          <Text style={styles.summaryLabel}>쿠폰함</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* 포인트 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ForkPoint')}
          style={styles.summaryItem}
        >
          <View style={styles.grayCircle} />
          <Text style={styles.summaryValue}>1,000원</Text>
          <Text style={styles.summaryLabel}>포크포인트</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* 받은 선물 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ReceivedGifts')}
          style={styles.summaryItem}
        >
          <View style={styles.grayCircle} />
          <Text style={styles.summaryValue}>0원</Text>
          <Text style={styles.summaryLabel}>받은 선물</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('MyARReview')}
        style={styles.manageBox}
      >
        <Text style={styles.title2}>나의 AR 리뷰 관리</Text>
        <Text style={styles.title3}>내가 직접 작성한 AR 리뷰를 관리할 수 있어요</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('KbotSettings')}
      >
        <View style={styles.manageBoxRow}>
          <View>
            <Text style={styles.title2}>나의 크봇 설정</Text>
            <Text style={[styles.title3, { marginTop: 4 }]}>
              나만의 크봇을 설정하고{'\n'}취향의 음식을 등록해보세요
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/Kbot.png')}
              style={styles.kBot}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.se}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Medium',
    color: '#000000',
  },
  title2: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000000',
  },
  title3: {
    fontSize: 13,
    fontFamily: 'Paperlogy-Regular',
    color: '#000000',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, //동그랗게
    marginTop: 30, //title 아래 30px
  },
  profileTextBox: {
    marginLeft: 15, // 프로필과 오른쪽 박스 간격
    marginTop: 20,
  },
  nicknameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 18,
    fontFamily: 'Paperlogy-SemiBold',
    marginRight: 6,
  },
  chevronIconRight: {
    width: 24,
    height: 24,
    tintColor: '#000', // 색상 변경 가능
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  locationIcon: {
    width: 15,
    height: 15,
    tintColor: '#000',
    marginRight: 4,
  },
  addressText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Medium'
  },
  profileRow: {
    flexDirection: 'row', //가로 배치
    alignItems: 'center',
  },

  //쿠폰/포인트/선물 박스
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  grayCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#D9D9D9',
    marginBottom: 6,
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 2,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Paperlogy-Medium',
  },
  divider: {
    width: 1,
    height: 50,
    backgroundColor: '#E0E0E0',
  },

  manageBox: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    alignItems: 'left',
    alignSelf: 'center',
    width: 300,
    gap: 4,
  },
  manageBoxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EDF4FF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    alignItems: 'left',
    alignSelf: 'center',
    width: 300,
    gap: 4,
  },

  kBot: {
    width: 70,
    height: 45,
  },

});
