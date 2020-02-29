/* eslint-disable import/first */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Form, Button } from "semantic-ui-react";
import { cartProductPropType } from "./reducer";
import { Link } from "react-router-dom";

class Checkout extends Component {
  getItems() {
    const items = this.props.cart;

    return JSON.stringify(
      items.map(item => ({
        id: item.id,
        quantity: item.quantity,
        variationId: _.isNil(item.variationId) ? "" : item.variationId
      }))
    );
  }

  render() {
    return (
      <Form>
        <Form.Input type="hidden" name="items" value={this.getItems()} />
        <Link to="/checkout">
          <Button color="green" fluid type="submit">
            Checkout
          </Button>
        </Link>
      </Form>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(cartProductPropType).isRequired
};

export default Checkout;
