import { Card, CardHeader } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import { Info } from "../interfaces/info";
import { red } from "@mui/material/colors";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

type Props = {
  data: Info;
};

const PostCard = ({ data }: Props) => {
  return (
    <Card sx={{ maxWidth: "100%", mb: 3 }} key={data.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.first_name[0]}
          </Avatar>
        }
        title={data.first_name}
        subheader={data.create_time}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt="Random image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.slogan}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
