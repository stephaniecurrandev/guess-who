import React from 'react';
import './Board.css';
import Tile from '../atoms/Tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statuses: new Array(24).fill(0)
        }
    }

    handleRefresh= ()=> {
        this.props.onRefresh();
        this.setState({statuses:new Array(24).fill(0)})
    }

    handleStatusChange= (key,val)=> {
        const updatedStatuses = [...this.state.statuses];
        updatedStatuses[key]=val;
        this.setState({statuses:updatedStatuses})
    }

    renderTiles = ()=> {
        return this.props.tiles.map((tile,key)=>{
            const status = this.state.statuses[key];
            return  <Tile status={status}
                        onStatusChange={(newVal)=>this.handleStatusChange(key,newVal)}
                         {...tile}/>;
        });
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