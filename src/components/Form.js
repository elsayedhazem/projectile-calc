import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    flexDirection: "coulmn",
  },
});

function Form(props) {
  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <TextField
        label="Initial Velocity"
        placeholder="0 m/s"
        type="number"
        name="initialVelocity"
        variant="outlined"
        value={props.inputValues.initialVelocity}
        onChange={props.handleChange}
      />
      <TextField
        label="Angle"
        placeholder="0 degrees"
        type="number"
        name="angle"
        variant="outlined"
        value={props.inputValues.angle}
        onChange={props.handleChange}
      />
      <TextField
        label="Initial Height"
        placeholder="0 m"
        type="number"
        name="initialHeight"
        variant="outlined"
        value={props.inputValues.initialHeight}
        onChange={props.handleChange}
      />
      <Button variant="outlined" type="submit">
        Calculate
      </Button>
    </form>
  );
}

export default Form;
