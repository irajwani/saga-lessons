import React from "react";
import {connect} from 'react-redux';

import AuthActions from '../../Stores/Auth/Actions';


class RootScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    handleSubmit = () => {
        const {email} = this.state;
        this.props.logIn(email)
    }
    
    render() {
        return (
            <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>
                <button onClick={this.handleSubmit}>Log In</button>
                <p>{this.props.success ? "Logged In" : "Logged Out"}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    success: state.auth.success,
    // user: state.user.user,
    // userIsLoading: state.user.userIsLoading,
    // userErrorMessage: state.user.userErrorMessage,
    // store: state,
    // pushNotificationToken: state.auth.pushNotificationToken,
    // token: state.auth.token,
    // authenticateStatus: state.auth.authenticateStatus,
  })

const mapDispatchToProps = (dispatch) => ({
    logIn: (email) => dispatch(AuthActions.logInRequest(email)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)