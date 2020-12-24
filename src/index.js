import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './context/firebase';

//web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFG_aPFY6ZpU8OXO4QAqfHowj3R_4s54M",
    authDomain: "uni-admin-e7188.firebaseapp.com",
    projectId: "uni-admin-e7188",
    storageBucket: "uni-admin-e7188.appspot.com",
    messagingSenderId: "972566770333",
    appId: "1:972566770333:web:0da5ecf2d0b07e7c7e1a74"
  };

  // Initialize Firebase
  window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
