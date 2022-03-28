import React from 'react'
import Mouse from './Mouse'

const carrdStyle = {
    height: '100px',
    margin: '5',
    border: '1px solid gray'
}

const Card = () => {
    return (
        <div style={carrdStyle}>
            <Mouse render={(data) => {
                return <p>{data.x} : {data.y}</p>
            }} />
        </div>
    )
}

export default Card