import React from "react";
import ReactDOM from "react-dom/client";

/**
 * how to create nested html
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>Hi I am h1</h1>
 *      <h1>Hi I am h2</h2>
 *  </div>
 * </div>
 * 
 */

const nested = React.createElement("div",{id : "parent"},
        React.createElement("div",{id :"child"},
            [React.createElement("h1",{},"Hi I am h1"),
             React.createElement("h2",{},"Hi I am h2")]
    ));

const heading = React.createElement(
    "h1",
    {id :"1"},
    "Hello World from React");

console.log(heading); // heading/nested is not <h1> tag, it is a react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);
