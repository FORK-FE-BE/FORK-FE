import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RestaurantCard from './RestaurantCard';

export default function RecommendationSection({ data }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                40대 여성이 좋아하는 식당들이에요
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardRow}
            >
                {data.map((item, index) => {
                    const isLast = index === data.length - 1;
                    return (
                        <View
                            key={item.id}
                            style={[{ marginRight: isLast ? 0 : 16 }]}
                        >
                            <RestaurantCard {...item} />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        paddingRight:3,
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 30,
        borderWidth: 0.3,
        borderColor: '#A7A7A7',
    },
    title: {
        marginLeft:23,
        marginTop:23,
        fontSize: 16,
        fontFamily: 'Paperlogy-Regular',
        marginBottom: 12,
        color: '#000000',
    },
    cardRow: {
        marginLeft:23,
        flexDirection: 'row',
    },

});
