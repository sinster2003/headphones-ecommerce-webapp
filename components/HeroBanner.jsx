import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroData }) => {
  return (
    <div className="hero-banner-container">

      <p className="small-text">
        {heroData?.smallText}
      </p>

      <h3 className="mid-text">
        {heroData?.midText}
      </h3>

      <h1 className="large-text">
        {heroData?.largeText1}
      </h1>

      <img src={urlFor(heroData?.image)} alt="hero-banner-image"/>

      <div>
        <Link href={`/banner/${heroData?.product}`}>
          <button type="button" className="hero-banner-button">{heroData?.buttonText}</button>
        </Link>
      </div>

      <div className="description">
        <h5>Description</h5>
        <p>{heroData?.desc}</p>
      </div>

    </div>
  )
}

export default HeroBanner;