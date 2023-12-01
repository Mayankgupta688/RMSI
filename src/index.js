import ReactDOM from "react-dom";
import {ManagerComponent, LeadComponent} from "./HigherOrderComponents";
ReactDOM.render((
    <>
        <ManagerComponent></ManagerComponent><hr/><hr/>
        <LeadComponent></LeadComponent>
    </>
), document.getElementById("root"));