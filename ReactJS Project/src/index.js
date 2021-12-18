import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"

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
    <>
        <h1>Hello from ReactJS Tutorial</h1>
        <input type="text"/>
        <App title="Good morning" caption="Have a nice day"/>
    </>,
    document.getElementById("root"),
)
