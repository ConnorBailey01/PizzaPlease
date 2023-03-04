import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBkMxuXP5rd1oVh6ptOGz9MwSBFPCZaVbs',
  authDomain: 'pizza-please-13931.firebaseapp.com',
  projectId: 'pizza-please-13931',
  storageBucket: 'pizza-please-13931.appspot.com',
  messagingSenderId: '604356310279',
  appId: '1:604356310279:web:f3c56799c539e2337641a2',
  measurementId: 'G-LNN5FYB3JL',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
