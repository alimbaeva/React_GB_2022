import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Chats = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setChats(data))
    }, [])

    const deleteChat = (id) => {
        const removeItem = chats.filter((item) => item.id !== id)
        setChats(removeItem)
    }

    const addItem = (value) => {
        let copyChat = [...chats];
        copyChat = [...chats, { id: chats.length + 1, title: value }];
        setChats(copyChat);
    }

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} name="auther" />
                <button> add </button>
            </form>
            {chats.map((item) => {
                return (
                    <>
                        <h2 style={{ margin: '15px' }} key={item.id}>
                            <Link to={`/posts/${item.id}`}>
                                {item.title}
                            </Link>
                        </h2>
                        <button onClick={() => deleteChat(item.id)}> X </button>
                    </>
                )
            })}
        </div>
    );
}

export default Chats