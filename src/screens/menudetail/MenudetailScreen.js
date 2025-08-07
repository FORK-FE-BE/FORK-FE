// src/screens/menuDetail/MenuDetailScreen.js
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import ArrowBack from '../../assets/icons/arrow_back.svg';
import { BASE_URL } from '../../constants';
import MenuImage from './components/MenuImage';
import OptionSelector from './components/OptionSelector';
import QuantityCounter from './components/QuantityCounter';
import ARButton from './components/ARButton';
import styles from './components/styles';
import {useUser} from "../../contexts/UserContext";
import {useCart} from "../../contexts/CartContext";

export default function MenuDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const menu = route.params?.item;
    const {user}= useUser();
    const [quantity, setQuantity] = useState(1);
    // const [extraTea, setExtraTea] = useState(false);
    // const [extraEgg, setExtraEgg] = useState(false);
    const basePrice = menu.price;
    // const extraPrice = (extraTea ? 1000 : 0) + (extraEgg ? 500 : 0);
    const totalPrice = (basePrice) * quantity;
    const { cart, updateCart } = useCart();

    console.log('현재 장바구니:', cart);


    // const handleAddToCart = async () => {
    //     const payload  = {
    //         menuId: menu.menuId,
    //         quantity,
    //     };

    //     try {
    //         await axios.post(`${BASE_URL}/api/cart/${user.userId}`, payload);
    //         console.log('장바구니 추가됨', `${menu.name} ${quantity}개 ${menu.price}원 담겼습니다.`);
    //         const response = await axios.get(`${BASE_URL}/api/cart/${user.userId}`);
    //         updateCart(response.data);
    //         navigation.goBack();
    //     } catch (error) {
    //         console.error('장바구니 추가 실패:', error);
    //         Alert.alert('에러', '장바구니에 상품을 담지 못했습니다.');
    //     }
    // };

    
    

const handleAddToCart = async () => {
    const payload = {
        menuId: menu.menuId,
        quantity,
    };

    const cartRestaurantId = cart?.restaurantId;
    const newMenuRestaurantId = menu.restaurantId;

    // 장바구니에 이미 식당이 있고, 다른 식당일 경우 경고만 띄움
    if (cartRestaurantId && cartRestaurantId !== newMenuRestaurantId) {
        Alert.alert(
            '장바구니 제한',
            '장바구니에는 하나의 식당 메뉴만 담을 수 있어요.'
        );
        return;
    }

    // 같은 식당이거나 장바구니 비어있는 경우 → 정상 추가
    try {
        await axios.post(`${BASE_URL}/api/cart/${user.userId}`, payload);
        const response = await axios.get(`${BASE_URL}/api/cart/${user.userId}`);
        updateCart(response.data);
        navigation.goBack();
    } catch (error) {
        console.error('장바구니 추가 실패:', error);
        Alert.alert('에러', '장바구니에 상품을 담지 못했습니다.');
    }
};

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowBack width={24} height={24} />
            </TouchableOpacity>

            <MenuImage imgUrl={menu.image} style={styles.image} />

            <View style={styles.infoBox}>
                <Text style={styles.rankLabel}>인기 1위 사장님 추천</Text>
                <Text style={styles.menuName}>{menu.name}</Text>
                <Text style={styles.menuDesc}>{menu.description}</Text>
                <Text style={styles.price}>가격 {basePrice.toLocaleString()}원</Text>


                <ARButton glbFileName={menu.modelName} />

            </View>

            <OptionSelector
                // extraTea={extraTea}
                // setExtraTea={setExtraTea}
                // extraEgg={extraEgg}
                // setExtraEgg={setExtraEgg}
            />

            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />

            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
                <Text style={styles.cartButtonText}>{totalPrice.toLocaleString()} 원 담기</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
