import { Link } from "react-router-dom";
import './product.css'

const ProductList = ({ data }) => {
    return (
        data?.map((product, index) => {
            console.log(product);
            return (
                <Link to={`/product/${product?.id}`}>
                    <main class="main bd-grid">
                        <article class="card">
                            <div class="card__img">
                                <img className="img11" src={product?.thumbnail} alt="" />
                            </div>
                            <div class="card__name">
                                <p>Click To more</p>
                            </div>
                            <div className="text-box">
                                <h2 className="item" title={product?.title}>{product?.title?.length > 10 ? `${product?.title.slice(0, 10)}...` : product?.title}</h2>
                                <h4 className="item" title={product?.brand}>{product?.brand?.length > 10 ? `${product?.brand.slice(0, 10)}...` : product?.brand}</h4>
                                <h3 className="item">{product?.category}</h3>
                                <h3 className="price"> ${product?.price}/</h3>
                                <p style={{ fontSize: '12px' }} className="description" title={product?.description}>{product?.description?.length > 20 ? `${product.description.slice(0, 20)}...` : product?.description}</p>
                                <label type="number" for="item-1-quantity">Quantity:</label>
                                <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                                <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                            </div>
                        </article>
                    </main>
                </Link >
            )
        })
    )
}

export default ProductList
