import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { auth } from './../firebase/firebase.conifg';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider()
  const axiosPublic = useAxiosPublic()


  // authentication function make 
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // create a new user 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // user log in with popup option
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const LogOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }
  const userUpdate = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }


  //   user action set state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // console.log('current user', currentUser);

      if (currentUser) {
        // get token and store client
        const user = { email: currentUser?.email }
        const { data } = await axiosPublic.post('/jwt', user)
        if(data){
          // set toke local storage
          localStorage.setItem('token' , data )
        }
      }else{
        // remove token localStorage
        localStorage.removeItem('token')
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    createUser,
    googleLogin,
    LogOutUser,
    userLogin,
    userUpdate,
    loading,
    user,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider

