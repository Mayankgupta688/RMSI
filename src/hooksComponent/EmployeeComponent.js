import { useState } from "react";
 
export default function EmployeeComponent(props) {
    
    const [user, setUser] = useState({
        userName: props.userName,
        userAge: props.userAge
    });
 
    function handleAgeChange() {
        setUser({
            ...user,
            userAge: +user.userAge + 3
        });
    }
    
    function inputUpdate(event) {
        setUser({
            ...user,
            userName: event.target.value
        });
    }
 
    return (
        <>
            <input type="text" value={user.userName} onChange={inputUpdate} />
            <p>User Name is : {user.userName}</p>
            <p>User Age is: {user.userAge}</p>
            <input type="button" value="Increment" onClick={handleAgeChange} />
        </>
    );
}