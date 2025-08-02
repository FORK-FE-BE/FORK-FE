// src/screens/restaurantdetail/components/RestaurantMenuWithCart.js
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


const imagePlaceholderIcon = require('../../../assets/icons/ForkBot.png');

function MenuImage({ imgUrl }) {
    const [loadError, setLoadError] = useState(false);

    if (!imgUrl || loadError) {
        // 없거나 실패한 경우
        return (
            <View style={styles.menuImagePlaceholder}>
                <Image
                    source={imagePlaceholderIcon}
                    style={styles.menuPlaceholderImage}
                    resizeMode="contain"
                />
            </View>
        );
    }

    return (
        <Image
            source={{ uri: imgUrl }}
            style={styles.menuImage}
            resizeMode="cover"
            onError={() => setLoadError(true)} // 로딩 실패 시 fallback
        />
    );
}

export default function RestaurantMenuWithCart({ scrollRef, menuItems, restaurantId })
    {
    const navigation = useNavigation();
    const categoryPositions = useRef({});


    const scrollToCategory = (category) => {
        const y = categoryPositions.current[category];
        if (scrollRef?.current && y !== undefined) {
            scrollRef.current.scrollTo({ y, animated: true });
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* 카테고리 탭 */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabRow}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            >
                {Object.keys(menuItems || {}).map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={styles.tabButton}
                        onPress={() => scrollToCategory(category)}
                    >
                        <Text style={styles.tabButtonText}>{category}</Text>
                    </TouchableOpacity >
                ))}
            </ScrollView>

            {/* 카테고리별 메뉴 렌더링 */}
            <ScrollView
                ref={scrollRef}
                contentContainerStyle={{ paddingBottom: 100 }} // 하단 여유
                showsVerticalScrollIndicator={false}
            >
                {Object.entries(menuItems || {}).map(([category, items]) => (
  <View key={category}>
    <View
      ref={(ref) => {
        if (ref && scrollRef?.current) {
          ref.measureLayout(
            scrollRef.current,
            (x, y) => {
              categoryPositions.current[category] = y;
            },
            (error) => {
              console.error('measureLayout error:', error);
            }
          );
        }
      }}
    >
      <View style={styles.divider} />
      <Text style={styles.categoryTitle}>{category}</Text>
    </View>

    {items.map((item, index) => (
      <TouchableOpacity
        key={item.menuId}
        onPress={() =>
          navigation.navigate('MenuDetail', {
            item: {
              ...item,
              restaurantId,
            },
          })
        }
      >
        {index !== 0 && <View style={styles.smallDivider} />}
        <View style={styles.menuItem}>
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>{item.name}</Text>
            <Text style={styles.menuPrice}>
              {item.price.toLocaleString()}원
            </Text>
          </View>
          <MenuImage imgUrl={item.imgUrl} />
        </View>
      </TouchableOpacity>
    ))}
  </View>
))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tabRow: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    tabButton: {
        backgroundColor: '#fff',
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginRight: 8,
    },
    tabButtonText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
    },
    categoryTitle: {
        fontSize: 22,
        fontFamily: 'Paperlogy-SemiBold',
        marginVertical: 0,
        paddingHorizontal: 16,
        marginBottom: 40
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 34,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
    },
    menuImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    menuText: {
        flex: 1,
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuTitle: {
        fontSize: 20,
        fontFamily: 'Paperlogy-Medium',
    },
    menuDescription: {
        fontSize: 15,
        fontFamily: 'Paperlogy-Regular',
        color: '#969696',
    },
    menuPrice: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Medium',
        color: '#000',
    },
    divider: {
        height: 14,
        backgroundColor: '#EFEFEF',
        width: '100%',
        marginBottom: 30,
    },
    smallDivider: {
        height: 1,
        backgroundColor: '#EFEFEF',
        width: '100%',
        marginBottom: 16,
        marginTop: -16,
    },
    menuImagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuPlaceholderImage: {
        width: 40,
        height: 40,
        tintColor: '#ccc', // (선택) 회색톤 처리
    },
});
