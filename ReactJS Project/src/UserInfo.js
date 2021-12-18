import React, { Component } from "react";
import PropTypes from "prop-types";

class UserInfo extends Component {
    render() {
        const {firstname, lastname} = this.props;
        //const fullname = firstname + lastname;
        return (
            <h2>{`${firstname} ${lastname}`}</h2>
        )
    }
}

// const UserInfo = ({firstname, lastname}) => {
//     //const fullname = firstname + lastname;
//     return (
//         <h2>{`${firstname} ${lastname}`}</h2>
//     )
// }

UserInfo.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default UserInfo;