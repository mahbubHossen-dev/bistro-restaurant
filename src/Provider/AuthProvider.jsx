import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            setUser(currUser)
            if(currUser){
                const userInfo = {
                    email: currUser.email,
                    
                }
                
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    localStorage.setItem('access-token', res.data.token)
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return () => {
            return unsubscribe
        }
    }, [])

    const logoutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;