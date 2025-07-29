// import React, {useEffect, useState} from 'react';
// import {
//     View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, ActivityIndicator
// } from 'react-native';
// import axios from 'axios';
// import BottomNavigationBar from '../utils/BottomNavigationBar';
// import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
// import {useUser} from "../../contexts/UserContext";
// import {useCart} from "../../contexts/CartContext";
// import {BASE_URL} from "../../constants";

// export default function CartScreen() {
//     const route = useRoute();
//     const navigation = useNavigation();
//     const [activeTab] = useState('cart');
//     const {cart, updateCart} = useCart(); // ✅ cart 상태 가져오기
//     const {refreshCart} = useCart();
//     const isFocused = useIsFocused();
//     const {user} = useUser();
//     const [loading, setLoading] = useState(true);
//     const deliveryFee = 0; // 배달비 등 추가 비용

//     const decreaseQuantity = async (item) => {
//         if (item.quantity <= 1) {
//             Alert.alert('알림', '수량은 최소 1개 이상이어야 합니다.');
//             return;
//         }
//         try {
//             await axios.put(`${BASE_URL}/api/cart/${item.cartItemId}`, {
//                 quantity: item.quantity-1,
//             });
//             // 수량 변경 후 장바구니 업데이트
//             await refreshCart(user.userId);
//         } catch (error) {
//             Alert.alert('오류', '수량 감소에 실패했습니다.');
//             console.error(error);
//         }
//     };

//     const increaseQuantity = async (item) => {
//         try {
//             await axios.put(`${BASE_URL}/api/cart/${item.cartItemId}`,{
//                 quantity: item.quantity+1,
//             });
//             // 수량 변경 후 장바구니 업데이트
//             await refreshCart(user.userId);
//         } catch (error) {
//             Alert.alert('오류', '수량 증가에 실패했습니다.');
//             console.error(error);
//         }
//     };

//     const deleteItem = async (item) => {
//         Alert.alert(
//             '삭제 확인',
//             '이 아이템을 삭제하시겠습니까?',
//             [
//                 {text: '취소', style: 'cancel'},
//                 {
//                     text: '삭제',
//                     style: 'destructive',
//                     onPress: async () => {
//                         try {
//                             await axios.delete(`${BASE_URL}/api/cart/${user.userId}/items/${item.cartItemId}`);
//                             await refreshCart(user.userId);
//                         } catch (error) {
//                             Alert.alert('오류', '삭제에 실패했습니다.');
//                             console.error(error);
//                         }
//                     }
//                 }
//             ]
//         );
//     };

//     useEffect(() => {
//         // ✅ 화면이 포커스되고, 사용자 ID가 있을 때만 실행
//         if (isFocused) {
//             const fetchCart = async () => {
//                 setLoading(true);
//                 try {
//                     const response = await axios.get(`${BASE_URL}/api/cart/${user.userId}`);
//                     updateCart(response.data);
//                 } catch (error) {
//                     console.error('장바구니 불러오기 실패:', error);
//                     Alert.alert('오류', '장바구니 정보를 불러올 수 없습니다.');
//                 } finally {
//                     setLoading(false);
//                 }
//             };
//             fetchCart();
//         } else {
//             setLoading(false);
//         }
//     }, [isFocused]);

//     const renderCartItem = ({item}) => (
//         <View style={styles.card}>
//             <Text style={styles.menuTitle}>{item.menuName}</Text>
//             <Text style={styles.price}>가격 : {item.price.toLocaleString()}원</Text>
//             {item.selectedOptions && (
//                 <Text style={styles.topping}>옵션 : {item.selectedOptions}</Text>
//             )}
//             <View style={styles.quantityWrapper}>
//                 <TouchableOpacity onPress={() => deleteItem(item)}>
//                     <Text>🗑️</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => decreaseQuantity(item)}>
//                     <Text>➖</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.quantityText}>{item.quantity}</Text>
//                 <TouchableOpacity onPress={() => increaseQuantity(item)}>
//                     <Text>➕</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );

//     if (loading) {
//         return <View style={styles.container}><ActivityIndicator size="large"/></View>;
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>장바구니</Text>
//             </View>

//             <View style={styles.storeBox}>
//                 {/* ✅ 동적 데이터로 변경 */}
//                 {cart?.restaurantName ? (
//                 <View style={styles.storeBox}>
//                     <Text style={styles.storeName}>{cart.restaurantName}</Text>
//                 </View>
//                 ) : (
//                 <View style={styles.emptyNoticeBox}>
//                     <Text style={styles.emptyNoticeText}>장바구니가 비었습니다.</Text>
//                 </View>
//                 )}

//                 {/* <Text style={styles.storeName}>{cart?.restaurantName || "장바구니가 비었습니다"}</Text> */}
//             </View>

//             {/* ✅ FlatList로 상품 목록 렌더링 */}
//             <FlatList
//   data={cart?.cartItemList || []}
//   renderItem={renderCartItem}
//   keyExtractor={(item) => item.cartItemId.toString()}
//   ListEmptyComponent={
//     <Text style={{ textAlign: 'center', marginTop: 50 }}>
//       장바구니에 담긴 상품이 없습니다.
//     </Text>
//   }
//   ListFooterComponent={
//     cart?.cartItemList?.length > 0 ? (
//       <TouchableOpacity
//         style={styles.addMenuButton}
//         onPress={() =>
//           navigation.navigate('RestaurantDetail', { restaurantId: cart?.restaurantId })
//         }
//       >
//         <Text style={styles.addMenuText}>+ 메뉴 추가하러 가기</Text>
//       </TouchableOpacity>
//     ) : null
//   }
// />


//             {/* ✅ 결제 요약 */}
//             <View style={styles.paymentBox}>
//                 <Text style={styles.paymentTitle}>결제금액을 확인해주세요</Text>
//                 <View style={styles.amountBox}>
//                     <View style={styles.rowBetween}>
//                         <Text style={styles.totalLabel}>총 주문금액</Text>
//                         <Text style={styles.totalValue}>{(cart?.totalPrice || 0).toLocaleString()}원</Text>
//                     </View>
//                     <View style={styles.divider}/>
//                     <View style={[styles.rowBetween, {marginTop: 8}]}>
//                         <Text style={styles.finalLabel}>최종 결제금액</Text>
//                         <Text
//                             style={styles.finalValue}>{((cart?.totalPrice || 0) + deliveryFee).toLocaleString()}원</Text>
//                     </View>
//                 </View>
//             </View>

//             {/* ✅ 하단 바 */}
//             <View style={styles.bottomBar}>
//                 <Text style={styles.bottomPrice}>총 결제금액</Text>
//                 <Text
//                     style={styles.bottomPriceNumber}>{((cart?.totalPrice || 0) + deliveryFee).toLocaleString()}원</Text>
//                 <TouchableOpacity
//                     style={styles.orderButton}
//                     onPress={() => navigation.navigate('Payment')}
//                 >
//                     <Text style={styles.orderButtonText}>주문하러 가기</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.bottomNavigation}>
//                 <BottomNavigationBar
//                     activeTab={activeTab}
//                     onTabPress={(tabKey) => {
//                         if (tabKey !== route.name.toLowerCase()) {
//                             navigation.navigate(
//                                 tabKey === 'home' ? 'Home' :
//                                     tabKey === 'cart' ? 'CartScreen' :
//                                         tabKey === 'bot' ? 'KbotScreen' :
//                                             tabKey === 'order' ? 'OrderList' :
//                                                 tabKey === 'my' ? 'MyFork' : 'Home'
//                             );
//                         }
//                     }}
//                 />
//             </View>
//         </View>
//     );
// }

// // styles는 기존과 동일하게 유지
// const styles = StyleSheet.create({
//     container: {flex: 1, backgroundColor: '#EDF4FF'},
//     header: {
//         flexDirection: 'row', alignItems: 'center', paddingTop: 10,
//         paddingHorizontal: 20, backgroundColor: '#fff',
//     },
//     headerTitle: {
//         flex: 1, textAlign: 'center', fontSize: 24,
//         fontFamily: 'Paperlogy-Medium', marginBottom: 16,
//     },
//     storeBox: {
//         padding: 20,
//     },
//     storeName: {
//         fontSize: 22,
//         fontFamily: 'Paperlogy-SemiBold',
//         marginLeft: 14,
//     },
//     card: {
//         backgroundColor: '#fff',
//         marginHorizontal: 24,
//         marginBottom: 16,
//         borderRadius: 14,
//         padding: 16,
//         elevation: 3,
//     },
//     menuTitle: {
//         fontSize: 20,
//         fontFamily: 'Paperlogy-SemiBold',
//         marginBottom: 8,
//     },
//     price: {
//         fontSize: 15,
//         color: '#7C7C7C',
//         fontFamily: 'Paperlogy-Regular',
//     },
//     topping: {
//         fontSize: 15,
//         color: '#7C7C7C',
//         fontFamily: 'Paperlogy-Regular',
//         marginBottom: 10,
//     },
//     quantityWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         gap: 10,
//         marginBottom: 10,
//     },
//     quantityText: {
//         fontSize: 16,
//         fontFamily: 'Paperlogy-Regular',
//     },
//     addMenuButton: {
//         backgroundColor: '#fff',
//         marginHorizontal: 24,
//         borderRadius: 14,
//         padding: 16,
//         elevation: 3,
//         borderStyle: 'dashed',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         marginTop: 16,
//     },
//     addMenuText: {
//         textAlign: 'center',
//         fontSize: 18,
//         fontFamily: 'Paperlogy-SemiBold',
//         color: '#555'
//     },
//     paymentBox: {
//         padding: 24,
//     },
//     paymentTitle: {
//         fontFamily: 'Paperlogy-SemiBold',
//         fontSize: 20,
//         marginBottom: 10,
//     },
//     amountBox: {
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         padding: 20,
//     },
//     rowBetween: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 5,
//     },
//     divider: {
//         borderBottomColor: '#CACACA',
//         borderBottomWidth: 1,
//         marginVertical: 10,
//     },
//     totalLabel: {
//         fontSize: 18,
//         fontFamily: 'Paperlogy-Bold',
//     },
//     totalValue: {
//         fontSize: 18,
//         fontFamily: 'Paperlogy-Bold',
//     },
//     finalLabel: {
//         fontSize: 20,
//         fontFamily: 'Paperlogy-SemiBold',
//     },
//     finalValue: {
//         fontSize: 20,
//         fontFamily: 'Paperlogy-SemiBold',
//     },
//     bottomBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 16,
//     },
//     bottomPrice: {
//         fontSize: 16,
//         fontFamily: 'Paperlogy-Regular',
//     },
//     bottomPriceNumber: {
//         fontSize: 20,
//         fontFamily: 'Paperlogy-Bold',
//     },
//     orderButton: {
//         backgroundColor: '#268CFF',
//         paddingVertical: 10,
//         paddingHorizontal: 16,
//         borderRadius: 10,
//     },
//     orderButtonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontFamily: 'Paperlogy-Bold',
//     },
//     bottomNavigation: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//     },
//     emptyNoticeBox: {
//         padding: 20,
//         alignItems: 'center',
//       },
//       emptyNoticeText: {
//         fontSize: 20,
//         fontFamily: 'Paperlogy-SemiBold',
//         color: '#7C7C7C',
//       },

// })




import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import BottomNavigationBar from '../utils/BottomNavigationBar';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useUser} from "../../contexts/UserContext";
import {useCart} from "../../contexts/CartContext";
import {BASE_URL} from "../../constants";
import PaymentScreen from '../paymentscreen/PaymentScreen';

export default function CartScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const [activeTab] = useState('cart');
    const {cart, updateCart, refreshCart} = useCart();
    const isFocused = useIsFocused();
    const {user} = useUser();
    const [loading, setLoading] = useState(true);
    const deliveryFee = 0;

    const decreaseQuantity = async (item) => {
        if (item.quantity <= 1) {
            Alert.alert('알림', '수량은 최소 1개 이상이어야 합니다.');
            return;
        }
        try {
            await axios.put(`${BASE_URL}/api/cart/${item.cartItemId}`, {
                quantity: item.quantity - 1,
            });
            await refreshCart(user.userId);
        } catch (error) {
            Alert.alert('오류', '수량 감소에 실패했습니다.');
            console.error(error);
        }
    };

    const increaseQuantity = async (item) => {
        try {
            await axios.put(`${BASE_URL}/api/cart/${item.cartItemId}`, {
                quantity: item.quantity + 1,
            });
            await refreshCart(user.userId);
        } catch (error) {
            Alert.alert('오류', '수량 증가에 실패했습니다.');
            console.error(error);
        }
    };

    const deleteItem = async (item) => {
        Alert.alert(
            '삭제 확인',
            '이 아이템을 삭제하시겠습니까?',
            [
                {text: '취소', style: 'cancel'},
                {
                    text: '삭제',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await axios.delete(`${BASE_URL}/api/cart/${user.userId}/items/${item.cartItemId}`);
                            await refreshCart(user.userId);
                        } catch (error) {
                            Alert.alert('오류', '삭제에 실패했습니다.');
                            console.error(error);
                        }
                    }
                }
            ]
        );
    };

    useEffect(() => {
        if (isFocused) {
            const fetchCart = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`${BASE_URL}/api/cart/${user.userId}`);
                    updateCart(response.data);
                } catch (error) {
                    console.error('장바구니 불러오기 실패:', error);
                    Alert.alert('오류', '장바구니 정보를 불러올 수 없습니다.');
                } finally {
                    setLoading(false);
                }
            };
            fetchCart();
        } else {
            setLoading(false);
        }
    }, [isFocused]);

    const renderCartItem = ({item}) => (
        <View style={styles.card}>
            <Text style={styles.menuTitle}>{item.menuName}</Text>
            <Text style={styles.price}>가격 : {item.price.toLocaleString()}원</Text>
            {item.selectedOptions && (
                <Text style={styles.topping}>옵션 : {item.selectedOptions}</Text>
            )}
            <View style={styles.quantityWrapper}>
                <TouchableOpacity onPress={() => deleteItem(item)}>
                    <Text>🗑️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => decreaseQuantity(item)}>
                    <Text>➖</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item)}>
                    <Text>➕</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>장바구니</Text>
            </View>

            <View style={styles.storeBox}>
                <Text style={styles.storeName}>{cart?.restaurantName || "장바구니가 비었습니다"}</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <FlatList
                    data={cart?.cartItemList || []}
                    renderItem={renderCartItem}
                    keyExtractor={(item) => item.cartItemId.toString()}
                    ListEmptyComponent={
                        <Text style={{textAlign: 'center', marginTop: 50}}>
                            장바구니에 담긴 상품이 없습니다.
                        </Text>
                    }
                    ListFooterComponent={
                        cart?.cartItemList?.length > 0 ? (
                            <>
                                <View style={styles.paymentBox}>
                                    <Text style={styles.paymentTitle}>결제금액 확인을 확인해주세요</Text>
                                    <View style={styles.amountBox}>
                                        <View style={styles.rowBetween}>
                                            <Text style={styles.totalLabel}>총 주문금액</Text>
                                            <Text style={styles.totalValue}>
                                                {(cart?.totalPrice || 0).toLocaleString()}원
                                            </Text>
                                        </View>
                                        <View style={styles.divider}/>
                                        <View style={[styles.rowBetween, {marginTop: 8}]}>
                                            <Text style={styles.finalLabel}>최종 결제금액</Text>
                                            <Text style={styles.finalValue}>
                                                {((cart?.totalPrice || 0) + deliveryFee).toLocaleString()}원
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.orderButton}
                                    onPress={() => {
                                        navigation.navigate('PaymentScreen', {
                                        totalPrice: cart?.totalPrice || 0,
                                        deliveryFee: deliveryFee,
                                        couponDiscount: 0, // 필요시 동적으로 변경 가능
                                        });
                                    }}
                                    >
                                    <Text style={styles.orderButtonText}>주문하러 가기</Text>
                                    </TouchableOpacity>

                            </>
                        ) : null
                    }
                />
            )}

            <View style={styles.bottomNavigation}>
                <BottomNavigationBar
                    activeTab={activeTab}
                    onTabPress={(tabKey) => {
                        if (tabKey !== route.name.toLowerCase()) {
                            navigation.navigate(
                                tabKey === 'home' ? 'Home' :
                                    tabKey === 'cart' ? 'CartScreen' :
                                        tabKey === 'bot' ? 'KbotScreen' :
                                            tabKey === 'order' ? 'OrderList' :
                                                tabKey === 'my' ? 'MyFork' : 'Home'
                            );
                        }
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#EDF4FF'},
    header: {
        flexDirection: 'row', alignItems: 'center', paddingTop: 10,
        paddingHorizontal: 20, backgroundColor: '#fff',
    },
    headerTitle: {
        flex: 1, textAlign: 'center', fontSize: 24,
        fontFamily: 'Paperlogy-Medium', marginBottom: 16,
    },
    storeBox: {
        padding: 20,
    },
    storeName: {
        fontSize: 22,
        fontFamily: 'Paperlogy-SemiBold',
        marginLeft: 14,
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 24,
        marginBottom: 16,
        borderRadius: 14,
        padding: 16,
        elevation: 3,
    },
    menuTitle: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
        marginBottom: 8,
    },
    price: {
        fontSize: 15,
        color: '#7C7C7C',
        fontFamily: 'Paperlogy-Regular',
    },
    topping: {
        fontSize: 15,
        color: '#7C7C7C',
        fontFamily: 'Paperlogy-Regular',
        marginBottom: 10,
    },
    quantityWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    quantityText: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Regular',
    },
    paymentBox: {
        padding: 24,
    },
    paymentTitle: {
        fontFamily: 'Paperlogy-SemiBold',
        fontSize: 20,
        marginBottom: 10,
    },
    amountBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    divider: {
        borderBottomColor: '#CACACA',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontFamily: 'Paperlogy-Bold',
    },
    totalValue: {
        fontSize: 18,
        fontFamily: 'Paperlogy-Bold',
    },
    finalLabel: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
    },
    finalValue: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
    },
    orderButton: {
        backgroundColor: '#268CFF',
        marginHorizontal: 24,
        marginVertical: 12,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Paperlogy-Bold',
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});