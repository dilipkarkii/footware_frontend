import React from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

const NewArrival = () => {
  return (
    <div className="new_arrivals" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <Heading title="New Arrivals" data-aos="fade-up" />
        </div>
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col text-center">
            <div className="new_arrivals_sorting">
              <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                <li
                  // onClick={() => this.optionClicked("All")}
                  className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center 
                    
                    `}
                >
                  all
                </li>
                <li
                  className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center `}
                  //   onClick={() => this.optionClicked("Women")}
                >
                  women's
                </li>

                <li
                  className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center `}
                  //   onClick={() => this.optionClicked("Men")}
                >
                  men's
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {/* {products &&
            products.slice(0, 8).map((item, index) => {
              return ( */}
          <div className="col-lg-3 col-sm-6" key={"index"} data-aos="zoom-in">
            <ProductCard
            // productItem={item}
            // addToBag={this.props.addToBag}
            />
          </div>
          {/* ); */}
          {/* })} */}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
