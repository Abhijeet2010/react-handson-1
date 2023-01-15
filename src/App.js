// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ClassDiv from './ClassDiv';
import FunctionDiv from './FunctionDiv';

function App() {
  const [fnDiv, setFnDiv] = useState(false)
  const [classDiv, setClassDiv] =useState(false)

  const showDiv =()=>{
      setFnDiv(!fnDiv) 
  }

  const classShowDiv =()=>{
    setClassDiv(!classDiv)
  }
  return (
    <div className="app">
    <h2 style={{color:"red", textAlign: "center"}}>Styled Using Function and Class Component</h2>
    <div className="app__btn">
      <button className="btn" onClick={showDiv}>Click Me I Am Function Based</button>
      <button className="btn" onClick={classShowDiv}>Click Me I Am class Based</button>
    </div>

    <div className='showbtnDiv'>
    {fnDiv && <FunctionDiv/> }
    {classDiv && <ClassDiv/>}
    </div>
    
      
    </div>
  );
}

export default App;
