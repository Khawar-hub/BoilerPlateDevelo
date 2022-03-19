import React from 'react';
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import styles from './styles';
import { openCamera,openImagePicker } from '../../utills/Methods';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/Actions/addUser';
import svgs from '../../utills/svgs';
import {SvgXml} from 'react-native-svg'
import { RadioButton } from 'react-native-paper';
const modal=(props)=> {
    
    return (
        <View style={styles.modalView}>
      
       <Text>Total Score: {props.score-5}/55</Text>




        </View>
    );
}

export default modal;