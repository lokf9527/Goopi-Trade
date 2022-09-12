import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDylOJK0OZlu_Fn1U2vBLgwRmcI9mvAcv4",
  authDomain: "goopitrade.firebaseapp.com",
  projectId: "goopitrade",
  storageBucket: "goopitrade.appspot.com",
  messagingSenderId: "65466195289",
  appId: "1:65466195289:web:ae8e4513881ebcf66dc048",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
