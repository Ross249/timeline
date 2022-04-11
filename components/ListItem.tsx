import React from "react";
import Link from "../components/Link";

import { Info } from "../interfaces/info";

type Props = {
  data: Info;
};

const ListItem = ({ data }: Props) => (
  <Link href="/contents/[id]" as={`/contents/${data.id}`}>
    <a>
      {data.id}: {data.first_name}
    </a>
  </Link>
);

export default ListItem;
