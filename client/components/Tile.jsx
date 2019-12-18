import React from 'react';
import styled from 'styled-components';

const TileStyle = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid palevioletred;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  background-color: #FFA6C9;
  color: white;
  font-weight: bold;
  font-size: 3em;
`

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { tileClick, id} = this.props;
    tileClick(id);
  }

  render() {
    const { tileStatus } = this.props;
    return (
      <TileStyle onClick={this.onClick}>
        {tileStatus === 0 ? null : tileStatus}
      </TileStyle>
    )
  }
}
export default Tile;