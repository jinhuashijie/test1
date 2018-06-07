import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'


@withRouter
@connect(
	null,
	{loadData}
)
class AuthRoute extends React.Component{
	componentDidMount(){
		const publicList=['/login','/register']
		const pathname=this.props.location.pathname 
		console.log(pathname)
		if(publicList.indexOf(pathname)>-1){
			return null
		}
		//获取用户信息
		axios.get("/user/info")//这里不影响直接输出json到页面
		.then(res=>{
			if(res.status==200){
				if(res.data.code==0){
					//有登陆信息
					this.props.loadData(res.data.data)
				console.log("AuthRoutejs转端口正确")
				}else{
					console.log("AuthRoutejs转端口报错")
					this.props.history.push('/login')
				}
			}
		})
		//用户状态，是否登陆，现在的url地址，是否需要跳转

		//用户是否完成信息（选择头像，个人简介），用户是牛人还是boss
	}
	render(){
		return null
	}
}

export default AuthRoute;










