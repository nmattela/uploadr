import axios from 'axios';

const BACKEND_URL = "http://localhost:8080";

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