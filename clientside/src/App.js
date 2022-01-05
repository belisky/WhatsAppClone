 import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )
  return (
    <>
      {id ?  dashboard:
     <Login onIdSubmit={setId} />
      }
   
    </>
  );
}

export default App;
