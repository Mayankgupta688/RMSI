import React, {Component} from "react";
export default class StateIsAsyncComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        
        // JavaScript: Call, Bind, Apply
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    buttonClick() {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    buttonClick = () => {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render() {
        return (
            <>
                <h1>Counter Value is {this.state.counter}</h1>
                <input type="button" value="Increment" onClick={this.buttonClick.bind(this)} />
            </>
        )
    }
}