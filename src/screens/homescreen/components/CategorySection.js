// src/components/MiddleSection.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const CategoryItem = ({ label, icon }) => {
    const navigation = useNavigation();
    const isComponent = typeof icon === 'function'; // 대문자 Icon 컴포넌트
    return (
        <TouchableOpacity style={styles.categoryItem} activeOpacity={0.5} onPress={() => {
            console.log("선택된 카테고리: ", label);
            navigation.navigate('Category', { category: label });
        }}>
            <View style={styles.iconBackground}>
                {isComponent ? (
                    React.createElement(icon)
                ) : (
                    <Image source={icon} style={styles.iconImage} />
                )}
            </View>
            <Text style={styles.categoryLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

// MiddleSection 컴포넌트
export default function CategorySection() {
    const categories = [
        { key: '1', label: '중식', icon: require('../../../assets/icons/Chinese_food.png') },
        { key: '2', label: '디저트', icon: require('../../../assets/icons/Dessert.png') },
        { key: '3', label: '치킨', icon: require('../../../assets/icons/Chicken.png') },
        { key: '4', label: '햄버거', icon: require('../../../assets/icons/Fast_food.png') },
        { key: '5', label: '한식', icon: require('../../../assets/icons/Korean_food.png') },
        { key: '6', label: '분식', icon: require('../../../assets/icons/Snack_food.png') },
        { key: '7', label: '일식', icon: require('../../../assets/icons/Japanese_food.png') },
        { key: '8', label: '피자', icon: require('../../../assets/icons/Pizza.png') },
        { key: '9', label: '찌개', icon: require('../../../assets/icons/Stew.png') },
        { key: '10', label: '양식', icon: require('../../../assets/icons/Wastern_food.png') },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.categoryList}>
                {categories.map(item => (
                    <CategoryItem key={item.key} label={item.label} icon={item.icon} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#fff',
    },

    categoryList: {
        flexDirection: 'row',
        flexWrap: 'wrap',  // 줄바꿈 지원
        paddingHorizontal: 16,
        paddingBottom: 20,
        marginTop: 30,
    },
    categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',     // 5열 (100% / 5)
        marginBottom: 16,
    },
    categoryLabel: {
        marginTop: 8,
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
        fontFamily: "Paperlogy-Medium",
    },
    iconImage: {
        width: 46,  // 이미지 너비
        height: 46, // 이미지 높이
        resizeMode: 'contain', // 비율 유지하며 크기 조정
        borderRadius: 100, // 둥근 모서리
    },
    iconBackground: {
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#F3F5F7',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
