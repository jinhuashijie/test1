import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import Dashboard  from './component/dashboard/dashboard'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import reducers from './reducer'
import './config' 
import './index.css'

import 'antd-mobile/dist/antd-mobile.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
//boss  genius  me个人中心，msg消息中心，相同的头部，相同的底部
// function Boss(){
// 	return (<h2>boss</h2>)

// }
// function Dashboard(){
// 	return (<h2>Dashboard</h2>)
// }
ReactDOM.render(
    (<Provider store={store}>
    	<BrowserRouter>
    	<div>
    		<AuthRoute></AuthRoute>
    		<Switch>
	    		<Route path='/bossinfo' component={BossInfo}></Route> 
	    		<Route path='/geniusinfo' component={GeniusInfo}></Route>          
	    		<Route path='/login' component={Login}></Route>
	    		<Route path='/register' component={Register}></Route>
				<Route component={Dashboard}></Route>
			</Switch>
    	</div>
    	</BrowserRouter>
    </Provider>),
  document.getElementById('root'))



