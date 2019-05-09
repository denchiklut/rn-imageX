import React from 'react'
import { List } from 'native-base'

const ItemList = ({items, children}) => (
    <List>
        {items.map(item => children(item))}
    </List>
)

export default ItemList