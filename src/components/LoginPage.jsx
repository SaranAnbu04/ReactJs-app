import React, { useState } from 'react';
import {USERNAME, PASSWORD, WARNINGMSG} from '../constants/credentails';
import {connect } from 'react-redux';
import Dashboard from './Dashboard';
import { successfulLogin, failedLogin } from '../actions/userLogin';
import '../App.css'

const mapStateToProps = (state) => {
    return {
        userLogsIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        successfulLogin: (data) => {dispatch(successfulLogin(data))},
        failedLogin: (data) => {dispatch(failedLogin(data))}
    }
}
const LoginPage = (props) =>{
    const [inputs, setInputs] = useState({username: '', password: ''});
    const [nameError, setNameError ] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [warning, setWarning] = useState(false);
    const { username, password } = inputs;
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            setWarning(false);
            if(username === USERNAME && password === PASSWORD) {
                props.successfulLogin(true)
                props.history.push('/dashboard')
                setNameError(false);
                setPwdError(false);
            }
            else {
                props.failedLogin(false)
                if(username !== USERNAME) {
                    setNameError(true)
                } 
                if (password !== PASSWORD) {
                    setPwdError(true)
                }
            }
            console.log('user, pass', username, password)
            console.log('userLogsin', props.userLogsIn)
        }
        else {
            setWarning(true);
            console.log('warnig',warning)
        }
    }

    return (
        <div >
            <div className="login-header ">
            <span >Please enter your username and password!</span>
            </div>
        <div className="col-lg-8 offset-lg-2">
            
            <form name="form" >
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + ( nameError ? ' is-invalid' : '')} />
                    { nameError &&
                        <div className="invalid-feedback">Enter valid Username</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + ( pwdError ? ' is-invalid' : '')} />
                    { pwdError &&
                        <div className="invalid-feedback">Enter valid Password</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleClick}>
                        {/* { <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        Login
                    </button>
                  
                </div>
                <div >
                    { warning &&
                    <div className="warning-msg" >{WARNINGMSG}</div>}
                </div>
            </form>
        </div>
      
        </div>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);