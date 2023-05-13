import { addDoc, collection, getDocs } from 'firebase/firestore'
import { MenuItemType } from '../../types/menuItem'
import { db } from '../config'

const menuItemCollection = collection(db, 'menu-items')

export const fetchMenuItems = (): Promise<MenuItemType[]> => {
  return new Promise((resolve, reject) => {
    getDocs(menuItemCollection)
      .then((snapshot) => {
        const menuItems: MenuItemType[] = snapshot.docs.map((doc) => {
          const data = doc.data()
          const menuItem: MenuItemType = {
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
