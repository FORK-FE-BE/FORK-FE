// src/screens/menuDetail/components/QuantityCounter.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function QuantityCounter({ quantity, setQuantity }) {
    return (
        <View style={styles.quantityBox}>
            <Text style={styles.optionTitle}>수량</Text>
            <View style={styles.counterBox}>
                <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Text style={styles.counterBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Text style={styles.counterBtn}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
