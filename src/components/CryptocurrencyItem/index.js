// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props 
  const {currencyLogo, currencyName, usdValue, euroValue,id} = data
  return (
    <li className="currency-container">
      <div className="currency-wrap">
        <img
          src={currencyLogo}
          alt={id}
          className="currency-image"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
