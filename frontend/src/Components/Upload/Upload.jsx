import React, { Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import {uploadFile} from "../../backend-connect";
import './Upload.css';

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            text: "Upload your file..."
        }
    }

    onFile = async files => {
        if(files.length!==0) {
            try {
                const response = await uploadFile(files[0]);
                this.setState({
                    error: false,
                    text: "File uploaded. You will shortly be redirected..."
                });
                window.location.pathname = response;
            } catch(error) {
                this.setState({
                    error: true,
                    text: error.response ? `${error.response.status}: ${error.response.data}` : `An unknown error occured`
                });
            }
        }
    };

    render() {
        return (
            <DropzoneArea
                dropzoneText={<p className={this.state.error ? 'errorParagraph' : ''}>{this.state.text}</p>}
                filesLimit={1}
                onChange={files => this.onFile(files)}
            />
        );
    }
}

export default Upload;