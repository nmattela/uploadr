const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const uuid = require('uuid/v1');
const app = express();
app.use(fileUpload());
const port = 8000;

app.post('/upload', (req, res) => {
    console.log(`Incoming request!`);
    //Check if a file has been uploaded
    if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).send('No files were uploaded');

    const file = req.files.file;
    console.log(`Got a file!`);
    if(!fs.existsSync('../files'))
        fs.mkdirSync('../files');

    console.log(`Created files folder!`);

    const uniqueName = uuid();
    const indexOfExtension = file.name.lastIndexOf('.');
    const fileExtension = (indexOfExtension > 0) ? file.name.substring(indexOfExtension, file.name.length) : '';
    file.mv(`../files/${uniqueName}${fileExtension}`, err => {
        console.log(err);
        if(err) return res.status(500).send(err);
        console.log(`Moved file!`);
        return res.send(`http://localhost/files/${uniqueName}${fileExtension}`);
    })
});

app.listen(port, () => console.log(`Backend started and listening on port ${port}...`));