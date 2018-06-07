export function getRedirectPath({type,avatar}){
	//根据用户信息，返回跳转地址
	// user.type  /boss  /genius
	// user.anatar /bossinfo  /geniusinfo
	console.log(type);
	let  url =(type=='boss')?'/boss':'/genius'
	if(!avatar){
		//如果没有信息，就去完善信息
		url+='info'
	}
	return url
}












