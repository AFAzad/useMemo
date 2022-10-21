// import logo from './logo.svg';
import { useState,useMemo} from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0);
  const [data,setData]= useState(10);
  const mutliCountMemo =useMemo(function multiCount()
  {
    console.log("multiCountMemo")
    return count*3
  },[count])
  return (
    <div className="App">
      <h1>UseMemo Hook in React </h1>
      <h2>Count: {count}</h2> <br />
      <h2>Data: {data}</h2>
      <h2>Mutli Count: {mutliCountMemo}</h2>
      <button onClick={()=>setCount(count+1)} className="count"> Count Update</button>
      <button onClick={()=>setData(data*3)} className="data"> Data Update</button>
    </div>
  );
}

export default App;
