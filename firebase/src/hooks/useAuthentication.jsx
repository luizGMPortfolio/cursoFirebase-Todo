import { db } from '../firebase/config'


import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from 'firebase/auth'


import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    
    const auth = getAuth()
    auth.languageCode = 'pt-BR'

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracters.';
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'E-mail já cadastrado.';
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
            }

            setLoading(false)
            setError(systemErrorMessage)

        }

    }
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth);
    }
    const Verifyemail = async () => {
        checkIfIsCancelled();

        try {
            const res = await sendEmailVerification(auth.currentUser)
            console.log(res)
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
        }

    }
    const ResetPassword = async (email) => {
        checkIfIsCancelled();

        console.log(email)
        try {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log('password send')
                })
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
        }
    }
    const login = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
            let systemErrorMessage;

            if (error.message.includes("auth/invalid-credential")) {
                systemErrorMessage = 'Email ou senha incorretos';
            }
            else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    }
    const GoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            const result = await signInWithPopup(auth, provider);

            console.log(result)
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
        }


    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        login,
        GoogleLogin,
        logout,
        Verifyemail,
        ResetPassword,
        error,
        loading
    };
}

