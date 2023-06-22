/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
function PetsPage() {
  return (
    <div>
      <Image
        src={require(`../public/1.jpeg`)}
        alt={`-image`}
        width={280}
        height="420"
        placeholder="blur"
      />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            {console.log(`${path}.jpeg`)}
            <Image
              src={require(`../public/${path}.jpeg`)}
              alt={`${path}-image`}
              width={280}
              height="420"
            />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
