import Link from "next/link";
import { urlFor } from "@/lib/client";

const FooterBanner = ({footerData}) => {

  return (
    <div className="footer-banner-data">

      <div className="left">
        <p className="discount">
          {footerData?.discount}
        </p>

        <h3 className="large-text">
          {footerData?.largeText1}
        </h3>

        <h1 className="large-text">
          {footerData?.largeText2}
        </h1>

        <p className="sale-time">
          {footerData?.saleTime}
        </p>
      </div>

      <img src={urlFor(footerData?.image)} alt="hero-banner-image"/>

      <div className="right">
        <p className="small-text">{footerData?.smallText}</p>
        <p className="footer-mid-text">{footerData?.midText}</p>
        <p className="desc">{footerData?.desc}</p>
        <div>
          <Link href={`/products/${footerData?.product}`}>
            <button type="button" className="footer-banner-button">{footerData?.buttonText}</button>
          </Link>
        </div> 
      </div>

    </div>
  )
}

export default FooterBanner;