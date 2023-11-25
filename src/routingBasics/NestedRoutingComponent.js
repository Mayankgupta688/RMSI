import {BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function NestedRoutingComponent() {
    
    return (
        <BrowserRouter>
            <>
                <nav>
                    <Link style={{margin: "5px"}} to="/">Home</Link>
                    <Link style={{margin: "5px"}} to="/stock">Stock</Link>
                </nav>
            
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}></Route>
                        <Route path="/stock" component={StockComponent}></Route>
                        <Route path="*" component={WrongFormat}></Route>
                    </Switch>
                </div><hr />
            </>
        
        </BrowserRouter>
    )
}

function WrongFormat() {
    return <h1>Wrong Year</h1>
}

function StockComponent() {
    return (
        <>
            <h1>This is Stock Component</h1>
            <WrongFormat></WrongFormat>
            <Route path="/stock/:stockValue/:stockYear" component={StockDetailsYear}></Route>
        </>
    )
}

function StockDetails(props) {
    return (
        <>
            <h1>Stock Detail for {props.match.params.stockValue}</h1>
        </>
    )
}

function StockDetailsYear(props) {
    return (
        <>
            <h1>Stock Year Detail for {props.match.params.stockYear}</h1>
            <Route path="/stock/:stockValue/:stockYear/:stockOther" component={StockDetailsOther}></Route>
        </>
    )
}


function StockDetailsOther(props) {
    return (
        <>
            <h1>Stock Other Detail for {props.match.params.stockOther}</h1>
        </>
    )
}
function HomeComponent() {
    return (
        <>
            <h1>This is Home Component</h1>
        </>
    )
}