import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
      id: "heading",
      className: "heading",
      style: {
        fontSize: "32px",
      },
      xyz: "abc",
    },
    "Hello World from React!"
  );
  
  // heading is React object not a actual heading html element
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(heading);
  
  /**
  *
  *
  <div id='parent'>
      <div id='child'>
          <h1>heading 1 tag</h1>
          <h2>heading 2 tag</h2>
      </div>
  </div> 
  *
  * ReactElement(Object) => HTML(Browser Understands)
  */
  
  // const parent = React.createElement(
  //     "div",
  //     { id: "parent" },
  //     React.createElement(
  //       "div",
  //       { id: "child" },
  //       [React.createElement("h1", {}, "heading 1 tag"), React.createElement("h2", {}, "heading 2 tag")]
  //     )
  //   );