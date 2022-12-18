import {Link} from 'react-router-dom'
import './index.css'

const SimilarProductItem = props => {
  const {similarProductDetails} = props
  const {title, id, imageUrl, brand, price, rating} = similarProductDetails

  return (
    <Link to={`/products/${id}`} className="similar-product-link">
      <li className="similar-products-list-container" key={title}>
        <img
          src={imageUrl}
          alt="similar product"
          className="similar-products-logo"
        />
        <p className="similar-product-title">{title}</p>
        <p className="similar-product-brand">by {brand}</p>
        <div className="similar-products-rating-container">
          <p className="similar-product-price">Rs {price}</p>
          <div className="similar-products-button-rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
  )
}

export default SimilarProductItem
