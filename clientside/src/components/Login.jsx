import React,{useRef} from 'react'
import { Container,Form,Button } from 'react-bootstrap'

const Login = ({onIdSubmit}) => {
    const idRef = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
        
    }
    return (
        <Container className='align-items-center d-flex' style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required/>
                </Form.Group>
                <Button type='submit'>Login</Button>
                <Button  variant='secondary'>Create a New id</Button>
            </Form>
        </Container>
    )
}

export default Login
