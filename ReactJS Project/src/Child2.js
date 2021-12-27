import React, { Component } from 'react'

export default class Child2 extends Component {
    render() {
        console.log('child 2 render');
        return (            
            <div>
                <h1>Hello from child2</h1>
            </div>
        )
    }
}
