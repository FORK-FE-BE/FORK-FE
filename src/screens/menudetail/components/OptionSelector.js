// src/screens/menuDetail/components/OptionSelector.js
import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './styles';

export default function OptionSelector({ extraTea, setExtraTea, extraEgg, setExtraEgg }) {
    return (
        <View style={styles.optionBox}>
            <Text style={styles.optionTitle}>추가선택</Text>
            <View style={styles.optionRow}>
                <Checkbox value={extraTea} onValueChange={setExtraTea} />
                <Text style={styles.optionLabel}>차슈 추가</Text>
                <Text style={styles.optionPrice}>+ 1,000원</Text>
            </View>
            <View style={styles.optionRow}>
                <Checkbox value={extraEgg} onValueChange={setExtraEgg} />
                <Text style={styles.optionLabel}>계란추가</Text>
                <Text style={styles.optionPrice}>+ 500원</Text>
            </View>
        </View>
    );
}
