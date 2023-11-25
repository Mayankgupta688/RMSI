import { useState, useEffect } from "react";
import Axios from "axios";

export default function CustomHookComponent() {
    debugger;
    var [stockValue, abc] = useStockData("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
    var [stockValueNLC, updatePriceNLC] = useStockData("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC");

    return (
        <>
            <h1>Stock Value is {stockValue} {stockValueNLC}</h1>
            <input type="button" onClick={() => { abc(1000) }} value="Update SBI" />
            <input type="button" onClick={() => { updatePriceNLC(2000) }} value="Update NLC" />
        </>
    )
}

// Running Continuesly. 
function useStockData(inputUrl) {
    var sampleData = 100;
    let [price, setPrice] = useState("0");
    useEffect(() => {
        setInterval(() => {
            Axios.get(inputUrl).then(function (response) {
                setPrice(response.data.data.pricecurrent)
            })
        }, 2000);
    }, [])

    function updatePrice(newPrice) {
        setPrice(newPrice)
    }

    return [price, updatePrice]
}

