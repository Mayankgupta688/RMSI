import Axios from "axios";
import { useState, useEffect } from "react";
 
export default function UseStockComponent() {
    var [stockPrice, setstockPrice] = useState(0);
    
    let [componentStyle, setComponentStyle] = useState({
        color: "black"
    });
    
    function changeDefaultStyling(newColor) {
        setComponentStyle({
            color: newColor
        });
    }
    
    useEffect(() => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                setstockPrice((stockPrice) => {
                    let newPrice = response.data.data.pricecurrent;
                    if (newPrice > stockPrice) {
                        changeDefaultStyling("green")
                    } else if (newPrice < stockPrice) {
                        changeDefaultStyling("red")
                    }
                    return newPrice
                });
            })
        }, 3000);
    }, [])
    
    return (
        <>
            <label>Stock Value is <b style={componentStyle}>{stockPrice}</b></label><br /><br />
            <input type="button" onClick={changeDefaultStyling} value="Change Theme" />
        </>
    )
}