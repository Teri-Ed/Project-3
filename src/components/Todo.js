import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Todo = ({onClick, completed, text, deleteTodo, id}) => (
    <p className = 'ListItem' onClick = {onClick} style = {{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
        <span className = 'Faicons'>
            <FontAwesomeIcon icon = 'trash' onClick = {() => deleteTodo(id)} />
        </span>
    </p>
);

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(null, mapDispatchToProps)(Todo);