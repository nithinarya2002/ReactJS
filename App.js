import React from "react";
import ReactDOM from "react-dom/client";

/*
// const heading = React.createElement(
//     'h1',
//     {id:"header",xyz:"abc"},
//     'Hello world using ReactJS!'
// );

// Remember ReactElement(Object) when rendered gets converts into HTML(Browser Understands)

// console.log(heading);

*/

/*
<div id = "parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

*/

/*
use array of ReactElements to make siblings => HtML elements at one level

const parent = React.createElement(
    'div',
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
        [React.createElement(
            'h1',
            {},
            "I'm h1 tag"
        ),
        React.createElement(
            'h2',
            {},
            "I'm h2 tag"
        )
        ]
    )
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

console.log(parent);
*/

/*
const heading = React.createElement("h1",{id:"header"},'Hello ReactJs');
console.log(heading);
*/

/*
JSX - HTML like or XML like syntax
JSX => Babel transpiles it to React.createElement => ReactElement(Object) => HTML element(render)
*/

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Hello ReactJs Element using jsx
  </h1>
);
console.log(heading); //prints an object

/*
const HeadingComponent = () => {
  return <h1 className="heading">Hello ReactJs functional Component</h1>;
};
*/
const Title = ()=>(
    <h1 className="head" tabIndex="5">
      Hello ReactJs using jsx
    </h1>
  );

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {heading /*Javascript inside JSX using curly braces*/} 
    {Title()} 
    <Title />
    <Title></Title>
    <h1 className="heading">Hello ReactJS functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
