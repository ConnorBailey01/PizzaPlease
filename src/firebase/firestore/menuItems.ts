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
          console.log(data)
          const menuItem: MenuItemType = {
            title: data.title || '',
            body: data.body || '',
            price: data.price || -1,
          }
          return menuItem
        })
        resolve(menuItems)
      })
      .catch(reject)
  })
}
