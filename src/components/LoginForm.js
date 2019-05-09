import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base'
import firebase from 'firebase'


class LoginForm extends Component {
  state = {
      email: '',
      password: '',
      authFail: '',
      loading: false
  };

  logIn = () => {
      const { email, password } = this.state
      this.setState({authFail: '', loading: true})

      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(this.onLoginSuccess)
                  .catch(this.onLoginFail)
          })
  }

  onLoginSuccess = () => {
      this.setState({authFail: '', loading: false, email: '', password: ''})
  }

  onLoginFail = () => {
      this.setState({authFail: 'Authentication Failed', loading: false})
  }

  renderBtn = () => {
      if (this.state.loading) {
          return <Spinner />
      }

      return (
          <Button block success rounded
                  style={{marginTop: 30}}
                  onPress={this.logIn}
          >
              <Text>Log in</Text>
          </Button>
      )
  }

  render() {
    return (
        <Container>
            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input
                            placeholder= 'user@email.com'
                            autoCorrect={ false }
                            value={ this.state.email }
                            onChangeText={ email => this.setState({email}) }
                        />
                    </Item>

                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry
                            placeholder= 'password'
                            autoCorrect={ false }
                            value={ this.state.password }
                            onChangeText={ password => this.setState({password}) }
                        />
                    </Item>

                    <Text>
                        {this.state.authFail}
                    </Text>

                    {this.renderBtn()}

                </Form>
            </Content>
        </Container>
    )
  }
}

export default LoginForm