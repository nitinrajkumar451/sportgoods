import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { connect } from 'react-redux';

class App extends React.Component{
    // const [counter, setcounter] = React.useState(0);
    state = { count: 0 ,maxCount:100, message:'Cannot go beyond 0 and 100'}
    increment = () => {
        this.props.dispatch({type : 'INCREMENT'})
      }
    
      decrement = () => {
        this.props.dispatch({type : 'DECREMENT'})
      }
    render()
    {
    return (
        <div >
            <h1> This is counter app</h1>
            <h1>{this.props.message}</h1>
            <button id="increment-btn" onClick={this.increment}>+</button>
            <div id="counter-value">{this.props.count}</div>
            <button id="decrement-btn" onClick={this.decrement}>-</button>
            
        </div>

     )
    }
}
function mapStateToProps(state){
    return{
         count: state.count ,maxCount:state.maxCount, message:state.message
    };
}
export default connect(mapStateToProps)(App);
// export default App;

// ()=>{
//     this.state.count<=0?this.setState({
//              count: 0
//                 }):this.setState({
//              count: this.state.count - 1
//                 });
// }