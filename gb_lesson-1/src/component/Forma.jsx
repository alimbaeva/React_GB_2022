import React, { useState, useEffect } from 'react'

function Forma() {
    const [mass, setMass] = useState('')

    useEffect(() => {
        setMass('Сообщение отправленно');
    })

    return (
        <form>
            <input type="text" placeholder='Ввведите ваше Имя' />
            <textarea name="" id="" placeholder='Введите ваше сообщение'></textarea>
            <button type='submit' onClick={() => setMass(alert(mass + ' '))}>submit</button>
        </form>
    )
}

export default Forma;