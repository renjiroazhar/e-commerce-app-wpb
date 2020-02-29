import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import "react-image-gallery/styles/css/image-gallery.css";
import { Header, Card, Icon, Button } from "semantic-ui-react";
import { productPropType } from "../Products/reducer";
import { addProduct } from "../Cart/actions";
import Rating from "../../components/Rating";
import SocialBox from "./SocialBox";
import "./styles.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  getDiets() {
    return this.props.productDetails.diets.join(", ");
  }

  /**
   * Add product to cart.
   * Display a warning if the product has variations and attributes were not selected.
   */
  addItem() {
    const { dispatch } = this.props;
    const { productDetails } = this.props;

    dispatch(
      addProduct(
        productDetails.id,
        productDetails.title,
        Math.round(this.props.productDetails.pricePerServing),
        productDetails.image
      )
    );

    toastr.success(
      "Added to Cart",
      productDetails.title + " was added to your shopping cart."
    );
  }

  render() {
    return (
      <div>
        <Header textAlign="center" className="break-words">
          {this.props.productDetails.title}
        </Header>
        <Card centered>
          <img
            height="300px"
            width="300px"
            src={this.props.productDetails.image}
            alt="Product Detail"
          />
          {this.props.productDetails.rating_count > 0 ? (
            <Card.Content extra>
              <Rating
                rating={Math.round(
                  Number(this.props.productDetails.average_rating)
                )}
                ratingCount={this.props.productDetails.rating_count}
              />
            </Card.Content>
          ) : null}
          {this.props.productDetails.diets.length === 0 ? null : (
            <Card.Content>{this.getDiets()}</Card.Content>
          )}
          {/* <Card.Content>
            {this.props.productDetails.in_stock ? "In Stock" : "Out of Stock"}
          </Card.Content> */}
          {this.props.productDetails.pricePerServing ? (
            <Card.Content>
              <div
                dangerouslySetInnerHTML={{
                  __html: Number(
                    Math.round(this.props.productDetails.pricePerServing) * 1000
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR"
                  })
                }}
              />
            </Card.Content>
          ) : null}
          <Button color="green" fluid onClick={this.addItem}>
            ADD TO CART &nbsp;
            <Icon name="cart" />
          </Button>
        </Card>
        {this.props.productDetails.summary.length === 0 ? null : (
          <Card centered>
            <Card.Content>
              <Card.Header as={Header} size="tiny">
                Description
              </Card.Header>
              <Card.Description>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.productDetails.summary
                  }}
                />
              </Card.Description>
            </Card.Content>
          </Card>
        )}
        <SocialBox permalink={this.props.productDetails.sourceUrl} />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  productDetails: productPropType.isRequired
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ addProduct }, dispatch)
  );
}

export default connect(null, mapDispatchToProps)(ProductDetails);
