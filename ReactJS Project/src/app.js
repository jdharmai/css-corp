import React from "react";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";
import Child1 from "./Child1";
import Child2 from "./Child2";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            greet: `${props.title} constructor`
        }
    }
    
    // static getDerivedStateFromProps(props,state){
    //     return {
    //         i: 0,
    //         greet: `${props.title} getDerivedStateFromProps`
    //     }
    // }

    // componentDidMount(){
    //     console.log(document.getElementById("heading1"));
    // }


    static PropTypes = {
        title: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
    }
    
    static defaultProps = {
        caption: "I am from static default props"
    }

    // state = {
    //     i: 0,
    // }
    incrementCounter = () => {
        // const {i} = this.state;
        // this.setState({
        //     i: i + 1,
        // })
        this.setState(({i}) => ({
            i: i + 1,
        }));
    }

    decrementCounter = () => {
        this.setState(({i}) => ({
            i: i - 1,
        }));
    }

    render() {
        const {title, caption} = this.props;
        const {i,greet} = this.state;
        return (
            <>
                <h1 id="heading1">{greet}</h1>
                <h1>{title}</h1>
                <h2>{caption}</h2>
                <UserInfo firstname="Jagan" lastname="Prabu"/>
                <Child1/>
                <Child2/>


                <p>{i}</p>
                <button type="button" onClick={this.incrementCounter}>Increment button</button>
                <button type="button" onClick={this.decrementCounter}>Decrement button</button>
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

