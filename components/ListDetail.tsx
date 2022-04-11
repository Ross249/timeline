import * as React from "react";

import { Info } from "../interfaces/info";

type ListDetailProps = {
  item: Info;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.first_name}</h1>
    <p>ID: {user.id}</p>
    <p>Slogn: {user.slogan}</p>
    <p>Create_time: {user.create_time}</p>
  </div>
);

export default ListDetail;
