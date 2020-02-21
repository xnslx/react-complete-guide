import React from 'react';
import PropType from 'prop-types';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}
const Char = (props) => {
    console.log('[Char.js] rendering...')
    return ( <
        div style = { style }
        onClick = { props.deleteHandler } > { props.character } < /div>
    );
}

Char.PropType = {
    character: PropType.string
};
export default Char;