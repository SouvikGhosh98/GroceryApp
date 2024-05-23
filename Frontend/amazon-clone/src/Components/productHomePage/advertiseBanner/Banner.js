import React from "react";
import "./Banner.css";
import productImages from "../../../images/product-thumb-1.png";
import ad2 from '../../../images/ad-image-1.png';
import ad3 from '../../../images/ad-image-2.png'


const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="larger">

          <div className="swiper-slide">
            <div className="row banner-content">
              <div className="content-wrapper">
                <div className="categories">100% natural</div>
                <h3 className="display-4">Fresh Smoothie & Summer Juice</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim massa diam elementum.
                </p>
                <button
                  
                  className="btn btn-7"
                >
                  Shop Now
                </button>
              </div>
              <div className="img-wrapper">
                <img src={productImages} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>


        
        <div className="smaller">
          <div className="smaller1">
            
          <div className="swiper-slide">
            <div className="row banner-content py-5">
              <div className="content-wrapper col-md-10">
                <div className="categories">100% Off</div>
                <h3 className="display-6">Fresh & Summer Juice</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim massa diam elementum.
                </p> */}
                <button
                  
                  className="btn btn-7"
                >
                  Shop Now <i className='bx bx-right-arrow-alt mx-2' ></i>
                </button>
              </div>
              <div className="img-wrapper">
                <img src={ad2} className="img-fluid" />
              </div>
            </div>
          </div>

          </div>



          <div className="smaller2">

          <div className="swiper-slide">
            <div className="row banner-content py-5">
              <div className="content-wrapper col-md-10">
                <div className="categories">100% Off</div>
                <h3 className="display-6">Fresh & Summer Juice</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dignissim massa diam elementum.
                </p> */}
                <button
                  
                  className="btn btn-7"
                >
                  Shop Now <i className='bx bx-right-arrow-alt mx-2' ></i>
                </button>
              </div>
              <div className="img-wrapper">
                <img src={ad3} className="img-fluid" />
              </div>
            </div>
          </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
