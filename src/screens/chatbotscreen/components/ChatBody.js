import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BotMessageBubble from './chatbody/BotMessageBubble';
import UserMessageBubble from './chatbody/UserMessageBubble';
import QuickButtons from './chatbody/QuickButtons';
import RecommendationSection from './chatbody/RecommendationSection';
import axios from 'axios';
import {BASE_URL} from "../../../constants";
import ChatInputBox from "./ChatInputBox";
export default function ChatBotBody({messages}) {

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* 대화 메시지 반복 렌더 */}
            {messages.map(msg =>
                msg.sender === 'bot' ? (
                    <BotMessageBubble key={msg.id} message={msg.text} />
                ) : (
                    <UserMessageBubble key={msg.id} message={msg.text} />
                )
            )}
            <QuickButtons
                options={[
                    '점심 메뉴 추천해줘',
                    '맛집 추천해줘',
                    '40대 여성이 좋아하는 식당 찾아줘',
                ]}
            />
            {/*<UserMessageBubble message={'40대 부장님이랑 밥먹어야함'} />*/}

            {/*<RecommendationSection data={recommendedRestaurants} />*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 20,
    },
});
