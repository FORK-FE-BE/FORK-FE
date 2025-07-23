import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNavigationBar from '../utils/BottomNavigationBar';
import {useUser} from "../../contexts/UserContext";

export default function MyForkScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState('my');
  const {user} = useUser();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerSide} />
          <Text style={styles.title}>마이포크</Text>
          {/* 오른쪽 빈 공간 확보용 */}
          <View style={styles.headerSide} />
        </View>

        <View style={styles.profileRow}>
          {/* 프로필 이미지 */}
          <Image
            source={require('../../dummyData/dummyImages/defaultProfile.png')}
            style={styles.profileImage}
          />

          <View style={styles.profileTextBox}>
            {/* 닉네임 + > */}
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
            >
              <View style={styles.nicknameRow}>
                <Text style={styles.nickname}>{user.name}</Text>
                <Image
                  source={require('../../assets/images/chevron_right.png')}
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
                  source={require('../../assets/images/location.png')}
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
            <Image
              source={require('../../assets/icons/Coupon.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.summaryValue}>10장</Text>
            <Text style={styles.summaryLabel}>쿠폰함</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* 포인트 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ForkPoint')}
            style={styles.summaryItem}
          >
            <Image
              source={require('../../assets/icons/ForkPoint.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.summaryValue}>1,000원</Text>
            <Text style={styles.summaryLabel}>포크포인트</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* 받은 선물 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceivedGifts')}
            style={styles.summaryItem}
          >
            <Image
              source={require('../../assets/icons/Gift.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
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
                source={require('../../assets/icons/ForkBot.png')}
                style={styles.kBot}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <BottomNavigationBar
        activeTab={activeTab} // 현재 화면 이름과 일치 여부 체크
        onTabPress={(tabKey) => {
          if (tabKey !== route.name.toLowerCase()) {
            navigation.navigate(
              tabKey === 'home' ? 'Home' :
                tabKey === 'cart' ? 'CartScreen' :
                  tabKey === 'bot' ? 'KbotScreen' :
                    tabKey === 'order' ? 'OrderList' :
                      tabKey === 'my' ? 'MyFork' :
                        'MyFork'
            );
          }
        }}
      />

      <View style={styles.se}>

      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  headerSide: {
    width: 30, // 왼쪽 아이콘과 동일한 너비
    alignItems: 'center',
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
    width: 60,
    height: 60,
    marginTop: -5,
  },

  iconImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
  }

});
