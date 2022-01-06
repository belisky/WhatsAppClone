import React ,{useState} from 'react'
import {Form, InputGroup,Button} from 'react-bootstrap'
import { useConversations } from '../Helpers/Contexts/ConversationsProvider'
const OpenConversation = () => {
    const {sendMessage,selectedConversation}=useConversations()
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r => r.id),
            text
        )
        setText('')
    }
    return (
        <div className='d-flex flex-column flex-grow-1'>
            <div className="flex-grow-1 overflow-auto">
ok
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <InputGroup>
                        <Form.Control as='textarea' required value={text}
                            onChange={e => setText(e.target.value)}
                            style={{ height: '75px', resize: 'none' }} />
                     
                            <Button type='submit'>Send</Button>
                      
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default OpenConversation
