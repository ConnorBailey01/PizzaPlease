import React from 'react'
import { MenuItemType } from '../types/menuItem'

type MenuItemProps = {
  menuItem: MenuItemType
}
const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <li>
      <h3>{menuItem.title}</h3>
      <p>{menuItem.body}</p>
      <p>{menuItem.price}</p>
    </li>
  )
}

export default MenuItem
