import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const NutriAI = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Accurately tracking nutritional intake is vital for maintaining a
            healthy lifestyle, but the manual process of logging meals and
            estimating portion sizes is often time-consuming and prone to
            errors. People frequently misjudge portion sizes or forget to log
            their meals, leading to inconsistent tracking. This lack of accurate
            nutritional data can make it difficult for users to meet their
            dietary goals, whether for weight management, disease prevention, or
            general wellness.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <Step title="Input: The user uploads or takes a photo of their meal." />
            <Step title="Nutritional estimates(Output): Calories, macronutrients (proteins, fats, carbohydrates), and key micronutrients (vitamins, minerals) based on the food items in the image." />
            <Step title="Personalized feedback(Output): Meal logging, progress tracking, and personalized recommendations aligned with the user’s dietary goals (e.g., weight loss, muscle gain, balanced nutrition)" />

            <p className="font-bold pt-4">
              The application should allow users to:
            </p>

            <Step title="Automatically log their meals by simply taking a picture." />
            <Step title="Track their nutritional intake over time, including daily, weekly, or monthly summaries." />
            <Step title="Set dietary goals and receive personalized meal recommendations based on their objectives." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Identify multiple food items within a single image." />
            <Step title="Estimate nutritional content quickly and accurately across a wide range of food types and cuisines." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              NutriAI(ML)
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
            The model must handle diverse food presentations and cuisines,
            making accurate portion size estimates from varied perspectives and
            image qualities. The web/mobile application should have a
            user-friendly interface that processes images in real-time and
            allows for seamless meal tracking, even on the go.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            An automated system for tracking nutrition could significantly
            improve the accuracy and ease of dietary monitoring. It can help
            users make informed decisions about their food choices by providing
            real-time estimates of nutritional content. This is especially
            important for individuals managing diet-related conditions such as
            obesity, diabetes, or cardiovascular diseases. With accurate
            feedback, users can better adhere to their dietary goals, leading to
            improved health outcomes.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default NutriAI;
