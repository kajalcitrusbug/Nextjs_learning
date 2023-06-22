import Head from "next/head";
import Footer from "components/layout/Footer";

function About() {
  return (
    <>
      <Head>
        <title>Demo Project</title>
        <meta name="description" content="Free content" />
      </Head>
      <h1>About Page</h1>
    </>
  );
}

export default About;

About.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
