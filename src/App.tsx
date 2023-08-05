import React, { useEffect, useState } from 'react'
import MenuItem from './components/MenuItem'
import { fetchMenuItems } from './firebase/firestore/menuItems'
import { MenuItemType } from './types/menuItem'

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  useEffect(() => {
    fetchMenuItems().then((firestoreMenuItems) => {
      setMenuItems(firestoreMenuItems)
    })
  }, [])

  return (
    <>
      <h1>Pizza Please</h1>
      <ol>
        {menuItems.map((menuItem) => {
          return <MenuItem menuItem={menuItem} />
        })}
      </ol>
    </>
  )
}
export default App
