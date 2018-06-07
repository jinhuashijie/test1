import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import './config' 
import 'antd-mobile/dist/antd-mobile.css'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'
//问题是分两层的
// import { counter } from './index.redux'//问题就出在这两个引用上面
import reducers from './reducer'//为什么忽然间又不报错了？
import { Provider } from 'react-redux';
import App from './App'
import Auth from './Auth'
import Dashboard from './Dashboard'
const store = createStore(reducers, compose(
//const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
// function Erying(){
// 	return <h2>二营</h2>
// }
// function Qibinglian(){
// 	return <h2>骑兵连</h2>
// }
// class Text extends React.Component{
// 	// constructor(props){
// 	// 	super(props)
// 	// }
// 	render(){
// 		return <h2>123测试组件{this.props.match.params.location}——未找到页面</h2>
// 	}
// }

/*
登陆
	没有登陆信息，统一跳转到login
页面： 导航+显示+信息
	一营
	二营
	骑兵连

*/




ReactDOM.render(
    (<Provider store={store}>
    	<BrowserRouter>
    		<Switch>
	    		<Route path='/login' exact component={Auth}></Route>
	    		<Route path='/dashboard' component={Dashboard}></Route>
	    		<Redirect to="/dashboard"></Redirect>
    		</Switch>
    	</BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'))
