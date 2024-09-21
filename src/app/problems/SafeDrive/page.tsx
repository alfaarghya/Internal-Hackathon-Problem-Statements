import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const SafeDrive = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Road accidents are a leading cause of injury and death globally.
            While vehicle safety systems can monitor some aspects of driving,
            integrating data from multiple sources, including video feeds and
            sensor data, for real-time accident detection is still a challenge.
            Detecting accidents accurately and promptly can significantly
            enhance emergency response and potentially save lives.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <p className="font-bold pt-4">Input: The system analyzes:</p>
            <Step title="Video: Captured from cameras or roadside surveillance, providing real-time visual information of the traffic environment." />
            <Step title="Images: Static snapshots from the video feed or additional sources that offer detailed views of accident scenes." />

            <p className="font-bold pt-4">Output: The system provides:</p>

            <Step title="Accident detection: Determines whether an accident has occurred based on the visual data, indicating the presence of a collision or sudden impact." />
            <Step title="Incident alerts: Sends real-time notifications to emergency services or relevant stakeholders if an accident is detected." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Accurately detect accidents: Achieve high precision in identifying collision events, reducing false positives and negatives." />
            <Step title="Process video and image data: Operate effectively with real-time video streams and image data to detect accidents promptly." />
            <Step title="Provide real-time feedback: Ensure minimal latency in detecting accidents and alerting emergency responders." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              SafeDrive(ML)
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
            The system must handle varying visual conditions, including
            different weather scenarios, lighting, and road environments. The
            model should be robust against false positives from non-accident
            events and be capable of processing high-resolution video data
            efficiently. Real-time processing and accurate accident detection
            are critical for the system’s effectiveness in enhancing road
            safety.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            An advanced system that can analyze real-time video and image data
            to detect road accidents can improve emergency response times and
            offer valuable insights into accident causation. By providing
            immediate alerts to first responders and automating accident
            detection, such a system can contribute to enhanced road safety and
            more effective emergency management.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default SafeDrive;
