import React from 'react'
//import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
//import {WithRouter} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import TabBarExample from '../../ab'
//import Boss from '../../component/boss/boss'

// <Route path='/boss' Component={Boss}></Route>
// <Route path='/genius' Component={Genius}></Route>

function Boss(){
	return (<h2>boss应该中间显示-在切换时<i></i></h2>)
}
function Genius(){
	return (<h2 className="genius33">Genius页面应该中间显示-在切换时<i></i></h2>)
}
function Msg(){
	return (<h2 className="msg33">消息列表应该中间显示-在切换时<i></i></h2>)
}
function User(){
	return (<h2 className="user33">个人中心应该中间显示-在切换时<i></i></h2>)
}
@connect(
	state=>state
)
class Dashboard extends React.Component{
		
	render(){
		const user=this.props.user
		console.log("应该是boss",user.type,typeof(user.type))
		const {pathname}=this.props.location
		const navList=[
			{
				path:'/boss',
				text:'牛人2',
				icon:'boss',
				title:'牛人列表0',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS列表0',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息2',
				icon:'msg',
				title:'消息列表0',
				component:Msg
			},
			{
				path:'/me',
				text:'我2',
				icon:'user',
				title:'个人中心0',
				component:User
			}
		]
		console.log(navList[0].hide,navList[1].hide,)
		return (<div>
				<NavBar className='fixed-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<div style={{marginTop:45}}>
					<Switch>
						{navList.map(v=>(
							<Route key={v.path} path={v.path} className={v.path} component={v.component} ></Route>
						))}
					</Switch>
				</div>
			<NavLinkBar data={navList}>123</NavLinkBar>
			</div>
		)
	}
}

export default Dashboard;







