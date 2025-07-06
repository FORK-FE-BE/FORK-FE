import * as React from "react";
import { View, StyleSheet } from "react-native"; // View 컴포넌트 임포트

export default function Line() {
  return (
    <View style={styles.view} />
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",           // 100% 너비로 라인 설정
    borderStyle: "solid",    // 실선 스타일
    borderColor: "#d9d9d9",  // 라인 색상 설정
    borderTopWidth: 1,       // 상단에만 1px 두께의 테두리 설정
    height: 1,               // 라인의 높이는 1px
  }
});
