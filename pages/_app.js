import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div className="content">
        <Component {...pageProps} />
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
