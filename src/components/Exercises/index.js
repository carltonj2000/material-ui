import React, { Fragment } from "react";
import { Grid, Paper, Typography, IconButton } from "material-ui";
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import { Delete } from "@material-ui/icons";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  category,
  exercises,
  exercise: {
    id,
    title = "Welcome!",
    description = "Select an exercise from the left."
  },
  onSelect,
  onDelete
}) => (
  <Grid container>
    <Grid item xs>
      <Paper style={{ ...style.Paper, marginRight: 5 }}>
        {exercises.map(
          ([muscle, exercises]) =>
            !category || category === muscle ? (
              <Fragment key={muscle}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {muscle}
                </Typography>
                <List>
                  {exercises.map(({ title, id }, index) => (
                    <ListItem button key={index} onClick={() => onSelect(id)}>
                      <ListItemText>{title}</ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={{ ...style.Paper, marginLeft: 5 }}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
