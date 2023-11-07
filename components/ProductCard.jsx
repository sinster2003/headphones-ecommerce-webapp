import Link from "next/link";
import { urlFor } from "@/lib/client";

// productObject props destructured

const ProductCard = ({ 
  productObject: {productName, slug, image, price} 
  }) => {
  
  return (
    <div className="product-card">
      <Link href={`/products/${slug.current}`}>
        <img src={urlFor(image[0])} alt={`Image of ${productName}`} className="product-card-image"/>
      </Link>
      <p className="product-card-name">{productName}</p>
      <p className="product-card-price">${price}</p>
    </div>
  )
}

export default ProductCard;