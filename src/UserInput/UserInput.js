import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return ( <
            div >
            <
            h2 > Type in your name: < /h2> <
            input value = { this.state.value }
            onChange = { this.handleChange }
            /> <
            button onClick = { this.handleSubmit } > Submit < /button> <
            /div> 
        )
    }
}
export default UserInput;