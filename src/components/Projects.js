import Image from "next/image";

const Projects = () => {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <h1 className="font-medium text-4xl text-center mb-12 border-b-4 border-[#174074] w-1/5 pb-5 mx-auto">
        Projects
      </h1>
      <div className="space-y-5">
        <div className="flex justify-center gap-20 items-center">
          <Image src="" alt="" width="250" height="250" />
          <div className="space-y-4 w-2/3">
            <h1 className="text-3xl font-bold">Canoo - Car Selling Company</h1>
            <p className="text-xl opacity-95">
              Canoo is a website that offers user registration and
              authentication for accessing restricted sections, along with a
              convenient shopping experience including a cart functionality and
              management options.
            </p>
            <ul className="list-disc list-inside text-xl opacity-80">
              <li>
                The system allows users to register with personal details, log
                in securely, and access restricted areas of the website.
              </li>
              <li>
                It provides a shopping cart feature for users to browse, add,
                and manage selected items.
              </li>
              <li>
                Users can easily modify their cart by adding, removing, or
                updating product quantities.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center">
          <div className="bg-[#174074] rounded-lg w-1/2">
            <Image
              src="/assets/ridewave.png"
              alt="canoo"
              className="hover:scale-105 duration-300"
              width="550"
              height="250"
            />
          </div>
          <div className="space-y-4 w-2/3">
            <h1 className="text-3xl font-bold">Canoo - Car Selling Company</h1>
            <p className="text-xl opacity-95">
              Canoo is a website that offers user registration and
              authentication for accessing restricted sections, along with a
              convenient shopping experience including a cart functionality and
              management options.
            </p>
            <ul className="list-disc list-inside text-xl opacity-80">
              <li>
                The system allows users to register with personal details, log
                in securely, and access restricted areas of the website.
              </li>
              <li>
                It provides a shopping cart feature for users to browse, add,
                and manage selected items.
              </li>
              <li>
                Users can easily modify their cart by adding, removing, or
                updating product quantities.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center">
          <div className="bg-[#174074] rounded-lg w-1/2">
            <Image
              src="/assets/canno.png"
              alt="canoo"
              className="hover:scale-105 duration-300"
              width="550"
              height="250"
            />
          </div>{" "}
          <div className="space-y-4 w-2/3">
            <h1 className="text-3xl font-bold">Canoo - Car Selling Company</h1>
            <p className="text-xl opacity-95">
              Canoo is a website that offers user registration and
              authentication for accessing restricted sections, along with a
              convenient shopping experience including a cart functionality and
              management options.
            </p>
            <ul className="list-disc list-inside text-xl opacity-80">
              <li>
                The system allows users to register with personal details, log
                in securely, and access restricted areas of the website.
              </li>
              <li>
                It provides a shopping cart feature for users to browse, add,
                and manage selected items.
              </li>
              <li>
                Users can easily modify their cart by adding, removing, or
                updating product quantities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
