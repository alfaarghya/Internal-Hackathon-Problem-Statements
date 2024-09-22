import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const PDDetection = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Pests and crop diseases can cause devastating losses for farmers,
            often spreading before they are detected. IoT-based systems can
            monitor crops in real-time, using sensors and AI to identify early
            signs of infestation or disease, enabling timely interventions.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex w-full h-full justify-center items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-bold tracking-[-0.015em] text-white">
              Domain: Agriculture
            </h2>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <div>
              <h2 className="  text-left text-balance text-2xl md:text-2xl lg:text-4xl font-extrabold tracking-[-0.015em] text-white">
                IoT-Enabled Pest and Disease Detection in Crops(Idea)
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
            <Step title="Creating accurate systems that detect a wide range of pests and diseases" />
            <Step title="Integrating AI-driven analysis for real-time disease and pest prediction" />
            <Step title="Ensuring the affordability and ease of use for farmers with limited technical knowledge" />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Early detection reduces the need for chemical pesticides, minimizes
            crop losses, and leads to healthier produce. This contributes to
            more sustainable agricultural practices while improving farmers’
            profitability and food security.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default PDDetection;
