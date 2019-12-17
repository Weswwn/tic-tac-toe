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
  }

  tileClick() {
    
  }

  render() {
    const { board } = this.state;

    return (
      <BoardStyle>
        <div className="board-row-1">
          {board.slice(0,3).map((tile, i) => <Tile click={this.tileClick} tileStatus={tile} key={i} />)}
        </div>
        <div className="board-row-2">
          {board.slice(2,5).map((tile, i) => <Tile click={this.tileClick} tileStatus={tile} key={i} />)} 
        </div>
        <div className="board-row-3">
          {board.slice(4,7).map((tile, i) => <Tile click={this.tileClick} tileStatus={tile} key={i} />)}
        </div>
      </BoardStyle>
    )
  }
}
export default Board;