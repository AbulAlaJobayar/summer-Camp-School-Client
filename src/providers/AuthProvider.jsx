import { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 
  updateProfile,
  signInWithPopup,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'

import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,user => {
      setUser(user)
      if(user){
        axios.post('https://assinment-12-server-ten.vercel.app/jwt', {email: user.email}).then(data =>{
          localStorage.setItem('access-token', data.data.token) 
          setLoading(false)
        })

      }
      else{
        localStorage.removeItem('access-token')
    }
      
    });
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
    resetPassword,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
