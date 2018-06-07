
const add_gun='加机关枪'
const remove_gun='减机关枪'


export function counter(state=0,action){
	switch(action.type){
		case add_gun:
			return state+1
		case remove_gun:
			return state-1
		default:
			return 10
	}
}

export function addgun(){
	return {type:add_gun}
}
export function removegun(){
	return {type:remove_gun}
}
export function addgunasync(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addgun())
		},1000)
	}
}










