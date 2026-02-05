import React from 'react';
import './css/page1.css'; // Assuming styles are here or inherited

const ReportCover = ({ kit, onDownload, loading, progress,title }) => {
    if(title.includes('DNA')){
    title = title.replace(/DNA/g, '');
}
    if(title.includes('Map')){
    title = title.replace(/Map/g, '');
}
    if(title.includes('Hair and Skin')){
    title = 'Hair, Skin & Nails'
    }
    return (
        <div className="page">
            <div className='firstpage'>
                <div
                >  <img src={kit.style.imageBase64} alt='logo' className='logoforfirstpage' width={300} />
                    <h1 style={{ color: kit.style.secondaryColor }}>DNAMap</h1>
                    <h2 style={{ backgroundColor: kit.style.primaryColor }}>{title}</h2>
                    <div className='firstpageinfo'>
                        <div>  <h4>Sample ID: </h4> <p>{kit.kitid} </p></div>
                        <div> <h4>Patient Name: </h4><p>{kit.patientName} </p></div>
                        <div>  <h4>Sample Date: </h4><p>{kit.SampleDate}</p></div>

                        <div style={{ marginTop: '20px' }}>
                            {!loading ? (
                                <button
                                    className="download-btn"
                                    onClick={onDownload}
                                    style={{
                                        backgroundColor: kit.style.secondaryColor || '#5f4b8b',
                                        color: '#fff',
                                        padding: '10px 30px',
                                        border: 'none',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    DOWNLOAD
                                </button>
                            ) : (
                                <div style={{ color: kit.style.secondaryColor || '#5f4b8b', fontWeight: 'bold' }}>
                                    Downloading... {progress}%
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportCover;
