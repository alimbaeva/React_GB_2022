import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLinks = ({ children, to, ...props }) => {
    const match = useMatch(to)
    return (
        <Link to={to} {...props} style={{ color: match ? 'red' : 'green' }}>
            {children}
        </Link>
    )
}

export default CustomLinks