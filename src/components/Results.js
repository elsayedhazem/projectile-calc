import React from "react";
import { Grid, Card, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: theme.spacing(0.5),
  },
  card: {
    backgroundColor: "inherit",
  },
}));

function Results(props) {
  let travelTime, maxHeight, horizonatalDistance;

  const classes = useStyles(theme);
  return (
    <Grid item container>
      <Grid item className={classes.gridItem} xs={4}>
        <Card raised className={classes.card}>
          <Typography variant="h6">Travel Time</Typography>
          <Typography>Ayo</Typography>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem} xs={4}>
        <Card raised className={classes.card}>
          <Typography variant="h6">Max Height</Typography>
          <Typography>Ayo</Typography>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem} xs={4}>
        <Card raised className={classes.card}>
          <Typography variant="h6">Horizontal Distance Traveled</Typography>
          <Typography>Ayo</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Results;
