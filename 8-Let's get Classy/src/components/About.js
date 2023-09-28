import React, { Component } from 'react'
import Header from './Header'

class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInfo: {
        name: '',
        url: ''
       }
    }
    // console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.getUserData()
    // this.timer = setInterval(() => {
    //   console.log('setInterval')
    // }, 1000)
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    // clearInterval(this.timer)
  }

  async getUserData() {
    const data = await fetch('https://api.github.com/users/RohitKuwar')
    const res = await data.json()
    console.log(res)
    this.setState({
      userInfo: res
    })
  }

  render() {
    // console.log('render')
    return (
      <div>
        <Header />
        <h1>About</h1>
        <h3>{this.state.userInfo.name}</h3>
        <h4>{this.state.userInfo.url}</h4>
      </div>
    )
  }
}

export default About