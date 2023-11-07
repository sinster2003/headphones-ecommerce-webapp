import React from "react";
import { HeroBanner,ProductCard,FooterBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ productData, bannerData }) => {

  console.log(productData);

  return (
    <>  
      <HeroBanner heroData={bannerData.length && bannerData[0]}/>

      {/* intro */}
      <div className="products-heading">
        <h2>Best Sellers</h2>
        <p><span>Lose Yourself</span> in the music</p>
      </div>

      {/* products info */}
      <div className="products-container">
        {
          productData?.map(product => {
            return <ProductCard key={product.productName} productObject={product}/>
          })
        }
      </div>

      <FooterBanner footerData={bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {

  // fetching products
  const query = '*[_type == "product"]';
  const productData = await client.fetch(query);

  // fetching bannerData
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      productData,
      bannerData
    }
  }
}

export default Home;