import { useState } from 'react'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
   const [id,setId]=useLocalStorage('id')
  return (
    <>
      {id ? <Dashboard id={id}/>:
      <Login onIdSubmit={setId} />
    }
    </>
  );
}

export default App;
