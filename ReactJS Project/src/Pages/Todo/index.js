import React, { Component } from 'react';
import './todoStyle.css';

export default class Todo extends Component {
    render() {
        return (
            <div className="container">
                <h1>Todo App</h1>
                <form>
                    <input type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
                <div className="todolist">
                    <div className="todo-item">
                        <input type="checkbox" name="isDone" id="isDone"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, alias.</p>
                        <button type="button">Delete</button>
                    </div>
                    <div className="todo-item">
                        <input type="checkbox" name="isDone" id="isDone"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, alias.</p>
                        <button type="button">Delete</button>
                    </div>
                    <div className="todo-item">
                        <input type="checkbox" name="isDone" id="isDone"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, alias.</p>
                        <button type="button">Delete</button>
                    </div>
                    <div className="todo-item">
                        <input type="checkbox" name="isDone" id="isDone"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, alias.</p>
                        <button type="button">Delete</button>
                    </div>
                    <div className="todo-item">
                        <input type="checkbox" name="isDone" id="isDone"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, alias.</p>
                        <button type="button">Delete</button>
                    </div>
                </div>
                <div className="filter-section">
                    <button type="button">All</button>
                    <button type="button">pending</button>
                    <button type="button">Completed</button>
                </div>
            </div>
        )
    }
}
