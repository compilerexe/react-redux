import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {

    const submit = (e) => {
      e.preventDefault()
    }

    return (
      <div className='container'>
        <div className='section'>
          <div className="columns">
            <div className="column is-4 is-offset-4 has-text-centered">

              <p className='title'>CMMC Sign In</p>

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

                <div className="columns">

                  <div className="column">
                    <div className="field">
                      <div className="level-left">
                        <div className="control">
                          <Link to='/sign_up'>
                            <p className='has-text-success'>
                              Sign Up
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
                          Sign In
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