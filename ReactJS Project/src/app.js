import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
    // static PropTypes = {
    //     title: PropTypes.string.isRequired,
    //     caption: PropTypes.string.isRequired
    // }
    
    // static defaultProps = {
    //     caption: "I am from static default props"
    // }

    render() {
        const {title, caption} = this.props;
        return (
            <>
                <h1>{title}</h1>
                <h2>{caption}</h2>
            </>
        )
    }
}

// const App = ({title,caption}) => {
//     return (
//         <>
//             <h1>{title}</h1>
//             <h2>{caption}</h2>
//         </>
//     )
// }

App.propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}

App.defaultProps = {
    caption: "I am default value",
}

export default App;

