import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from './UserContext'; // 👈 로그인 유저 정보
import { BASE_URL } from '../constants';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { user } = useUser(); // 👈 로그인한 사용자
  const userId = user?.userId;

  const loadDefaultAddress = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(
        `${BASE_URL}/api/user/${userId}/profile/address`
      );
      const addresses = response.data;
      const defaultAddr = addresses.find((addr) => addr.isDefault === 1);
      if (defaultAddr) {
        setSelectedAddress({
          label: defaultAddr.label,
          main: `${defaultAddr.province} ${defaultAddr.city} ${defaultAddr.roadName} ${defaultAddr.buildingNumber}`,
          ...defaultAddr,
        });
      }
    } catch (e) {
      console.error('기본 주소 불러오기 실패:', e);
    }
  };

  // 앱 시작 또는 로그인 이후 자동으로 불러오도록 설정
  useEffect(() => {
    loadDefaultAddress();
  }, [userId]);

  return (
    <AddressContext.Provider value={{ selectedAddress, setSelectedAddress, loadDefaultAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
