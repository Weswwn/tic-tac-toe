import React from 'react';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPlayer: null
    }
  }

  componentDidMount() {
    let curr = Math.round(Math.random())
    this.setState({
      currPlayer: curr === 0 ? 'X' : 'Y'
    })
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}
export default App;