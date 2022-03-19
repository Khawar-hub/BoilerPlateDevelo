import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal:15,
    flex:1
  },
  text:{
    color: AppColors.white,
    fontSize:14
  },
  mapView:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:10,
        marginBottom:10
  },
  textView:{
    flexDirection:'row',
    alignItems:'flex-start',
    width:'100%'
    
  },
  textInput:{
    height:'auto',
    width:'85%',
    position:'absolute',
    alignSelf:'flex-start',
    top:10,
    left:20,
    backgroundColor:AppColors.white,
    borderRadius:30,
    paddingLeft:20,
    borderWidth:1,
    borderColor:AppColors.gray,
    zIndex:10
  },
  modalView:{ 
    borderRadius:10,
    height:'auto',
    width:'80%',
    backgroundColor:'#fff',
    alignSelf:'center',
    paddingHorizontal:14,
    paddingVertical:20,
    zIndex:10
  },
  imageView:{
    alignItems:'center',
    justifyContent:'center',
  
    paddingVertical:10
  },
  boxView:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    paddingHorizontal:20,
   
 },
 box:{
   width:85,
   height:50,
   borderRadius:10,
   borderWidth:1,
   borderColor:"#731D3A",
   justifyContent:'center',
   alignItems:'center',

 },
 input:{
   width:'100%',
   height:40,
   borderWidth:1,
   borderColor:'gray',
   borderRadius:5,
   paddingLeft:20,
   marginTop:10
   },
   Add:{
     height:40,
     width:'60%',
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#731D3A',
     alignSelf:'center',
     marginTop:8

     
   },
   pin:{
     position:'absolute',
     top:height(43),
     zIndex:10,
     width:30,
     height:40
   }
 
});
export default styles;
