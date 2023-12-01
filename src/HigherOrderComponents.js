import React, {useState} from "react";

// Company: Manager, Lead, HR, Director - Look for Details
// UrL: www.techofunnel/employee/100

{/* 

<Manager></Manager>
<Lead></Lead>
<HR></HR> 

*/}

function createEmployee(SomeComponent, OtherComponent) {
    // Closure
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                employeeDetails: [{
                    name: "Mayank",
                    salary: "10",
                    bonus: "1"
                }, {
                    name: "Meha",
                    salary: "10",
                    bonus: "1"
                }]
            }
        }
        
        updateComponent(data) {
            // Itterate and increase by 10
        }
        
        showDetails(emp) {
            alert(emp)
        }
        
        render() {
            // Concept of Closure
            return (
                <>
                    <h1>Employee Details are given Below: </h1>
                    {OtherComponent != null && <OtherComponent employeeListCount={this.state.employeeDetails.length}></OtherComponent>}<br/>
                    <SomeComponent data={this.state} showDetails={this.showDetails} updateComponent={this.updateComponent}></SomeComponent>
                </>
            )
        }
    }
}

function EmployeeListComponent(props) {
    return <h1>Employee Count is {props.employeeListCount}</h1>
}

function ManagerComponentInput(props) {
    debugger;
    var [salaryInc, setSalaryInc] = useState(0);
    return (
        <>
            <h3>This is Manager Component</h3>
            {props.data.employeeDetails.map(element => {
                return (
                    <>
                        <h4>Employee Name is {element.name}</h4>
                        <h4>Employee Salary is {element.salary}</h4>
                        <input type="button" value="Increase Bonus" />
                        <input type="button" value="View Details" onClick={() => {
                            props.showDetails(JSON.stringify(element))
                        }} /><br/><br/>
                        
                        <input id="incrementSal" type="text" value={salaryInc} onChange={(event) => setSalaryInc(event.target.value) } />
                        <input type="button" value="Increment Salary" onClick={() => {
                            props.updateComponent(salaryInc);
                        }} /><hr/>
                    </>
                )
            })}
        </>
    )
}

function LeadComponentInput(props) {
    return (
        <>
            <h3>This is Lead Component</h3>
            {props.data.employeeDetails.map(element => {
                return (
                    <>
                        <h4>Employee Name is {element.name}</h4>
                        <input type="button" value="View Details" onClick={() => props.showDetails(JSON.stringify(element))} />
                    </>
                )
            })}
        </>
    )
}

export var ManagerComponent = createEmployee(ManagerComponentInput, EmployeeListComponent)
export var LeadComponent = createEmployee(LeadComponentInput, null)
 






