import Auth from './Auth'
import Config from './Config'
import { combineReducers } from 'redux'
import  addUser  from './addUser';
import productImage from './productImage'
import Quiz from './Quiz'

export default combineReducers({
    Auth: Auth,
    Config: Config,
    addUser:addUser,
    productImage:productImage,
    Quiz:Quiz
});
