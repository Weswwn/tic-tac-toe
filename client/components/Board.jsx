import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const BoardStyle = styled.div`
  display: flex;
  flex-direction: row;
`
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [0,0,0,0,0,0,0,0,0]
    }
    this.tileClick = this.tileClick.bind(this);
    this.checkWinCondition = this.checkWinCondition.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  checkWinCondition() {
    console.log('check win');
    const { winCondition } = this.props;
    const { board } = this.state;
    if ((board[0] === board[1] && board[0] === board[2] && board[0] !== 0) || 
      (board[3] === board[4] && board[3] === board[5] && board[3] !== 0) || 
      (board[6] === board[7] && board[6] === board[8] && board[6] !== 0)) {
        winCondition();
    }

    if ((board[0] === board[3] && board[3] === board[6] && board[0] !== 0) ||
      (board[1] === board[4] && board[4] === board[7]&& board[1] !== 0) ||
      (board[2] === board[5] && board[5] === board[8] && board[2] !== 0)) {
        // At least one horizontal is good
        winCondition();
    }

    if ((board[0] === board[4] && board[4] === board[8] && board[0] !== 0) ||
      (board[2] === board[4] && board[4] === board[6] && board[2] !== 0)) {
       // At least one diagonal is good
       winCondition();
    }
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== 0) {
        count++;
      }
    }
    if (count === 9) {
      winCondition('tie');
    }
  }

  tileClick(index) {
    const { changeCurrPlayer, winState } = this.props;
    let temp = this.state.board;
    if (temp[index] === 0 && winState === false) {
      temp[index] = this.props.currPlayer;
      this.setState({
        board: temp
      })
      this.checkWinCondition();
      changeCurrPlayer();
    }
  }

  resetBoard() {
    const { winCondition } = this.props;
    this.setState({
      board: [0,0,0,0,0,0,0,0,0]
    })
    winCondition();
  }

  render() {
    const { board } = this.state;
    const { winState } = this.props;
    let count = 0;
    return (
      <div>
        <BoardStyle>
          <div className="board-column-1">
            {board.slice(0,3).map((tile) => <Tile id={count++} click={this.tileClick} tileStatus={tile} key={count} />)}
          </div>
          <div className="board-column-2">
            {board.slice(3,6).map((tile) => <Tile id={count++} click={this.tileClick} tileStatus={tile} key={count} />)} 
          </div>
          <div className="board-column-3">
            {board.slice(6,9).map((tile) => <Tile id={count++} click={this.tileClick} tileStatus={tile} key={count} />)}
          </div>
        </BoardStyle>
        {winState ? <button onClick={this.resetBoard}>Play Again!</button> : winState === 'tie' ? 
        <button onClick={this.resetBoard}>Play Again!</button> : null}
      </div>
    )
  }
}
export default Board;