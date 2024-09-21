import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const EmotiMap = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Understanding public sentiment and emotional reactions is crucial
            for making informed business decisions, shaping political
            strategies, and conducting social research. Current sentiment
            analysis tools are often limited to text, failing to capture the
            emotional depth expressed through images or facial expressions.
            Social media platforms, where users often share visual content,
            present an opportunity to gain more comprehensive insights into
            public sentiment by analyzing both text and visual data.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <p className="font-bold pt-4">
              Input: The system collects and processes data from social media
              platforms, analyzing:
            </p>
            <Step title="Facial expressions from images or videos." />
            <Step title="Text content from posts, comments, and messages." />

            <p className="font-bold pt-4">Output: The system provides:</p>

            <Step title="Emotion classification: Detects and classifies emotional states such as joy, anger, sadness, fear, and surprise." />
            <Step title="Emotion alerts: Triggers alerts when significant shifts in emotional responses occur, such as a spike in negative reactions during an event." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Achieve a nominal accuracy across the two modalities (facial expressions and text)." />
            <Step title="Process large datasets efficiently, ensuring real-time or near-real-time analysis of public sentiment." />
            <Step title="Focus on detecting fine-grained emotions and enable quick identification of emotional changes or trends during events." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              EmotiMap(ML)
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
            The system must handle diverse types of unstructured social media
            data, where emotional cues may be expressed in indirect ways. The
            facial recognition model should work well across different
            demographics, lighting conditions, and image qualities. The text
            analysis model should understand context and sentiment effectively,
            while the overall system must process large volumes of data quickly
            and provide actionable insights.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            A system that can analyze both facial expressions and text content
            from social media can provide organizations with deeper insights
            into public emotions. This could help businesses improve customer
            satisfaction, allow governments to respond better to public
            concerns, and enable researchers to study emotional trends during
            significant events. By understanding the full spectrum of emotional
            responses, organizations can tailor their actions to better meet the
            needs of their audiences.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default EmotiMap;
