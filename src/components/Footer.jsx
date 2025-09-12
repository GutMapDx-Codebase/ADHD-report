import React from 'react'
import './css/Footer.css'

function Footer({ sampleId, page , totalPages,color,bg }) {
  return (
    <div className='footer' style={{backgroundColor: bg, color: color }}>
      <span>Sample ID: {sampleId}</span>
      <span style={{ fontSize: '12px', color: '#444' }}>
        Page: {page} - {totalPages}
      </span>
    </div>
  )
}

export default Footer
