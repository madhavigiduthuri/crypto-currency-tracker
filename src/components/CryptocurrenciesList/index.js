// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
    const {cryptocurrenciesList} = props
    return (
        <div className="cryptocurrencieslist-container">
          <h1 className="title">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency-image"
          />
          <ul className="cryptocurrency-item-app">
            <li className='list-header'>
              <h1 className="title-left">Coin Type</h1>
              <h1 className="title-right">USD</h1>
              <h1 className="title-right">Euro</h1>
            </li>
            {cryptocurrenciesList.map(eachCurrency => (
              <CryptocurrencyItem key={eachCurrency.id} data={eachCurrency} />
            ))}
          </ul>
        </div>
    )
}

export default CryptocurrenciesList
