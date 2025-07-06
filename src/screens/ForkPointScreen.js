import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FILTER_TYPES = ['전체', '적립', '사용'];
const PERIOD_TYPES = ['1개월', '3개월', '6개월', '12개월'];

export default function ForkPointScreen() {
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  const [periodModalVisible, setPeriodModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('전체');
  const [selectedPeriod, setSelectedPeriod] = useState('1개월');

  const navigation = useNavigation();

  const pointHistory = [
    {
      id: '1',
      type: '적립',
      name: '가게명',
      date: '2025.01.22',
      amount: '+100원',
    },
    {
      id: '2',
      type: '사용',
      name: '가게명',
      date: '2025.01.22',
      amount: '-1,000원',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/arrow_back.png')}
            style={styles.arrow_back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>포크포인트</Text>
        {/* 오른쪽 빈 공간 확보용 */}
        <View style={styles.headerSide} />
      </View>

      {/* 설명 */}
      <Text style={styles.sectionTitle}>포크포인트</Text>
      <Text style={styles.description}>AR을 이용해서 리뷰를 올려보고 포크포인트를 받으세요!</Text>

      {/* 포인트 표시 */}
      <View style={styles.pointBox}>
        <View style={styles.grayCircle} />
        <Text style={styles.pointText}>1,000원</Text>
      </View>

      {/* 소멸 예정 */}
      <View style={styles.expireRow}>
        <Text style={styles.expireText}>소멸 예정 포인트(15일 내)</Text>
        <Text style={styles.expireAmount}>0원</Text>
      </View>

      {/* 필터 */}
      <View style={styles.filterRightRow}>
        <TouchableOpacity onPress={() => setTypeModalVisible(true)} style={styles.filterBtn}>
          <Text style={styles.filterText}>{selectedType}</Text>
          <Image source={require('../assets/images/chevron_down.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPeriodModalVisible(true)} style={styles.filterBtn}>
          <Text style={styles.filterText}>{selectedPeriod}</Text>
          <Image source={require('../assets/images/chevron_down.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* 리스트 */}
      <FlatList
        data={pointHistory.filter(p => selectedType === '전체' || p.type === selectedType)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listLeft}>
              <Text style={styles.circleIcon}>{item.type === '적립' ? '+' : '−'}</Text>
              <View>
                <Text style={styles.storeName}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <View style={styles.listRight}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.typeText}>{item.type}</Text>
            </View>
          </View>
        )}
      />

      {/* 타입 모달 */}
      <Modal transparent={true} visible={typeModalVisible} animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setTypeModalVisible(false)}>
          <View style={styles.modalContent}>
            {FILTER_TYPES.map(type => (
              <TouchableOpacity
                key={type}
                onPress={() => {
                  setSelectedType(type);
                  setTypeModalVisible(false);
                }}
              >
                <Text style={styles.modalItem}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* 기간 모달 */}
      <Modal transparent={true} visible={periodModalVisible} animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setPeriodModalVisible(false)}>
          <View style={styles.modalContent}>
            {PERIOD_TYPES.map(period => (
              <TouchableOpacity
                key={period}
                onPress={() => {
                  setSelectedPeriod(period);
                  setPeriodModalVisible(false);
                }}
              >
                <Text style={styles.modalItem}>{period}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  arrow_back: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Medium',
    color: '#000000',
  },
  headerSide: {
    width: 30, // 왼쪽 아이콘과 동일한 너비
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000000',
  },
  description: {
    marginBottom: 30,
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },

  pointBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  grayCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  pointText: {
    fontSize: 30,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000000',
  },

  expireRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  expireText: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },
  expireAmount: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },

  filterRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  filterText: {
    marginRight: 4,
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },
  filterIcon: { width: 14, height: 14 },

  filterRightRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },

  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12, // 두 버튼 사이 간격
  },


  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listLeft: { flexDirection: 'row', alignItems: 'center' },
  circleIcon: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: 'bold',
  },
  storeName: { fontSize: 14, fontFamily: 'Paperlogy-Medium', },
  date: { fontSize: 12, color: '#888', fontFamily: 'Paperlogy-Medium', },

  listRight: { alignItems: 'flex-end' },
  amount: { fontSize: 14, fontFamily: 'Paperlogy-SemiBold', },
  typeText: { fontSize: 12, color: '#000', fontFamily: 'Paperlogy-Medium', },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000066',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 80,
    borderRadius: 10,
    paddingVertical: 12,
  },
  modalItem: {
    padding: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontFamily: 'Paperlogy-Medium',
  },
});
