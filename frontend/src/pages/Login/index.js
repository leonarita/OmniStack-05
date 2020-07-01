import React, { Component } from 'react'

import './styles.css'
import logo from '../../assets/logo.svg'

export default class Login extends Component {

    state = {
        username: ''
    }

    handleSubmit = e => {
        e.preventDefault()

        const { username } = this.state

        if (!username)
            return

        localStorage.setItem('@GoTwitter:username', username)

        this.props.history.push('/timeline')
    }

    handleInputChange = e => {

        this.setState({ username: e.target.value })
    }

    render() {

        return (

            <div className="login-wrapper">

                <img src={logo} alt="GoTwitter"/>

                <form onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Nome de usuário" value={this.state.username} onChange={this.handleInputChange} />

                    <button type="submit"> Entrar </button>

                </form>
            
            </div>

)
    }
}
