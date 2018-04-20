import React from "react";
import { Paper } from "material-ui";
import Tabs, { Tab } from "material-ui/Tabs";

export default ({ category, muscles, onSelect }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;
  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => <Tab key={muscle} label={muscle} />)}
      </Tabs>
    </Paper>
  );
};
