import React, { Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import {Button, Fab, Icon} from '@material-ui/core'

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        }
    }

    onFile = async files => {
        if(files.length!==0) {

        }
    };

    render() {
        return (
            <DropzoneArea
                dropzoneText="Upload your file..."
                filesLimit={1}
                onChange={files => this.onFile(files)}
            />
        );
    }
}

export default Upload;