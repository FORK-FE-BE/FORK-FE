import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SendIcon from '../../../assets/icons/Send.svg';

export default function ChatInputBox() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder="궁금한 점을 크봇에게 물어보세요!" 
                placeholderTextColor="#999"
                fontFamily="Paperlogy-Regular"
            />
            <TouchableOpacity style={styles.sendButton}>
                <SendIcon width={30} height={30} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingVertical: 5,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
        marginHorizontal: 20,
        marginBottom: 42,
    },
    inputBox: {
        flex: 1,
        color: '#333',
        fontSize: 14,
        fontFamily: 'Paperlogy-Medium',
        marginRight: 12,
    },
    sendButton: {
        width: 54,
        height: 52,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: '#337EFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
