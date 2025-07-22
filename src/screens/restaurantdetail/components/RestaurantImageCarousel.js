// src/screens/restaurantdetail/components/RestaurantImageCarousel.js
import React, {useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import ArrowBack from "../../../assets/icons/arrow_back.svg";
import {useNavigation} from "@react-navigation/native";

const slides = [
    {id: '2', uri: require('../../../dummyData/dummyImages/image2.jpg')},
    {id: '3', uri: require('../../../dummyData/dummyImages/image3.jpg')},
    {id: '4', uri: require('../../../dummyData/dummyImages/image4.jpg')},
    {id: '5', uri: require('../../../dummyData/dummyImages/image5.jpg')},
];

const {width} = Dimensions.get('window');

export default function RestaurantImageCarousel() {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const onViewRef = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <View style={styles.carouselContainer}>
            <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={slides}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Image source={item.uri} style={styles.slideImage}/>
                )}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowBack width={24} height={24}/>
            </TouchableOpacity>
            <View style={styles.indicatorOverlay}>
                {slides.map((_, index) => (
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
        position: 'relative',
        backgroundColor: '#fff'
    },
    slideImage: {
        width: width,
        height: 241,
        resizeMode: 'cover',

    },
    indicatorOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 2,
    },
    activeDot: {
        backgroundColor: '#FFF8F8',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 6,
    },
});