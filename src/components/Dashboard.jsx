import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { userDetails} from '../constants/userDetails';
import '../App.css';
import {connect } from 'react-redux';
import { logoutUser } from '../actions/userLogin'

const mapStateToProps = (state) => {
    return {
        userLogsIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: (data) => {dispatch(logoutUser(data))}
    }
}
const Dashboard = (props) => {

    const detail =  userDetails.user
    const logout = () => {
        props.logoutUser(false);
        props.history.push('/')
    }
    useEffect(() => {
        if(props.userLogsIn === false) {
            props.history.push('/')
        }
    })
    return(
        <div className="table">
            <div className="Dashboard-header">
            <h4>Hi, User details are listed below!!</h4>
            </div>
            <div className="Dashboard-logout">
            <a href="#" onClick={logout}>LOGOUT</a>
            </div>
        <table className="table table-striped table-dark">
        <thead>
            <tr >
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Gender</td>
                <td>Email</td>
                <td>Phone No</td>
                </tr>        
        </thead>
        <tbody>
          {detail.map((item, index) => (
                  <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phoneNo}</td>
                </tr>
              ))}
        </tbody>
      </table>
      </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);






