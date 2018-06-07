import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile' 
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:'',
			pwd:''
		}
		this.register=this.register.bind(this);
		this.handleLogin=this.handleLogin.bind(this)
	}
	register(){
		this.props.history.push('/register')
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	handleLogin(){
		this.props.login(this.state)
	}
	render(){
		return (
			<div>{this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<h2>登陆页</h2>
				<WingBlank>
					<List>
						{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
						<InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
						<WhiteSpace/>
						<InputItem type='password' onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
					</List>
					<Button type="primary" onClick={this.handleLogin}> 登录</Button>
					<WhiteSpace> </WhiteSpace>
					<Button onClick={this.register} type="primary">注册</Button>
				</WingBlank>
			</div>
			)
	}
}
export default Login






