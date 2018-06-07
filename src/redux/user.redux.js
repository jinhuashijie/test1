
import axios from 'axios'
import {getRedirectPath} from '../util'
// const REGISTER_SUCCESS='REGISTER_SUCCESS'
// const LOGIN_SUCCESS='LOGIN_SUCCESS'
const AUTH_SUCCESS='AUTH_SUCCESS'
const ERROR_MSG='ERROR_MSG'	
const LOAD_DATA ='LOAD_DATA'
const initState={
	redirectTo:'',
	//isAuth:'false',
	msg:"",
	user:'',
	//pwd:'',
	type:''
}
//reducer
export function user(state=initState,action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload,pwd:''}
		// case REGISTER_SUCCESS:
		// 	return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		//case LOGIN_SUCCESS:
		//	return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case LOAD_DATA://2
			return {...state,...action.payload}
		case ERROR_MSG:
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
	//return state
}
function authSuccess(obj){
	const {pwd,...data} =obj
	return {type:AUTH_SUCCESS,payload:data}
}
// function registerSuccess(data){
// 	return {type:REGISTER_SUCCESS,payload:data}
// }
// function loginSuccess(data){
// 	return {type:LOGIN_SUCCESS,payload:data}
// }
function errorMsg(msg){
	return {msg,type:ERROR_MSG}
}
// export function userinfo(){
// 	//return dispatch=>{}
// 		axios.get('/user/info').then(res=>{
// 			if(res.satus==200){
// 				//
// 				if(res.data.code==0){
// 					//
// 				}else{//
// 					 this.props.loadData(res.data.data)
// 					this.props.history.push('./login')
// 				}
// 			}	
// 		})
// }
export function loadData(userinfo){
	return {type:LOAD_DATA,payload:userinfo}
}
export function update(data){
	 return dispatch=>{
	 	axios.post("/user/update",data).then(res=>{
	 		if(res.status==200&&res.data.code===0){
	 			dispatch(authSuccess(res.data.data))
	 		}else{
	 			dispatch(errorMsg(res.data.msg))
	 		}
	 	})
	 }
}
export function login({user,pwd}){
	if(!user||!pwd){
		return errorMsg("用户名密码必须输入")
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
		.then(res=>{
			if(res.status===200&&res.data.code===0){
				//dispatch(registerSuccess({user,pwd,type}))
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function register({user,pwd,repeatpwd,type}){
	if(!user||!pwd||!type){
		return errorMsg("用户名必须输入")
	}
	if(pwd!==repeatpwd){
		return errorMsg("两次密码输入不同")
	}
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type}).then(res=>{//这个地址应该是经过转换了的，跳转到了list，数据最终发送到了9093的list端口
			//但事实上却没有发送过去；
			if(res.status===200&&res.data.code===0){
				dispatch(authSuccess({user,pwd,type}))
			}else{
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}



