import React from 'react'

type MenuItemProps = {
  title: string
  body: string
}
const MenuItem = ({ title, body }: MenuItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  )
}

export default MenuItem
