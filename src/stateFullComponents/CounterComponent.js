import { Component } from "react";

// StateFull Component, Class Components
export default class CounterComponent extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 18,
            salary: 10000,
            currentTime: new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
        }
        
        setInterval(() => {
            
            this.setState({
                ...this.state,
                currentTime: new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
            })
            
            // Never Use this Force Render... Hampers you react Execution Speed
            // this.state.currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
            // this.forceUpdate();
            
            console.log(this.state.currentTime);
        }, 1000)
    }
    
    render() {
        return (
            <>
                <h1>User Name is {this.state.name}</h1>
                <h2>This is Class Component {this.state.currentTime}</h2>
            </>
            
        )
    }
}