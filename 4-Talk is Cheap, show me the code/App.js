import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Namaste React 🚀'
)

console.log('heading', heading)

// JSX - JSX is not HTMl. JSX is HTML-like or XML-like systax in JavaScript
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// React Element
const jsxHeading = <h1 className='heading'>Namaste React using JSX 🚀</h1>

const Title = () => <h1>Title of React Component</h1>

// Component Composition - One component inside another
const ReactComponent = () => {
  return (
    <div>
      <Title />
      <h1>React Functional Component</h1>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
    <img src="" alt="logo" />
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
  </div>
  )
}

const obj = {
  name: 'rohit',
  data: ['abc', 'default', 'xyz', '123']
}

const RestaurantCard = ({obj}) => {
  return (
    <div className="res-card">
      <img />
      <h3>Food On Way</h3>
      <h4>Vastrapur</h4>
      <h4>4.4 stars</h4>
      <h4>{obj?.name}</h4>
      <h4>{obj?.data}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard obj={obj} />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

console.log('jsxHeading', jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)