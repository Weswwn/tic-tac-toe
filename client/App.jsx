import React from 'react';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPlayer: null,
      winState: false
    }
    this.changeCurrPlayer = this.changeCurrPlayer.bind(this);
    this.winCondition = this.winCondition.bind(this);
  }

  componentDidMount() {
    let curr = Math.round(Math.random())
    this.setState({
      currPlayer: curr === 0 ? 'X' : 'Y'
    })
  }

  changeCurrPlayer() {
    if (this.state.currPlayer === 'X') {
      this.setState({
        currPlayer: 'Y'
      })
    } else {
      this.setState({
        currPlayer: 'X'
      })
    }
  }

  winCondition(checkTie) {
    if (checkTie) {
      this.setState({
        winState: 'tie'
      })
    } else {
      this.setState(prevState => ({
        winState: !prevState.winState
      }))
    }
  }

  render() {
    const { currPlayer, winState } = this.state;
    return (
      <div>
        <div>
          {winState === true ? `${currPlayer === 'X' ? 'Y' : 'X'} Won!` : winState === 'tie' ? 'YOU TIED!!' : null}
        </div>
        Current Player: {currPlayer}
        <Board winCondition={this.winCondition} winState={winState} changeCurrPlayer={this.changeCurrPlayer} currPlayer={currPlayer}/>
      </div>
    )
  }
}
export default App;