import React from 'react';
import {ActivityIndicator, View,Text,Image} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg'
import svgs from '../../utills/svgs';
const locationItem=(props)=> {
 
  return (
    <View style={styles.container}>
       <SvgXml xml={svgs.add}/>
       
    </View>
    
  );
}
export default locationItem;
