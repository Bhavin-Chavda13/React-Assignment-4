import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' //<- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import "firebase/auth";
import "firebase/firestore";

import {ReactReduxFirebaseProvider,firebaseReducer} from 'react-redux-firebase'
import {composeWithDevTools} from 'redux-devtools-extension';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' //<- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyC_3P0k2c5TxS7R1V-C8Mg_iMXiRn4b778",
    authDomain: "student-base-29056.firebaseapp.com",
    databaseURL: "https://student-base-29056.firebaseio.com",
    projectId: "student-base-29056",
    storageBucket: "student-base-29056.appspot.com",
    messagingSenderId: "848025263899",
    appId: "1:848025263899:web:7f744ece42d0ed80bcbdbe",
    measurementId: "G-4DPBGGT1T0"
}
 
// react-redux-firebase config
export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,composeWithDevTools)
 
 export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default store;