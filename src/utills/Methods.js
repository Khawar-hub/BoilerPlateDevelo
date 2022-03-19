import { PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-get-location';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import {productImage} from '../Redux/Actions/productImage'
// export function debounce(func, wait, immediate) {
    // var timeout;
    //  function () {
    //     var context = this, args = arguments;
    //     var later = function () {
    //         timeout = null;
    //         if (!immediate) func.apply(context, args);
    //     };
    //     var callNow = immediate && !timeout;
    //     clearTimeout(timeout);
    //     timeout = setTimeout(later, wait);
    //     if (callNow) func.apply(context, args);
    // };
    export const  getcurrentLocation = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return Geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 20000,
            })
              .then(location => {
                return location
              })
              .catch(ex => {
                const { code, message } = ex;
                console.warn(code, message);
                if (code === 'CANCELLED') {
                 
                }
                if (code === 'UNAVAILABLE') {
                  alert('Location service is disabled or unavailable enable it in setting and try reloading the app');
                }
                if (code === 'TIMEOUT') {
                  alert('Location request timed out');
                }
                if (code === 'UNAUTHORIZED') {
                  alert('Location permission denied ');
                }
    
              });
    
    
          }
          else {
            alert("Location permission denied")
          }
        }
        catch (err) {
          console.warn(err)
        }
       
    
    
    
      }
  
    export  const openCamera=()=>{
      const dispatch=useDispatch()
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
    launchCamera(options, (response) => {
      
        if (response) {
    
            if (response.didCancel) {
               
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            } else {
                // console.log('Image picker result:', response.assets[0])
               
                dispatch(productImage({
                    uri:response.assets[0].uri,
                    type:response.assets[0].type,
                    name:response.assets[0].fileName

                }))
                  
               
            }
        }
        else {
            
        }
      });
    }
   export const openImagePicker = () => {
    const dispatch=useDispatch()
        const options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            selectionLimit: 1
        };
    
        launchImageLibrary(options, (response) => {
            if (response) {
    
                if (response.didCancel) {
                   
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                } else {
                   
                    dispatch(productImage({
                        uri:response.assets[0].uri,
                        type:response.assets[0].type,
                        name:response.assets[0].fileName
    
                    }))
                   
                  
                }
            }
            else {
                
            }
        })
    
    }
