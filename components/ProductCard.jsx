import Link from "next/link";
import { urlFor } from "@/lib/client";
import { useStateContext } from "@/context/AppContextProvider";

// productObject props destructured

const ProductCard = ({ 
  productObject: {productName, slug, image, price} 
  }) => {

    const {setQty} = useStateContext();
  
  return (
    <div className="product-card">
      <Link href={`/products/${slug.current}`} onClick={() => setQty(1)}>
        <img src={urlFor(image[0])} alt={`Image of ${productName}`} className="product-card-image"/>
      </Link>
      <p className="product-card-name">{productName}</p>
      <p className="product-card-price">${price}</p>
    </div>
  )
}

export default ProductCard;