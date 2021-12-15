import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const App = () => {
    return <h1>Hello from functional component</h1>
};

ReactDOM.render(
    <Fragment>
        <h1>Hello from ReactJS Tutorial</h1>
        <App/>
    </Fragment>,
    document.getElementById("root"),
)
