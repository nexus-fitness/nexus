import Head from "next/head";
import Layout from "../layout";
import { H1, Paragraph } from '../typography'; 

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Nexus Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1 className="mb-4">Welcome to Nexus Fitness</H1>
      <Paragraph>
        Get started in <em>minutes</em>.
      </Paragraph>
    </Layout>
  );
}
