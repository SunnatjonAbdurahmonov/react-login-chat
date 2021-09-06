import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
// import firebase from "";
import "firebase/firestore";
import "firebase/auth"
import firebase from 'firebase/compat'

firebase.initializeApp({
  apiKey: "AIzaSyDCDBUg1ghQ3MpJQEpXhWIJ7H5UnDeigoA",
  authDomain: "react-login-chat.firebaseapp.com",
  projectId: "react-login-chat",
  storageBucket: "react-login-chat.appspot.com",
  messagingSenderId: "955663512254",
  appId: "1:955663512254:web:dc0dd0e92d858efa57e4ef",
  measurementId: "G-L27RFR6V8X",
});



export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{firestore, auth, firebase}}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
