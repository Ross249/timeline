import { GetStaticProps } from "next";
import Link from "next/link";

import { Info } from "../../interfaces/info";
import { sampleInfoData } from "../../public/content";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: Info[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Contents List |">
    <h1>Contents List</h1>
    <p>You are currently on: /contents</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Info[] = sampleInfoData;
  return { props: { items } };
};

export default WithStaticProps;
