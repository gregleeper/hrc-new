import { useState } from 'react';
import Image from 'next/image';

export default function ImageUpload() {
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const uploadImage = () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'fzizikih');
        data.append('cloud_name', 'gregleeper');
        data.append('folder', 'HRC');
        fetch('  https://api.cloudinary.com/v1_1/gregleeper/image/upload', {
            method: 'post',
            body: data,
        })
            .then((resp) => resp.json())
            .then((res) => {
                setUrl(res.url);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button type="button" onClick={uploadImage}>
                    Upload
                </button>
            </div>
            <div>
                <h1>Uploaded image will be displayed here</h1>
                {url && (
                    <div>
                        <p>{url}</p>
                        <Image src={url} width="400" height="500" alt="" />{' '}
                    </div>
                )}
            </div>
        </div>
    );
}
