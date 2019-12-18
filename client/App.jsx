import React from 'react';
import Board from './components/Board.jsx';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -50px;
`
const StateStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 2em;
  color: palevioletred;
  text-shadow: -1px 0 #FFA6C9, 0 1px #FFA6C9, 1px 0 #FFA6C9, 0 -1px #FFA6C9;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 200px;
  height: 150px;
`
const Main = styled.div`
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 25px;
  width: 200px; 
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
      <Main>
        <StateStyle>
        {winState === true ? `${currPlayer === 'X' ? 'Y' : 'X'} Won!` : winState === 'tie' ? 'You Tied!' : `Current Player: ${currPlayer}`}
        </StateStyle>
        <Panel>
          <Board winCondition={this.winCondition} winState={winState} changeCurrPlayer={this.changeCurrPlayer} currPlayer={currPlayer}/>
        </Panel>
      </Main>
    )
  }
}
export default App;