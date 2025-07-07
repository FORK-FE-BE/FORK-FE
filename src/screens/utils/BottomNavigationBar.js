import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


import HomeIcon from '../../assets/icons/Home.svg';
import CartIcon from '../../assets/icons/CartIcon.svg';
import BotIcon from '../../assets/icons/BotIcon.svg';
import OrderIcon from '../../assets/icons/OrderIcon.svg';
import MyIcon from '../../assets/icons/MyIcon.svg';

const tabs = [
  { key: 'home', label: '홈', icon: HomeIcon },
  { key: 'cart', label: '장바구니', icon: CartIcon },
  { key: 'bot', label: 'AI 크봇', icon: BotIcon },
  { key: 'order', label: '주문내역', icon: OrderIcon },
  { key: 'my', label: '마이포크', icon: MyIcon },
];

export default function BottomNavigationBar({ activeTab, onTabPress }) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const IconComponent = tab.icon;
        const focused = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <IconComponent
              width={28}
              height={28}
              fill={focused ? '#006DF0' : '#bbb'} // 선택된 탭은 파란색, 아니면 회색
            />
            <Text style={[styles.label, focused && styles.labelFocused]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 4,
  },
  labelFocused: {
    color: '#4A7AFF',
    fontWeight: 'bold',
  },
});
