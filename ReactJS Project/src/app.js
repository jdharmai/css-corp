import React from "react";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";

class App extends React.Component{
    // static PropTypes = {
    //     title: PropTypes.string.isRequired,
    //     caption: PropTypes.string.isRequired
    // }
    
    // static defaultProps = {
    //     caption: "I am from static default props"
    // }

    state = {
        i: 0,
    }
    incrementCounter = () => {
        // const {i} = this.state;
        // this.setState({
        //     i: i + 1,
        // })
        this.setState(({i}) => ({
            i: i + 1,
        }));
    }

    render() {
        const {title, caption} = this.props;
        const {i} = this.state;
        return (
            <>
                <h1>{title}</h1>
                <h2>{caption}</h2>
                <UserInfo firstname="Jagan" lastname="Prabu"/>
                <p>{i}</p>
                <button type="button" onClick={this.incrementCounter}>Increment button</button>
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

