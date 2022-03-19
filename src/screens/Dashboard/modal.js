import React from 'react';
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import styles from './styles';
import { openCamera,openImagePicker } from '../../utills/Methods';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/Actions/addUser';
import svgs from '../../utills/svgs';
import {SvgXml} from 'react-native-svg'
const modal=(props)=> {
    const isProductImageSelected=useSelector((state)=>state.productImage.isProductImageSelected)
    const imageData=useSelector((state)=>state.productImage.imageData) 
    const user = useSelector((state) => state.addUser.user);
    const[name,setName]=React.useState('')
    const addLocation=()=>{
  
        let pushData={
         id:Math.floor(10 + Math.random() * 90),
         name:name,
         image:imageData.uri
          }
        dispatch(addUser([...user,pushData]))
        setModalVisible(false)
        
   }
    return (
        <View style={styles.modalView}>
        <View style={styles.boxView}>
                        <TouchableOpacity onPress={openCamera} style={styles.box}>
                           <SvgXml xml={svgs.camera}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openImagePicker} style={styles.box}>
                            <SvgXml xml={svgs.upload}/>
                        </TouchableOpacity>
                        
                        
                    </View>
                          {
                                !isProductImageSelected ?
                                    <View  style={[styles.imageView, { alignSelf: 'center', marginBottom: 10, marginTop: 10 }]} >
                                        <View style={[styles.addIcon,]}>
                                            <SvgXml xml={svgs.preview} />
                                        </View>
                                    </View>
                                    :
                                    <View  style={[styles.imageView, { alignSelf: 'center', marginBottom: 10, marginTop: 10 }]}>
                                        <Image
                                            source={{ uri: imageData.uri }}

                                            style={{
                                                minWidth: "100%", minHeight: 250, borderRadius: 20,marginTop:2
                                            }}
                                            resizeMode='cover'


                                        />
                                    </View>
                            }
                            <TextInput
                            style={styles.input}
                            placeholder={'Name'}
                            onChangeText={(val)=>setName(val)}
                            />
                            <TouchableOpacity onPress={addLocation} style={styles.Add}>
                                     <Text style={styles.text}>Add</Text>
                            </TouchableOpacity>





        </View>
    );
}

export default modal;