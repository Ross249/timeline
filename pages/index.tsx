import Link from "next/link";
import Layout from "../components/Layout";
const IndexPage = () => {
  return (
    <Layout title="Home |">
      <h1>Hello TimeLine 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
