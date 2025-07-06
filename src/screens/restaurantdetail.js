// import React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
// import { useFonts } from 'expo-font';

// // 로컬 슬라이드 이미지 배열
// const slides = [
//   { id: 1, uri: require('../assets/image1.jpg') },
//   { id: 2, uri: require('../assets/image2.jpg') },
//   { id: 3, uri: require('../assets/image3.jpg') },
//   { id: 4, uri: require('../assets/image4.jpg') },
//   { id: 5, uri: require('../assets/image5.jpg') },
// ];

// // // 메뉴 항목 배열
// // const menuItems = [
// //   { id: 1, title: '평양냉면', description: '평양에서 직접 만든 냉면. 더운 계절에 어울리는 메뉴입니다.', price: 10000, image: require('../assets/image1.jpg') },
// //   { id: 2, title: '평양비빔냉면', description: '평양에서 직접 만든 비빔냉면. 매콤하고 시원한 맛.', price: 11000, image: require('../assets/image2.jpg') },
// //   { id: 3, title: '세트메뉴', description: '평양냉면 + 평양비빔냉면 + 콜라 1.25L', price: 32400, image: require('../assets/image3.jpg') },
// //   { id: 4, title: '평양냉면 + 돈까스', description: '평양냉면과 돈까스를 한 번에 즐길 수 있는 메뉴.', price: 12500, image: require('../assets/image4.jpg') },
// //   { id: 5, title: '콜라 1.25L', description: '시원한 콜라 1.25L', price: 3000, image: require('../assets/image5.jpg') },
// // ];   

// export default function RestaurantDetail() {
//   // 폰트 로드
//   const [fontsLoaded] = useFonts({
//     'Paperlogy-Thin': require('../assets/fonts/Paperlogy-1Thin.ttf'),
//     'Paperlogy-ExtraLight': require('../assets/fonts/Paperlogy-2ExtraLight.ttf'),
//     'Paperlogy-Light': require('../assets/fonts/Paperlogy-3Light.ttf'),
//     'Paperlogy-Regular': require('../assets/fonts/Paperlogy-4Regular.ttf'),
//     'Paperlogy-Medium': require('../assets/fonts/Paperlogy-5Medium.ttf'),
//     'Paperlogy-SemiBold': require('../assets/fonts/Paperlogy-6SemiBold.ttf'),
//     'Paperlogy-Bold': require('../assets/fonts/Paperlogy-7Bold.ttf'),
//     'Paperlogy-ExtraBold': require('../assets/fonts/Paperlogy-8ExtraBold.ttf'),
//     'Paperlogy-Black': require('../assets/fonts/Paperlogy-9Black.ttf'),
//   });
  

//   if (!fontsLoaded) {
//     return <Text>폰트를 로드하는 중...</Text>;
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* 상단 슬라이드 이미지 */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
//         {slides.map((slide, index) => (
//           <Image key={slide.id} source={slide.uri} style={styles.slideImage} />
//         ))}
//       </ScrollView>

//       {/* 음식 정보 */}
//       <View style={styles.foodInfo}>
//         <Text style={[styles.restaurantName, { fontFamily: 'Paperlogy-Medium' }]}>맛있는 냉면집</Text>
//         <View style={styles.rating}>
//           <Text style={styles.ratingText}>⭐ 4.79(2931)</Text>
//         </View>
//         <Text style={[styles.description, { fontFamily: 'Paperlogy-Regular' }]}>“시간을 삶고, 정성을 식혔다. 팔당냉면.”</Text>

//         {/* 배달 정보 */}
//         <View style={styles.deliveryInfo}>
//         <Text style={[styles.deliveryInfoTitle, { fontFamily: 'Paperlogy-Medium' }]}>배달 정보</Text>
//         <View style={styles.divider} />
//   <View style={styles.deliveryRow}>
//     <Text style={styles.deliveryLabel}>최소 주문</Text>
//     <Text style={styles.deliveryValue}>20,000원</Text>
//   </View>

//   <View style={styles.deliveryRow}>
//     <Text style={styles.deliveryLabel}>조리 시간</Text>
//     <Text style={styles.deliveryValue}>7-25분</Text>
//   </View>

//   <View style={styles.deliveryRow}>
//     <Text style={styles.deliveryLabel}>위치</Text>
//     <Text style={styles.deliveryValue}>평양시 수성구 121길 18</Text>
//   </View>

//   <View style={styles.deliveryRow}>
//     <Text style={styles.deliveryLabel}>결제 방법</Text>
//     <Text style={styles.deliveryValue}>바로 결제</Text>
//   </View>
// </View>


//         {/* AR 리뷰 포인트 */}
//  {/* AR 리뷰 포인트 */}
// <View style={styles.arReviewBox}>
//   <View style={styles.arReviewTextWrapper}>
//     <Text style={styles.arReviewText}>
//       AR 리뷰 작성시 최대 <Text style={styles.arReviewPoint}>5,000</Text> 포인트 적립
//     </Text>
//   </View>
//   <View style={styles.solidDivider} />
//   <View style={styles.arReviewIcon}>
//     <Image
//       source={require('../assets/download.png')}
//       style={styles.arReviewIconImage}
//       resizeMode="contain"
//     />
//   </View>
// </View>

// <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
//   {['대표 메뉴', '세트 메뉴', '음료'].map((tab) => (
//     <TouchableOpacity key={tab} style={styles.tabButton}>
//       <Text style={styles.tabButtonText}>{tab}</Text>
//     </TouchableOpacity>
//   ))}
// </ScrollView>



//       </View>
//       <View style={styles.menuSection} />

      

//       {/* 음식 메뉴 리스트 */}
//       {/* <View style={styles.menuList}>
//         {menuItems.map((item) => (
//           <View key={item.id} style={styles.menuItem}>
//             <Image source={item.image} style={styles.menuImage} />
//             <View style={styles.menuText}>
//               <Text style={[styles.menuTitle, { fontFamily: 'Paperlogy-Regular' }]}>{item.title}</Text>
//               <Text style={styles.menuPrice}>{item.price.toLocaleString()}원</Text>
//               <Text style={[styles.menuDescription, { fontFamily: 'Paperlogy-Regular' }]}>{item.description}</Text>

//             </View>
//           </View>
//         ))}
//       </View> */}

//       {/* 장바구니 보기 버튼 */}
//       {/* <View style={styles.cartButton}>
//         <Button title="장바구니 보기" onPress={() => {}} />
//       </View> */}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   slider: {
//     width: '100%',
//     height: 200,
//   },
//   slideImage: {
//     width: 393,
//     height: 241,
//     borderRadius: 10,
//   },
//   foodInfo: {
//     paddingTop: 21,
//     paddingLeft: 30,
//   },
//   restaurantName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   rating: {
//     flexDirection: 'row',
//     marginVertical: 5,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//   },
//   deliveryInfoTitle: {
//     fontSize: 18,
//     fontWeight: 'regular',
//     color: '#333',
//     marginBottom: 12,
//     textAlign: 'center',
//     paddingTop:10,
//   },
//   deliveryInfo: {
//     width: 333,
//     height: 157,
//     marginVertical: 28,
//     backgroundColor: '#fff',
//     borderColor: '#ddd',
//     borderWidth:1,
//     borderRadius: 8,
//     marginBottom: 20,
    
//   },
//   divider: {
//     height: 1,
//     width:333,
//     backgroundColor: '#e0e0e0',
//     marginBottom:13,
//   },
//   menuSection: {
//     height: 10,
//     width:393,
//     backgroundColor: '#EFEFEF',
//     marginBottom:13,
//   },
  
//   deliveryRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
    
//   },
//   deliveryLabel: {
//     fontFamily: 'Paperlogy-Regular',
//     fontSize: 14,
//     color: '#333',
//     width: 90, // 고정 너비 (간격 조절용)
//     marginStart:23,
//   },
//   deliveryValue: {
//     fontFamily: 'Paperlogy-Regular',
//     fontSize: 14,
//     color: '#333',
//     marginLeft: 25, // 원하는 간격
//   },
  
//   arReview: {
//     fontSize: 16,
//     color: '#333',
//     marginVertical: 10,
//   },
//   arReviewBox: {
//     width:333,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#EDF4FF',
//     borderRadius: 20,
//     borderWidth: 1.5,
//     borderColor: '#59F',
//     marginVertical: 20,
//   },
  
//   arReviewTextWrapper: {
//     flex: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
  
//   arReviewText: {
//     fontFamily: 'Paperlogy-Regular',
//     fontSize: 16,
//     color: '#000',
//   },
//   solidDivider: {
//     width: 1,
//     height: 50,
//     backgroundColor: '#ccc',  // 실선 색상
//   },
  
  
//   arReviewPoint: {
//     fontFamily: 'Paperlogy-Bold',
//     fontSize: 16,
//     color: '#007BFF',

//   },
//   arReviewDivider: {
//     height: '60%', // 점선 높이
//     borderRightWidth: 1,
//     borderColor: '#ccc',
//     borderStyle: 'dashed',
//     marginHorizontal: 10,
//   },
  
  
  
//   arReviewIcon: {
//     padding: 12,
//     borderTopRightRadius: 20,
//     borderBottomRightRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
  
//   arReviewIconImage: {
//     width: 28,
//     height: 28,
//   },
  
//   menuList: {
//     marginBottom: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     paddingHorizontal: 30,
//   },
//   menuImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//   },
//   menuTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   menuDescription: {
//     fontSize: 14,
//     color: '#555',
//   },
//   menuPrice: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   cartButton: {
//     marginBottom: 20,
//     marginHorizontal: 30,
//   },
// });


import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const slides = [
  { id: 1, uri: require('../assets/image1.jpg') },
  { id: 2, uri: require('../assets/image2.jpg') },
  { id: 3, uri: require('../assets/image3.jpg') },
  { id: 4, uri: require('../assets/image4.jpg') },
  { id: 5, uri: require('../assets/image5.jpg') },
];

const menuItems = {
  '대표 메뉴': [
    { id: 1, title: '평양냉면', description: '평양에서 직접 만든 냉면. 더운 계절에 어울리는 메뉴입니다.', price: 10000, image: require('../assets/image1.jpg') },
    { id: 2, title: '평양비빔냉면', description: '평양에서 직접 만든 비빔냉면. 매콤하고 시원한 맛.', price: 11000, image: require('../assets/image2.jpg') },
    { id: 6, title: '함흥냉면', description: '매콤한 양념과 쫄깃한 면발의 조화.', price: 10500, image: require('../assets/image3.jpg') },
  ],
  '세트 메뉴': [
    { id: 3, title: '세트메뉴', description: '평양냉면 + 평양비빔냉면 + 콜라 1.25L', price: 32400, image: require('../assets/image3.jpg') },
    { id: 4, title: '평양냉면 + 돈까스', description: '평양냉면과 돈까스를 한 번에 즐길 수 있는 메뉴.', price: 12500, image: require('../assets/image4.jpg') },
    { id: 7, title: '함흥냉면 + 만두세트', description: '함흥냉면과 고기만두 세트', price: 13500, image: require('../assets/image5.jpg') },
  ],
  '음료': [
    { id: 5, title: '콜라 1.25L', description: '시원한 콜라 1.25L', price: 3000, image: require('../assets/image5.jpg') },
    { id: 8, title: '사이다 1.25L', description: '톡 쏘는 사이다 1.25L', price: 3000, image: require('../assets/image1.jpg') },
    { id: 9, title: '미린다 오렌지 500ml', description: '과일향 탄산음료 미린다', price: 2000, image: require('../assets/image2.jpg') },
  ],
  '사이드 메뉴': [
    { id: 10, title: '고기만두', description: '직접 빚은 고기만두 6개', price: 5000, image: require('../assets/image3.jpg') },
    { id: 11, title: '감자튀김', description: '바삭한 감자튀김', price: 4000, image: require('../assets/image4.jpg') },
  ],
  '디저트': [
    { id: 12, title: '바닐라 아이스크림', description: '식사 후 달콤한 디저트', price: 3500, image: require('../assets/image5.jpg') },
    { id: 13, title: '팥빙수', description: '전통 팥빙수 한 그릇', price: 7000, image: require('../assets/image1.jpg') },
  ]
};


export default function RestaurantDetail() {
  const [fontsLoaded] = useFonts({
    'Paperlogy-Thin': require('../assets/fonts/Paperlogy-1Thin.ttf'),
    'Paperlogy-ExtraLight': require('../assets/fonts/Paperlogy-2ExtraLight.ttf'),
    'Paperlogy-Light': require('../assets/fonts/Paperlogy-3Light.ttf'),
    'Paperlogy-Regular': require('../assets/fonts/Paperlogy-4Regular.ttf'),
    'Paperlogy-Medium': require('../assets/fonts/Paperlogy-5Medium.ttf'),
    'Paperlogy-SemiBold': require('../assets/fonts/Paperlogy-6SemiBold.ttf'),
    'Paperlogy-Bold': require('../assets/fonts/Paperlogy-7Bold.ttf'),
    'Paperlogy-ExtraBold': require('../assets/fonts/Paperlogy-8ExtraBold.ttf'),
    'Paperlogy-Black': require('../assets/fonts/Paperlogy-9Black.ttf'),
  });

  const sectionRefs = useRef({});
  const scrollRef = useRef();

  const scrollToCategory = (category) => {
    const node = sectionRefs.current[category];
    if (node) {
      node.measureLayout(
        scrollRef.current,
        (x, y) => {
          scrollRef.current.scrollTo({ y: y - 100, animated: true });
        }
      );
    }
  };

  if (!fontsLoaded) return <Text>폰트를 로드하는 중...</Text>;

  return (
    <ScrollView style={styles.container} ref={scrollRef}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        {slides.map((slide) => (
          <Image key={slide.id} source={slide.uri} style={styles.slideImage} />
        ))}
      </ScrollView>

      <View style={styles.foodInfo}>
        <Text style={[styles.restaurantName, { fontFamily: 'Paperlogy-Medium' }]}>맛있는 냉면집</Text>
        <View style={styles.rating}><Text style={styles.ratingText}>⭐ 4.79(2931)</Text></View>
        <Text style={[styles.description, { fontFamily: 'Paperlogy-Regular' }]}>“시간을 삶고, 정성을 식혔다. 팔당냉면.”</Text>

        <View style={styles.deliveryInfo}>
          <Text style={[styles.deliveryInfoTitle, { fontFamily: 'Paperlogy-Medium' }]}>배달 정보</Text>
          <View style={styles.divider} />
          <View style={styles.deliveryRow}><Text style={styles.deliveryLabel}>최소 주문</Text><Text style={styles.deliveryValue}>20,000원</Text></View>
          <View style={styles.deliveryRow}><Text style={styles.deliveryLabel}>조리 시간</Text><Text style={styles.deliveryValue}>7-25분</Text></View>
          <View style={styles.deliveryRow}><Text style={styles.deliveryLabel}>위치</Text><Text style={styles.deliveryValue}>평양시 수성구 121길 18</Text></View>
          <View style={styles.deliveryRow}><Text style={styles.deliveryLabel}>결제 방법</Text><Text style={styles.deliveryValue}>바로 결제</Text></View>
        </View>

        <View style={styles.arReviewBox}>
          <View style={styles.arReviewTextWrapper}>
            <Text style={styles.arReviewText}>
              AR 리뷰 작성시 최대 <Text style={styles.arReviewPoint}>5,000</Text> 포인트 적립
            </Text>
          </View>
          <View style={styles.solidDivider} />
          <View style={styles.arReviewIcon}>
            <Image source={require('../assets/download.png')} style={styles.arReviewIconImage} resizeMode="contain" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
          {Object.keys(menuItems).map((tab) => (
            <TouchableOpacity key={tab} style={styles.tabButton} onPress={() => scrollToCategory(tab)}>
              <Text style={styles.tabButtonText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {Object.entries(menuItems).map(([category, items]) => (
        <View key={category} ref={(ref) => (sectionRefs.current[category] = ref)} style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontFamily: 'Paperlogy-Bold', fontSize: 18, marginBottom: 10 }}>{category}</Text>
          {items.map((item) => (
            <View key={item.id} style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 8, marginRight: 15 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Paperlogy-Regular', fontSize: 16 }}>{item.title}</Text>
                <Text style={{ fontFamily: 'Paperlogy-Bold', fontSize: 14 }}>{item.price.toLocaleString()}원</Text>
                <Text style={{ fontFamily: 'Paperlogy-Regular', fontSize: 13, color: '#666' }}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}

    </ScrollView>
    
    
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slider: { width: '100%', height: 200 },
  slideImage: { width: 393, height: 241, borderRadius: 10 },
  foodInfo: { paddingTop: 21, paddingLeft: 30 },
  restaurantName: { fontSize: 24, fontWeight: 'bold' },
  rating: { flexDirection: 'row', marginVertical: 5 },
  ratingText: { fontSize: 14, color: '#000' },
  description: { fontSize: 16, color: '#555', marginBottom: 20 },
  deliveryInfoTitle: { fontSize: 18, color: '#333', marginBottom: 12, textAlign: 'center', paddingTop: 10 },
  deliveryInfo: {
    width: 333,
    height: 157,
    marginVertical: 28,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  divider: { height: 1, width: 333, backgroundColor: '#e0e0e0', marginBottom: 13 },
  menuSection: { height: 10, width: 393, backgroundColor: '#EFEFEF', marginBottom: 13 },
  deliveryRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  deliveryLabel: { fontFamily: 'Paperlogy-Regular', fontSize: 14, color: '#333', width: 90, marginStart: 23 },
  deliveryValue: { fontFamily: 'Paperlogy-Regular', fontSize: 14, color: '#333', marginLeft: 25 },
  arReviewBox: {
    width: 333,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDF4FF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#59F',
    marginVertical: 20,
  },
  arReviewTextWrapper: { flex: 1, paddingVertical: 20, paddingHorizontal: 20 },
  arReviewText: { fontFamily: 'Paperlogy-Regular', fontSize: 16, color: '#000' },
  solidDivider: { width: 1, height: 50, backgroundColor: '#ccc' },
  arReviewPoint: { fontFamily: 'Paperlogy-Bold', fontSize: 16, color: '#007BFF' },
  arReviewIcon: {
    padding: 12,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arReviewIconImage: { width: 28, height: 28 },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  tabButtonText: {
    fontSize: 14,
    color: '#333',
  },
});
