import Product from "@/components/UI/Product";

// const getData = async () => {
//   const res = await fetch("http://localhost:5000/watches", {
//     cache: "force-cache"
//   });
//   const data = await res.json();

//   return data
// }

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    next: {
      revalidate: 5
    }
  });
  const data = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {
          data.map((product) => <Product key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default HomePage;
