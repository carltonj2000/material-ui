import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "material-ui";
import List, { ListItem, ListItemText } from "material-ui/List";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item xs>
      <Paper style={{ ...style.Paper, marginRight: 5 }}>
        {exercises.map(([muscle, exercises]) => (
          <Fragment key={muscle}>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {muscle}
            </Typography>
            <List>
              {exercises.map(({ title }, index) => (
                <ListItem key={index}>
                  <ListItemText>{title}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={{ ...style.Paper, marginLeft: 5 }}>
        <Typography variant="display1">Welcome!</Typography>
        <Typography variant="subheading">
          Select an exercise from the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
