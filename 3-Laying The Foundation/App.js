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

console.log('jsxHeading', jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ReactComponent />)