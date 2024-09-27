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

// use array of ReactElements to make siblings => HtML elements at one level

// const parent = React.createElement(
//     'div',
//     {id:"parent"},
//     React.createElement(
//         'div',
//         {id:"child"},
//         [React.createElement(
//             'h1',
//             {},
//             "I'm h1 tag"
//         ),
//         React.createElement(
//             'h2',
//             {},
//             "I'm h2 tag"
//         )
//         ]
//     )
// );

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
