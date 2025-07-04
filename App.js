import 'react-native-gesture-handler'; // 반드시 최상단!
import React from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
// import OrderDetailScreen from './src/screens/orderdetailscreen/OrderDetailScreen';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from './src/screens/homescreen/HomeScreen';
// import CategoryScreen from './src/screens/categoryscreen/CategoryScreen';
import ChatBotScreen from './src/screens/chatbotscreen/ChatBotScreen';
// import OrderListScreen from './src/screens/orderlistscreen/OrderListScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Paperlogy-Thin': require('./src/assets/fonts/Paperlogy-1Thin.ttf'),
    'Paperlogy-ExtraLight': require('./src/assets/fonts/Paperlogy-2ExtraLight.ttf'),
    'Paperlogy-Light': require('./src/assets/fonts/Paperlogy-3Light.ttf'),
    'Paperlogy-Regular': require('./src/assets/fonts/Paperlogy-4Regular.ttf'),
    'Paperlogy-Medium': require('./src/assets/fonts/Paperlogy-5Medium.ttf'),
    'Paperlogy-SemiBold': require('./src/assets/fonts/Paperlogy-6SemiBold.ttf'),
    'Paperlogy-Bold': require('./src/assets/fonts/Paperlogy-7Bold.ttf'),
    'Paperlogy-ExtraBold': require('./src/assets/fonts/Paperlogy-8ExtraBold.ttf'),
    'Paperlogy-Black': require('./src/assets/fonts/Paperlogy-9Black.ttf'),
  });

  // const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return null; // 폰트가 로딩되지 않으면 아무것도 표시되지 않음
  }

  //본인 화면 보고 싶다면 <HomeScreen/> 이 부분을 본인이 개발하고 있는 화면 파일로 변경
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatBotScreen />
    </SafeAreaView>
  );
}
