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
    pbtn: { //primary - btn
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
    },
    mv3: {
        marginVertical: 30
    },
    tn3b: {
        fontWeight: 'bold',
        fontSize: 18
    },
    tn3: {
        fontSize: 18
    },
    mh1:{
        marginHorizontal: 10
    },
    mt2: {
        marginTop: 20
    }
});

export default ds;