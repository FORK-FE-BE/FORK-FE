import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Line from '../../utils/Line';  // Line 컴포넌트 임포트
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';

// AR 카드 컴포넌트
const ArCard = ({ title, image, rating, reviewCount }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardRating}>★ {rating} ({reviewCount})</Text>

                <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>AR로 보기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// MiddleSection 컴포넌트
export default function MiddleSection() {
    const arList = [
        {
            id: '1',
            title: '하나 라멘 동대문본점',
            image: require('../../../dummyData/dummyImages/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '2',
            title: '하나 라멘 동대문본점',
            image: require('../../../dummyData/dummyImages/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '3',
            title: '하나 라멘 동대문본점',
            image: require('../../../dummyData/dummyImages/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
    ];

    return (
        <LinearGradient
            colors={['#C8E5FF', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            {/* <Text style={styles.sectionTitle}>새로 AR을 등록했어요!</Text> */}

            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
            >
                {arList.map((ar, index) => {
                    const isLast = index === arList.length - 1;
                    return (
                        <View key={ar.id} style={{ marginRight: isLast ? 0 : 24 }}>
                            <ArCard {...ar} />
                        </View>
                    );
                })}
            </ScrollView> */}

            {/* <Line /> */}
            <View style={styles.pillShape}>
                <Image
                    source={require('../../../assets/icons/ForkBot.png')}
                    style={styles.pillIcon}
                />
                <Text style={styles.pillText}>
                    오늘의 메뉴: <Text style={styles.highlight}>돈가스</Text>
                </Text>
            </View>

            <View style={styles.imageRow}>
                <Image
                    source={require('../../../assets/images/dummy1.png')}
                    style={[styles.foodImage, { marginRight: 4 }]}
                />
                <Image
                    source={require('../../../assets/images/dummy2.png')}
                    style={[styles.foodImage, { marginRight: 4 }]}
                />
                <Image
                    source={require('../../../assets/images/dummy3.png')}
                    style={styles.foodImage}
                />
            </View>

            {/* <TouchableOpacity activeOpacity={0.8} style={styles.gradientButtonWrapper}>
                <LinearGradient
                    colors={['#69DDE8', '#0080FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientButton}
                >
                    <Text style={styles.buttonText}>눌러서 가게별로 AR 비교하기</Text>
                </LinearGradient>
            </TouchableOpacity> */}

<TouchableOpacity
  activeOpacity={0.8}
  style={styles.gradientButtonWrapper}
  onPress={() =>
    WebBrowser.openBrowserAsync(
        'https://ye-eun-min201.github.io/usdz-hosting/ar-viewer.html'
    )
  }
>
  <LinearGradient
    colors={['#69DDE8', '#0080FF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.gradientButton}
  >
    <Text style={styles.buttonText}>눌러서 가게별로 AR 비교하기</Text>
  </LinearGradient>
</TouchableOpacity>

        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        flexShrink: 0,
        paddingBottom: 0,
    },

    sectionTitle: {
        marginTop: 42,
        fontFamily: 'Paperlogy-SemiBold',
        fontSize: 18,
        marginLeft: 33,
    },

    cardList: {
        paddingHorizontal: 24,
    },

    card: {
        marginTop: 16,
        marginBottom: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 12,
        width: 320,
        height: 170,
        alignItems: 'center',
        // 그림자 (iOS + Android)
        elevation: 2, // Android
        borderWidth: 0.1,
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },

    cardImage: {
        width: '50%',
        height: 100,
        maxWidth: "100%",
        borderRadius: 12,
        marginRight: 12,
    },

    cardTitle: {
        fontSize: 15,
        fontFamily: 'Paperlogy-SemiBold',
        color: '#222',
    },

    cardRating: {
        marginTop: 4,
        fontSize: 13,
        color: '#888',
    },

    cardButton: {
        marginTop: 10,
        borderColor: '#006DF0',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 35,
        alignSelf: 'flex-start',
        backgroundColor: '#EDF4FF',
    },
    cardButtonText: {
        color: '#006DF0',
    },

    pillShape: {
        height: 40,
        flexDirection: 'row', //가로 정렬
        paddingHorizontal: 12, // 텍스트 좌우 여백
        borderRadius: 30,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start', // 중앙 정렬
        marginTop: 16,
        marginLeft: 16,     // 상단 여백
    },

    pillText: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Paperlogy-Medium',
    },

    pillIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 6,
    },

    highlight: {
        color: '#006DF0', // '돈가스' 파란색 강조
    },

    imageRow: {
        flexDirection: 'row',
        // gap: 4, // React Native 0.71+ 지원
        marginTop: 15,
        alignSelf: 'center',
    },

    foodImage: {
        width: 105,
        height: 105,
        borderRadius: 10,
        resizeMode: 'cover',
    },

    gradientButtonWrapper: {
        marginTop: 20,
        alignSelf: 'center', // 가운데 정렬
    },

    gradientButton: {
        width: 325,
        height: 50,
        borderRadius: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Paperlogy-SemiBold', // 원하는 폰트로 교체 가능
    },

});