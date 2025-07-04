import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from './components/HeaderBar';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';
// import BotMessageBubble from './components/chatbody/BotMessageBubble';
// import QuickReplyButtons from './components/chatbody/QuickReplyButtons';
// import UserMessageBubble from './components/chatbody/UserMessageBubble';
// import RecommendationSection from './components/chatbody/RecommendationSection';
// import RestaurantCard from './components/chatbody/RestaurantCard';

export default function ChatBotScreen() {
  return (
    <LinearGradient
      colors={['#EDF4FF', '#D8E8FF', '#B7D4FF']}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={styles.container}>
          <HeaderBar />
          <ChatBody>
          </ChatBody>
          <ChatInputBox />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // ✅ 하단 고정을 위해 필요
  },
});
