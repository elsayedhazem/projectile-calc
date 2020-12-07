import React from "react";
import useForm from "../useForm";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import Results from "./Results";

const useStyles = makeStyles({
  gridMain: {
    height: "70vh",
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
    <Grid container direction="column" className={classes.gridMain}>
      <Form
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Results results={results} />
    </Grid>
  );
}

export default ContentGrid;
