import React, { Component } from 'react';
import './App.css';
import Upload from "./Components/Upload/Upload";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Upload/>
        );
    }

}

export default App;
