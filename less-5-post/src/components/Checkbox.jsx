import React from 'react'

const Checkbox = ({ checkbox, changeTheme }) => {
    return (
        <div className='checkbox'>
            <label className={`custom-checkbox ${checkbox ? "checked" : ''}`} onClick={changeTheme}>
                <span className='custom-checkbox-button' ></span>
            </label>
        </div>
    )
}

export default Checkbox