import React,{useContext,useState,useEffect} from 'react'
import {io} from 'socket.io-client'


const SocketContext=React.createContext()
export const useSocket = () => {
    return useContext(SocketContext);
}
export const SocketProvider = ({id, children}) => {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io("/",
            { query: { id } }
        );
        console.log('newSocket=>'+newSocket)
        setSocket(newSocket);     
        return ()=>newSocket.close()
    }, [id ])
    console.log(socket)
    return (
        <SocketContext.Provider value={socket}>
            {children}
       </SocketContext.Provider>

    )
}
 
