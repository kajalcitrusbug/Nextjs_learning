import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const routerData = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    // routerData.replace("/product");
    // routerData.push("/product");
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product" legacyBehavior>
        <a>Product</a>
      </Link>
      <br />
      <Link href="/posts" legacyBehavior>
        <a>Posts</a>
      </Link>
      <br />
      <button
        style={{ backgroundColor: "blueviolet", padding: 10 }}
        onClick={handleClick()}
      >
        Place order
      </button>
    </div>
  );
}
export default Home;
