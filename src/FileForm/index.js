import React from 'react';
import "./FileForm.css";

class FileForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            file: null
        };
    }

    handleSubmit = () =>{
        this.props.onSubmit(this.state.file);
    }

    handleFileChange = (e)=> {
        this.setState({
            file: e.target.files[0]
        })
    }

    renderInput = ()=> {
        return (
            <div>
              <input type="file" onChange={this.handleFileChange}></input>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderInput()}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );

    }
}

export default FileForm;