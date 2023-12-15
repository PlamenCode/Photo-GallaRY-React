import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

export default function Upload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    function changeHandler(e){
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type) ){
            setFile(selected);
            setError(null);
        } else{
            setFile(null);
            setError('Select a valid file type (PNG, JPEG).');
        }
    };

  return (
    <form>
        <input type="file" onChange={changeHandler}/>
        <div className="output">
            {error && <div className="error"> { error } </div> }
            {file && <div>{file.name}</div> }
            {file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
  )
}
