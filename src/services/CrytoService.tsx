import React, {Component} from "react";
import axios from 'axios';

interface Coin {
    name: string;
    quote: JSON;
}
var responseData = "";
class CryptoService extends Component{
    state = {
        Crypto: []
    }

    componentDidMount() {
        this.fetchData();
    }
    
    async fetchData(){
        try {
            let res = await axios.get('https://api.coingecko.com/api/v3/search/trending', {
                headers: { 'accept': 'application/json'}
            });
            responseData = res.data.coins;
        } catch (error) {
            console.log(error);
        }
        console.log(responseData)

    }

    
    render() {
        return (
            <div>asdf</div>
        )
    }
}
export default CryptoService
