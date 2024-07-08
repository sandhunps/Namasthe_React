import React from "react";
import ReactDOM from "react-dom/client";


//  React.createElement ==> REactElement ==> Object ==> HTMLElement(render)

const heading = React.createElement(
    "h1",
    {id :"1", className :"heading"},
    "Hello World from React"
);

// JSX  (trasapiled before it reaches the JS) -PARCEL - Babel

// JSX ==>  React.createElement ==> REactElement ==> Object ==> HTMLElement(render)
const jsxHeading = <h1 id="heading">Namasthe React using JSX 🦅</h1>

// Multi line JSX

const jsxHeading2 = (
    <h2 id="heading2" className="head2">
    Heading 2 ⚽️
    </h2>
);

const number = 1000;

const Title = function(){
    return <h1>Heading from Title Componet</h1>};

// Functional Component
const HeadingComponent = () =>(
    <div className="container">
        {/* ways of calling componets */}
        <Title></Title>
        <Title />
        {Title()}

        {/* inserting js inside jsx */}
        <span>{number}</span>
        
        {/* iserting react elemet in JSX */}
        {jsheadingxHeading2}
        <h2 className="heading">Namasthe React Functional Componet</h2>
    </div>
);



console.log(heading); // heading/nested is not <h1> tag, it is a react element

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

// Rendaring componet

root.render(<HeadingComponent />)
