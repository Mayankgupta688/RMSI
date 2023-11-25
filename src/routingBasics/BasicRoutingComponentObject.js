import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function BasicRoutingComponent() {
    
    var myRoutes = [{
        route: "/",
        component: HomeComponent
    }, {
        route: "/help",
        component: HelpComponent
    }, {
        route: "/about",
        component: AboutComponent
    }];
    return (
        <BrowserRouter>
            <>
                <nav>
                    <a style={{margin: "5px"}} href="/">Home</a>
                    <a style={{margin: "5px"}} href="/help">Help</a>
                    <a style={{margin: "5px"}} href="/about">About</a>
                </nav>
                
                <h3>Below is React Navigation</h3>
                <nav>
                    <Link style={{margin: "5px"}} to="/">Home</Link>
                    <Link style={{margin: "5px"}} to="/help">Help</Link>
                    <Link style={{ margin: "5px" }} to="/about">About</Link>
                    <Link style={{margin: "5px"}} to="/random">Random</Link>
                </nav>
                
                <h1>This is my Single Page Application</h1><hr/>
                
                <div>
                    <Switch>
                        {myRoutes.map((navigation) => {
                            return <Route exact path={navigation.route} component={navigation.component}></Route>
                        })}
                        <Route path="*" component={PageNotFound}></Route>
                    </Switch>
                </div><hr />
            
                <h2>This is my Footer</h2>
            </>
        </BrowserRouter>
    )
}

// https://prod.liveshare.vsengsaas.visualstudio.com/join?B9DEF9AA53F239AD22B7AA9D86146FF0F6B8

function HomeComponent() {
    return <h1>This is Home Component</h1>
}

function HelpComponent() {
    return <h1>This is Help Component</h1>
}

function AboutComponent() {
    return <h1>This is About Component</h1>
}

function PageNotFound() {
    return <h1>404: Page Not Found....</h1>
}