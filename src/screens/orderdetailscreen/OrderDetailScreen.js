import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderBar from './components/HeaderBar';
import OrderMessageSection from './components/OrderMessageSection';
import OrderDetailSection from './components/OrderDetailSection';
import PaymentSection from './components/PaymentSection';
import DeliverySection from './components/DeliverySection';
import BottomNavigationBar from '../utils/BottomNavigationBar';


export default function OrderDetailScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderBar />
                <OrderMessageSection />
                <OrderDetailSection />
                <PaymentSection />
                <DeliverySection />
            </ScrollView>
            <BottomNavigationBar />
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});