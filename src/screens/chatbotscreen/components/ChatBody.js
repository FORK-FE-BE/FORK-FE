import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BotMessageBubble from './chatbody/BotMessageBubble';
import UserMessageBubble from './chatbody/UserMessageBubble';
import QuickButtons from './chatbody/QuickButtons';
import RecommendationSection from './chatbody/RecommendationSection';

export default function ChatBotBody() {
    // 샘플 데이터 (추천 식당)
    const recommendedRestaurants = [
        {
            id: '1',
            name: '순대국밥 동대문점',
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '2',
            name: '순대국밥 동대문점',
            rating: 4.9,
            reviewCount: 777,
        },
        {
            id: '3',
            name: '순대국밥 동대문점',
            rating: 4.9,
            reviewCount: 777,
        },
    ];

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <BotMessageBubble
                message={`안녕하세요, ○○님!\n저는 AI 크봇이에요.\n원하시는 게 있다면 말씀해주세요!`}
            />
            <QuickButtons
                options={[
                    '점심 메뉴 추천해줘',
                    '맛집 추천해줘',
                    '40대 여성이 좋아하는 식당 찾아줘',
                ]}
            />
            <UserMessageBubble message={'40대 부장님이랑 밥먹어야함'} />

            <RecommendationSection data={recommendedRestaurants} />
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
