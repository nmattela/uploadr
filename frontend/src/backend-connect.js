import axios from 'axios';

const BACKEND_URL = "http://localhost:8000";

export async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    return await axios({
        method: 'post',
        url: `${BACKEND_URL}/upload`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}