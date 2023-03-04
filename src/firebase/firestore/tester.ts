import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config'

export const addData = (value: string) => {
  addDoc(collection(db, 'test'), {
    test: value,
  })
}
