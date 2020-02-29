import React from "react";
import PropTypes from "prop-types";
import { Grid, Card, Header } from "semantic-ui-react";
import { cartProductPropType } from "./reducer";
import Checkout from "./Checkout";

const CartSummary = props => (
  <Card centered className="cart-summary">
    <Card.Content>
      <Card.Header as={Header} textAlign="left">
        Order Summary
      </Card.Header>
      <Grid doubling>
        <Grid.Row>
          <Grid.Column width={6}>Total</Grid.Column>
          <Grid.Column textAlign="right" width={10}>
            <div
              style={{ fontWeight: 600 }}
              dangerouslySetInnerHTML={{
                __html: Number(props.total).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                })
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Checkout cart={props.cart} />
    </Card.Content>
  </Card>
);

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(cartProductPropType).isRequired
};

export default CartSummary;
