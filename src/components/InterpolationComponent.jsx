import { HeaderComponent } from "./HeaderComponent";
import { ContentComponent } from "./ContentComponent";
import { FooterComponent } from "./FooterComponent";

// Props are immutable, props are contants, 
// props are read-only - Constants.
// Props containing Object and Arrays can be modified.
// Always try to send the copy of data.

export default function InterpolationComponent(props) {
    debugger;

    // Should not be done..
    // props.company = "BlackRock";

    props.salaryArray.push(40);
    props.userDetails[0].company = "ABC";

    return (
        <>
            <h2>User Company is {props.company}</h2>
            <h3>Salary Length {props.userDetails[0].company}</h3>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}