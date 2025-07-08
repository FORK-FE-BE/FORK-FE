import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategorySectionBar() {
    const [selectedCategory, setSelectedCategory] = useState('중식'); // 기본값
    const navigation = useNavigation();

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

    const handleCategoryPress = (categoryLabel) => {
        setSelectedCategory(categoryLabel);
        navigation.navigate('Category', { category: categoryLabel });
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryBar}
            contentContainerStyle={styles.scrollContent}
        >
            {categories.map((category) => {
                const isSelected = selectedCategory === category.label;
                return (
                    <TouchableOpacity
                        key={category.key}
                        style={[
                            styles.categoryItem,
                            isSelected && styles.selectedItem
                        ]}
                        onPress={() => handleCategoryPress(category.label)}
                    >
                        <View style={[styles.iconContainer, isSelected && styles.selectedIconContainer]}>
                            <Image source={category.icon} style={styles.icon} />
                        </View>
                        <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
                            {category.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
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
    selectedItem: {
        opacity: 1,
    },
    iconContainer: {
        width: 54,
        height: 54,
        marginBottom: 4,
        borderRadius: 27,
        backgroundColor: '#eee',
    },
    selectedIconContainer: {
        backgroundColor: '#D7E6FF',
    },
    icon: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
    categoryText: {
        fontSize: 13,
        color: '#333',
        fontFamily: 'Paperlogy-Medium',
    },
    selectedText: {
        color: '#006DF0',
        fontFamily: 'Paperlogy-Medium',
    },
});
