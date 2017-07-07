import React from 'react'
import ReactDOM from 'react-dom'
import Gql from './graphql'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      data: null,
    }
    this.getData(this.props.data.getAll())
  }
  getData(rootQuery) {
    rootQuery.then(data => {
      this.setState({ data: data })
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world </h1>
        <List ta={this.state.data} />
      </div>
    )
  }
}
class List extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.ta.map(item => <ListItem key={item.name} value={item} />)} */}
      </div>
    )
  }
}

function ListItem(props) {
  return (
    <li>
      {' '}{this.props.value.name}{' '}
    </li>
  )
}
const model = new Gql()
ReactDOM.render(<Hello data={model} />, document.getElementById('root'))
