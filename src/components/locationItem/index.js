import React from 'react';
import {ActivityIndicator, View,Text,Image} from 'react-native';
import styles from './styles';
const locationItem=(props)=> {
 
  return (
    <View style={styles.container}>
      {console.log(props.item.image)}
        <Image style={styles.img} source={{uri:props.item.image}}/>
        <Text style={styles.text}>{props.item.name}</Text>
    </View>
    
  );
}
export default locationItem;
