import React from "react";
import useForm from "../useForm";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import Results from "./Results";

const useStyles = makeStyles({
  gridMain: {
    height: "75vh",
  },
});

function ContentGrid(props) {
  const classes = useStyles();

  const { inputValues, outputValues, handleChange } = useForm();

  return (
    <Grid container direction="column" className={classes.gridMain}>
      <Form inputValues={inputValues} handleChange={handleChange} />
      <Results values={outputValues} />
    </Grid>
  );
}

export default ContentGrid;
