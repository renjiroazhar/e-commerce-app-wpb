import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
}

export default withStyles(styles)(Loading);
