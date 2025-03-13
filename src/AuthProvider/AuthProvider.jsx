import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loading from "../Components/Loading/Loading";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  //   User Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google Signin
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   User SignUp
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Logout
  const logOut = () => {
    return signOut(auth);
  };

  //   User Profile Update
  const profileUpdate = (updatedUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedUser);
  };

  //   User Observer function
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      console.log("Current User -->", currUser);
      const userInfo = { email: currUser?.email };
      if (currUser) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    userLogin,
    googleSignIn,
    createUser,
    logOut,
    profileUpdate,
  };
  if (loading) return <Loading></Loading>;
  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
