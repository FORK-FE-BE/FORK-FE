import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderBar from './components/HeaderBar';
import OrderMessageSection from './components/OrderMessageSection';
import OrderDetailSection from './components/OrderDetailSection';
import PaymentSection from './components/PaymentSection';
import DeliverySection from './components/DeliverySection';
import BottomNavigationBar from '../utils/BottomNavigationBar';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function OrderDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderBar />
                <OrderMessageSection />
                <OrderDetailSection />
                <PaymentSection />
                <DeliverySection />
            </ScrollView>
            <BottomNavigationBar
                activeTab={route.name.toLowerCase()} // 현재 화면 이름과 일치 여부 체크
                onTabPress={(tabKey) => {
                    if (tabKey !== route.name.toLowerCase()) {
                        navigation.navigate(
                            tabKey === 'home' ? 'Home' :
                                tabKey === 'cart' ? 'Cart' :
                                    tabKey === 'bot' ? 'KbotScreen' :
                                        tabKey === 'order' ? 'OrderList' :
                                            tabKey === 'my' ? 'MyFork' :
                                                'Home'
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
});