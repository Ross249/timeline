import * as React from "react";
import ListItem from "./ListItem";
import { Info } from "../interfaces/info";
import { Box } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

type Props = {
  items: Info[];
};

const List = ({ items }: Props) => (
  <Box>
    <Timeline position="alternate">
      {items.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ width: "100%" }}>
            <ListItem data={item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default List;
