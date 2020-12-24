import React from 'react';
import "./FileForm.css";
import Button from '@material-ui/core/Button';

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
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
        );

    }
}

export default FileForm;