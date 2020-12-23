import React from 'react';
import './Board.css';
import Tile from '../atoms/Tile';

class Board extends React.Component {
    handleRefresh= ()=> {
        this.props.onRefresh();
    }

    renderTiles = ()=> {
        return this.props.tiles.map(tile=> <Tile {...tile}/>);
    }

    render() {
        const selectedCard = this.props.tiles[this.props.selectedCard];
        return (
            <div className="board">
                <div><Tile isCard={true} {...selectedCard}/></div>
                <button onClick={()=>this.handleRefresh()}>Refresh</button>
                <div className="tiles">
                    {this.renderTiles()}
                </div>
            </div>
        );

    }
}

export default Board;