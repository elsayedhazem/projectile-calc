import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "25vh",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});

function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Projectile Motion Calculator
      </Typography>
    </div>
  );
}

export default Title;
