import firebase from 'firebase'

export const appName = 'advreact-1610'

firebase.initializeApp({
    apiKey: "AIzaSyB31xpTtp4Jln_hb2kAbE4PGf6Mi8EgLyA",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "397157634637"
})