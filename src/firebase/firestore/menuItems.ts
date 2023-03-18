import { addDoc, collection, getDocs } from 'firebase/firestore'
import { MenuItem } from '../../types/menuItem'
import { db } from '../config'

const menuItemCollection = collection(db, 'menu-items')

export const fetchMenuItems = (): Promise<MenuItem[]> => {
  return new Promise((resolve, reject) => {
    getDocs(menuItemCollection)
      .then((snapshot) => {
        const menuItems: MenuItem[] = snapshot.docs.map((doc) => {
          const data = doc.data()
          const menuItem: MenuItem = {
            title: data.title || '',
            body: data.body || '',
          }
          return menuItem
        })
        resolve(menuItems)
      })
      .catch(reject)
  })
}
