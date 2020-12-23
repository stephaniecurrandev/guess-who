import React from "react";
import './Tile.css';

const statusTypes = ["none", "eliminated", "maybe"]

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        }
    }

    handleClick = () => {
        if(this.props.isCard) return;
        const next = this.state.status + 1 > 2? 0: this.state.status + 1;
        this.setState({status:next})
    }

    render(){
        const containerClass = `tile ${statusTypes[this.state.status]}`;
        return (
            <div className={containerClass} onClick={()=>this.handleClick()}>
                <img src={this.props.imgSrc} border="0"/>
                <div className="title">{this.props.title}</div>
            </div>
        )
    }
}

export default Tile;