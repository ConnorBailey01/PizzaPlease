import React from 'react'
import { MenuItemType } from '../types/menuItem'
import { styled } from 'styled-components'

const Item = styled.li``

type MenuItemProps = {
  menuItem: MenuItemType
}
const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <Item>
      <h3>{menuItem.title}</h3>
      <p className="bobby">{menuItem.body}</p>
      <p>{menuItem.price}</p>
    </Item>
  )
}

export default MenuItem
