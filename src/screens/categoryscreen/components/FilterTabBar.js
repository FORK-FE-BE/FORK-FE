import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function FilterTabBar() {
    const sortOptions = ['크봇 추천순', '기본 순', '별점 높은 순', '주문 많은 순', '랜덤'];
    const [selectedOption, setSelectedOption] = useState(sortOptions[0]); // 기본 선택값

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer} // ✅ 좌우 여백 적용
            >
                {sortOptions.map((option, index) => {
                    const isActive = selectedOption === option;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedOption(option)}
                            style={[
                                styles.option,
                                { marginRight: index === sortOptions.length - 1 ? 0 : 12 },
                                isActive && styles.activeOption,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    isActive && styles.activeOptionText,
                                ]}
                            >
                                {option}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
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
        fontFamily: 'Paperlogy-Medium',
        color: '#000',
    },
    activeOption: {
        backgroundColor: '#EDF4FF',
    },
    activeOptionText: {
        fontFamily: 'Paperlogy-SemiBold',
        color: '#006DF0',
    },
});
