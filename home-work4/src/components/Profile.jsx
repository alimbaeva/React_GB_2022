import React from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {
    const contacts = useSelector((state) => {
        return state.contacts
    })

    const isActive = useSelector(state => {
        return state.isActive
    })
    return (
        <div>
            {contacts.map((contact, id) => (
                <li key={contact.name + id}>
                    {contact.name}
                </li>
            ))}
            <input type="checkbox" defaultChecked={isActive ? 'green' : 'red'} />

        </div>
    )
}

export default Profile