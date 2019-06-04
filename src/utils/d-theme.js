import {StyleSheet} from 'react-native';

//obj: {t: Text, i: Image} 
//style: {n: Normal, i: italic} 
//size: {1: 14, 2: 16, 3: 18}
//obj - style - size
const ds = StyleSheet.create({
    ti1: {
        fontStyle: 'italic',
        fontSize: 14
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    pbtn: {
        width: 200,
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: '#04B5EB'
    },
    ptxtbtn: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    mb3: {
        marginBottom: 30
    }
});

export default ds;