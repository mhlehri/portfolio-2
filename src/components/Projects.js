import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 lg:pt-32 px-5" id="projects">
      <h1 className="font-bold text-2xl lg:text-4xl text-center mb-6 lg:mb-12 border-b-4 border-[#174074] w-2/5 md:w-1/5 sm:pb-5 mx-auto">
        Projects
      </h1>
      <div className="space-y-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 lg:items-start">
          <div className="bg-[#174074] rounded-lg md:w-1/2">
            <Image
              src="/assets/primepress.png"
              alt="primepress"
              className="hover:scale-105 duration-300"
              width="550"
              height="250"
            />
          </div>
          <div className="space-y-4 md:w-2/3">
            <h1 className="text-xl font-bold">Prime Press - News article</h1>
            <p className=" opacity-80">
              Prime Press is a news articles-based web app that provides users
              with up-to-date and engaging news content. With a focus on
              delivering high-quality news articles, Prime Press aims to keep
              users informed about the latest happenings in various fields such
              as politics, technology, entertainment, and more. Stay connected
              and well-informed with Prime Press, your go-to source for reliable
              news articles.
            </p>
            <div className="flex gap-3 flex-wrap">
              <p className="p-1 bg-[#ddd] rounded-lg">TailwindCSS</p>
              <p className="p-1 bg-[#ddd] rounded-lg">React</p>
              <p className="p-1 bg-[#ddd] rounded-lg">express</p>
              <p className="p-1 bg-[#ddd] rounded-lg">mongoose</p>
              <p className="p-1 bg-[#ddd] rounded-lg">mui</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link target="_blank" href="https://primepress.netlify.app">
                <button className="items-center gap-3 md:my-2 font-semibold px-6  py-2 rounded-lg hover:scale-90 duration-300 bg-[#174074]  text-[#fff] border-[#174074] border-2">
                  Live site
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mhlehri/PrimePress"
              >
                <button className="items-center gap-3  flex  md:my-2  font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Client site
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mhlehri/PrimePress-server"
              >
                <button className="items-center gap-3  flex  md:my-2  font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Server site
                </button>
              </Link>
            </div>
            <p className="text-lg font-bold">Project features</p>
            <ul className="list-disc list-inside  opacity-80">
              <li>
                The home page features trending and recent articles, along with
                publisher information, user statistics, and a podcast section.
              </li>
              <li>
                The platform provides all published articles, search and filter
                options, and user-specific routes for adding, managing, and
                subscribing to articles.
              </li>
              <li>
                Admin privileges include a dashboard with user and article
                stats, user management, article approval, and adding new
                publishers.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 lg:items-start">
          <div className="bg-[#174074] rounded-lg md:w-1/2 h-full">
            <Image
              src="/assets/ridewave.png"
              alt="ridewave"
              className="hover:scale-105 duration-300"
              width="550"
              height="250"
            />
          </div>
          <div className="space-y-4 md:w-2/3">
            <h1 className="text-xl font-bold">
              Ride Wave - Ride Share application
            </h1>
            <p className=" opacity-80">
              Ride Wave is a user-friendly web application that offers a diverse
              range of services, including popular service filtering, booking
              management, and interactive maps. With features like user
              authentication, service addition, and editing capabilities, it
              provides a seamless experience for both service providers and
              users. Additionally, the platform ensures convenience through its
              contact form and efficient navigation, making it a go-to
              destination for service-related needs.
            </p>
            <div className="flex gap-3 flex-wrap">
              <p className="p-1 bg-[#ddd] rounded-lg">TailwindCSS</p>
              <p className="p-1 bg-[#ddd] rounded-lg">React</p>
              <p className="p-1 bg-[#ddd] rounded-lg">express</p>
              <p className="p-1 bg-[#ddd] rounded-lg">mongoDB</p>
              <p className="p-1 bg-[#ddd] rounded-lg">Material Tailwind</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link target="_blank" href="https://ridewave1.netlify.app">
                <button className="items-center gap-3   md:my-2 font-semibold px-6  py-2 rounded-lg hover:scale-90 duration-300 bg-[#174074]  text-[#fff] border-[#174074] border-2">
                  Live site
                </button>
              </Link>
              <Link target="_blank" href="https://github.com/mhlehri/RideWave">
                <button className="items-center gap-3  flex  md:my-2 font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Client site
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mhlehri/RideWave-server"
              >
                <button className="items-center gap-3  flex  md:my-2 font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Server site
                </button>
              </Link>
            </div>
            <p className="text-lg font-bold">Project features</p>

            <ul className="list-disc list-inside  opacity-80">
              <li>
                The application features popular services, filtering
                functionality, and a details page for service booking.
              </li>
              <li>
                The platform also includes user authentication, a contact form,
                and interactive maps using React Leaflet.
              </li>
              <li>
                Users can manage their bookings, add new services, and
                edit/delete their own services.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 lg:items-start">
          <div className="bg-[#174074] rounded-lg md:w-1/2">
            <Image
              src="/assets/canno.png"
              alt="canoo"
              className="hover:scale-105 duration-300"
              width="550"
              height="250"
            />
          </div>
          <div className="space-y-4 md:w-2/3">
            <h1 className="text-xl font-bold">Canoo - Car Selling Company</h1>
            <p className=" opacity-80">
              Canoo is a website that offers user registration and
              authentication for accessing restricted sections, along with a
              convenient shopping experience including a cart functionality and
              management options.
            </p>
            <div className="flex gap-3 flex-wrap">
              <p className="p-1 bg-[#ddd] rounded-lg">TailwindCSS</p>
              <p className="p-1 bg-[#ddd] rounded-lg">React</p>
              <p className="p-1 bg-[#ddd] rounded-lg">express</p>
              <p className="p-1 bg-[#ddd] rounded-lg">mongoDB</p>
              <p className="p-1 bg-[#ddd] rounded-lg">Material Tailwind</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link target="_blank" href="https://canoo1.netlify.app">
                <button className="items-center gap-3   md:my-2 font-semibold px-6  py-2 rounded-lg hover:scale-90 duration-300 bg-[#174074]  text-[#fff] border-[#174074] border-2">
                  Live site
                </button>
              </Link>
              <Link target="_blank" href="https://github.com/mhlehri/Canoo">
                <button className="items-center gap-3  flex  md:my-2 font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Client site
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mhlehri/canoo-server"
              >
                <button className="items-center gap-3  flex  md:my-2 font-semibold px-5 py-2 rounded-lg hover:scale-90 duration-300 border-2 border-[#174074]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-[#174074]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Server site
                </button>
              </Link>
            </div>
            <p className="text-lg font-bold">Project features</p>

            <ul className="list-disc list-inside  opacity-80">
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
