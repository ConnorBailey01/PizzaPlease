import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div``

const Image = styled.img`
  width: 38rem;
  margin: auto;
  display: block;
  margin-top: 3rem;
`

const MainLogo = () => {
  return <Image src="images/logo.png" />
}

export default MainLogo
