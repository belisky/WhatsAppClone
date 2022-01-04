import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [id, setId] = useState('')
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
