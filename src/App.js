import {useState} from 'react';
import './App.css';

function App() {
  const [val,setVal] = useState(0)

  const onChange = (op) =>{
    if (op===1){
      setVal(val+1)
    }
    else{
      setVal(val-1)
    }
  }

 
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={()=>onChange(1)}>+</button>
      <h2>{val}</h2>
      <button onClick={()=>onChange(0)}>-</button>
    </div>
  );
}

export default App;
