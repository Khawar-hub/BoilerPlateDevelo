import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension'
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.white,
        width: 120,
        height:140,
        borderRadius: 6,
        marginHorizontal:6,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2
    },
    text:{
        fontSize:12,
        color:'#000',
        alignSelf:'center',
        marginTop:5,
        fontSize:16
    },
    img:{
        height:100,
        width:120,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    }
});
export default styles;
