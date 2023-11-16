import { Component } from "react";
export default class EventsComponent extends Component {
    constructor() {
        super();
        this.state = {
            userName: "Hello TechnoFunnel",
            userAge: "30",
            userDesignation: "Developer"
        }
        this.updateUserName = this.updateUserName.bind(this)
        this.updateUserInput = this.updateUserInput.bind(this)
    }
    
    alertClick(event) {
        alert("Clicked");
    }
    
    updateUserName(event) {
        this.setState({
            ...this.state,
            userName: event.target.value
        })
    }
    
    updateUserInput(event) {
        this.setState({
            ...this.state,
            [event.target.dataset.property]: event.target.value
        })
        
        
        event.target.dataset.property = "dhsfogdjksg";
    }
    
    render() {
        return (
            <>
                Name: <input data-property="userName" data-abc="userName" data-xyz="userName" type="text" className="userName" name="userName" id="userName" value={this.state.userName} onChange={this.updateUserInput} /><br /><br />
                <b>{this.state.userName}</b><br/><br/>
                Age: <input type="text" data-property="userAge" className="userAge" name="userAge" id="userAge" value={this.state.userAge} onChange={this.updateUserInput} /><br /><br />
                <b>{this.state.userAge}</b><br/><br/>
                Designation<input type="text" data-property="userDesignation" className="userDesignation" name="userDesignation" id="userDesignation" value={this.state.userDesignation} onChange={this.updateUserInput} /><br /><br />
                <b>{this.state.userDesignation}</b><br/><br/>
                <input type="button" value="Click Me" onClick={this.alertClick.bind(this)} />
            </>
        )
    }
}