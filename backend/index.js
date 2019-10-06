const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const fs = require('fs');
const uuid = require('uuid/v1');
const app = express();

app.use(fileUpload());
app.use(cors());

const port = 21798;

app.post('/upload', (req, res) => {
    //Check if a file has been uploaded
    if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).send('No files were uploaded');

    const file = req.files.file;
    if(!fs.existsSync('./files'))
        fs.mkdirSync('./files');

    const uniqueName = uuid();
    const indexOfExtension = file.name.lastIndexOf('.');
    const fileExtension = (indexOfExtension > 0) ? file.name.substring(indexOfExtension, file.name.length) : '';
    file.mv(`./files/${uniqueName}${fileExtension}`, err => {
        if(err) return res.status(500).send(err);
        return res.send(`files/${uniqueName}${fileExtension}`);
    })
});

app.listen(port, () => console.log(`Backend started and listening on port ${port}...`));