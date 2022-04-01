import React from 'react'

const Checkbox = ({ checked, changeTheme }) => {
    return (
        <div className='checkbox'>
            <label className={`custom-checkbox ${checked ? "checked" : ''}`} onClick={changeTheme}>
                <span className='custom-checkbox-button' ></span>
            </label>
        </div>
    )
}

export default Checkbox