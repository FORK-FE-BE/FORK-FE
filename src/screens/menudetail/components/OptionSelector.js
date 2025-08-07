import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './styles';

export default function OptionSelector({ optionGroups, selectedOptions, toggleOption }) {
    if (!optionGroups || optionGroups.length === 0) return null;

    return (
        <View style={styles.optionBox}>
            {/* <Text style={styles.optionTitle}>추가선택</Text> */}

            {optionGroups.map((group, groupIdx) => (
                <View key={groupIdx} style={{ marginBottom: 16 }}>
                    <Text style={styles.optionTitle}>
                        {group.name} {group.required ? '(필수)' : '(선택)'}
                    </Text>

                    {group.options.map((option, optIdx) => {
                        const isSelected =
                            selectedOptions[group.name]?.includes(option.name) || false;

                        return (
                            <View key={optIdx} style={styles.optionRow}>
                                <Checkbox
                                    value={isSelected}
                                    onValueChange={() => toggleOption(group.name, option.name)}
                                />
                                <Text style={styles.optionLabel}>{option.name}</Text>
                                <Text style={styles.optionPrice}>
                                    + {option.price.toLocaleString()}원
                                </Text>
                            </View>
                        );
                    })}
                </View>
            ))}
        </View>
    );
}
