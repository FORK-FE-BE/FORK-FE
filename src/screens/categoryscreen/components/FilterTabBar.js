import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function FilterTabBar() {
    const sortOptions = ['크봇 추천순', '기본 순', '별점 높은 순', '주문 많은 순', '랜덤'];

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer} // ✅ 좌우 여백 적용
            >
                {sortOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            { marginRight: index === sortOptions.length - 1 ? 0 : 12 }, // ✅ 버튼 간 간격
                            index === 0 && styles.activeOption,
                        ]}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                index === 0 && styles.activeOptionText,
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingHorizontal: 24, 
        flexDirection: 'row',
    },
    option: {
        backgroundColor: '#f1f1f1',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
    },
    optionText: {
        fontSize: 13,
        fontFamily: 'Paperlogy-Regular',
        color: '#000',
    },
    activeOption: {
        backgroundColor: '#EDF4FF',
    },
    activeOptionText: {
        fontFamily: 'Paperlogy-Regular',
        color: '#006DF0',
    },
});
