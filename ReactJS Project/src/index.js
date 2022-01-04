import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Pages/Todo";
import "./root.css";

// const App = ({title, caption}) => {
//     return (
//         <Fragment>
//             <h1>{title}</h1>
//             <h2 style={{
//                 backgroundColor: true? "red": "blue",
//                 color:"#fff"
//             }}>{caption}</h2>
//         </Fragment>    
//     )    
// };


ReactDOM.render(
    <Todo name="Todo App"/>,
    document.getElementById("root"),
)
