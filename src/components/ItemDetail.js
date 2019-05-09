import React  from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

const ItemDetail= ({item}) => {
    const {title, artist, thumbnail_image, image, url} = item

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: thumbnail_image}} />
                    <Body>
                        <Text>{title}</Text>
                        <Text note>{artist}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent >
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Right>
                    <Button rounded>
                        <Icon type="FontAwesome" name="shopping-cart"  />
                        <Text>Buy</Text>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    );
}

export default ItemDetail