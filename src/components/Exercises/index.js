import React, { Fragment } from "react";
import { Grid, Paper, Typography, IconButton } from "material-ui";
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import { Delete, Edit } from "@material-ui/icons";
import { withStyles } from "material-ui/styles";

import Form from "./Form";

const style = theme => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    height: 500,
    overflowY: "auto"
  }
});

export default withStyles(style)(
  ({
    category,
    exercises,
    exercise,
    muscles,
    exercise: {
      id,
      title = "Welcome!",
      description = "Select an exercise from the left."
    },
    onSelect,
    onDelete,
    onSelectEdit,
    onEdit,
    editMode,
    classes
  }) => (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
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
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
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
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {editMode ? (
            <Form muscles={muscles} exercise={exercise} onSubmit={onEdit} />
          ) : (
            <Fragment>
              <Typography variant="display1">{title}</Typography>
              <Typography variant="subheading">{description}</Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
);
