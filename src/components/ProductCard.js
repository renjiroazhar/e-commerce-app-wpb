/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Card, Button, Header, Grid } from "semantic-ui-react";
import CircularImage from "./CircularImage";

class ProductCard extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Grid>
            <Grid.Column width={5}>
              <Link to={"/product/" + this.props.id}>
                <CircularImage src={this.props.src} />
              </Link>
            </Grid.Column>
            <Grid.Column width={11}>
              <Card.Header className="break-words">
                {this.props.name}
              </Card.Header>

              {this.props.price ? (
                <Header as="h3" color="green">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: Number(
                        Math.round(Number(this.props.price)) * 1000
                      ).toLocaleString("ID-id", {
                        currency: "IDR",
                        style: "currency"
                      })
                    }}
                  />
                </Header>
              ) : null}
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          <Link to={"/product/" + this.props.id}>
            <Button color="green" compact>
              Shop Now &gt;
            </Button>
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ProductCard;
