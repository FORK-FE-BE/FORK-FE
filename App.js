import 'react-native-gesture-handler'; // 반드시 최상단!
import React from 'react';
import { useFonts } from 'expo-font';
//import HomeScreen from './src/screens/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyForkScreen from './src/screens/myforkscreen/MyForkScreen';
import EditProfileScreen from './src/screens/myforkscreen/EditProfileScreen';
import AddressManageScreen from './src/screens/myforkscreen/AddressManageScreen';
import ForkPointScreen from './src/screens/myforkscreen/ForkPointScreen';
import ReceivedGiftsScreen from './src/screens/myforkscreen/ReceivedGiftsScreen';
import MyARReviewScreen from './src/screens/myforkscreen/MyARReviewScreen';
import KbotSettingsScreen from './src/screens/myforkscreen/KbotSettingsScreen';
import HomeScreen from './src/screens/homescreen/HomeScreen';
import ChatBotScreen from './src/screens/chatbotscreen/ChatBotScreen';
import CategoryScreen from './src/screens/categoryscreen/CategoryScreen';
import OrderListScreen from './src/screens/orderlistscreen/OrderListScreen';
import OrderDetailScreen from './src/screens/orderdetailscreen/OrderDetailScreen';
import RestaurantDetail from './src/screens/restaurantdetail/RestaurantDetail';
import CartScreen from './src/screens/cartscreen/CartScreen';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

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
  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>

      <SafeAreaView style={{ flex: 1 }}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="KbotScreen" component={ChatBotScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OrderList" component={OrderListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyFork" component={MyForkScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Coupon" component={CouponScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddressManage" component={AddressManageScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForkPoint" component={ForkPointScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ReceivedGifts" component={ReceivedGiftsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyARReview" component={MyARReviewScreen} options={{ headerShown: false }} />
            <Stack.Screen name="KbotSettings" component={KbotSettingsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ headerShown: false }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />


          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
