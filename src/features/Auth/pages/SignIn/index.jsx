import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/photos',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login'],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account',
      },
    },
  ],
};

function SignIn() {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social account</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default SignIn;
