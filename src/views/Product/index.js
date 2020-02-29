/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchProductDetails } from "./actions";
import ProductDetails from "./ProductDetails";
import { closeSearch } from "../../components/NavBar/actions";
import { isSearchVisible } from "../../components/NavBar/reducer";

class Product extends Component {
  componentDidMount() {
    const { searchVisible } = this.props;
    this.readProduct();

    if (searchVisible) {
      this.props.closeSearch();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.productId !== prevProps.match.params.productId
    ) {
      this.readProduct();
    }
  }

  readProduct() {
    const { dispatch } = this.props;
    dispatch(fetchProductDetails(this.props.match.params.productId));
  }

  render() {
    const { productDetails, loading } = this.props;

    if (loading) {
      return (
        <div>
          <Loader active />
        </div>
      );
    }

    if (_.isNull(productDetails.productDetail)) {
      return <p>Product does not exist</p>;
    }

    return <ProductDetails productDetails={productDetails.productDetail} />;
  }
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  searchVisible: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
  productDetails: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loading: state.productDetails.loading,
  productDetails: state.productDetails,
  searchVisible: isSearchVisible(state.navbar)
});

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ fetchProductDetails, closeSearch }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
