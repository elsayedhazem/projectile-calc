import React from "react";
import useForm from "../useForm";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";

const useStyles = makeStyles({
  gridMain: {
    height: "70vh",
  },
  gridLeft: {
    height: "100%",
    display: "flex",
  },
});

function ContentGrid(props) {
  const classes = useStyles();

  const { inputValues, results, handleChange, handleSubmit } = useForm({
    initialVelocity: "",
    angle: "",
    initialHeight: "",
  });

  return (
    <Grid className={classes.gridMain} container>
      <Grid className={classes.gridLeft} item container md={6}>
        <Form
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Grid>
    </Grid>
  );
}

export default ContentGrid;
