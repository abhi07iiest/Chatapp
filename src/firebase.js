import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    
        apiKey: "AIzaSyAv25kvNmhsHptDM7FKr0fGg0ISqmke4v4",
        authDomain: "chatify-d26ad.firebaseapp.com",
        projectId: "chatify-d26ad",
        storageBucket: "chatify-d26ad.appspot.com",
        messagingSenderId: "775063683019",
        appId: "1:775063683019:web:7b9cb6796f3fa3f0e2804e"
      
}).auth();