
----------------antd我们放弃了，eject也没弄
1:cnpm install redux --save


4-4:cnpm install redux-devtools-extension   这个是插件
	cnpm install redux-thunk  --save    处理异步中间件
需要使用 applyMiddleware 开启thunk中间件
action可以返回函数，使用dispatch提交action
4-5:chrome扩展程序里的调试插件；--没啥用
	compost 就是用来结合插件的
4-6：cnpm install react-redux --save  react结合redux--只需要安装这个即可
	这个模块就是不需要订阅了 不再用subscribe，用provider，connect
provider是一个组件，当标签用的，放在最外层；

4-7:就是这个装饰器；
	npm run eject  弹出来再配置，输入y,之前是没有config和scripts文件夹
	输入y确定之后确实多了两个文件夹
	cnpm install babel-plugin-transform-decorators-legacy  这个插件
安装插件，修改json之后是没有问题的；
修改了两个参数之后就出问题了；找不到@，为啥？就是这里改了之后出的问题，之前都是没问题的；
.babelrc放在上下目录里都不行，@报错没了，出现provider标签行的报错
把教程里的 index.js拿过来还是报同样的错误
cnpm install babel-preset-es2015  尝试安装es6转码工具
教程的代码自己是成功，我们拿过来就有问题，不是js代码的问题，应该还是插件的问题
把babelrc删了之后为什么又成功了，难道真的是代码的问题？代码换回去还是成功的，
那问题应该就是es6转码的问题了



