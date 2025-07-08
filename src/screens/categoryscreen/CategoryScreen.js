import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderBar from './components/HeaderBar';
import CategorySectionBar from './components/CategorySectionBar';
import RecommendedSection from './components/RecommendedSection';
import RestaurantList from './components/RestaurantList';
import FilterTabBar from './components/FilterTabBar';
import {useRoute} from "@react-navigation/native";


export default function CategoryScreen() {
    const route = useRoute();
    const category = route.params?.category || '중식';
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header 컴포넌트 */}
                <HeaderBar />
                {/* 카테고리 섹션 */}
                <CategorySectionBar />
                {/* 추천 섹션 */}
                <RecommendedSection />
                {/* <Line /> 섹션 구분선 */}
                <FilterTabBar />
                {/* 식당 리스트 섹션 */}
                <RestaurantList category={category}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});