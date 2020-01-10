import axios from 'axios';

<<<<<<< HEAD
const BACKEND_URL = "https://uploadr.mattelaer.dev/api";
=======
const BACKEND_URL = `${window.location.href}api`;
>>>>>>> d998061f51a7a5b589f32547d3558359eef51d1b

export async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await axios({
        method: 'post',
        url: `${BACKEND_URL}/upload`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return `${response.data}`;
}