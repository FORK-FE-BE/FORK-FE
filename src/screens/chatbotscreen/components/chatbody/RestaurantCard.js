import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function RestaurantCard({ name, rating, reviewCount, image }) {
    return (
        <View style={styles.card}>
            <Image
                source={image || require('../../../../assets/images/ramen.png')}
                style={styles.image}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rating}>★ {rating} ({reviewCount})</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: "#a7a7a7",
        borderRadius: 10,
        padding: 11,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        fontSize: 14,
        fontFamily: 'Paperlogy-SemiBold',
        marginBottom: 1,
        color: '#000',
    },
    rating: {
        fontSize: 12,
        fontFamily: 'Paperlogy-Regular',
    },
});
