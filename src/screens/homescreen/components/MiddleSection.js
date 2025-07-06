import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Line from '../../utils/Line';  // Line 컴포넌트 임포트

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
            image: require('../../../assets/images/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '2',
            title: '하나 라멘 동대문본점',
            image: require('../../../assets/images/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '3',
            title: '하나 라멘 동대문본점',
            image: require('../../../assets/images/ramen.png'), // AR 카드에 사용할 이미지
            rating: 4.9,
            reviewCount: 777,
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>새로 AR을 등록했어요!</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
            >
                {arList.map((ar, index) => {
                    const isLast = index === arList.length - 1;
                    return (
                        <View
                            key={ar.id}
                            style={{ marginRight: isLast ? 0 : 24 }}
                        >
                            <ArCard {...ar} />
                        </View>
                    );
                })}
            </ScrollView>

            <Line />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    sectionTitle: {
        marginTop: 42,
        fontFamily: 'Paperlogy-SemiBold',
        fontSize: 18,
        marginLeft: 33,
    },

    cardList: {
        paddingHorizontal:24,
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
});