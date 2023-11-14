import ReactDOM from "react-dom";
import CounterComponent from "./components/CounterComponent";
debugger;
var counter = 1;
setInterval(function () {
    counter = counter + 1;
    ReactDOM.render(<CounterComponent counter={counter}></CounterComponent>,
        document.getElementById("root")
    );
}, 1000);

ReactDOM.render(<CounterComponent counter={counter}></CounterComponent>,
    document.getElementById("root")
);