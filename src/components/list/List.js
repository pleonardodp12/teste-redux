import React from 'react';
import {connect} from 'react-redux'

const List = ({ todos }) => (
    <ul>
        {todos.map(({id, name}) => (
            <li key={id}>{name}</li>
        ))}
    </ul>
);

const mapStateProps = state => ({
    todos: state.todo.list
});

export default connect(mapStateProps)(List);