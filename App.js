import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './src/screens/homescreen/HomeScreen';
import MyForkScreen from './src/screens/MyForkScreen';
import CouponScreen from './src/screens/CouponScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import AddressManageScreen from './src/screens/AddressManageScreen';
import ForkPointScreen from './src/screens/ForkPointScreen';
import ReceivedGiftsScreen from './src/screens/ReceivedGiftsScreen';
import MyARReviewScreen from './src/screens/MyARReviewScreen';
import KbotSettingsScreen from './src/screens/KbotSettingsScreen';

const Stack = createNativeStackNavigator();

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

  if (!fontsLoaded) {
    return null; // 폰트가 로딩되지 않으면 아무것도 표시되지 않음
  }

  //본인 화면 보고 싶다면 <HomeScreen/> 이 부분을 본인이 개발하고 있는 화면 파일로 변경
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyFork">
        <Stack.Screen name="MyFork" component={MyForkScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Coupon" component={CouponScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddressManage" component={AddressManageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForkPoint" component={ForkPointScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReceivedGifts" component={ReceivedGiftsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyARReview" component={MyARReviewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="KbotSettings" component={KbotSettingsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
