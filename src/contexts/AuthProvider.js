import React, { useEffect, useState } from 'react';

import { defaultPhoto } from 'constants/firestore';
import { auth, googleProvider } from 'services/FirebaseService';
import { createUser } from 'model/UserModel';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function emailLogin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function googleLogin() {
    return auth.signInWithPopup(googleProvider).then(async (user) => {
      if (user.additionalUserInfo.isNewUser) {
        const userObj = {
          uid: user.user.uid,
          username: user.user.displayName,
        };
        await createUser({ ...userObj });
      }
    });
  }

  async function signup(email, password, uname) {
    return auth.createUserWithEmailAndPassword(email, password).then(async (userData) => {
      await userData.user.updateProfile({
        displayName: uname,
        photoURL: defaultPhoto,
      });
      emailLogin(email, password).then(async (user) => {
        const userObj = {
          uid: user.user.uid,
          username: user.user.displayName,
        };
        await createUser({ ...userObj });
      });
    });
  }

  async function logout() {
    return auth.signOut();
  }

  async function checkUser(email) {
    return auth.fetchSignInMethodsForEmail(email);
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

  const authFunctions = {
    checkUser,
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
