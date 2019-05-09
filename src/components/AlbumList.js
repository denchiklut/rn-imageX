import React from 'react'
import ItemList from "./common/ItemList"
import withData from './hoc/withData'
import { getAlbums } from "../Api/unsplash"
import ItemDetail from "./ItemDetail"
import withChildren from "./hoc/withChildren"
import { compose } from "./hoc/compose"

const renderMode = item => <ItemDetail key={item.title} item={item} />

const AlbumList = compose(withData(getAlbums), withChildren(renderMode))(ItemList)

export {AlbumList}