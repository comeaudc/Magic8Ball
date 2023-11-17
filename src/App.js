import './App.css';
import responses from './models/responses';
import { useEffect, useState } from 'react';
import Reply from './components/Reply';
import TryAgain from './components/TryAgain';

function App() {
  //UseState Hooks
  const [reply, setReply] = useState(null)
  const [counter, setCounter] = useState(0)

  //UseEffect Hook
  useEffect(()=>{
   let rand = Math.round(Math.random()*responses.length)
   setReply(responses[rand])
  }, [counter])

  return (
    <div className='App'>
      <h1>Ask Whatever You Like</h1>
      <Reply response={reply} />
      <TryAgain counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
