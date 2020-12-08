import React from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme.js";

const useStyles = makeStyles((theme) => ({
  formInput: {
    height: "15%",
  },
  formItem: {
    padding: theme.spacing(0.5),
  },
  formField: {
    width: "100%",
    height: "100%",
  },
}));

function Form(props) {
  const classes = useStyles(theme);

  return (
    <Grid container item className={classes.formInput}>
      <Grid className={classes.formItem} item xs={4}>
        <TextField
          className={classes.formField}
          label="Initial Velocity"
          placeholder="0 m/s"
          type="number"
          name="initialVelocity"
          variant="outlined"
          value={props.inputValues.initialVelocity}
          onChange={props.handleChange}
        />
      </Grid>
      <Grid item className={classes.formItem} xs={4}>
        <TextField
          className={classes.formField}
          label="Angle"
          placeholder="0 degrees"
          type="number"
          name="angle"
          variant="outlined"
          value={props.inputValues.angle}
          onChange={props.handleChange}
        />
      </Grid>
      <Grid item className={classes.formItem} xs={4}>
        <TextField
          className={classes.formField}
          label="Initial Height"
          placeholder="0 m"
          type="number"
          name="initialHeight"
          variant="outlined"
          value={props.inputValues.initialHeight}
          onChange={props.handleChange}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
