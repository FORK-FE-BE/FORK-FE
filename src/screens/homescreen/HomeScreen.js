import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import BannerSection from './components/BannerSection';
import CategorySection from './components/CategorySection';
import MiddleSection from './components/MiddleSection';

import Line from '../utils/Line';
import BottomNavigationBar from '../utils/BottomNavigationBar';
// import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  // const navigation = useNavigation();
  // const route = useRoute();

  return (
    <LinearGradient
      colors={['#EDF4FF', '#D8E8FF', '#B7D4FF']}
      style={styles.container}
    >

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeaderBar />
        <SearchBar />
        <BannerSection />
        <CategorySection />
        <Line /> {/*구분선*/}
        <MiddleSection />
      </ScrollView>

      <BottomNavigationBar
        // activeTab={route.name.toLowerCase()} // 현재 화면 이름과 일치 여부 체크
        // onTabPress={(tabKey) => {
        //   if (tabKey !== route.name.toLowerCase()) {
        //     navigation.navigate(
        //       tabKey === 'home' ? 'Home' :
        //       tabKey === 'cart' ? 'Cart' :
        //       tabKey === 'bot' ? 'Bot' :
        //       tabKey === 'order' ? 'Order' :
        //       tabKey === 'my' ? 'My' : 'Home'
        //     );
        //   }
        // }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});