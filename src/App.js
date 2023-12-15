import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Model from './components/Model';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
        <Title />
        <Upload />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
