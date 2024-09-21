import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const GestureFlow = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Traditional input devices like keyboards and mice are not always
            practical or accessible, particularly for individuals with mobility
            impairments or in environments where hands-free interaction is
            required. While voice control offers an alternative, it is limited
            in noisy environments or situations where vocal commands are
            inconvenient. Gesture-based interaction provides a promising
            solution by allowing users to control devices through natural hand
            movements, making it especially valuable in sectors like healthcare,
            industry, and accessibility.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <Step title="Input: The user interacts with a webcam or external camera, performing hand gestures." />
            <Step title="Output: The system recognizes predefined hand gestures and translates them into computer actions, such as: 1) Click 2) Scroll 3) Navigate etc." />

            <p className="font-bold pt-4">
              The application should allow users to:
            </p>

            <Step title="Customize gesture-to-action mappings." />
            <Step title="Train the system to recognize new, user-defined gestures." />
            <Step title="Adjust gesture recognition sensitivity and define activation zones on the screen for more accurate control." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Recognize at least 5 predefined gestures with optimum accuracy." />
            <Step title="Adapt to different lighting conditions and various hand positions." />
            <Step title="Perform with low latency to ensure smooth, real-time interaction." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              GestureFlow(ML)
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
            The gesture recognition model must be robust against environmental
            changes, such as varying lighting or backgrounds, and accurately
            distinguish between different hand movements. The desktop
            application should be responsive and provide a simple interface for
            gesture customization, allowing users to personalize the system
            based on their needs and preferences.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Gesture recognition technology can greatly enhance accessibility,
            enabling users with disabilities to interact with computers without
            traditional input devices. It is also valuable in sterile
            environments, such as operating rooms, or industrial settings where
            hands are occupied. By providing a hands-free, intuitive way to
            control devices, gesture-based systems can improve efficiency and
            enable new forms of human-computer interaction.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default GestureFlow;
