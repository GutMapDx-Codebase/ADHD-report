import React from 'react'

function Resultbar(params) {
const color = params.color==="red"? "#EAA9B2" : params.color==="amber"? "#edeb9a" : "#A6EBC7";


    return (
        <div
            style={{
                background: color,
                borderRadius: 20,
                width: 110,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span
                style={{
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#222",
                    letterSpacing: 1,
                }}
            >
                {params.value}
            </span>
        </div>
    )
}

export default Resultbar
