import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
    const [counter, setcounter] = React.useState(0);
    return (
        <div >
            <h1> This is counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={()=> setcounter(counter+1)}>Increment</button>
            <button id="decrement-btn" onClick={()=>               
                counter<=0?0:setcounter(counter-1)}>Decrement</button>
            
        </div>

    )
}
export default App;