import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const STMSystem = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Urban areas worldwide face increasing traffic congestion, leading to
            economic losses, increased pollution, and reduced quality of life
            for residents.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex w-full h-full justify-center items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-bold tracking-[-0.015em] text-white">
              Domain: Transportation Engineering
            </h2>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <div>
              <h2 className="  text-left text-balance text-2xl md:text-2xl lg:text-4xl font-extrabold tracking-[-0.015em] text-white">
                Smart Traffic Management Systems for Reducing Urban Congestion
                (Idea)
              </h2>
            </div>
            <svg
              className="text-2xl md:text-4xl lg:text-6xl"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_238_1296)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
                  fill="url(#paint0_linear_238_1296)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_238_1296"
                  x1="20.5"
                  y1="16"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#ACAAFF" />{" "}
                  <stop offset="1" stop-color="#C0E8FF" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_238_1296">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#7C1FA3] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Challenge
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <Step title="Integrating various data sources (traffic cameras, sensors, GPS) to create real-time traffic models" />
            <Step
              title="Developing algorithms that can adapt to changing traffic patterns and unexpected events
"
            />
            <Step title="Ensuring data privacy and security while collecting and analyzing traffic information" />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Implementing smart traffic management systems can optimize traffic
            flow, reduce travel times, and decrease vehicle emissions,
            ultimately improving urban livability and sustainability.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default STMSystem;
