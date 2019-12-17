import React from 'react';
import styled from 'styled-components';

const TileStyle = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
`

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { click } = this.props;
    click();
  }

  render() {
    const { tileStatus } = this.props;
    return (
      <TileStyle onClick={this.onClick}>
        {tileStatus === 'X' ? 'X' : tileStatus === 'Y' ? 'Y' : null}
      </TileStyle>
    )
  }
}
export default Tile;