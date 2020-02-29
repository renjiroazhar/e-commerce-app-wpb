/* eslint-disable import/first */
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { getCart, createOrderRequest } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Radio } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PaymentIcon from "@material-ui/icons/Payment";
import ProductCard from "./ProductCard";

class Checkout extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: ""
  };

  handleChangePaymentMethod = event => {
    this.setState({
      paymentMethod: event.target.value
    });
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes, cart } = this.props;
    const { paymentMethod } = this.state;

    return (
      <Paper className={classes.container}>
        <List className={classes.root}>
          <div className={classes.heading} display="block">
            Detail Pengiriman
          </div>
          <Divider />
          <TextField
            onChange={this.handleChangeInput}
            id="standard-full-width"
            label="Nama Lengkap"
            fullWidth
            name="name"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            onChange={this.handleChangeInput}
            id="standard-full-width"
            label="Email"
            fullWidth
            name="email"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            onChange={this.handleChangeInput}
            id="standard-full-width"
            label="No Telepon"
            fullWidth
            name="phone"
            type="number"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            onChange={this.handleChangeInput}
            id="standard-full-width"
            label="Alamat"
            fullWidth
            name="address"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
        </List>

        <List className={classes.list}>
          <div className={classes.heading} display="block">
            Tanggal Order
          </div>
          <Divider />

          <Typography styles={{ fontWeight: "bold" }} variant="body1">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </Typography>
        </List>

        <List className={classes.list}>
          <div className={classes.heading} display="block">
            Metode Pembayaran
          </div>
          <Divider />

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Radio
                checked={paymentMethod === "Transfer"}
                onChange={this.handleChangePaymentMethod}
                value="Transfer"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <PaymentIcon />
                <div style={{ marginLeft: 10 }}>Transfer ATM</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Radio
                checked={paymentMethod === "COD"}
                onChange={this.handleChangePaymentMethod}
                value="COD"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyIcon /> <div style={{ marginLeft: 10 }}>COD</div>
              </div>
            </div>
          </div>
        </List>

        <List className={classes.list}>
          <div className={classes.heading} display="block">
            Detail Pesanan
          </div>
          <Divider />

          <Typography styles={{ fontWeight: "bold" }} variant="body1">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </Typography>
        </List>

        <List>
          {cart &&
            cart.map(item => {
              return (
                <React.Fragment key={item.id}>
                  {" "}
                  <ProductCard item={item} />
                </React.Fragment>
              );
            })}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCart(state.cart)
});

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ createOrderRequest }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
