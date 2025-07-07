// src/layouts/ScreenWithBottomTab.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNavigationBar from '../utils/BottomNavigationBar';

export default function ScreenWithBottomTab({ children }) {
    const navigation = useNavigation();
    const route = useRoute();

    const tabKey = route.name.toLowerCase(); // 현재 화면 이름 소문자

    const handleTabPress = (key) => {
        if (key !== tabKey) {
            navigation.navigate(
                key === 'home' ? 'Home' :
                    key === 'cart' ? 'Cart' :
                        key === 'bot' ? 'Bot' :
                            key === 'order' ? 'Order' :
                                key === 'my' ? 'MyFork' :
                                    'Home'
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>{children}</View>
            <BottomNavigationBar activeTab={tabKey} onTabPress={handleTabPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});
