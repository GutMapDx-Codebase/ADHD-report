import React from 'react'
import './footer.css'

function Footer({ sampleId = "1234550", page = 3, totalPages = 12 }) {
  return (
    <div className='footer' style={{ fontFamily: 'Poppins, Arial, sans-serif', width: '297mm', margin: '0 auto' }}>
      <span>Sample ID: {sampleId}</span>
      <span style={{ fontSize: '12px', color: '#444' }}>
        Page: {String(page).padStart(2, '0')} - {String(totalPages).padStart(2, '0')}
      </span>
    </div>
  )
}

export default Footer
