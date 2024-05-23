import React, { useState, useEffect } from "react";
import "./Carousel.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import Categories from "../Categories/Categories";
import CarouselPages from "./CarouselPages";

const Carousel = ({ data, type }) => {
  const [targetType, setTargetType] = useState(`#${type}Carousel`);
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    // Define the target carousel dynamically based on the type
    setTargetType(`#${type}Carousel`);

    // Split data into batches of six
    const tempBatches = [];
    for (let i = 0; i < data.length; i += 6) {
      tempBatches.push(data.slice(i, i + 6));
    }
    setBatches(tempBatches);
  }, [data, type]);


  console.log(batches);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="fw-semibold">{type}</h2>
            <div
              id={targetType.substring(1)} // Remove the '#' for id
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                {batches.map((_, index) => (
                  <li
                    key={index}
                    data-target={targetType} // Use targetType dynamically
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                {batches.map((batch, index) => (
                  <div
                    key={index}
                    className={`item carousel-item ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <div className="row">
                      {batch.map((item) => (
                        <div className="col-sm-2" key={item.id}>
                          {(() => {
                            switch (type) {
                              case "Products":
                                return <SingleProduct product={item} />;
                              case "Categories":
                                return <Categories category={item} />;
                              case "CategoryVise":
                                return <SingleProduct product={item} />;
                                
                              default:
                                return <SingleProduct product={item} />; // Render default component for other types
                            }
                          })()}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* <!-- Carousel controls --> */}
              <a
                className="carousel-control-prev"
                href={targetType}
                data-slide="prev"
              >
                <i className="bx bx-chevron-left bx-sm"></i>
              </a>
              <a
                className="carousel-control-next"
                href={targetType}
                data-slide="next"
              >
                <i className="bx bx-chevron-right bx-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;