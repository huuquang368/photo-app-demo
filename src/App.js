import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';

// lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API, // web API key in firebase
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // domain in firebase
  // ...
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function App() {
  // const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params); // => ?_limit=10&_page=1
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
    };
    fetchProductList();
  }, []);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async user => {
        if (!user) {
          console.log('User is not logged in');
          // user logout
          return;
        }
        console.log('Login user:', user.displayName);
        const token = await user.getIdToken();
        console.log('Login user:', token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>...Loading</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
