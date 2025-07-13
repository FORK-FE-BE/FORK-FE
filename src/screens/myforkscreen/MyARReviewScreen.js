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
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyARReviewScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dummyReviews = [
    {
      id: '1',
      store: '네네치킨 홍대점',
      rating: 5,
      date: '2개월 전',
      comment: '맛있어요',
      tags: ['치킨1', '치즈볼'],
      arPhotos: [
        require('../../assets/images/dummy1.png'),
        require('../../assets/images/dummy2.png'),
        require('../../assets/images/dummy3.png'),
      ],
      reply: {
        author: '사장님',
        content: '○○님,\n어쩌구저쩌구\n감사!',
      },
    },
    {
      id: '2',
      store: '네네치킨 홍대점',
      rating: 5,
      date: '2개월 전',
      comment: '맛있어요',
      tags: ['치킨1', '치즈볼'],
      arPhotos: [
        require('../../assets/images/dummy1.png'),
        require('../../assets/images/dummy2.png'),
        require('../../assets/images/dummy3.png'),
      ],
      reply: {
        author: '사장님',
        content: '○○님,\n어쩌구저쩌구\n감사!',
      },
    },
    {
      id: '3',
      store: '네네치킨 홍대점',
      rating: 5,
      date: '3개월 전',
      comment: '맛있어요',
      tags: ['치킨1', '치즈볼'],
      arPhotos: [
        require('../../assets/images/dummy1.png'),
        require('../../assets/images/dummy2.png'),
        require('../../assets/images/dummy3.png'),
      ],
      reply: {
        author: '사장님',
        content: '○○님,\n어쩌구저쩌구\n감사!',
      },
    },
  ];


  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={styles.arrow_back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>AR리뷰 관리</Text>
        {/* 오른쪽 빈 공간 확보용 */}
        <View style={styles.headerSide} />
      </View>

      <Text style={styles.reviewCount}>내가 쓴 총 리뷰 3개</Text>
      <FlatList
        data={dummyReviews}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.reviewBox}>
            {/* 상단: 가게명 + 삭제 */}
            <View style={styles.reviewTop}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.store}>{item.store}</Text>
                <Image
                  source={require('../../assets/images/chevron_right.png')}
                  style={styles.chevron}
                />
              </View>
              <TouchableOpacity style={styles.deleteBtn}>
                <Text style={styles.deleteText}>삭제</Text>
              </TouchableOpacity>
            </View>

            {/* 별점 + 작성일 */}
            <View style={styles.ratingRow}>
              <Text style={styles.stars}>{'★'.repeat(item.rating)}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            {/* 리뷰 내용 */}
            <Text style={styles.comment}>{item.comment}</Text>

            {/* AR 이미지 영역 */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.imageRow}
              contentContainerStyle={styles.imageRowContent}
            >
              {item.arPhotos.map((photo, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => {
                    setSelectedImage(photo);
                    setModalVisible(true);
                  }}
                >
                  <Image source={photo} style={styles.reviewImage} />
                </TouchableOpacity>
              ))}
            </ScrollView>


            {/* 태그 */}
            <View style={styles.tagRow}>
              {item.tags.map((tag, i) => (
                <View key={i} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            {/* 사장님 댓글 */}
            {item.reply && (
              <View style={styles.replyContainer}>
                <Image
                  source={require('../../assets/images/owner.png')}
                  style={styles.profileCircle}
                  resizeMode="contain"
                />
                {/* <View style={styles.profileCircle} /> */}
                <View style={styles.replyBubble}>
                  <Text style={styles.replyAuthor}>사장님 · {item.date}</Text>
                  <Text style={styles.replyContent}>{item.reply.content}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          <Image source={selectedImage} style={styles.fullImage} resizeMode="contain" />
        </View>
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

  reviewCount: {
    fontSize: 18,
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 16,
  },

  reviewBox: {
    marginBottom: 30,
  },

  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  store: {
    fontSize: 16,
    fontFamily: 'Paperlogy-SemiBold',
  },

  chevron: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },

  deleteBtn: {
    backgroundColor: '#eee',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },

  deleteText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Paperlogy-Medium',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  stars: {
    color: '#FFD700',
    marginRight: 8,
  },

  date: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Paperlogy-Medium',
  },

  comment: {
    marginTop: 4,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Paperlogy-Medium',
  },

  imageRow: {
    marginTop: 8,
  },
  imageRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  photoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 10, // 사진 사이 간격
  },

  photoText: {
    color: '#000',
  },

  tagRow: {
    flexDirection: 'row',
    marginTop: 8,
  },

  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 8,
  },

  tagText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Paperlogy-Medium',
  },

  replyContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },

  replyBubble: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    flex: 1,
  },

  replyAuthor: {
    fontFamily: 'Paperlogy-SemiBold',
    marginBottom: 4,
    fontSize: 14,
  },

  replyContent: {
    fontSize: 12,
    fontFamily: 'Paperlogy-Medium',
  },

  reviewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },

  closeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  fullImage: {
    width: '90%',
    height: '70%',
  },


});