// src/screens/menuDetail/MenuDetailScreen.js
import React, { useState, useEffect } from 'react';
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
import { useUser } from "../../contexts/UserContext";
import { useCart } from "../../contexts/CartContext";

export default function MenuDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const menu = route.params?.item;
    const { user } = useUser();
    const [quantity, setQuantity] = useState(1);
    // const [extraTea, setExtraTea] = useState(false);
    // const [extraEgg, setExtraEgg] = useState(false);
    const basePrice = menu.price;
    // const extraPrice = (extraTea ? 1000 : 0) + (extraEgg ? 500 : 0);
    //const totalPrice = (basePrice) * quantity;
    const { cart, updateCart } = useCart();
    const [selectedOptions, setSelectedOptions] = useState({});
    const optionGroups = menu.optionGroups || [];
    const [menuDetail, setMenuDetail] = useState(null);

    //console.log('현재 장바구니:', cart);
    //console.log('옵션 그룹:', menu.optionGroups);

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

    const toggleOption = (groupName, optionName) => {
        setSelectedOptions(prev => {
            const current = prev[groupName] || [];
            if (current.includes(optionName)) {
                return { ...prev, [groupName]: current.filter(name => name !== optionName) };
            } else {
                return { ...prev, [groupName]: [...current, optionName] };
            }
        });
    };

    const selectedOptionTotal = (menuDetail?.optionGroups || []).reduce((sum, group) => {
        const selectedInGroup = selectedOptions[group.name] || [];
        const priceSum = group.options
            .filter(option => selectedInGroup.includes(option.name))
            .reduce((s, opt) => s + opt.price, 0);
        return sum + priceSum;
    }, 0);

    const totalPrice = (basePrice + selectedOptionTotal) * quantity;

    const handleAddToCart = async () => {
        const optionGroups = menuDetail?.optionGroups || [];

        const selectedOptionObjects = optionGroups.flatMap(group => {
            const selected = selectedOptions[group.name] || [];
            return group.options
                .filter(opt => selected.includes(opt.name))
                .map(opt => ({
                    groupName: group.name,
                    optionName: opt.name,
                    optionPrice: opt.price
                }));
        });

        const payload = {
            menuId: menu.menuId,
            quantity,
            selectedOptions: selectedOptionObjects
        };

        const cartRestaurantId = cart?.restaurantId;
        const newMenuRestaurantId = menu.restaurantId;

        if (cartRestaurantId && cartRestaurantId !== newMenuRestaurantId) {
            Alert.alert(
                '장바구니 제한',
                '장바구니에는 하나의 식당 메뉴만 담을 수 있어요.'
            );
            return;
        }

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

    useEffect(() => {
        const fetchMenuDetail = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/api/restaurants/${menu.restaurantId}/menus/${menu.menuId}`
                );
                setMenuDetail(response.data);
            } catch (error) {
                console.error('메뉴 상세 정보 가져오기 실패:', error);
            }
        };

        fetchMenuDetail();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowBack width={24} height={24} />
            </TouchableOpacity>

            <MenuImage imgUrl={menu.image} style={styles.image} />

            <View style={styles.infoBox}>
                <View style={styles.infoRankBox}>
                <Text style={styles.rankLabel1}>인기 1위 </Text>
                <Text style={styles.rankLabel2}>사장님 추천 </Text>
                </View>
                <Text style={styles.menuName}>{menu.name}</Text>
                <Text style={styles.menuDesc}>{menu.description}</Text>
                <View style={styles.priceBox}>
                <Text style={styles.priceLabel}>가격</Text>
                <Text style={styles.priceValue}>{basePrice.toLocaleString()}원</Text>
                </View>


                {/* <ARButton glbFileName={menu.modelName} /> */}
                <ARButton />

            </View>

         
            <OptionSelector
                optionGroups={menuDetail?.optionGroups || []}
                selectedOptions={selectedOptions}
                toggleOption={toggleOption}
            />

            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />

            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
                <Text style={styles.cartButtonText}>
                    {totalPrice.toLocaleString()} 원 담기
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
