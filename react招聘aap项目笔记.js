1：create-react-app脚手架生成文件格式
它是官方已经配置 好的模板--不用手动配置webpack，react之类
npm install -g create-react-app
create-react-app -v   能跑通
create-react-app  test  新建一个应用，之后会自动暗转一系列依赖
可以跑，速度很慢；非常慢
目录结构：
nodemodules      
public         静态资源  index.html 在这里面
src            源代码
gitignone      github
packagejson    项目依赖版本
readme.md
之后 npm start 端口可以自动打开；页面也可以正常显示；
react app 主要依赖的几个组件模块
react+react-dom+reac-scripts
2：如何安装和使用第三方库
npm install redux --save  安装第三方库
npm run eject 弹出配置文件，可以自定义webpack --单向不可逆向
扩展package.json里面的script字段，扩展npm run 命令；
3：如何定制化配置；
使用eject  


=====================es6常用语法===================
1：react默认使用es6开发
2：重点语法
	块级作用域 字符串，函数
	对象扩展 解构
	类，模块化；
3：使用反引号，直接写变量，多行字符串，告别+拼接字符串
name='immoc';
course='react开发app';
console.log('hello'+name+','+course);
console.log(`hello ${name},course is ${course}`)
反引号还支持多行字符串，换行不会报错
4：默认参数，箭头函数，
箭头函数保持this作用域，还能再简写，在只有一条return语句的情况下
let a=(name='me')=>{
	console.log(name);
}
a("you");
以前传入数组的参数
function hello(name1,name2){
	console.log(name1,name2)
}
arr=['imooc','woniu'];
hello.apply(null,arr)//改变指针到null，
es6的方法
hello(...arr);

对象的扩展；+对象的方法简写；+
const obj={
	a:1,
	b:2,
	c:3
}
console.log(Object.values(obj))//打印出由属性值组成的数组
console.log(Object.keys(obj))//打印出由属性组成的数组
console.log(Object.entries(obj));//打印大数组，里面由键值对组成的小数组
给对象添加键值
const name="immoc"
const obj={

}
//这个name必须是已经定义了的，前面必须有值，后面可以覆盖；
obj[name]='hello imooc';//往对象里成功添加了键值对
console.log(obj)
新方法添加键值对
const name='imooc';
const obj={
	[name]:'hello'//方括号被称为计算属性
}//同样是前面必须有值，后面可以覆盖；
console.log(obj);
对象里函数的简写，不需要function直接带小括号+大括号
2：对象的合并，以前只能用for循环，现在用三点
const obj1={name:'me',age:18};
const obj2={name:'you',name1:'test',age:20}
console.log({...obj1,...obj2})//相同属性会被后面覆盖；

解构赋值====数组解构===对象解构
const arr=['hellow','world'];
//原来的方法
//let arg1=arr[0];
//let arg2=arr[1];
//console.log(arg1,arg2);
//es6的方法
let [arg1,arg2]=arr;
console.log(arg1,arg2)//这个也感觉不到有啥用，
//用处主要是每个名字变成独立的变量了，可以在外面用了

=============================================
提供class的语法糖
是prototype的语法糖
extends继承
constructor构造函数；

class Myapp{
	constructor(){
		this.name="you";
	}
	sayHello(){
		console.log(`hello ${this.name} !`)
	}
}
const app=new Myapp()
app.sayHello()//这个应该算是构造函数的语法糖

=============================
es6中新出现的数据解构
set  元素不可重合
map    对象的扩展，
symbol   重复的变量

=================================
es6自带了模块化的机制，告别seajs和requirejs
import ,import{}
export  export default
node现在还不支持（），还需要用require来加载文件

如何对外暴露？

两个js文件，
js1：
export const name='helloworld';
js2
import {name} from './js1';//这里带不带花括号都不行；
console.log(name)
直接在文件里面引用还不行，可能需要服务器或者node环境--有服务器，有node还是不行
----------怎么都不行

=========================
对象扩展负
装饰器
async  await
其他特性
promise
迭代器，和生成器
代理 proxy

=============================第二章：第三课===================
第三部分  express+mongodb
1： express 开发web接口 基于nodejs的极简框架
2：非关系型数据库mongodb，mysql存储表格类型，mongodb存储json类型
使用node链接mongodb，需要用到中间件，mongoose
3：src放置源码  server放置后台
4： 安装express之后，在server.js里面引入express模块
里面还会监听端口，监听之后有函数，
5：express的格式，app.get(url ,function(){})
6:：还要用到nodemon，这个可以让node服务器自动重启
7：app.get  app.post 传输数据的不同个的接口
8：app.use  引入模块，
9：res.send  res.json res.sendfile 响应不同的内容
  文本 json  文件；
安装：cnpm install express --save   以后是用cnpm npm实在是太慢了
cnpm install -g express-generator   express -v居然报错了，还是慢；但比npm快多了
express --version  这个可以显示出版本来
*前面直接运行  node server.js  是报错的，npm start打开的却是react的端口
单词拼错了，是listen而不是listener  是可以运行js文件的，
app.get后面的参数中斜杠掐面是不能加点的路径格式，端口可以打开，内容可以显示
没修改一次，服务就得在cmd里面重启一次；而且路径也是需要设置的，有点跟react-router相似
cnpm install -g nodemon  这个插件来进行自动重启服务，大概四十秒钟
命令也变了，nodemon server.js  不用手动中断，但是还是得手动刷新
重装：安装  cnpm install express --save 
cnpm install -g nodemon  这个插件来进行自动重启服务，
app.use如何使用模块？？
res.send  res.json  res.sendfile,返回的是不同的内容
返回文本  返回json  返回文件
===============第二章：第四课：express与mongodb结合==================================
第四部分：express + mongodb基础
1：下载安装mongodb，跟安装nodejs差不多；安装完输入mogo在cmd里面，--直接输入命令是找不到命令的。打开 mogo.exe也是行的
必须在mongodb里的bin目录里面启动mongo才行，但是端口打不开
在bin里面启动 mongod.exe是能够打开端口的，问题是怎么调用？
在bin里面brew install mongodb 不是命令
2：npm安装中间库mongoose，安装完可以直接使用；怎么用？
3： 在 server.js 里面直接require；
4：也是mongoose.connect(db_url);
5:mogo里面有文档的概念，什么东西？也有增删改查的操作
6：定义文档模型，schema和model新建模型；
7：mongoose文档类型：string，number等数据结构，
 定create  remove  update分别用来增删改 find是查，还有findone
8：打印都是打印在cmd里面的；看数据也是在浏览器里面，特定的本地端口
9：express使用body-parser  -支持post参数
10：使用cookie-parse 存储登录信息cookie --mongodb独立工具函数
*安装mongodb：
mongod.exe --config C:\Program Files\MongoDB\mongo.config   不行
mongo.exe --config C:\Program Files\MongoDB\mongo.config    也不行
mongod  可以跑出一堆东西；还是链接不上；
运行mongod可以看出错在哪里，原因是c目录下没有data，db文件夹，新建两级目录之后就可以了
接下来让mongodb与express配合
cnpm install mongoose --save  在项目目录里安装
需要同时启动mogod 和mongoose才行；
**********************************第三章：react基础知识*************************章星课等部分减备注井
1：react入门实例---关键的一切皆组件--专注view层，mvc
cnpm install --save react@next react-dom@next  更新react
2：react16还需要@next前缀；
3：jsx基础语法---react的view层语法
js里面直接写html，class要写成className ；  变量用{}包裹即可
4：一切皆是组件---块；
5：只要是组件都必须使用class语法
import React from 'react';//引入依赖是所有组件必须的；--这个已经不能用了
class App extends React.Component{
	//这就是一个组件，等于一个class就是一个组件
	render(){//是一个返回函数，等于return
		return <h2>测试</h2>
		const boss='测试';
		return <h2>我是{boss}</>//数据直接用花括号包裹

	}
}
export default App;//向外暴露这个组件
//主文件或者其他引用文件里面应该使用App作为标签
//组件变量名，首字母必须大写；
class First extends React.Coponent{
	render(){
		return <div>返回这个数据</div>
	}
}
class Second extends React.Component{
	render(){
		return 
	}
}
7----------------/第三课：组件之间传递数据-------------
1：组件之间用props传递数据；<组件 数据=‘值’> 的形式
	组件里使用 this.props获取值
	如果组件只有render函数，还可以使用函数的形式写组件；
class App extends React.Component{
	render(){
		const boss="李云龙";
		return 
			<div>
				<h3>独立团，团长{boss}</h3>
				<一营 老大='张大喵'></一营>//这里用到了组件
				//上面在组件里面定义了值
				<骑兵连 老大='孙德胜'></骑兵连>
			</div> //这样也能行，函数名字作为标签，参数传值；
	}
}
function 骑兵连(props){
	return <h2>骑兵连连长{props.老大}</h2>
}
class 一营 extends React.Component{
	render(){
		return <h2>一营营长：{this.props.老大}</h2>
		                   //值被传到了下面
	}
}
---------------------------第三章：第三课：组件内部通过state管理状态------
jsx本质就是js；所以直接数组.map渲染列表--jsx本质是js，所以可以直接在里面运行js代码
Constructor设置初始状态，记得执行 super(props) 
state就是一个不可变的对象，使用this.state获取；
如何渲染一个列表？
class 一营 extends  React.Component{
	constructor(props){//这是一个构造器
		super(props)//这个是固定格式吗？
		this.state={//这个用来存放数据，就是所谓的状态；
			solders:['胡子','柱子','王根生']
		}
	}
	render(){
		return (
			<div>
				<h2>一营营长，{this.props.老大}</h2>
				<button onClick={this.addSolder}>新兵入伍</button>
				<ul>
					{this.state.solders.map(v=>{
						return <li key={v}>{v}</li>
					})}
				</ul>//最后确实循出来了列表
				<i></i>
			</div>
		)
	}
}


-----------------------------第三章：第四课：事件-------------
onClick点击事件，jsx里面，onClick={this.函数名}来绑定事件
this引用的问题；需要在构造函数里用bind绑定this；
或者使用箭头函数
this.setState修改state，返回新的state
一个函数，然后在函数里面使用 this.setState({})修改状态，页面会自动渲染修改后的数据


----------------------------第三章第五课：react生命周期----------
react有若干钩子函数，在组件不同的状态下执行；
初始化周期，组件重新渲染生命周期，组件卸载生命周期
第一次渲染要执行的所有函数，
第二：改变状态的时候的；
第三：组件要离开这个页面，要卸载，删掉
怎么做垃圾回收，状态清理；
-----这个除了有个顺序之外也看不出来有什么其他的用--
难道会自动执行？比如在修改之后，会自动调用？

-----------------------第三章：第六课：react开发工具-------------
在chrome扩展程序里面；react developer tools
控制台右边多了一个react按钮；可以看到状态，state，组件；

-----------------------第七课：antd-mobile组件库-------
蚂蚁金服出品的ui组件库；pc端，移动端--antd-mobile
也需要npm安装；cnpm install antd-mobile@next --save  非常慢，极度慢
官网有demo；
css文件放在dist里面；
也需要在主组件文件里面import
按需加载的插件，cnpm install babel-plugin-import --dev   还需要在json里面添加一个对象组
cnpm install babel-plugin-import --dev --save  json里面还是没有babel
cnpm install babel --save --dev  json里面还是没有
需要把数组放到json文件里面，还需要加上双引号，单引号不行；
兼容react-native与web
layout--布局组件
表单组件，数据展示组件，选择器等等
操作组件
各种布局用的组件，跟bs差不多；--这个是需要好好学些的，完全新的；

====================第四章第一课：redux的基础知识============
redux是什么？专注于状态管理，和react解耦，也能跟angular用
单一状态，单向数据流
redux核心概念
核心概念：store   state  action  reducer
每个组件都有内部各自的状态，各种变化，以前都是setState管理
保险箱概念，所有人的状态都有记录；被记录的状态state
需要改变的时候，改变的管理dispatch  要干什么action
处理变化的，reducer 拿到state和action
需要用cnpm install redux  --save 安装redux
第一步：新建store，都是需要用import引入redux
通过reducer文件，根据老的状态和action生成新的状态
import {createStore} from 'redux';
function counter(state=0,action){
	Switch(action.type){//type才是真正的参数
		case '加机关枪':
			return state+1
		case '减机关枪':
			return state-1
		default:
			return 10 //这个默认的初始状态
	}
}
//新建store
const store =createStore(counter)
//预料的情况是，一个类似仓库的地方放置初始状态
//一个工具函数来执行可能的操作
//一个函数监听变化，根据参数执行操作
//事实上是在初始状态里直接放了肯能的命令以及判断；
const init =store.getState();
console.log(init);
function Listener(){
	const current = store.getState();
	console.log('现在有机枪${current}把')//估计应该是反引号
}
store.subscribe(Listener);
store.dispatch({type:'加机关枪'});
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})//这几个函数会依次执行
//每执行一次，操作一次数量，并打印出来；

-----------第四章：第二课：redux如何与react一起用-----
把 store.dispatch方法传递给组件，内部可以调用修改状态；
Subscribe 订阅render函数，每次修改都重新渲染；
redux相关内容，移到单独的文件 index.redux.js单独管理；

-------------第三课：让redux可以处理异步----------

------------第四章：第四课：更进一步------
处理异步，调试工具，更优雅的和react结合
redux-thunk  处理异步的插件:cnpm install redux-thunk --save
使用applyMiddleware 开启thunk中间件
anction可以返回函数-对象 使用dispatch提交action
cnpm install redux-devtools-extension --save 并且启用
使用react-redux优雅的链接react和redux
npm install redux-thunk --save
使用applyMiddleware开启thunk中间件
action可以返回函数，使用dispatch提交action
===============第四章：第五课：调试工具=============================
1：chrome扩展程序
    新建store的时候判断 window.redux-devtools-extension
    使用compose结合thunk和 window.devToolsExtension
    调试窗的redux选项卡，实时看到state
-------------第四章：第六课：使用react-redux结合起来--
react-rudux 提供provide 和connect两个接口来连接
2：provider组件在应用最外层，传入store即可，只用一次
cnpm install react-redux --save   安装了之后为什么还是一直转圈加载不出来呢？也不报错
----------------第四章：第七课：装饰器-没搞懂-------------
json文件里为啥老师没有babel-plugin
npm run eject   按确定
cnpm install --save-dev babel-plugin-transform-decorators-legacy
确实是前面搞错了，在npm run eject的时候，不能直接确定而是要输入y之后再确定，babel出现了
,
    "plugins": [
        "transform-decorators-legacy"     
    ]
即便加入了这个还是不行；----这个问题还需要测试；
-----------------第四章：第八课：react-router4---------
1：react官方推荐的路由库，4是最新版本
	4是全新版本，和之前版本不兼容，浏览器和react-native兼容
	react开发单页应用必备，践行路由即组件的概念
	核心概念：动态路由，route，link Switch
**安装： cnpm install react-router-dom --save
2：入门组件；
	browserrouter  包裹整个应用   下面只能有一个最外层的标签
	router路由对应渲染的组件，可嵌套；里面加exact 才能不显示别的；
	link  跳转专用 
3：应用虽然放在BrowserRouter里面，但是数据还是由redux来管理的
----------------第四章：第九课：其他组件-----------------
1：url参数，route组件参数可用冒号标识参数
    this.props.match.params.location   可以获取url后面的参数--必须在route标签里配合location
2：redirect组件跳转<Redirect to='/qibinglian'></Redirect> 
	点击还是正常反应，一刷新就跳转的到指定页面了
3：switch只渲染一个子组件；--多页面如404--还是没搞懂有啥用处：
这个是一个额外的，在地址都没有匹配的情况下，跳转到预设的页面
----------------第四章：第十课：redux 配合react复杂应用
1:route里面的路径是不带点
----------------第四章：第十一课：redux 配合react复杂应用（2）
复杂redux应用 多个reducer 用combineReducers合并
redirect组件跳转
switch只渲染一个子route ；

到引入counter删除之前还是对的，后面为什么又报错了呢？
原因找到了：reducer本身是个固定名字，没问题，一旦合并reducers之后，this.props就不能用了

----------------第十一课：第十二课
(){}/</>
******************第五章第一课：需求分析++++++++++++++
1：需求分析---项目骨架--页面架构与用户交互流程
       页面

用户中心-进来之后分化-（我是）牛人    （我是）boss

登陆                     求职信息        管理职位


注册                      职位列表       查看牛人

信息完善               -------------聊天------------

文件架构和规范---
	src前端源码目录
	server后端express目录
	和根据功能文件夹：component，container，reducers

router 怎么划分页面
	进入应用时获取用户信息，用户未登陆跳转login页面
	login和reigster页面不需要权限认证
	用户信息，聊天列表，职位列表页面共享底部tabbar
其他注意事项
mongodb字段设计，axios发送异步请求，
redux管理所有数据，组件尽量用在ante-mobile，弱化css
=====================第五章第二课：前后端联调===============
1：需要用asios发送异步请求，如何发送，端口不一致，使用proxy配置转发；
	axios拦截器，统一loading处理--跨域的问题；
	redux 里使用异步数据，渲染页面
2：axios，简洁好用的发送请求库；
	cnpm install axios --save     react 在3000端口，server在9093端口，怎么统一
	需要修改json文件

==================前后端联调：拦截器=================《/》<>
cnpm install antd-mobile --save

*****************第六章第一课：登陆注册：内容介绍
1：登陆和注册功能实现
	页面文件结构  文件夹，组件，业务组件，通用组件
	web开发模式   认证机制
	前后端实现 前端react全家桶  后端express+mongodb

2：页面文件结构--骨架结构实现
	组件放在component文件夹下面--公用组件
	页面放在container文件夹下面--业务组件，其他的redux，reducer对外暴露的
	页面入口处获取用户信息，决定跳转到哪个页面--
3：开发模式--前后端交互使用json，验证使用cookie
	express依赖cookie-parser  cnpm install cookie-parser --save
	cookei类似一张身份卡，登陆后服务端返回，你带着cookie就可以访问受限资源
	页面cookie的管理浏览器会自动处理，直接使用模块函数
4：开发流程：
	用户加载页面------带cookie向后端获取用户信息--用户加载页面

							已登录					未登录

	app内部页面-------登陆成功，前端存储cookie-----登陆页面

修改json引入import还是出问题了的
cnpm install babel-plugin-import  --save  之后是不报这个错误了
-------------------------第六章第二课：登陆与注册

--------------------------第六章第三课：判断路由-------------
<AuthRoute></AuthRoute>   这个组件专门用来检测路由

---------------------------第六章第四课：用户信息校验---------------
import {withRouter} from 'react-router-dom'@withRouter
在组件不是路由组件的时候，用这个包裹一下，就有history属性了

---------------------------第六章第五课：注册交互实现------------可以正常实现

--------------------------第六章第六课：注册请求发送------------要是用redux，提交给后端

--------------------------第六章第七课：数据库模型建立------------
要非常小心路径的问题，有没有点非常重要，一旦找不到文件首先查路径的问题
cnpm install body-parser --save   到底该安装到哪一个文件夹里面？

--------------------------第六章第九课：注册前后端连调-----------------
------------------------------这个后面不能带括号，有的地方要带，有的地方不能带，要小心一点
<Button type="primary" onClick={this.handleRegister（）}>注册</Button>
点击注册的时候为什么报错？数据也没有写进去？
-----------------------------第六章：第十课：为什么我们的又错了？---
为什么在redux插件里面什么也看不到呢？应该是reducer没起作用
9093 list 的端口为什么也打不开了？info端口是可以正常打开的，为什么？
删光注释也还是不行，只有单独的可以--一会儿行，一会儿不行
servejs ： 已经无路可退了，无关
modeljs ：就是他的问题--就是没有跟数据库链接的问题，redux插件没有显示也是他的问题

加密常用算法：MD5   非对称  单向加密  雪崩效应，
cnpm install utility    const utila=require('utility')
加密是成功的---是可以破解的--加盐--自己加字符串

----------------------------第六章第十一课：实现登陆--------
--我的为什么不跳转呢？bossinfo，前面也是没有成功的
在 user.redux.js里面 init 添加redirectTo 属性还是不行
server.js  替换了文件也不行
server里面换完了
redux里面换完了
util  index 换完了
login看不出来有什么不同
在register里面引入Redirect模块也不行，修改位置也不行--不是位置问题，而是根本没加上
ok这个问题解决
登陆成功之后跳转到指定页面也出问题了，为啥？不是三等的问题，也不是reduxjs里面payload漏了的问题
居然是因为uitljs里面参数原本是放在对象里面的，我直接放在小括号里面了，大部分问题都是这种小错误，难找的要死
-------------------------
						第六章第十二课：保存登陆的cookie------------
						1:到cookie这里是正常的
1：在头部看到，，在application看到 name  value值
.3：到放过滤器这里也是正常的---从5:50秒开始
4：从LOAD_DATA开始

+---为什么老是常出现500错误
重启node server不行--又是报转端口跨域出问题--登陆还是没有问题的，
就是注册出了问题；.then回到一行也不行，register还是500错误
也不是 user.redux.js里面userinfo删除掉的原因 
重启两个cmd也没用，
即便让serverjs再保存一次变正常，也没用，还是出问题
bossinfo 端口也是找不到info  也是报错转端口错误
加入console之后好像忽然又好了，info 是找到了，register还是报错--新窗口打开info又报错了
serverjs报错找不到d，为什么？
一直到10:30  使用save替换create
原来是在save下面传参数出问题了，多级函数嵌套的时候，参数是不能重名的

*********************************第七章：第一课：完善信息：bos信息完善页面**************
1：为什么navBar没有出来？去缓存刷新也不行--重新登陆也不行
修改内容之后显示的还是原来的东西 重新start之后就好了
2:为什么会出现找不到输出的组件的问题？重启也不行；明明写的一模一样
去掉分号，去掉注释都不行；缩减成Avatar也不行
是一个组件而不是函数，不能用花括号包起来--成功
3:找不到图片文件路径咋回事儿，还不是图片本身--字符串拼接还是需要用反引号
=============================第七章第二课：boss信息完善页面之后端=============
1：交互事件都是走redux
2：到写完AUTH_SUCCESS  在userreduxjs里面，页面是可以运作，但明显报错，而且转圈不消失
	重启不行，重新登录也不行，还是报500错误
是router写成了route，一般链接的问题都是在utiljs里面，几个服务器文件里面--在另一个cmd里面也能看到报错
为什么会还是报500错误，userid找不到，可是根本不需要找到啊？为什么会报错？
	原因：cookie必须写成cookies   最后的返回值必须是json的一般是 res.jsong()
但是我为什么没有跳转到boss url去？是 user.redux.js的问题--自己拼错单词了，status  拼成 statu了

=======================第七章第三课：牛人版本的信息完善---=================
1：清除cookie；在application里面，底下有cookies 展开有值
2：为什么明明是一样的路径却找不到？？重启之后可以找到了
3：点击注册之后应该跳转到geniusinfo才对，路径虽然跳转了，但内容却没有跳转为什么？
	indexjs里面的路径前面少了个斜杠
4:属性验证的库，proptypes  15.5之前都是内置的，之后是单独的库
	cnpm install prop-types --save  报错找不到，重启还是不行；
	npm install prop-types --save   还是找不到  重启也找不到
	npm uninstall prop-types --save  删除行不行？
	有参数，对象，数组，函数，还有isRequired

4：找不到props，确实是单词拼错了，拼正确之后还是报错，
Unknown plugin "import" specified in "E:\\test1\\package.json" at 0,  为什么会找不的import，不应该啊
见鬼了，注释掉新引入的，还是报这个错误
卸载插件之后没用，即便是更换备份的json文件还是这个错误  彻底见鬼了，
5：重新 install  所有依赖，还是有问题，问题反而更多；
从新install 之后，插件到处都是找不到的
cnpm install require-optional  都不知道从哪里来的  安装了之后还是找不到，见鬼了
npm install require-optional --save
npm install cookie-parser --save   明明安装过，为什么还是没有
npm install utility  --save      也明明安装过的，彻底见鬼了
npm install mongoose --save    也安装了的  --serverjs终于没问题了
还是找不到import，彻底见鬼了，
cnpm install babel-plugin-import --save    换了一个错误  transform-decorators-legacy  这个找不到了
cnpm install --save-dev babel-plugin-transform-decorators-legacy    
又换一个错误  geniusinfo.js: Cannot find module '@babel/types'
npm install --save-dev babel-types  还是报错 又变成找不到import了
cnpm install babel-plugin-import  --save  又报找不到transform 难道又要重新来一遍？什么鬼？
npm install --save-dev babel-preset-es2015
电脑注销之后再重启，还是找不到import  不报错在别的地方，偏偏报错都是在这一个文件里面geniusinfo
从bossinfo复制过来的信息还是报同样的错误，就很有问题了
cnpm install import  也能引入；报出来的错误更多  npm install import --save  还是找不到import 
cnpm install babel-plugin-import   不行
npm install babel-plugin-transform-decorators-legacy --save-dev   又找不到import  
npm install babel-plugin-import  这下换了  Can't resolve 'antd-mobile/dist/antd-mobile.css'   ‘'
npm install antd-mobile --save  还是同样的错误，为什么？  
Can't resolve 'antd-mobile/lib/button
npm uninstall antd-mobile --save 
npm install antd-mobile --save     卸载   安装  还是找不到button  彻底见鬼了
又换错误了，连h2标签都找不到了  连Provider标签都出问题
npm install react  react-dom  --save-dev    还是babelrc文件的问题，删掉之后又变成css路径的问题了
模块文件夹里面也找不到，为什么？
彻底重装依赖项，结果找不到webpack 
npm install webpack --save-dev     还是找不到webpack
npm install webpack-dev-server    还是找不到
npm i -D webpack         作为本地依赖安装，跟上面是一样的，只是简写而已
npm install --save-dev webpack-dev-server  还是不行
依赖文件夹居然是空的，我靠  还是空的，我靠  --是被删空的，被谁删的呢？
cnpm install babel-plugin-import   这个居然能装上，webpack就不行，为啥？
cnpm install --save-dev webpack-dev-server 这个应该是装上的
cnpm install  之后start 可以了，但死活打包打不完
cnpm start  可以正常打开了，却还是报css路径错误 

npm start  就死命打不开
cnpm install babel-plugin-import --save    还是报路径错误
cnpm install antd-mobile --save   又换从错误，找不到tab-bar这个还算正常
终于算是还原了，太坑爹了

注册之后卡死不动了，为啥？mongodb没有开启 --可以跳转了 但是验证也没有啊
PropTypes  警告是发现而没被使用的  --验证成功了--完全成功

***************第八章第一课：牛人列表-应用骨架******************
1：Route标签里面如果不写path的话，只要命中了，所有页面都会显示这个组件--明不命中无所谓
	加了switch之后只命中第一个，其他的不管了，不显示，没有任何命中反而会命中显示这个没有路径的；

====================第八章第二课：牛人列表---导航和跳转=================
1：列表报错，是地址栏路径的问题，后面没有就不行，没有title属性
2: tabBar没有自动到底部也是个问题--添加css样式之后，自己就下去了
==================第八章：第三课：牛人列表2===============


<Switch></Switch>




**********************************************



++++++++++++++++++++++++++++自己的总结判断++++++++++++
1：主框架搭好了，利用create-react-route
2：es6需不需要转换？
3：express需不需要安装？应该需要，用来管理后台数据；--可能还需要requirejs



+++++++++++++++++++++++++第一章：第一课：概览+++++++++++++++++++++++++

单纯用react做大型项目是困难的；所以需要redux
redux里面的概念---这个比较困难；
dispath   action  reducer
state   单身边数据流
1：做什么?
	有实时聊天功能的招聘app
2：:有哪些功能
登陆注册，信息完善，个人中心，牛人列表
boss列表，消息列表，聊天详情页
3： 哪些技术栈？
react全局桶；+react16 +redux +react-router+acss+create-app
前端页面：
后端：express开发web接口，socketio开发实时聊天，mongodb开发数据存储

第一部分：前端页面
第二部分：前端支撑--前端用到的react全家桶的功能模块
antd-mobile组件库；
redux状态管理
react-router路由
axios异步请求
create-react-app --做项目脚手架
第三方插件--蚂蚁金服插件，少写css

知识储备+react全家桶学习；
4-11 完整的项目实战
12：回顾总结；

+++++++++++++++++++++++react主要的知识点+++++++++
事件，生命周期，构造函数，状态；
---------普通的方式渲染，传递状态，绑定事件修改状态------------
1:在nodejs下，react原来的方法很多已经不能用
2：state不能用原来的方法设置；参数在标签里采用 this.props，在render里面直接用名字
3:在nodejs里面getInitialState已经不能用了，要用构造函数设置state
4： constructor(props) {  
	    super(props);  
	    this.state = {date:100};  
	} 需要在下面bind（this）不然就报错，事件绑定 this.函数名后面也不能加括号
	有多个事件就得绑定多个this，不绑定即报错
	要么就在onclick后面绑定直接执行的箭头函数
5:循环渲染数组成列表的方法，要用到map方法；箭头函数，key，return
----------------采用redux的方式修改和绑定------------------
1：redux核心的概念，store  state,action ,reducer
2：store代表管仓库，state代表所有的记录，dispatch是联络专员，reducer是管理员
管理员新建一个仓库，里面放了各种状态，通过store.getState()方法获取状态
store.dispatch 通过仓库的联络员来修改状态
管理员接收状态和变化，更新状态，
可以用store.subscribe监听每次修改
1：首先要引入redux，还需要一个内部函数{createStore} 实际上引入的内部函数
2：然后创建一个带判断选项的函数，里面传两个参数
3：然后在createStore下实例化这个函数，这个函数变成了一个参数

4:：redux默认只处理同步，如果是像setTimeout之类的异步，就必须使用中间件
而且在异步中必须使用dispatch作为参数穿进去
5：进一步的优化：使用react-redux 提供：provider，connect 
开了redux和react-redux不是同一个东西
装饰器？是什么玩意儿？
npm run eject 弹出配置文件 



试错：
1：替换掉 model.js   没用
2：替换掉  sever.js  没用
3：修改  user.js  居然成功了  9093 也能拿到写入的数据
	很可能跟注释有关，问题还是在前面两个，恢复前面也没问题，不知道哪里问题呢，放弃

