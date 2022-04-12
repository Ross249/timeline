import { GetStaticProps } from "next";
import Link from "next/link";

import { Info } from "../../interfaces/info";
import { sampleInfoData } from "../../public/content";
import Layout from "../../components/Layout";
import List from "../../components/List";
import getRandomItem from "../../utils/getRandomItem";
import { Button } from "@mui/material";

type Props = {
  items: Info[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Contents List |">
    <h1>Contents List</h1>
    <p>You are currently on: /contents</p>
    <Button variant="contained" color="primary">
      Split
    </Button>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Info[] = await getRandomItem(sampleInfoData);
  return { props: { items } };
};

export default WithStaticProps;
