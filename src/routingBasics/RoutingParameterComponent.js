import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function RoutingParameterComponent() {
    
    return (
        <BrowserRouter>
            <>
            
                <nav>
                    <Link style={{margin: "5px"}} to="/">Home</Link>
                    <Link style={{margin: "5px"}} to="/stock">Stock</Link>
                </nav>
            
                <div>
                    <Switch>
                        <Route exact path="/" render={() => {
                            var userName = "Mayank_" + "TechnoFunnel_" + new Date().getFullYear();
                            return <HomeComponent name={userName}></HomeComponent>
                        }
                        }></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>
                        <Route exact path="/stock/:stockName/:stockExchange/:id" component={StockComponent}></Route>
                        <Route path="*" component={HomeComponent}></Route>
                    </Switch>
                </div><hr />
            </>
        
        </BrowserRouter>
    )
}

function HomeComponent(props) {
    return <h1>Welcome to {props.name} Stock Application</h1>
}

function HelpComponent() {
    return <h1>Welcome to TechnoFunnel Stock Application Help</h1>
}

function WrongFormat() {
    return <h1>Wrong Year</h1>
}

function StockComponent(props) {
    debugger;
    return (
        <>
            <h2>Stock Price at {props.match.params.stockExchange} for {props.match.params.stockName} having Id:{props.match.params.id} is 560</h2>
            <input type="button" onClick={() => {
                props.history.push("/help")
            }} value="Redirect To Home" />
        </>
    )
}