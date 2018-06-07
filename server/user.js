const express =require('express')
const utils=require('utility')

const Router =express.Router()
const model=require('./model')
const _filter={"pwd":0,'__v':0}
const User=model.getModel('user')//这里算是引入getModel了，model文件算是被引入了
Router.get('/list',function(req,res){//9093下面list这个路径是找不到的为啥？
	//res.send('hello, express+indexa.js')//这个是可以打印出来的--server启动也可以输出到html
	//User.remove({},function(err,doc){})//清空这个表下的所有条目
	User.find({},function(err,doc){//既然是get方法，就应该返回到页面才对，为什么会没有呢？
		//console.log(doc,100)//这里也没打印出来
		return res.json(doc)//这里输出到html一个空的数组
	})
})
Router.post('/update',function(req,res){
	const userid =req.cookies.userid
	if(!userid||userid==undefined){
		return json.dumps({code:1})
	}
	const body=req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
		const data=Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})
})
// Router.post('/update',function(req,res){
// 	const userid = req.cookies.userid
// 	if (!userid) {
// 		return json.dumps({code:1})
// 	}
// 	const body = req.body
// 	User.findByIdAndUpdate(userid,body,function(err,doc){
// 		const data = Object.assign({},{
// 			user:doc.user,
// 			type:doc.type
// 		},body)
// 		return res.json({code:0,data})
// 	})
// })
Router.post('/login',function(req,res){
	const {user,pwd}=req.body   //设置成0，表示不允许显示，xml里面没有了，
	User.findOne({user,pwd:md5Pwd(pwd)},{'pwd':0},function(err,doc){
		if(!doc){
			return res.json({code:1,msg:"用户名不存在或密码错误"})
		}
		res.cookie("userid",doc._id)//cookie可以成功被写入在链接header里面
		return res.json({code:0,data:doc})
	})
})
Router.post('/register',function(req,res){
	const {user,pwd,type}=req.body
	User.findOne({user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名重复'})
		}
		const userModel=new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(e,d){
			if(e){
				return res.json({code:1,msg:"后端出错了"})
			}
			const {user,type,_id}=d
			res.cookie("userid",_id)
			return res.json({code:0,data:{user,type,_id}})
		})
		// User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
		// 	if(e){
		// 		return res.json({code:1,msg:'后端出错了'})
		// 	}

		// 	return res.json({code:0})
		// })
	})
})
Router.get('/info',function(req,res){
	//用户有没有cookie
	const {userid}=req.cookies
	if(!userid){
		return res.json({code:1,name:'you3'})
	}
	User.findOne({_id:userid},_filter,function(err,doc){
		if(err){
			return res.json({code:1,msg:'后端出错了'})
		}
		if(doc){
			return res.json({code:0,data:doc})
		}
	})
})
function md5Pwd(pwd){
	const salt='imooc_is_good_3957x8yza6!@#IUHJH~~'  //也可以用随机字符串
	return utils.md5(utils.md5(pwd+salt))

}



module.exports=Router






