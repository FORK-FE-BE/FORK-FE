import React, {useState} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from './components/HeaderBar';
import ChatInputBox from './components/ChatInputBox';
import ChatBody from './components/ChatBody';
import axios from 'axios';
import {BASE_URL} from "../../constants";
import {useUser} from "../../contexts/UserContext";

export default function ChatBotScreen() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: '안녕하세요, ○○님!\n저는 AI 크봇이에요.\n원하시는 게 있다면 말씀해주세요!' }
  ]);
  const {user} = useUser();
  // 서버 통신 및 메시지 추가 함수
  const sendMessageToServer = async (userMessage) => {
    setMessages(prev => [...prev, { id: String(Date.now()), sender: 'user', text: userMessage }]);

    try {
      const response = await axios.post(`${BASE_URL}/api/chatbot`, {
        message: userMessage,
        userId: user.userId
      });
      const chatbotResponse = response.data.response;
      const restaurants = response.data.recommendation;
      const suggestions = response.data.followUpSuggestions;

      console.log(chatbotResponse);
      console.log(restaurants);
      console.log(suggestions);

      setMessages(prev => [...prev, { id: String(Date.now() + 1), sender: 'bot', text: chatbotResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: String(Date.now() + 2), sender: 'bot', text: '서버와 통신 중 오류가 발생했습니다.' }]);
    }
  };
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
          <ChatBody messages={messages}/>
          <ChatInputBox onSendMessage={sendMessageToServer} />
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
