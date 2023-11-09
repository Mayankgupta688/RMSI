import ReactDOM from "react-dom";
import InterpolationComponent from "./components/InterpolationComponent";

var userDetails = [{
    userName: "Mayank Gupta",
    company: "TechnoFunnel",
    userAge: 35
}, {
    userName: "Anshul Gupta",
    company: "TechnoFunnel",
    userAge: 35
    }]

var salaryArray = [10, 20, 30];

ReactDOM.render(
    <InterpolationComponent
        userDetails={[...userDetails]}
        salaryArray={[...salaryArray]}
        userName="Mayank Gupta">
    </InterpolationComponent>,
    document.getElementById("root")
);

setInterval(function () {
    alert(userDetails[0].company); // Output ?
}, 5000)