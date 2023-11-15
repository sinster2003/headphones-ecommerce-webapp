import { useEffect, useRef, useState } from "react";
import { ProductCard } from "../../../components";
import { client, urlFor } from "../../../lib/client";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useStateContext } from "../../../context/AppContextProvider";

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { qty, incQty, decQty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-details-container">
        <div>
          <div className="images-container">
            <div className="image-main">
              <img
                src={urlFor(product?.image?.[index])}
                alt={product?.productName}
              />
            </div>
            <div className="small-image-wrapper">
              {product?.image?.map((image, i) => (
                <img
                  key={i}
                  src={urlFor(image)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-details">
          <h2>{product.productName}</h2>
          <div className="icons-star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span>(20)</span>
          </div>
          <div className="details">
            <h5>Details</h5>
            <p>{product.details}</p>
          </div>
          <h3>${product.price}</h3>
          <div className="quantity">
            <h4>Quantity: </h4>
            <div className="quantity-bar">
              <button onClick={decQty}>
                <AiOutlineMinus />
              </button>
              <span>{qty}</span>
              <button onClick={incQty}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => onAdd(product, qty)}
              className="hero-banner-button add-to-cart-btn"
            >
              Add To Cart
            </button>
            <button
              className="hero-banner-button buy-now"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="you-may-like">
        <h2>You May Also Like</h2>
        <div className="infinite-flex-div">
          <div className="product-card-details-wrapper">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.productName}
                  productObject={product}
                  className="product-card-details"
                />
              );
            })}
          </div>
          {/* infinite scrolling */}
          <div className="product-card-details-wrapper">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.productName}
                  productObject={product}
                  className="product-card-details"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* getstaticpaths */

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  // array of slug objects
  const products = await client.fetch(query);

  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug.current,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

/* to get the static data from CMS of products */
export const getStaticProps = async ({ params: { slug } }) => {
  // dynamic slug

  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
