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
    const selectedCard = getRandomInt(this.state.tiles.length-1);
    this.setState({selectedCard});
  }

  loadData = (tiles) => {
    const selectedCard = getRandomInt(tiles.length-1);
    this.setState({selectedCard, tiles});
  }

  handleFileSubmit = (file)=> {
    this.setState({file});
    csvToDataObject(file,this.loadData);
  }

  render(){
    if(!this.state.file) {
      return (
        <div className="intro">
          <div className="instructions">
            <h1>Welcome to "Guess Who?"</h1>
            <h3>Instructions:</h3>
            <div>Please upload a CSV with labels in the first column and the corresponding image urls in the second.</div>
            <div>(Max 24 rows)</div>
          </div>
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
