import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import PWALogo from "../../assets/196icon_1512486555.jpg";

const styles = () => ({
  container: {
    backgroundColor: "#153b50",
    height: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  progress: {
    color: "#ffffff"
  },
  image: {
    width: 128,
    marginBottom: 32
  }
});

class SplashScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <img alt="tumbasin" src={PWALogo} className={classes.image} />
          </Grid>
          <Grid item>
            <CircularProgress className={classes.progress} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(SplashScreen);
