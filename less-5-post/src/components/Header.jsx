import React, { useEffect } from 'react'
import Checkbox from './Checkbox'

const Header = ({ check, changeType, changeTheme }) => {

    useEffect(() => {
        console.log("update");
    }, [changeType])
    return (
        <header className='blog-header'>
            <div className='layout layout-header'>
                <div className='blog-logo'>
                    <a href="/">IT BLOG</a>
                </div>
                <div className='tabs'>
                    <button onClick={() => changeType('posts')}>Posts</button>
                    <button onClick={() => changeType('users')}>Users</button>
                </div>
                <Checkbox checked={check} changeTheme={changeTheme} />
            </div>
        </header>
    )
}

export default Header