import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridItem: {
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

function Results(props) {
  const { travelTime, maxHeight, horizontalDistance } = props.values;

  const classes = useStyles();
  return (
    <Grid item container direction="column">
      <Grid item className={classes.gridItem}>
        <Box>
          <Typography variant="h4">Travel Time</Typography>
          <Typography>
            <Typography variant="h5">{travelTime} s</Typography>
          </Typography>
        </Box>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Box>
          <Typography variant="h4">Max Height</Typography>
          <Typography>
            <Typography variant="h5">{maxHeight} m</Typography>
          </Typography>
        </Box>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Box>
          <Typography variant="h4">Horizontal Distance Travelled</Typography>
          <Typography>
            <Typography variant="h5">{horizontalDistance} m</Typography>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Results;
