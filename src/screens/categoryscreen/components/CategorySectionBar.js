import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';


export default function CategorySectionBar() {
    const categories = [
        { key: '1', label: '중식', icon: require('../../../assets/icons/category1.png') },
        { key: '2', label: '디저트', icon: require('../../../assets/icons/category2.png') },
        { key: '3', label: '치킨', icon: require('../../../assets/icons/category3.png') },
        { key: '4', label: '햄버거', icon: require('../../../assets/icons/category4.png') },
        { key: '5', label: '한식', icon: require('../../../assets/icons/category5.png') },
        { key: '6', label: '분식', icon: require('../../../assets/icons/category6.png') },
        { key: '7', label: '일식', icon: require('../../../assets/icons/category7.png') },
        { key: '8', label: '피자', icon: require('../../../assets/icons/category8.png') },
        { key: '9', label: '찌개', icon: require('../../../assets/icons/category9.png') },
        { key: '10', label: '1인분', icon: require('../../../assets/icons/category10.png') },
    ];
    
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryBar}
            contentContainerStyle={styles.scrollContent}
        >
            {categories.map((category, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem}>
                    <View style={styles.iconContainer}>
                        <Image source={category.icon} style={styles.icon} />
                    </View>
                    <Text style={styles.categoryText}>{category.label}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoryBar: {
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    categoryItem: {
        marginTop: 20,
        alignItems: 'center',
        marginRight: 16,
    },
    iconContainer: {
        width: 54,
        height: 54,
        marginBottom: 4,
    },
    icon: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
    categoryText: {
        fontSize: 13,
        fontFamily: 'Paperlogy-Medium'
    },
});
