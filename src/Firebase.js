import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAY5i2mGBPy4oWMozOVyH41X-bodaXDFDo',

  authDomain: "bjornsbadbank-demo.firebaseapp.com",

  projectId: "bjornsbadbank-demo",

  storageBucket: "bjornsbadbank-demo.appspot.com",

  messagingSenderId: "1000384994251",

  appId: "1:1000384994251:web:2780206719857782b6344e"

})


export const auth = app.auth()
export default app