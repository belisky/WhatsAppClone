import React,{useContext,useState,useEffect} from 'react'

const SocketContext=React.createContext()

export const useSocket = () => {
    return useContext(SocketContext)
}

const SocketProvider = ({ children, id }) => {
    const [socket, setSocket] = useState()
    useEffect(() => {
         const newSocket=io('http://localhost:5000',
         ())
    }, [input])
    return (
        <SocketContext.Provider value={socket}>
            {children}
       </SocketContext.Provider>

    )
}

export default SocketProvider
