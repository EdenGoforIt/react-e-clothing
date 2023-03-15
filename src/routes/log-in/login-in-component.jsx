import {
  createUserDocumentFromAuth,
  SignInWithGooglePopup,
} from '../../utils/firebase/firebase-utils';
import React from 'react';

const LogIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      Log In
      <button onClick={logGoogleUser}>LogIn with Google</button>
    </div>
  );
};

export default LogIn;
