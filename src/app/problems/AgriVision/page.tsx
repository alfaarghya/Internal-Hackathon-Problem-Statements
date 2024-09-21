import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const AgriVision = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Precision agriculture leverages technology to optimize farming
            practices, but many small-scale farmers lack access to advanced
            tools and expertise. Monitoring crop health and soil conditions is
            crucial for maximizing yield and minimizing resource use, yet
            traditional methods often require costly technology and specialized
            knowledge. Accessible technology for analyzing agricultural data can
            greatly benefit farmers looking to improve their practices and
            outcomes.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <p className="font-bold pt-4">Input: The system analyzes:</p>
            <Step title="Weather data: Real-time and historical data on weather conditions affecting agriculture." />
            <Step title="Soil sensor data: Measurements of soil moisture, nutrient levels, and other parameters." />

            <p className="font-bold pt-4">Output: The system provides:</p>

            <Step title="Crop health assessment: Detects diseases, pests, and nutrient deficiencies based on weather and soil data." />
            <Step title="Soil condition monitoring: Evaluates soil moisture levels, nutrient content, and other parameters from sensor data." />
            <Step title="Resource optimization recommendations: Offers actionable suggestions for irrigation, fertilization, and pest control based on integrated data." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Process multi-source data: Combine weather and soil sensor information to deliver comprehensive insights." />
            <Step title="Deliver actionable insights: Provide practical recommendations for improving crop management and resource use." />
            <Step title="Be accessible to farmers: Ensure the system is user-friendly and provides valuable information without requiring extensive technical expertise." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              AgriVision(ML)
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
            The system must effectively analyze and integrate data from
            different sources, including weather conditions and soil
            measurements. It should handle variations in data quality and
            environmental factors while ensuring that recommendations are
            practical and easily actionable for farmers. Making the system
            accessible and useful to those with varying levels of technological
            expertise is crucial for its success and adoption.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            A system that provides actionable insights into crop health and soil
            conditions can help farmers make informed decisions, boost crop
            yields, and reduce environmental impact. By democratizing access to
            precision agriculture tools, small-scale farmers can utilize
            advanced technology to enhance their farming practices and achieve
            greater sustainability.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default AgriVision;
