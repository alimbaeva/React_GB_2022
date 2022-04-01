import React, { useState, useMemo } from 'react';

function sum(n) {
    return n + n
}

const Post = ({ title, name, email, body }) => {

    console.log('post')

    const [num, setNum] = useState(0)
    const [isGreen, setIsGreen] = useState(false)
    const countSum = useMemo(() => sum(num), [num])

    return (
        <div className='article-content'>
            <div className='article-title'>
                <a href="/">{title}</a>
                <a href="/">{name}</a>
            </div>
            <p className='article-text' style={{ color: isGreen ? 'green' : 'red' }} onClick={() => setIsGreen(!isGreen)}>
                {body} {email}
            </p>
            {countSum}
            <button onClick={() => setNum(num + 1)} style={{ marginLeft: "10px" }}>+</button>
        </div>
    )
}

export default React.memo(Post)