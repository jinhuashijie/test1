const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

const userRouter=require('./user')//这里前面必须带点，不然报错

const app=express()
app.use(cookieParser())
app.use(bodyParser.json())//引入中间件，需要启用模块的功能
app.use('/user',userRouter)//下面又不能带点
app.listen(9093,function(){
	console.log('监听9093端口server.js')
})





