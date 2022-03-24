import React, { useState, useEffect } from 'react'

function Forma() {
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
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Ввведите ваше Имя' name="auther" />
                <textarea id="" placeholder='Введите ваше сообщение' name="text"></textarea>
                <button type='submit'>submit</button>
            </form>
            <div className="message-list">
                {mass.map(message => <div className="message-list__item" key={message.id}>
                    {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                    <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
                </div>)}
            </div>
        </>
    )
}

export default Forma;