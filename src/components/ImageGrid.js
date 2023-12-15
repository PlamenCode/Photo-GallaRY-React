import React from 'react'
import useFirestore from '../hooks/useFirestore'

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images'); 

  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <div className='img-wrap'
            	onClick={() => setSelectedImg(doc.url)}
                key={doc.id} 
            >
                <img src={doc.url} alt="Uploaded pic" />
            </div>
        ))}
    </div>
  )
}
