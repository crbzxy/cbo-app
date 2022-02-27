

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const signup = (email, password, name, lastName, empresa) =>
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      lastName,
      empresa
    );

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);

  }

  const logout = () => signOut(auth)
  useEffect(() => {
    console.log("auth provider loader")
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })
  }, [])

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>{children}</authContext.Provider>
  );
}
