import { Component } from "react";

export default class LifecycleComponent extends Component {
    constructor(props) {  // Once in Lifetime
        super(props);
        this.state = {
            counter: 0
        }
    }
    
    // If counter is divisible by 4, so should not update
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.counter % 4 ? true : false;
    }
    
    render() {   // Every time when state is initialized or updated
        debugger;
        return <h1>The Counter for {this.props.userName} is {this.state.counter}</h1>
    }
    
    componentDidUpdate() {  // Every time when the state updates
        console.log("Component Updated")
    }
    
    componentDidMount() {   // Once in Lifetime
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        alert("Component Destroyed...")
    }
}