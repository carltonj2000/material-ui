import React from "react";
import { Paper } from "material-ui";
import Tabs, { Tab } from "material-ui/Tabs";

export default ({ muscles }) => (
  <Paper>
    <Tabs
      value={0}
      onChange={this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(muscle => <Tab key={muscle} label={muscle} />)}
    </Tabs>
  </Paper>
);
