import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderBar from './components/HeaderBar'
import SearchBar from './components/SearchBar'
import BottomNavigationBar from '../utils/BottomNavigationBar'
import FilterTabBar from './components/FilterTabBar'
import OrderList from './components/OrderList';
import Line from '../utils/Line';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function OrderListScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <HeaderBar />
                <Line />
                <SearchBar />
                <FilterTabBar />
                <OrderList orders={dummyOrders} />

            </ScrollView>
            <BottomNavigationBar
                activeTab={route.name.toLowerCase()} // 현재 화면 이름과 일치 여부 체크
                onTabPress={(tabKey) => {
                    if (tabKey !== route.name.toLowerCase()) {
                        navigation.navigate(
                            tabKey === 'home' ? 'Home' :
                            tabKey === 'cart' ? 'Cart' :
                            tabKey === 'bot' ? 'Bot' :
                            tabKey === 'order' ? 'Order' :
                            tabKey === 'my' ? 'My' : 'Home'
                        );
                    }
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 20,
    },
});


const dummyOrders = [
    {
        date: '6월 21일 (토)',
        storeName: '멘야하레 이촌역점',
        menu: '돈코츠 라멘',
        count: 1,
        price: 19000,
        image: require('../../assets/images/ramenThumbnail.png'),
    },
    {
        date: '6월 22일 (일)',
        storeName: '멘야하레 이촌역점',
        menu: '돈코츠 라멘',
        count: 1,
        price: 19000,
        image: require('../../assets/images/ramenThumbnail.png'),
    },
    {
        date: '6월 23일 (월)',
        storeName: '멘야하레 이촌역점',
        menu: '돈코츠 라멘',
        count: 1,
        price: 19000,
        image: require('../../assets/images/ramenThumbnail.png'),
    },
];