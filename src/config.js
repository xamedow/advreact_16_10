import firebase from 'firebase'

export const appName = 'advreact-1610-8d439'

firebase.initializeApp({
    apiKey: "AIzaSyDkx19f92qbT84fwaDMgZzi-wfglxtLk60",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "868897417787"
})