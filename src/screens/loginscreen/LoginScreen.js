import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ForkIcon from '../../assets/icons/FORKIcon.svg';
import {getProfile, login} from "@react-native-seoul/kakao-login";

export default function LoginScreen() {
    const handleKakaoLogin = async () => {
        try {
            const token = await login(); // 카카오 로그인 시도
            console.log("카카오 accessToken:", token);

            const profile = await getProfile(); // 로그인 후 사용자 정보 가져오기
            console.log('카카오 사용자 프로필:', profile);
            // 이후 토큰을 백엔드로 전달하거나, 로그인 상태로 전환

        } catch (err) {
            console.error('카카오 로그인 실패:', err);

    }
    return (
        <LinearGradient
            colors={['#EDF4FF', '#D8E8FF', '#B7D4FF']}
            style={styles.container}
        >
            <View style={styles.textConainter}>
                <Text style={styles.mainText}>
                    FORK
                </Text>
            </View>
            <View style={styles.loginContainer}>
                {/* 앱 로고 및 타이틀 (선택) */}
                {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}
                {/* <Text style={styles.title}>FORK에 오신 걸 환영해요!</Text> */}

                <TouchableOpacity style={styles.kakao} activeOpacity={0.7} onPress={handleKakaoLogin}>
                    <View style={styles.loginRow}>
                        <Image source={require('./resource/kakao.png')} style={styles.kakaoLogo}/>
                        <Text style={styles.loginTextKakao}>카카오로 로그인하기</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naver} activeOpacity={0.7}>
                    <View style={styles.loginRow}>
                        <Image source={require('./resource/naver.png')} style={styles.naverLogo}/>
                        <Text style={styles.loginTextNaver}>네이버로 로그인하기</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.google} activeOpacity={0.7}>
                    <View style={styles.loginRow}>
                        <Image source={require('./resource/google.png')} style={styles.googleLogo}/>
                        <Text style={styles.loginTextGoogle}>구글로 로그인하기</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.forkIconWrapper}>
                {/*<ForkIcon width={100} height={100}/> 이미지 넣을지 고민*/}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainText:{
        width: 149,
        fontSize: 50,
        fontFamily: "Paperlogy-Bold",
        color: "#000",
        textAlign: "center",      // 텍스트 가운데 정렬
        marginTop: 98,            // 상단 여백
        alignSelf: "center",      // 부모 뷰 기준으로 가운데 위치
    },
    loginContainer: {
        marginTop: 150,
        paddingHorizontal: 24,
        gap: 16,
    },

    // 공통 로그인 버튼 행
    loginRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    // 각 로그인 버튼 스타일
    kakao: {
        backgroundColor: '#FFEB00',
        width: '100%',
        borderRadius: 100,
        height: 65,
        justifyContent: 'center',
    },
    naver: {
        backgroundColor: '#03C75A',
        width: '100%',
        borderRadius: 100,
        height: 65,
        justifyContent: 'center',
    },
    google: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 100,
        borderColor: '#CACACA',
        borderWidth: 1,
        height: 65,
        justifyContent: 'center',
    },

    // 텍스트 스타일
    loginTextKakao: {
        fontFamily: 'Paperlogy-Medium',
        fontSize: 18,
        color: '#3C1E1E',
    },
    loginTextNaver: {
        fontFamily: 'Paperlogy-Medium',
        fontSize: 18,
        color: '#FFFFFF',
    },
    loginTextGoogle: {
        fontFamily: 'Paperlogy-Medium',
        fontSize: 18,
        color: '#555555',
    },

    // 로고 이미지 스타일
    kakaoLogo: {
        width: 30,
        height: 30,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    naverLogo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    googleLogo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    // 선택적으로 사용할 수 있는 앱 로고 및 타이틀
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Paperlogy-Bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#000',
    },
    forkIconWrapper:{
        alignSelf: 'center',    // 화면 가운데 정렬
        marginTop: 40,          // 위 요소들과 간격
        marginBottom: 30,       // 하단 여백
    },
})}
