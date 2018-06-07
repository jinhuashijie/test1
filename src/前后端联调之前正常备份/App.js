

import React from 'react'
import {connect} from 'react-redux'
import {addgun,removegun,addgunasync} from './index.redux'
//import {addgun} from './index.redux'

// const mapStatetoProps=(state)=>{
//   return {num:state}
// }

//括号里的两个参数应该是默认的，只是名字可以改而已
//const actionCreators={addgun,removegun,addgunasync}

// App=connect(mapStatetoProps,actionCreators)(App)
//@connect(mapStatetoProps,actionCreators)
@connect(
  state=>({num:state}),
  {addgun,removegun,addgunasync}
)
class App extends React.Component{
  render(){
    const addgun=this.props.addgun
    const removegun=this.props.removegun
    const addgunasync=this.props.addgunasync
      return (
        <div>
          <button onClick={addgun}>申请武器</button>
          <button onClick={removegun}>申请武器</button>
          <button onClick={addgunasync}>申请武器</button>
        </div>
      )
  }
}

// App=connect(mapStatetoProps,actionCreators)(App)
export default App;







