import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwin2CXqyc7vLay41RxBkhATjxoOwN9jw",
  authDomain: "fb-clone-187d9.firebaseapp.com",
  projectId: "fb-clone-187d9",
  storageBucket: "fb-clone-187d9.appspot.com",
  messagingSenderId: "655402898909",
  appId: "1:655402898909:web:bcdd22966498aef35c5234"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db