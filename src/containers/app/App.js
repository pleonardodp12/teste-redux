import React, { Component} from 'react';
import {connect} from 'react-redux';

import Button from '../../components/button';
import Input from '../../components/input'
import List from '../../components/list';

import { addTodo } from '../../store/actions/todo'


class App extends Component {
    state = {
        input: ''
    };


    handleOnClick = () => {
        console.log("click");
        const { addTodo } = this.props;
        const { input } = this.state;

        addTodo(input);
    };

    handleOnChange = (event) => {
        //console.log('Input foi alterado', event.target.value);
        this.setState({ input: event.target.value });
        console.log(this.state)
    };

    render() {
        const { input } = this.state;
        const { listTodo } = this.props;
        console.log(listTodo);

        return (
            <div>
                <List />
                <Input onChange= {event => this.handleOnChange(event)} value={input} />
                <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
            </div>
        );
    }
}
const mapStatoToProps = (state) => ({
    listTodo: state.todo
});

export default connect(mapStatoToProps, {addTodo})(App);