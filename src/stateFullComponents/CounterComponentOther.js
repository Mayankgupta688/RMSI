import { Component } from "react";

// Class Components which is not stateful
export default class CounterComponentOther extends Component {
    currentTime =  new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
    constructor() {
        super();
        
        setInterval(() => {
            this.currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
            console.log(this.currentTime);
        }, 1000)
    }
    
    render() {
        return (
            <>
                <h2>This is Class Component {this.currentTime}</h2>
            </>
            
        )
    }
}