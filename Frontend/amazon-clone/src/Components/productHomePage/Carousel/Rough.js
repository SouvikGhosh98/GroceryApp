import React from "react";
import "./Carousel.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import Categories from "../Categories/Categories";
import CarouselPages from "./CarouselPages"; 

const Carousel = ({ data, type }) => {

  const targetType = type === "Products" ? "#myProductCarousel" : "#myCategoryCarousel";

  // Split data into batches of six
  const batches = [];
  for (let i = 0; i < data.length; i += 6) {
    batches.push(data.slice(i, i + 6));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>
              {type}
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                {batches.map((batch, index) => (
                  <li
                    key={index}
                    data-target="#myCarousel"
                    data-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                  ></li>
                ))}
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                {batches.map((batch, index) => (
                  <div key={index} className={`item carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {batch.map(item => (
                        <div className="col-md-2" key={item.id}>
                          {type === 'Products' ? (
                            <SingleProduct product={item} />
                          ) : (
                            <Categories category={item} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className='bx bx-chevron-left bx-sm'></i>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className='bx bx-chevron-right bx-sm'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;