import React, {Component} from 'react'
import {Button, Container, Content, Spinner, Text} from 'native-base'
import firebase from 'firebase'
import { HeaderBar } from "./common"
import { AlbumList } from "./AlbumList"
import {firebaseConfig} from "../consts"
import LoginForm from "./LoginForm";

class App extends Component {

    state = {
        loggedIn: null
    }

    componentDidMount() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Content>
                        <Button
                            block success rounded
                            onPress={() => firebase.auth().signOut()}
                            style={{marginTop: 15, marginBottom: 15}}
                        >
                            <Text>Log out</Text>
                        </Button>

                        <AlbumList />
                    </Content>

                )
            case false:
                return <LoginForm />

            default:
                return <Spinner />
        }
    }

    render() {
        return (
            <Container>
                <HeaderBar title="ImageX"/>

                {this.renderContent()}
            </Container>
        )
      }
}

export default App