import { SignInWithGooglePopup } from '../../utils/firebase/firebase-utils';
import React from 'react';
const LogIn = () => {
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    console.log(response);
  };
  return <div>Sign in page</div>;
};

export default LogIn;
