import { useState, useEffect } from "react";
import Axios from "axios";

export default function CustomHookComponent() {
    var [stockValue, setStockValue] = useState("0");

    useEffect(() => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then(function (response) {
                setStockValue(response.data.data.pricecurrent)
            })
        }, 2000)
    }, [])

    return (
        <h1>Stock Value is {stockValue}</h1>
    )
}

