// Write your code here
import { Component } from "react";
import CryptocurrenciesList from "../CryptocurrenciesList";
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: false,
    cryptocurrenciesList: [],
  }

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    this.setState({
      isLoading: true,
    })
    const response = await fetch("https://apis.ccbp.in/crypto-currency-converter")
    const data = await response.json()
    // console.log(data);
    const formattedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      currencyLogo: eachCurrency.currency_logo,
    }))
    this.setState({
      isLoading: false,
      cryptocurrenciesList: formattedData,
    })
  }

  render() {
    const {isLoading, cryptocurrenciesList} = this.state

    return (
      <div className="cryptocurrency-tracker-app">
        {isLoading ? (
          <div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
        ) : (
        <CryptocurrenciesList cryptocurrenciesList={cryptocurrenciesList} />)}
      </div>
    )
  }
}

export default CryptocurrencyTracker
