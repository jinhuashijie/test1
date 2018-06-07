import React from 'react'
import {connect } from 'react-redux'
import {login,getUserData} from './Auth.redux'
import {Redirect} from 'react-router'
import axios from 'axios'
@connect(
     state=>state.auth,
     {login,getUserData}
)//这个state写在这里到目前还是没有问题的，前面counter一注释，reducer已引入就出问题
class Auth extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		data:{}
	// 	}
	// }
	componentDidMount(){
		this.props.getUserData()
		// axios.get("./data")
		// .then(res=>{//返回的居然是一个数组里面包裹的对象
		// 	console.log(res.data[0].age)
		// 	if(res.status===200){
		// 		this.setState({data:res.data[0]})
		// 		console.log(res.data.age)
		// 	}
			
		// })
	}
	render(){
		return (<div>
			<h2>我的名字是{this.props.user}</h2>
			{this.props.isAuth?<Redirect to='/dashboard'/>:null}
			<h2>Auth page+你没有权限，需要登陆</h2>
			<button onClick={this.props.login}>登陆</button>
		
		</div>)
	}
}


export default Auth;











