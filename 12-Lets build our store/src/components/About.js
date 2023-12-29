import React, { Component, useContext } from 'react'
import UserContext from "../utils/UserContext";

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
        <h1>About</h1>
        <h3>{this.state.userInfo.name}</h3>
        <h4>{this.state.userInfo.url}</h4>
        <UserContext.Consumer>
          {user => <h5 className='text-xl font-bold'>{user}</h5>}
        </UserContext.Consumer>
      </div>
    )
  }
}

export default About