import React from 'react';

import './App.css';
import Board from './Board';
import FileForm from './FileForm';
import {csvToDataObject, getRandomInt} from './utils';

class  App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      tiles: null,
      selectedCard: 0
    }
  }

  handleRefreshCard = () => {
    const selectedCard = getRandomInt(this.state.tiles.length);
    this.setState({selectedCard});
  }

  loadData = (tiles) => {
    const selectedCard = getRandomInt(tiles.length);
    this.setState({selectedCard, tiles});
  }

  handleFileSubmit = (file)=> {
    this.setState({file});
    csvToDataObject(file,this.loadData);
  }

  render(){
    if(!this.state.file) {
      return (
        <div>
          <FileForm onSubmit={(file)=>this.handleFileSubmit(file)}/>
        </div>
      );
    }

    if(!this.state.tiles) {
      return null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <Board tiles={this.state.tiles} 
                selectedCard={this.state.selectedCard}
                onRefresh={()=>this.handleRefreshCard()}/>
        </header>
      </div>
    );
  }
}

export default App;
