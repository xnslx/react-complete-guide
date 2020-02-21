import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import Header from './Header/Header';


class App extends Component {
    constructor(props) {
        super(props)
        console.log('[App.js] constructor');
        this.state = {
            input: ''
        }
        this.onChange = this.onChange.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('[App.js] shouldComponentUpdate')
        if (nextProps.charList == this.props.charList) {
            return true;
        } else {
            return false;
        }
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    deleteHandler = (index) => {
        const list = this.state.input.split('');
        list.splice(index, 1);
        const listUpdated = list.join('');
        this.setState({
            input: listUpdated
        });
    }


    render() {
        console.log('[App.js] render')
        const charList = this.state.input.split('').map((ch, index) => {
            return <Char
            character = { ch }
            key = { index }
            deleteHandler = { this.deleteHandler }
            />;
        });
        return ( <
            React.Fragment >
            <
            p > This is my first React! < /p> <
            Header / > { /* <UserInput /> */ } <
            textarea value = { this.state.input }
            onChange = { this.onChange } > < /textarea> <
            p > The text you input is here: { this.state.input } < /p> <
            Validation inputLength = { this.state.input.length }
            /> { charList } <
            /React.Fragment>
        );
    }
}


export default App;