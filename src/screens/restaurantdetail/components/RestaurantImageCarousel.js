// src/screens/restaurantdetail/components/RestaurantImageCarousel.js
import React, {useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import ArrowBack from "../../../assets/icons/arrow_back.svg";
import {useNavigation} from "@react-navigation/native";
import imagePlaceholderIcon from "../../../assets/icons/ForkBot.png";

// const slides = [
//     {id: '2', uri: require('../../../dummyData/dummyImages/image2.jpg')},
//     {id: '3', uri: require('../../../dummyData/dummyImages/image3.jpg')},
//     {id: '4', uri: require('../../../dummyData/dummyImages/image4.jpg')},
//     {id: '5', uri: require('../../../dummyData/dummyImages/image5.jpg')},
// ];

const {width} = Dimensions.get('window');
const placeholderImage = require('../../../assets/icons/ForkBot.png');

function CarouselImage({uri}) {
    const [error, setError] = useState(false);

    if (!uri || error) {
        return (
            <View style={styles.slideImage}>
                <Image
                    source={placeholderImage}
                    style={styles.placeholderIcon}
                    resizeMode="contain"
                />
            </View>
        );
    }

    return (
        <Image
            source={{uri}}
            style={styles.slideImage}
            resizeMode="cover"
            onError={() => setError(true)}
        />
    );
}

export default function RestaurantImageCarousel({images = []}) {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const onViewRef = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const imageData = images.length > 0 ? images : [null];

    return (
        <View style={styles.carouselContainer}>
            <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={imageData}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({item}) => <CarouselImage uri={item}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowBack width={24} height={24}/>
            </TouchableOpacity>

            <View style={styles.indicatorOverlay}>
                {imageData.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, currentIndex === index && styles.activeDot]}
                    />
                ))}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    carouselContainer: {
        position: 'relative', backgroundColor: '#fff'
    }, slideImage:
        {
            width: width, height: 230, resizeMode: 'cover', justifyContent: 'center',  // 세로 중앙 정렬
            alignItems: 'center',      // 가로 중앙 정렬
            backgroundColor: '#f0f0f0', // (선택) 기본 배경 설정

        }, indicatorOverlay: {
        position: 'absolute', bottom: 10, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center',

    }, dot: {
        width: 4, height: 4, borderRadius: 4, backgroundColor: '#ccc', marginHorizontal: 2,
    }, activeDot: {
        backgroundColor: '#FFF8F8',
    }, backButton: {
        position: 'absolute',
        top: 20,
        left: 16,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 6,
    },
    placeholderIcon: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        tintColor: '#ccc', // 선택적
    },
});