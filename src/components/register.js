import React, { Component } from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
const personAs = [
  { label: "Student", value: 1 },
  { label: "Teacher", value: 2 },
];
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 d-flex">
          <label>I'm joining as a </label>
          <div className="mb-3">
            <div className="col-md" style={{ paddingLeft: "6px" }}>
              <Select options={personAs} />
            </div>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
  }
}