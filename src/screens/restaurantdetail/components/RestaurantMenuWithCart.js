// src/screens/restaurantdetail/components/RestaurantMenuWithCart.js
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const imagePlaceholderIcon = require('../../../assets/icons/ForkBot.png');

/** 응답 정규화: menuItems가
 *  - 배열: [{title:'메뉴', items:[...]}]
 *  - 객체: [{title:카테고리명, items:[...]}] 로 통일
 *  - 기타/undefined/null: []
 */
function normalizeMenuItems(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return [{ title: '메뉴', items: raw }];
  }
  if (typeof raw === 'object') {
    return Object.entries(raw).map(([title, items]) => ({
      title,
      items: Array.isArray(items) ? items : [],
    }));
  }
  return [];
}

function MenuImage({ imgUrl }) {
  const [loadError, setLoadError] = useState(false);

  if (!imgUrl || loadError) {
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
      onError={() => setLoadError(true)}
    />
  );
}

export default function RestaurantMenuWithCart({ scrollRef, menuItems, restaurantId }) {
  const navigation = useNavigation();
  const categoryPositions = useRef({});

  // menuItems를 항상 [{title, items}] 형태로 맞춤
  const sections = useMemo(() => normalizeMenuItems(menuItems), [menuItems]);

  const scrollToCategory = (title) => {
    const y = categoryPositions.current[title];
    if (scrollRef?.current && typeof y === 'number') {
      scrollRef.current.scrollTo({ y, animated: true });
    }
  };

  // 모든 섹션이 비었는지(완전 빈 화면 방지용)
  const isAllEmpty = sections.length > 0 && sections.every(s => !Array.isArray(s.items) || s.items.length === 0);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* 카테고리 탭 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabRow}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {sections.map(({ title }) => (
          <TouchableOpacity
            key={title}
            style={styles.tabButton}
            onPress={() => scrollToCategory(title)}
          >
            <Text style={styles.tabButtonText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 카테고리별 메뉴 렌더링 */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {sections.map(({ title, items }) => (
          <View key={title} onLayout={(e) => {
            // 해당 섹션의 Y 위치를 저장
            categoryPositions.current[title] = e.nativeEvent.layout.y;
          }}>
            <View style={styles.divider} />
            <Text style={styles.categoryTitle}>{title}</Text>

            {(Array.isArray(items) ? items : []).map((item, index) => {
              // id 안전 가드
              const key = item?.menuId ?? item?.id ?? `${title}-${index}`;
              const priceNum = Number(item?.price ?? 0);

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() =>
                    navigation.navigate('MenuDetail', {
                      item: { ...item, restaurantId },
                    })
                  }
                >
                  {index !== 0 && <View style={styles.smallDivider} />}
                  <View style={styles.menuItem}>
                    <View style={styles.menuText}>
                      <Text style={styles.menuTitle}>{item?.name ?? ''}</Text>
                      <Text style={styles.menuPrice}>
                        {Number.isFinite(priceNum) ? `${priceNum.toLocaleString()}원` : ''}
                      </Text>
                    </View>
                    <MenuImage imgUrl={item?.imgUrl} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* 완전 빈 상태 안내 */}
        {sections.length === 0 || isAllEmpty ? (
          <View style={{ padding: 24 }}>
            <Text style={{ fontSize: 16, color: '#666' }}>
              표시할 메뉴가 없습니다.
            </Text>
          </View>
        ) : null}
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
    marginBottom: 40,
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
    tintColor: '#ccc',
  },
});
