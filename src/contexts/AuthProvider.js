import React, { useState, useEffect } from 'react';
import { auth, db, googleProvider } from 'services/FirebaseService';

export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function emailLogin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signup(email, password, uname) {
    return auth.createUserWithEmailAndPassword(email, password).then((userData) => {
      emailLogin(email, password).then(async () => {
        await db.collection('users').doc(userData.user.uid).set({
          username: uname,
          bookmarks: [],
          folderNames: [],
        });
      });
    });
  }

  async function googleLogin() {
    return auth.signInWithPopup(googleProvider).then(async (user) => {
      if (user.additionalUserInfo.isNewUser) {
        await db.collection('users').doc(user.user.uid).set({
          username: user.user.displayName,
          bookmarks: [],
          folderNames: [],
        });
      }
    });
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

    return () => {
      unsubscribe();
    };
  }, []);

  const authFunctions = {
    currentUser,
    emailLogin,
    googleLogin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={authFunctions}> {!loading && children} </AuthContext.Provider>
  );
}

export default AuthProvider;
