import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import { Link } from 'react-router-dom'
import store from '../redux/store/users'
import { sign_up } from '../redux/action/users'

export default class SignUp extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirm_password: ''
    }
  }

  render () {

    const submit = (e) => {
      e.preventDefault()

      const {email, password, confirm_password} = this.state

      if (password !== confirm_password) {
        swal('Oops!', 'Password does not match the confirm password.', 'error')
      } else {
        sign_up({email: email, password: password})
      }
    }

    return (
      <div className='container'>
        <div className='section'>
          <div className="columns">
            <div className="column is-4 is-offset-4 has-text-centered">

              <p className='title'>CMMC Sign Up</p>

              <form onSubmit={submit}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => this.setState({email: e.target.value})}
                      required/>
                    <span className="icon is-small is-left">
                    <FontAwesome.FaEnvelope/>
                  </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => this.setState({password: e.target.value})}
                      required/>
                    <span className="icon is-small is-left">
                    <FontAwesome.FaKey/>
                  </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => this.setState({confirm_password: e.target.value})}
                      required/>
                    <span className="icon is-small is-left">
                    <FontAwesome.FaKey/>
                  </span>
                  </p>
                </div>

                <div className="columns">

                  <div className="column">
                    <div className="field">
                      <div className="level-left">
                        <div className="control">
                          <Link to='/'>
                            <p className='has-text-danger'>
                              <FontAwesome.FaAngleLeft/>
                              Back
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="level-right">
                      <div className="control">
                        <button className='button is-info'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    )
  }

}