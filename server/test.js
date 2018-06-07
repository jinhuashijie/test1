const express =require('express')//首先是引入express模块
const mongoose=require("mongoose")
//1:链接mongodb：并且使用imooc这个集合--------------------
const DB_URL='mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo conect success')//cmd里面显示成功
})
//类似于mysql表，文档的概念  这个是key，表名，后面是值,值就是字段
//命名一个表名++创建一个key，加上字段，添加字段值，利用express，来查询和输出到指定端口
const User3=mongoose.model("user",new mongoose.Schema({//算是新建了一个表
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
User3.create({
	user:'user2创建数据',
	age:18
},function(err,doc){
	if(!err){
		console.log(doc)//在cmd里面打印成功，该从哪里返回到页面呢？
	}else{console.log(err)}
})

const app=express() //还是得通过app链接然后输出到页面上
//端口后面的地址确实是可以随意更换的
app.get('/data/list',function(req,res){//可以成功输出到data下面,必须连上，不然找不到
	User3.find({},function(err,doc){
		return res.json(doc)//这里的数据将会输出到页面上，打印出一个表里所有的数据
	})
	//res.json({name:'appjson数据测试',age:"data下面"})
})
//-------------------------------------




//const app=express()   //定义一个连接--等于一个实例

// app.get('/',function(req,res){//这个是把数据输出的，两个是独立的
// 	res.send("<h2>hellow world</h2>")//浏览器9093端口会显示这个东西
// })
// app.get('/data',function(req,res){//可以成功输出到data下面,必须连上，不然找不到
// 	res.json({name:'appjson数据测试',age:"data下面"})
// })
// app.get('/data/user',function(req,res){//可以成功输出到data/user下面，
// 	res.json({name:'appjson数据测试',age:"data/user下面"})//也是必须连上，不能注释
// })
app.listen(9093,function(){//这个是监听的回调函数，
	console.log("第一轮监听9093端口-app")//cmd里面是可以打印成功的
})







