import React from 'react';
import Board from './components/Board.jsx';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  flex-direction: row;
`

const ScoreBoard = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPlayer: null,
      winState: false,
      player1: 0,
      player2: 0
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
        winState: !prevState.winState,
      }))
    }
  }

  render() {
    const { currPlayer, winState} = this.state;
    return (
      <div>

        Current Player: {currPlayer}
        <Panel>
        <Board winCondition={this.winCondition} winState={winState} changeCurrPlayer={this.changeCurrPlayer} currPlayer={currPlayer}/>
        <ScoreBoard>
          {winState === true ? `${currPlayer === 'X' ? 'Y' : 'X'} Won!` : winState === 'tie' ? 'YOU TIED!!' : null}
        </ScoreBoard>
        </Panel>
      </div>
    )
  }
}
export default App;