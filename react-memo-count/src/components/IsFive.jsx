import React from 'react';

let renderCount = 0;

const IsFive = ({ value }) => {

    console.warn(`== isFive render: ${++renderCount}`);

    const getResult = React.useMemo(() => {
        let i = 0;
        while (i < 6000000) i++;
        return value === 5 ? `)) Это пять :)))` : `(( Это не пять :((((`;
    }, [value])
    return <h3>{getResult}</h3>

}

export default React.memo(IsFive)