import ReactDOM from "react-dom";
import React from "react"

ReactDOM.render(
    React.createElement("div", { class: "container"}, [
        React.createElement("h1", {}, "Hello"),
        React.createElement("h2", {}, "Hi"),
        React.createElement("div", {} , [
            React.createElement("p", {}, "Hello")
        ])
    ]),
    document.getElementById("root")
);