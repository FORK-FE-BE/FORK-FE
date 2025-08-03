// // src/screens/menuDetail/components/ARButton.js
// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import styles from './styles';

// export default function ARButton({ url }) {
//     return (
//         <TouchableOpacity style={styles.arButton} onPress={() => WebBrowser.openBrowserAsync(url)}>
//             <Text style={styles.arButtonText}>AR로 보기</Text>
//         </TouchableOpacity>
//     );
// }


import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import styles from './styles';

export default function ARButton({ url }) {
  const handleOpen = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <TouchableOpacity style={styles.arButton} onPress={handleOpen}>
      <Text style={styles.arButtonText}>AR로 보기</Text>
    </TouchableOpacity>
  );
}
