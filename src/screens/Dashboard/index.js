import React from 'react';
import { Text, View, PermissionsAndroid, FlatList, TextInput, TouchableOpacity,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../../components/locationItem';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import MapView, { Marker } from "react-native-maps";
import Direction from 'react-native-maps-directions';
import styles from './styles';
import { height, width } from 'react-native-dimension';
import Geocoder from 'react-native-geocoding';
import ListEmptyComponent from '../../components/EmptyListComponent'
import Modal from "react-native-modal";
import {SvgXml} from 'react-native-svg'
import svgs from '../../utills/svgs';
import { getcurrentLocation,openCamera,openImagePicker } from '../../utills/Methods';
import ModalC from './modal';
export default function Dashboard(props) {
  const user = useSelector((state) => state.addUser.user);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [latlng, setlatlng] = React.useState({
    lat: 33.6900283,
    lng: 72.9790089,
  })
  const [address, setAddress] = React.useState('')
  React.useEffect(async () => {
    const current_loc = await getcurrentLocation()
    Geocoder.init('AIzaSyAW5O831v7xI0OVGJufVHJiIcJgeMybNdA')
    Geocoder.from(current_loc.latitude, current_loc.longitude).then(json => {
      var addressComponent = json.results[2].formatted_address;
      setAddress(addressComponent)

    }).catch(error => console.warn(error));
    setlatlng({
      ...latlng,
      lat: current_loc.latitude,
      lng: current_loc.longitude,
    })
    console.log(latlng)
  }, []);
  const showModal = () => {
    setModalVisible(true)
  }
  const ListEmpty = () => {
    return (
      <TouchableOpacity onPress={showModal}>
        <ListEmptyComponent />
      </TouchableOpacity>
    )
  }
  // const logoutMethod = async () => {
  //   showMessage({
  //     message: 'Logged Out',
  //     description: 'Succfully logged out',
  //     type: 'danger',
  //   });
  //   dispatch(logout());
  // };
 
  const getLocation=(region)=>{
    Geocoder.init('AIzaSyAW5O831v7xI0OVGJufVHJiIcJgeMybNdA')
    Geocoder.from(region.latitude, region.longitude).then(json => {
      var addressComponent = json.results[2].formatted_address;
      setAddress(addressComponent)
    }).catch(error => console.warn(error));

  }
 
  return (
    <>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.5}
        animationIn={'bounceIn'}
        animationOut={'bounceOut'}
        isVisible={isModalVisible}>
        <ModalC/>
      </Modal>
      <ScreenWrapper statusBarColor={AppColors.transparent} barStyle="light-content">
        <View style={styles.mainViewContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={address}
            editable={false}
          />
          <Image
           source={require('../../assets/images/pin.png')}
           style={styles.pin}
          />


          <MapView
            style={{
              height: height(100),
              width: width(100), borderRadius: 10
            }}
            initialRegion={{
              latitude: parseFloat(latlng.lat),
              longitude: parseFloat(latlng.lng),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            onRegionChangeComplete={(region)=>getLocation(region)}
          >
            {/* <Marker
              style={{ position: 'absolute', top: -height(60), left: height(50), zIndex: -1 }}
              coordinate={{
                latitude: parseFloat(latlng.lat),
                longitude: parseFloat(latlng.lng),
              }}
            />

            <Marker

              coordinate={{
                latitude: 33.6706242,
                longitude: 73.1028394,
              }}
            />
            <Direction
              origin={{
                latitude: parseFloat(latlng.lat),
                longitude: parseFloat(latlng.lng),
              }}
              destination={{
                latitude: 33.6706242,
                longitude: 73.1028394,
              }}
              apikey={'AIzaSyAW5O831v7xI0OVGJufVHJiIcJgeMybNdA'}
              strokeColor='#0377FF'
              strokeWidth={4}
            /> */}
          </MapView>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.id}
            data={user}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <LocationItem
                item={item}

              />
            }
            ListFooterComponent={ListEmpty}
            style={{ position: 'absolute', bottom: 10 }}

          />

        </View>

        {/* <Button  title="Logout" onPress={logoutMethod} /> */}
      </ScreenWrapper>
    </>
  );
}
