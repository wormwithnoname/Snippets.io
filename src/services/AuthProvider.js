import React, { useContext, useState, useEffect } from 'react';
import { auth, db, googleProvider } from './FirebaseService';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function emailLogin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signup(email, password, uname) {
    return auth.createUserWithEmailAndPassword(email, password).then((userData) => {
      emailLogin(email, password).then(() => {
        db.collection('users').doc(userData.user.uid).set({
          username: uname,
          bookmarks: [],
          folderNames: [],
        });
      });
    });
  }

  async function googleLogin() {
    return auth.signInWithPopup(googleProvider);
  }

  async function logout() {
    return auth.signOut();
  }

  async function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  async function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  async function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    emailLogin,
    googleLogin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider>;
}
