import React, {Component} from "react"

const withData = getData => View => {
    return class extends Component {
        state = {
            items: []
        }

        componentDidMount() {
            getData()
                .then(res => this.setState({items: res.data}))


        }


        render() {
            return <View {...this.props} items={this.state.items}/>
        }
    }
}

export default withData