 import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import useLocalStorage from './Hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import   ContactsProvider  from './Helpers/Contexts/ContactsProvider'
import ConversationsProvider from './Helpers/Contexts/ConversationsProvider'
import { SocketProvider } from './Helpers/Contexts/SocketProvider'
function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <SocketProvider id={id}>
    <ContactsProvider>
      <ConversationsProvider id={id}>
      <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
    </SocketProvider>
  )
  return (
    <>
      {id ?  dashboard:
      (<Login onIdSubmit={setId} />)
      }
   
    </>
  );
}

export default App;
