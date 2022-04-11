import * as React from "react";
import ListItem from "./ListItem";
import { Info } from "../interfaces/info";

type Props = {
  items: Info[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
