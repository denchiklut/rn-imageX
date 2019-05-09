import React from 'react'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

const HeaderBar = ({title}) => {
  return (
      <Header>
          <Left>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Left>
          <Body>
              <Title>{title}</Title>
          </Body>
          <Right />
      </Header>
  )
}

export {HeaderBar}