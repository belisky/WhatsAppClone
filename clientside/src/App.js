import { useState } from 'react'
import Login from './Components/Login'
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
   const [id,setId]=useLocalStorage('id')
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
