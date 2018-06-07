//专门合并reducer，并且返回
import {combineReducers} from 'redux'
import {counter} from './index.redux'
import {auth} from './Auth.redux'

export default combineReducers({counter,auth})
//export default combineReducers([counter,auth])//次级路由对数组也不行，




