import React from 'react'

function Resultbar(params) {
const color = params.color === "red"? "#e9a6ad" : "#ccc";


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
                    fontWeight: 600,
                    fontSize: 15,
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
