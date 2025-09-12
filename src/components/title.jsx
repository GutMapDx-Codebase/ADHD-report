import React from 'react'

function Title(params) {
    return (
        <div className="genes-wrapper">
            <div style={{backgroundColor:params.bg, color:params.color}} className="genes-box">
                {params.title}
            </div>
        </div>
    )
}

export default Title
