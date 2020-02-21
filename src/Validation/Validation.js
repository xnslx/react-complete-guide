import React, { useEffect } from 'react';

const Validation = (props) => {
    return ( <
        div > {
            props.inputLength > 5 ?
            <
            p > The text is enough < /p> :
                < p > The text is short < /p>
        } <
        /div>
    )
}



export default Validation;