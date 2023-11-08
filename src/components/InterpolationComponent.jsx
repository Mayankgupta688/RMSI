import { HeaderComponent } from "./HeaderComponent";
import { ContentComponent } from "./ContentComponent";
import { FooterComponent } from "./FooterComponent";


// Props are immutable, props are contants, props are read-only - Constants.
export default function InterpolationComponent(props) {
    debugger;
    props.userDetails.company = "BlackRock";
    props.salaryArray.push(40);
    return (
        <>
            <h1>The User Name is {props.userName}</h1>
            <h2>User Company is {props.userDetails.company}</h2>
            <h2>User Age is {+props.userAge + 110}</h2><hr /><br />
            <h3>Salary Length {props.salaryArray.length}</h3>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}