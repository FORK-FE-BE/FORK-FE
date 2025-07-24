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
    rankLabel: {
        color: '#888',
        fontSize: 12,
        marginBottom: 6,
        fontFamily: 'Paperlogy-Regular',
    },
    menuName: {
        fontSize: 22,
        fontFamily: 'Paperlogy-Bold',
    },
    menuDesc: {
        fontSize: 14,
        color: '#666',
        marginVertical: 10,
        fontFamily: 'Paperlogy-Regular',
    },
    price: {
        fontSize: 16,
        fontFamily: 'Paperlogy-Bold',
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
        fontSize: 16,
        fontFamily: 'Paperlogy-Bold',
        marginBottom: 12,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    optionLabel: {
        fontSize: 15,
        flex: 1,
        fontFamily: 'Paperlogy-Regular',
    },
    optionPrice: {
        fontSize: 14,
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
        fontSize: 20,
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
        paddingVertical: 14,
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 24,
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Paperlogy-Bold',
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
