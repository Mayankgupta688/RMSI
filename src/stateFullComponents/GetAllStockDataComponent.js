import { Component } from "react"
import Axios from "axios";

export default class GetAllStockDataComponent extends Component {
    constructor() {
        super();
        this.state = {
            stockList: [],
            stockUrl: ""
        }
        this.updateUrl = this.updateUrl.bind(this);
        this.getStockPrice = this.getStockPrice.bind(this);
    }
    
    updateUrl(event) {
        this.setState({
            ...this.state,
            stockUrl: event.target.value
        })
    }
    
    getStockPrice() {
        this.setState({
            ...this.state,
            stockList: [...this.state.stockList, this.state.stockUrl]
        })
    }
 
    render() {
        return (
            <>
                <input type="text" value={this.state.stockUrl} onChange={this.updateUrl} /><input value="Get Price" type="button" onClick={this.getStockPrice} /><br/><hr/>
                {this.state.stockList.map((stockUrl) => {
                    return <StockDetailComponent stockUrl={stockUrl}></StockDetailComponent>
                })}
            </>
        )
    } 
}

class StockDetailComponent extends Component {
    constructor() {
        super();
        this.state = {
            stockPrice: 0,
            stockName: ""
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {
                this.setState({
                    stockPrice: response.data.data.pricecurrent,
                    stockName: response.data.data.company
                })
            });
        }, 3000)
    }
    
     render() {
        return (
            <>
                <h1>Stock Price for {this.state.stockName} is {this.state.stockPrice}</h1>
                <input type="button" value="Buy" /><br /><hr />
            </>
        )
    } 
}


