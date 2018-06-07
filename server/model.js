const mongoose=require("mongoose")
const DB_URL='mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)//已经连上后台数据库//这个必须有，不然就无法访问数据库端口
// mongoose.connection.on('connected',function(){//这个是用来测试是否链接成功
// 	console.log('model.js连接成功')//cmd里面显示成功，连接是成功 的
// })

const models={//这里只是定义了一个对象而已
	user:{
		'user':{type:String,'require':true},
		'pwd':{type:String,'require':true},
		'type':{'type':String,'require':true},
		//头像
		'avatar':{'type':String},
		//个人简介
		'desc':{'type':String},
		//职位名称--genius
		'title':{'type':String},
		//boss
		'compony':{'type':String},
		'money':{'type':String},
	},
	chat:{

	}
}
for(let m in models){//算是定义了两个key一个表名
	mongoose.model(m,new mongoose.Schema(models[m]))//m为什么放在数组里，而不点，用对象引出值
	//console.log(m)//这里打印出的为什么是 user chat 而且之后一组，只有两个属性的原因
	//console.log(new mongoose.Schema(models[m]))//数组还能看到东西，对象啥都看不懂
}
module.exports={
	getModel:function(name){
		console.log(name)//这里在这个文件里是无法打印的--cmd打印出来是user
		//无法访问跟这里打印无关，
		return mongoose.model(name)//这个参数字段应该有两个，一个user，一个chat
	}
}
//工具函数库
