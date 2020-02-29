import PropTypes from "prop-types";
import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import { productPropType } from "../views/Products/reducer";

class ProductsList extends Component {
  render() {
    const { imageSource, products, title } = this.props;
    const list = products.map(element => (
      <ProductCard
        key={element.id}
        id={element.id}
        src={imageSource ? imageSource + element.image : element.image}
        name={element.title}
        price={Math.round(element.pricePerServing)}
        diets={element.diets}
      />
    ));

    return (
      <div>
        <Header textAlign="center">{title}</Header>
        {list}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ProductsList;
