import React, { useState, useEffect } from 'react'

function Message({ text, arr }) {
    const [say, setSay] = useState([]);

    useEffect(() => {
        setSay(arr())
    }, [arr])
    return (say.map((el, id) => <p key={id}>{el} {text}</p>)
    )
}

export default Message
