// src/screens/menuDetail/components/MenuImage.js
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const imagePlaceholderIcon = require('../../../assets/icons/ForkBot.png');

export default function MenuImage({ imgUrl, style }) {
    const [loadError, setLoadError] = useState(false);

    if (!imgUrl || loadError) {
        return (
            <View style={[styles.menuImagePlaceholder, style]}>
                <Image source={imagePlaceholderIcon} style={styles.menuPlaceholderImage} resizeMode="contain" />
            </View>
        );
    }

    return (
        <Image
            source={{ uri: imgUrl }}
            style={[styles.menuImage, style]}
            resizeMode="cover"
            onError={() => setLoadError(true)}
        />
    );
}
