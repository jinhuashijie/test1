const express=require('express')
const mongoose=require("mongoose")

const DB_URL='mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log("链接成功")
})
//类似于mysql的表；增删改查四种最基本的操作；create remove update find findone
//connect连接数据库，
//    定义了一个名为User的数据库   定义文档类别
const User=mongoose.model("user",new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,requeire:true}//require字段是必须要的
}))
//新增一条数据
// User.create({//上下这个user命名必须是一致的
// 	user:'omooc112',
// 	age:18
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)//这里也只返回了一条刚刚新增的数据
// 	}else{console.log(err)}
// })
//新增另一条数据
// User.create({
// 	user:'第二次新增数据',
// 	age:100   //到这里已经可以成功新增数据，后面的回调函数是为了预防错误
// },function(err,doc){
// 	if(err){
// 		console.log(err)
// 	}else{console.log(doc+100)}
// })
//删除匹配数据
// User.remove({
// 	age:18
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)
// 	}else{console.log(err)}
// })
//修改数据
User.update({'user':'you'},{'$set':{'user':'you1'}
},function(err,doc){})//必须有这个回调函数，不然就修改不成功
const app=express()
//查找数据
app.get('/data',function(req,res){//findOne 的时候只匹配第一条数据
	User.find({},function(err,doc){//对象里是匹配规则，没有就是匹配全部
		return res.json(doc)//这里不是打印，而是返回
	})
})
// app.get('/',function(req,res){
// 	res.send('<h2>hello world</h1>')
// })
app.get('/data',function(req,res){
	res.json({name:"my9093",type:'string-'})
})
app.listen(9093,function(){
	console.log('监听9093端口')
})







