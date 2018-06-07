const express =require('express')
const Router =express.Router()//这个应该是系统自带的实例化router工具
//Router 方法跟express方法本身没多少区别，只是router可以随便分路由
const model=require('./model')//这里引入的为什么不是models，也不是getModel--应该是系统模块
// model不是系统模块，应该算是model整个暴露出来的，下面才是getModel的属性的引用
const User=model.getModel('user')//这里算是引入getModel了，model文件算是被引入了
Router.get('/list',function(req,res){//9093下面list这个路径是找不到的为啥？
	////res.send('hello, express+indexa.js')//这个是可以打印出来的--server启动也可以输出到html
	User.find({},function(err,doc){//既然是get方法，就应该返回到页面才对，为什么会没有呢？
		console.log(doc,"userjs打印list")//这里也没打印出来--6-10问题就出在这里
		if(err){//什么都没打印，什么都没输出，为什么？
			console.log(err)
			return res.json(err)
		}else{
			console.log(doc)
			return res.json(doc)//这里输出到html一个空的数组
		}
		
	})
})
// const app=express() 
// app.use('/',Router)
// app.get('/data/list',function(req,res){//可以成功输出到data下面,必须连上，不然找不到
// 	res.json({name:'user.js数据测试',age:"data下面"})//页面路径下返回的是json格式数据，而不是html数据
// })
//没有建立create的情况下，数据都是暂时的，没有存储到mongodb里面
// app.get('/data/list',function(req,res){//可以成功输出到data下面,必须连上，不然找不到
// 	res.send('<h2>123</h2>')//这里是可以返回到html路径里面的
// 	// User3.find({},function(err,doc){
// 	// 	return res.json(doc)//这里的数据将会输出到页面上，打印出一个表里所有的数据
// 	// })
// 	//res.json({name:'appjson数据测试',age:"data下面"})
// })
// app.listen(9093,function(){//这里必须得监听，要不也连不上页面路径
// 	console.log('监听9093端口')//这个是可以正常打印出来的
// })

// app.listen(9093,function(){//这个是监听的回调函数，
// 	console.log("第一轮监听9093端口-app")//cmd里面是可以打印成功的
// })
Router.post('/register',function(req,res){//前面果然是不能带点的
//Router.post('./register',function(req,res){//改变这个地址试试看
	//console.log("这个是发往注册页面的--路由")
	//console.log(req.body)
	const {user,pwd,type}=req.body
	User.findOne({user:user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名重复'})
		}
		User.create({user,pwd,type},function(e,d){
			if(e){
				return res.json({code:1,msg:'后端出错了'})
			}

			return res.json({code:0})
		})
	})
})
// Router.get('/list',function(req,res){
// 	//用户有没有cookie
// 	return res.json({code:1,name:'you2'})
// })
Router.get('/info',function(req,res){
	//用户有没有cookie
	return res.json({code:1,name:'you3'})
})

module.exports=Router






