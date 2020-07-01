import React, { Component } from 'react'
import socket from 'socket.io-client'

import './styles.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import Tweet from '../../components'

export default class Timeline extends Component {

    state = {
        newTweet: '',
        tweets: []
    }

    subscribeToEvents = () => {

        const io = socket('http://localhost:3333')

        io.on('tweet', data => {
            
            this.setState({ tweets: [data, ...this.state.tweets] })
        })

        io.on('like', data => {
            
            this.setState({ tweets: this.state.tweets.map(tweet => tweet._id === data._id ? data : tweet) })
        })
    }

    async componentDidMount() {

        this.subscribeToEvents()

        const response = await api.get('tweets')
        this.setState({ tweets: response.data })
    }

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value })
    }

    handleNewTweet = async e => {

        // A tecla enter é 13
        if (e.keyCode !== 13)
            return

        const content = this.state.newTweet
        const author = localStorage.getItem('@GoTwitter:username')

        await api.post('tweets', { content, author })
        this.setState({ newTweet: '' })
    }

    render() {

        return (

            <div className="timeline-wrapper">
            
                <img src={logo} height={24} alt="GoTwitter"/>

                <form action="">

                    <textarea value={this.state.newTweet} onChange={this.handleInputChange} 
                        onKeyDown={this.handleNewTweet} placeholder="O que está acontecendo?" />

                </form>

                <ul className="tweet-list">
                    { this.state.tweets.map(tweet => ( <Tweet key={tweet._id} tweet={tweet} /> )) }
                </ul>
            
            </div>

        )
    }
}
