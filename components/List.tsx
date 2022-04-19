import * as React from "react";
import { Info } from "../interfaces/info";
import { Box } from "@mui/material";
import Link from "../components/Link";
import PostCard from "./PostCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Slide from "@mui/material/Slide";

type Props = {
  items: Info[];
  checked: boolean;
};

const List = ({ items, checked }: Props) => {
  return !checked ? (
    <Box sx={{ width: "70%" }}>
      <Timeline position="alternate">
        {items.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ maxWidth: "100%" }}>
              <Link href="/contents/[id]" as={`/contents/${item.id}`}>
                <PostCard data={item} />
              </Link>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  ) : (
    <Box
      sx={{
        width: "140%",
        display: "flex",
      }}
    >
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <Timeline>
          {items.map((item, index) => {
            let isEvent = index % 2 === 0;
            if (isEvent) {
              return (
                <TimelineItem key={item.id}>
                  <TimelineContent sx={{ maxWidth: "100%" }}>
                    <Link href="/contents/[id]" as={`/contents/${item.id}`}>
                      <PostCard data={item} />
                    </Link>
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                </TimelineItem>
              );
            } else {
              return null;
            }
          })}
        </Timeline>
      </Slide>
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <Timeline position="left">
          {items.map((item, index) => {
            let isEvent = index % 2 !== 0;
            if (isEvent) {
              return (
                <TimelineItem key={item.id}>
                  <TimelineContent sx={{ maxWidth: "100%" }}>
                    <Link href="/contents/[id]" as={`/contents/${item.id}`}>
                      <PostCard data={item} />
                    </Link>
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                </TimelineItem>
              );
            } else {
              return null;
            }
          })}
        </Timeline>
      </Slide>
    </Box>
  );
};

export default List;
