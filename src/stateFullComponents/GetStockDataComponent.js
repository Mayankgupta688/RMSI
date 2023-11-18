import { Component } from "react"
import Axios from "axios";

export default class GetStockDataComponent extends Component {
    constructor() {
        super();
        this.state = {
            stockPrice: 0,
            stockName: "",
            stockUrl: ""
        }
        this.updateUrl = this.updateUrl.bind(this);
        this.getStockPrice = this.getStockPrice.bind(this);
    }
    
    getStockPrice = () => {
        setInterval(() => {
            Axios.get(this.state.stockUrl).then((response) => {
                this.setState({
                    ...this.state,
                    stockPrice: response.data.data.pricecurrent,
                    stockName: response.data.data.company
                })
            });
        }, 3000)
    }
    
    updateUrl(event) {
        this.setState({
            ...this.state,
            stockUrl: event.target.value
        })
    }
 
    render() {
        return (
            <>
                <input type="text" value={this.state.stockUrl} onChange={this.updateUrl} /><input value="Get Price" type="button" onClick={this.getStockPrice} />
                {this.state.stockPrice != 0 && <h1>Stock Price for "{this.state.stockName}" is: {this.state.stockPrice}</h1>}
            </>
        )
    } 
}


