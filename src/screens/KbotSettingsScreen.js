import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function KbotSettingsScreen() {
  const navigation = useNavigation();
  const [avoidList, setAvoidList] = useState(['우유', '새우', '땅콩', '음식']);
  const [candidateList, setCandidateList] = useState([
    '우유', '땅콩', '새우', '음식1', '음식2', '음식3', '음식4', '음식5'
  ]);
  const [inputText, setInputText] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleSelect = (item) => {
    if (!avoidList.includes(item)) {
      setAvoidList([...avoidList, item]);
    }
  };

  const handleRemove = (item) => {
    setAvoidList(avoidList.filter(i => i !== item));
  };

  const handleAddInput = () => {
    const trimmed = inputText.trim();
    if (trimmed && !avoidList.includes(trimmed)) {
      setAvoidList([...avoidList, trimmed]);
      setInputText('');
    }
  };

  const handleSave = () => {
    console.log('저장된 피하고 싶은 음식:', avoidList);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.avoidingWrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* 상단 타이틀 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/arrow_back.png')}
              style={styles.arrow_back}
            />
          </TouchableOpacity>
          <Text style={styles.title}>크봇 설정</Text>
          <View style={styles.headerSide} />
        </View>

        {/* 안내 말풍선 */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 }}>
          <Image
            source={require('../assets/images/Kbot.png')}
            style={styles.kBot}
          />
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>
              <Text style={styles.boldGreeting}>안녕하세요, ○○님!{"\n"}</Text>
              저는 ○○님의 AI인 크봇이에요.{"\n"}
              크봇은 ○○님이 <Text style={{ color: '#007aff' }}>못 먹는 음식</Text>을 정해주시면
              음식을 추천해드릴 때 못 먹는 건 빼고 추천해드려요!
            </Text>
          </View>
        </View>

        {/* 현재 피하고 싶은 음식 */}
        <Text style={styles.sectionTitle}>현재 ○○님이 피하고 싶은 음식</Text>
        <View style={styles.tagContainer}>
          {avoidList.map((item, idx) => (
            <View key={idx} style={styles.tag}>
              <Text style={styles.tagItem}>{item} </Text>
              <TouchableOpacity onPress={() => handleRemove(item)}>
                <Text style={styles.close}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* 추가할 수 있는 음식 */}
        <Text style={styles.sectionTitle}>더 추가하실 수 있어요!</Text>
        <View style={styles.tagContainer}>
          {candidateList.map((item, idx) => (
            <TouchableOpacity key={idx} onPress={() => handleSelect(item)}>
              <View style={styles.candidateTag}>
                <Text style={styles.candidateTagItem}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* 직접 입력 */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="못 먹는 음식을 직접 추가해보세요"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddInput}>
            <Text style={styles.addButtonText}>추가</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 저장 버튼: 키보드가 안 보일 때만 렌더링 */}
      {!isKeyboardVisible && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>저장하기</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  avoidingWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#007aff',
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 나머지 기존 스타일은 동일하게 유지
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  arrow_back: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Paperlogy-Medium',
    color: '#000',
  },
  headerSide: {
    width: 30,
  },
  bubble: {
    backgroundColor: '#e6f0ff',
    padding: 15,
    borderRadius: 10,
    width: 230,
  },
  kBot: {
    width: 57,
    height: 36,
    marginRight: 15,
  },
  boldGreeting: {
    fontSize: 14,
    fontFamily: 'Paperlogy-SemiBold',
    color: '#000',
    lineHeight: 22,
  },
  bubbleText: {
    fontSize: 12,
    fontFamily: 'Paperlogy-Regular',
    color: '#000',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
    marginTop: 10,
    marginBottom: 15,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 30,
  },
  tag: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    alignItems: 'center',
    marginBottom: 4,
  },
  tagItem: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Medium',
  },
  close: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Paperlogy-Bold',
    color: '#000',
  },
  candidateTag: {
    flexDirection: 'row',
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 8,
    alignItems: 'center',
    marginBottom: 4,
  },
  candidateTagItem: {
    fontSize: 14,
    fontFamily: 'Paperlogy-Regular',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    fontFamily: 'Paperlogy-Medium',
  },
  addButton: {
    height: 50,
    marginLeft: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center', // 세로 가운데
    alignItems: 'center',     // 가로 가운데
  },
  addButtonText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Bold',
  },
});
