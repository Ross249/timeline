import React from "react";
import Link from "../components/Link";
import PostCard from "./PostCard";
import { Info } from "../interfaces/info";

type Props = {
  data: Info;
};

const ListItem = ({ data }: Props) => (
  <Link href="/contents/[id]" as={`/contents/${data.id}`}>
    <PostCard data={data} />
  </Link>
);

export default ListItem;
