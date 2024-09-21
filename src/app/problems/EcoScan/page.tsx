import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const EcoScan = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Recycling is essential for environmental sustainability, but many
            individuals face challenges in correctly sorting their waste due to
            the complex and often region-specific recycling rules. Incorrect
            sorting can lead to contamination of recyclable materials, reducing
            the effectiveness of recycling efforts and increasing landfill
            waste. A key barrier to better recycling habits is the difficulty in
            identifying what materials are recyclable and how to properly
            dispose of them.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <Step
              title="Input: The user will capture or upload an image or video of a
              wastage item."
            />
            <Step title="Output: The system will separate each item as: 1) Recyclable 2) Non-recyclable 3) Requires special disposal" />
            <Step title="Additionally, the application should provide localized information about how to dispose of the item based on regional recycling guidelines." />

            <p className="font-bold pt-4">The Model Should:</p>

            <Step title="Aim for a nominal accuracy rate (e.g., 60% or above) in distinguishing items." />
            <Step title="Robust to new and unseen items." />
            <Step title="Integrate seamlessly into a mobile or web application with a user-friendly interface." />

            <p className="font-bold pt-4">The app should also:</p>

            <Step title="Offer a clear breakdown of items within the image or video (if multiple are present)." />
            <Step title="Display actionable information based on the user’s location, such as specific instructions for recycling in their region." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              EcoScan(ML)
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
            The model must handle diverse image inputs, varying lighting
            conditions, and different item orientations while maintaining high
            classification accuracy.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Improving recycling practices can significantly reduce landfill
            waste, conserve natural resources, and lower the energy costs
            associated with producing new materials. An AI-powered tool that
            accurately identifies recyclable materials can empower individuals
            to make informed choices, leading to more effective recycling
            efforts and greater environmental impact.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default EcoScan;
