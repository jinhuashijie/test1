import React from 'react'
import {connect } from 'react-redux'
import {login} from './Auth.redux'
import {Redirect} from 'react-router'
@connect(
     state=>state.auth,
     {login}
)//这个state写在这里到目前还是没有问题的，前面counter一注释，reducer已引入就出问题
class Auth extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (<div>
			{this.props.isAuth?<Redirect to='/dashboard'/>:null}
			<h2>Auth page+你没有权限，需要登陆</h2>
			<button onClick={this.props.login}>登陆</button>
		
		</div>)
	}
}


export default Auth;











