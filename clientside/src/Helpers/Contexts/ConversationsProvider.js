import React, { useContext, useState } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'
const ConversationsContext = React.createContext()
export const useConversations = () => {
    return useContext(ConversationsContext)
}
const ConversationsProvider = ({ children }) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const { contacts } = useContacts()
    const createConversation = (recipients) => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages:[]}]
        })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return { id: recipient, name }
        })
        const selected = index === selectedConversationIndex
        return { ...conversation, recipients, selected }
    })
    const value = {
        conversations: formattedConversations,
        selectedConversation:formattedConversations[selectedConversationIndex],
        selectConversationIndex: setSelectedConversationIndex,
        createConversation
    }
    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}

export default ConversationsProvider
