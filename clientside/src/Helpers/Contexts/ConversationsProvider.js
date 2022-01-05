import React, { useContext } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'
const ConversationsContext = React.createContext()
export const useConversations = () => {
    return useContext(ConversationsContext)
}
const ConversationsProvider = ({ children }) => {
    const [conversations,setConversations] = useLocalStorage('conversations', [])

    const createConversation = (recipients) => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages:[]}]
        })
    }
    return (
        <ConversationsContext.Provider value={{ conversations,createConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
}

export default ConversationsProvider
