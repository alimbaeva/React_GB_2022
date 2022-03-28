import React, { useState } from 'react';

const Mouse = ({ render }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseMuveHandler = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div onMouseMove={mouseMuveHandler}>
            {render({ x, y })}
        </div>
    )
}

export default Mouse;
