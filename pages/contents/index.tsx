import { GetStaticProps } from "next";
import { useState } from "react";
import Link from "next/link";
import { FormControlLabel, Switch } from "@mui/material";
import { Info } from "../../interfaces/info";
import { sampleInfoData } from "../../public/content";
import Layout from "../../components/Layout";
import List from "../../components/List";
import getRandomItem from "../../utils/getRandomItem";
type Props = {
  items: Info[];
};

const WithStaticProps = ({ items }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Layout title="Contents List |">
      <h1>Contents List</h1>
      <p>You are currently on: /contents</p>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Split view"
      />
      <List items={items} checked={checked} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: Info[] = await getRandomItem(sampleInfoData);
  return { props: { items } };
};

export default WithStaticProps;
