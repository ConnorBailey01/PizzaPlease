import React from 'react'
import MenuItem from './components/MenuItem'
import { appitizerItems, entreeItems } from './fakeData/menuItems'
import { addData } from './firebase/firestore/tester'

const App = () => {
  addData('stringify')
  const menuItems = [...entreeItems, ...appitizerItems]
  return (
    <>
      <h1>Pizza Please</h1>
      <ol>
        {menuItems.map((menuItem) => {
          return <MenuItem title={menuItem.title} body={menuItem.body} />
        })}
      </ol>
    </>
  )
}
export default App
