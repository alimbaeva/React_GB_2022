import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {

    const { id } = useParams();

    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [handleSubmit]);

    const [mass, setMass] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const target = e.target;
        const auther = target.auther.value;
        const text = target.text.value;

        setMass((prev) => [...prev, {
            id: givLastID(prev),
            auther: auther,
            text: text,
        }]);
        setTimeout(() => {
            target.auther.value = ''
            target.text.value = ''
        }, 1000)
    }

    function givLastID(arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    useEffect(() => {
        setTimeout(() => {
            robot(mass);
        }, 1500);
    }, [mass]);

    function robot() {
        const lastAuther = mass[mass.length - 1];
        if (lastAuther && lastAuther.auther) {
            setMass(prev => [...prev, {
                id: givLastID(prev),
                text: `Сообщение ${lastAuther.auther} отправленно`
            }]);
        }
    }

    return (
        <div className="message-list">
            {mass.map(message => <div className="message-list__item" key={message.id}>
                {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                <p className="message-list__p">{mass.author && <span>Текст:</span>} {mass.text}</p>
            </div>)}
        </div>
    )
}

export default ChatPage