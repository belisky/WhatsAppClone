 import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import   ContactsProvider  from './Helpers/Contexts/ContactsProvider'
import  ConversationsProvider  from './Helpers/Contexts/ConversationsProvider'
function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
      <Dashboard id={id}/>
      </ConversationsProvider>
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
