import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "inherit",
    textAlign: "center",
    borderWidth: "0",
  },
  gridItem: {
    margin: theme.spacing(1),
    textAlign: "center",
  },
}));

function Results(props) {
  const { travelTime, maxHeight, horizontalDistance } = props.values;

  const classes = useStyles(theme);
  return (
    <Grid className={classes.gridMain} item container direction="column">
      <Grid item className={classes.gridItem}>
        <Typography variant="h6">Travel Time</Typography>
        <Typography>{travelTime}</Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Typography variant="h6">Max Height</Typography>
        <Typography>{maxHeight}</Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Typography variant="h6">Horizontal Distance Traveled</Typography>
        <Typography>{horizontalDistance}</Typography>
      </Grid>
    </Grid>
  );
}

export default Results;
