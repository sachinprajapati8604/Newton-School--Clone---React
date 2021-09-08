import React from "react";
import { AppBar } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Leaderboard from "../Leaderboard/Leaderboard";
import Arena from "../Arena/Arena";


const NavTab = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "course",
    1: "my-timeline",
    2: "leaderboard",
    3: "milestone",
    4: "arena",
    5: "mockinterview",
    6: "doubts",
    7: "interviews",
    8: "placements",
  };

  const indexToTabName = {
    course: 0,
    my_timeline: 1,
    leaderboard: 2,
    milestone: 3,
    arena: 4,
    mockinterview: 5,
    doubt: 6,
    interviews: 7,
    placements: 8,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <div className="mytabs">

      <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary"
        textColor="primary" className="tabs" >
        <Tab label="Course" />
        <Tab label="My Timeline" />
        <Tab label="Leaderboard" />
        <Tab label="Milestone" />
        <Tab label="Arena" />
        <Tab label="Mock Interview" />
        <Tab label="Doubt" />
        <Tab label="Interviews" />
        <Tab label="Placements" />
      </Tabs>

      {/* {selectedTab === 0 && <Leaderboard />}
      {selectedTab === 1 && <Arena />} */}
    </div>
  );
};

export default NavTab;
