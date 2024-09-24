import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const TrafficAI = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Urbanization and an enormous rise in vehicles on the roads have
            presented extreme levels of traffic congestion and inefficiencies on
            roads. Traffic congestion results in longer commutes, higher
            emissions, and greater frustration for drivers. AI-driven solutions
            for traffic real-time management will help avoid congestion and
            optimize flowing of traffic as well as prevent accidents. AI
            analyzes all available traffic data and adjusts usage of roads
            accordingly; meaning it handles a large range of traffic-related
            issues.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <p className="font-bold pt-4">Input: The system analyzes:</p>
            <Step title="Traffic data: Collected from sensors, GPS data, or cameras to monitor real-time traffic conditions, vehicle speeds, and congestion patterns." />
            <Step title="Environmental factors: Weather conditions, time of day, and road closures that may affect traffic flow." />
            <Step title="Historical data: Past traffic patterns and accident data to provide predictive insights into traffic flow." />

            <p className="font-bold pt-4">Output: The system provides:</p>

            <Step title="Traffic flow optimization: Adjusts traffic signal timing, reroutes vehicles, and offers real-time navigation suggestions to reduce congestion." />
            <Step title="Incident detection and response: Identifies traffic accidents, breakdowns, or unusual slowdowns, alerting relevant authorities or rerouting traffic as needed." />
            <Step title="Predictive insights: Provides data-driven predictions about future traffic conditions based on current patterns, allowing for proactive measures." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Optimize real-time traffic flow: Adjust traffic lights, reroute vehicles, and minimize congestion by analyzing real-time data." />
            <Step title="Provide dynamic traffic control: Make autonomous adjustments to traffic signals and signage to enhance road efficiency and prevent gridlock." />
            <Step title="Ensure safety: Detect accidents or dangerous driving patterns, sending alerts to emergency services or drivers in the area." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              TrafficAI(ML)
            </h2>
            <svg
              className="text-2xl md:text-4xl lg:text-6xl"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_234_877)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M100 100H0V0H7.04252e-06C55.2285 4.82823e-06 100 44.7715 100 100ZM200 100V0C144.772 0 100 44.7715 100 100L200 100ZM100 200H0V100C55.2285 100 100 144.772 100 200ZM100 200H200V100C144.772 100 100 144.772 100 200Z"
                  fill="url(#paint0_linear_234_877)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_234_877"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#B8DBFC" />{" "}
                  <stop offset="1" stop-color="#F8FBFE" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_234_877">
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
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            The system must handle diverse conditions such as varying traffic
            densities, road layouts, and environmental conditions. The model
            should operate efficiently in real time, process large volumes of
            data from multiple sources, and be resilient to unpredictable events
            like accidents or sudden congestion. Ensuring robust, accurate
            decision-making to alleviate traffic issues while maintaining safety
            and efficiency is key.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            The implementation of AI in traffic systems can revolutionize how
            cities handle congestion, optimize routes, and reduce accidents. AI
            solutions can provide predictive insights, real-time traffic
            updates, and dynamic traffic signal controls, making roads safer and
            more efficient. This would result in reduced emissions, shorter
            commute times, and more efficient road usage.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default TrafficAI;
