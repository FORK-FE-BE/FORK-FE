import {StyleSheet} from "react-native";

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 220,
    },
    overlayTextBox: {
        position: 'absolute',
        top: 190,
        width: '100%',
        alignItems: 'center',
    },
    overlayText: {
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        fontSize: 13,
        fontFamily: 'Paperlogy-Regular',
    },
    infoBox: {
        padding: 24,
    },

    infoRankBox :{
        flexDirection: 'row',   // 가로 배치
        alignItems: 'center',   // 세로 중앙 정렬
        marginBottom: 10,
        gap:10,
        },
    rankLabel1: {
        backgroundColor:'#EDF4FF',
        padding:5,
        borderRadius:5,
        color: '#5599FF',
        fontSize: 14,
        marginBottom: 6,
        fontFamily: 'Paperlogy-Regular',
    },

    rankLabel2: {
        backgroundColor:'#F5F6F8',
        color: '#5B5B5B',
        padding:5,
        borderRadius:5,
        fontSize: 14,
        marginBottom: 6,
        fontFamily: 'Paperlogy-Regular',
    },
    menuName: {
        fontSize: 24,
        fontFamily: 'Paperlogy-SemiBold',
    },
    menuDesc: {
        fontSize: 14,
        color: '#666',
        marginVertical: 10,
        fontFamily: 'Paperlogy-Regular',
    },
   
    priceBox: {
        flexDirection: 'row',          // 가로 배치
        justifyContent: 'space-between', // 양 끝으로 벌리기
        alignItems: 'center',
        marginTop: 8,
      },
      priceLabel: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
        color: '#000',
      },
      priceValue: {
        fontSize: 18,
        fontFamily: 'Paperlogy-SemiBold',
      },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 20,
        padding: 6,
    },
    arButton: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    arButtonText: {
        color: '#007aff',
        fontSize: 16,
        fontFamily: 'Paperlogy-Regular',
    },
    optionBox: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    optionTitle: {
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
        marginBottom: 12,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    optionLabel: {
        fontSize: 20,
        flex: 1,
        fontFamily: 'Paperlogy-Regular',
        marginLeft: 10
    },
    optionPrice: {
        fontSize: 20,
        color: '#666',
        fontFamily: 'Paperlogy-Regular',
    },
    quantityBox: {
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    counterBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    counterBtn: {
        fontSize: 40,
        paddingHorizontal: 20,
        fontFamily: 'Paperlogy-Regular',
    },
    quantityText: {
        fontSize: 18,
        fontFamily: 'Paperlogy-Bold',
        paddingHorizontal: 12,
    },
    cartButton: {
        marginTop: 20,
        backgroundColor: '#007aff',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 24,
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Paperlogy-SemiBold',
    },
    menuImage: {
        width: '100%',
        height: 220,
        borderRadius: 0,
    },
    menuImagePlaceholder: {
        width: '100%',
        height: 220,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuPlaceholderImage: {
        width: 60,
        height: 60,
        tintColor: '#ccc',
    },
});
