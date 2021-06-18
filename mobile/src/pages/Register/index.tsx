import React, {useState} from 'react'
import { Container, Title, Label, BackBox } from './styles'
import Input from '../../components/Input'
import PrimaryButton from '../../components/PrimaryButton'
import ModalView from '../../components/ModalView/Index'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';


const Register: React.FC = () => {
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    const handleRegister = async() => {
        setErrorMessage('')
        setSuccessMessage('')
        if (!email ||!name || !password) {
            setIsOpen(true)
            setErrorMessage('Fill all fields')
            return
        }
    
        const data = {
            name, 
            email, 
            password
        }

        try {
            const response = await api.post('users', data)
            setSuccessMessage(response.data.message)
            setIsOpen(true)
            setName('')
            setPassword('')
            setEmail('')
        } catch (error) {
            setErrorMessage(error.response.data.message)
            setIsOpen(true)        
        }
    }
    return (
        <Container>
            <BackBox>
                <AntDesign name="arrowleft" size={24} color="black"  onPress={() => navigation.goBack()}/>
            </BackBox>
            <Title>Register</Title>
            <Label>Name</Label>
            <Input value={name} onChangeText={name => setName(name)} multline={false}/>
            <Label>Email</Label>
            <Input value={email} onChangeText={email => setEmail(email)} multline={false}/>
            <Label>Password</Label>
            <Input value={password} onChangeText={password => setPassword(password)} multline={false} secureTextEntry={true}/> 
            <PrimaryButton title="Create Account" onPress={handleRegister}/>
            { isOpen &&
                    <ModalView 
                        isOpen={isOpen} 
                        setIsOpen={setIsOpen} 
                        title={errorMessage ? errorMessage : successMessage}>
                            {
                                successMessage ? <Ionicons name="checkmark-circle-sharp" size={80} color="green" onPress={() => setIsOpen(false)} />:
                                <Ionicons name="md-close-circle-sharp" size={80} color="red" onPress={() => setIsOpen(false)} />
                            }    
                    </ModalView>
                }
        </Container>
    )
}

export default Register
