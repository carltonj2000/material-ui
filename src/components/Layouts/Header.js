import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";
import Create from "../Exercises/Dialogs/Create";

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Exercises Database
      </Typography>
      <Create muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
