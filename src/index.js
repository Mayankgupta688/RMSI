import ReactDOM from "react-dom";
import InterpolationComponent from "./components/InterpolationComponent";

var userDetails = {
    userName: "Mayank Gupta",
    company: "TechnoFunnel",
    userAge: 35
}

var salaryArray = [10, 20, 30];

ReactDOM.render(
    <InterpolationComponent userDetails={userDetails} salaryArray={salaryArray} userName="Mayank Gupta" userAge="100"></InterpolationComponent>,
    document.getElementById("root")
);

setInterval(function () {
    alert(salaryArray);
}, 5000)