import React from 'react';
import styled from 'styled-components';

const TileStyle = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
`

class Tile extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { click, id} = this.props;
    click(id);
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