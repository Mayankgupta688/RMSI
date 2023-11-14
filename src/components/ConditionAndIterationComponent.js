export default function ConditionAndIterationComponent() {
    
    var employees = [{
        empName: "Mayank",
        empAge: 30
    }, {
        empName: "Varun",
        empAge: 35
    }, {
        empName: "Meha",
        empAge: 15
    }];
    
    return (
        <>
            <h1>Hello World...</h1><hr />
            <h2>List of Employee in Company are:</h2>
            
            {employees.filter(emp => emp.empAge >= 15).map(function (emp) {
                return (
                    <>Employee Name: {emp.empName}<br/></>
                )
            })}
            
            
            {(employees.length >= 5 && employees.length < 10) && (
                <>
                    <h3>This is categorized as Mid Level Company</h3>
                    <h4>This is TechnoFunnel</h4>
                </>
            )}
        </>
    )
}