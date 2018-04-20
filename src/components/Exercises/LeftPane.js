import React from "react";
import { Paper } from "material-ui";

export default props => (
  <Paper style={{ ...props.style, marginRight: 5 }}>
    <p>Left Pane</p>
  </Paper>
);
