import { VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaGoogle, FaLock } from 'react-icons/fa'
import StyledHeader from '../components/StyledHeader'
import useAuth from '../hooks/useAuth'
import firebase from 'firebase'

function Login() {
    const { isSignedIn } = useAuth()

    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    const signInWithGithub = () => {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    return (
        <React.Fragment>
            <VStack
                w="100%"
                maxW={{ base: '100vw', sm: '40vw', lg: '25vw', xl: '20vw' }} >
                <VStack>
                    {
                        !isSignedIn ? (
                            <React.Fragment>
                                <StyledHeader>Login</StyledHeader>
                                <Button w="100%" leftIcon={<FaGoogle />} onClick={signInWithGoogle}>
                                    Sign In With Google
                                </Button>
                                <Button w="100%" leftIcon={<FaGithub />} onClick={signInWithGithub}>
                                    Sign In With GitHub
                                </Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <StyledHeader>Logged In</StyledHeader>
                                <Button w="100%" leftIcon={<FaLock />} onClick={() => firebase.auth().signOut()}>
                                    Sign Out
                                </Button>
                            </React.Fragment>
                        )
                    }

                </VStack>
            </VStack>
        </React.Fragment>
    )
}

export default Login
