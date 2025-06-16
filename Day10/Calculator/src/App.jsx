import { useState } from 'react';
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer.jsx';
import Display from './components/Display.jsx';

function App() {
  const [displayNum, setdisplayNum] = useState("0");
  const handleClick = (button)=>{
    console.log(button);
    if(button === 'C'){
        setdisplayNum('0');
    }else if(displayNum === '0'){
      setdisplayNum(button);
    }else if(button === '='){
      const result = eval(displayNum);
      setdisplayNum(result);
    }else{
        setdisplayNum(displayNum+button);
    }
  }
  return (
  <div className={styles.calculator}>
    <Display displayNum={displayNum}/>
    <ButtonsContainer handleClick={handleClick}/>
  </div>);
}

export default App
