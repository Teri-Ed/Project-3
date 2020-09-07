import React from 'react'
import './App.css'; 
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h3>Todo App</h3>
            <ul className = 'nav-links'>
                <Link className = 'nav-links' style = {{textDecoration: 'none'}} to = '/'><li>Home</li></Link>
                <Link className = 'nav-links' style = {{textDecoration: 'none'}} to = '/TodoApp'><li>Todo List</li></Link>
                <Link className = 'nav-links' style = {{textDecoration: 'none'}} to = '/MyForm'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}