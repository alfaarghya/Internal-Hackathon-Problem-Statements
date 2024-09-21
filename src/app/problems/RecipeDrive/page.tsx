import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const RecipeDrive = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Cooking enthusiasts often seek ways to organize their favorite
            recipes and share culinary creations with others. Combining personal
            recipe management with community sharing can enhance the experience
            for users who want both to keep track of their recipes and engage
            with a broader community of food lovers.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Users often face challenges in managing their personal recipe
            collections and engaging with others in the cooking community.
            Existing solutions might lack features for effective recipe
            organization, searching, and sharing. There is a need for a
            comprehensive platform that allows users to store and categorize
            their recipes, share them with others, and engage with the community
            through comments and ratings.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <div>
              <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
                RecipeDrive(Web)
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
              <g clip-path="url(#clip0_234_943)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z"
                  fill="url(#paint0_linear_234_943)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_234_943"
                  x1="27.5"
                  y1="19"
                  x2="149"
                  y2="174.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#FFD9A0" />{" "}
                  <stop offset="1" stop-color="#FFF5F1" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_234_943">
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
            <Step title="Recipe Management: Designing an intuitive interface for users to add, organize, and categorize their recipes with ingredients and cooking instructions, which can be shared publicly or kept private." />
            <Step title="Search and Filtering: Implementing robust search and filtering features to help users find recipes based on recipe name ingredients, categories, or other criteria." />
            <Step title="Community Interaction: Creating features for users to share recipes, comment on others’ recipes, and vote them to foster community engagement." />
            <Step title="User Experience: Developing a seamless experience for both managing personal recipes and participating in the community." />
            <Step title="Data Security: Implementing user login functionality to protect user data and ensure that only authorized individuals can access or modify their personal recipes and interactions." />

            <p className="font-bold pt-4">
              📌 Bonus Point(not mandatory to complete, but they can provide an
              edge in the competition.)
            </p>
            <Step title="Cousin Groups: Designing an intuitive interface for users to create Cousin Groups to build a small community. These groups can be open for everyone to join or require users to send requests for membership." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            An integrated platform allows users to store, organize, and share
            recipes efficiently. By providing features for adding ingredients,
            cooking instructions, and categorizing recipes, users can easily
            manage their personal recipe collections. Additionally, sharing
            recipes with others, commenting on, and rating recipes fosters a
            vibrant community where users can discover new dishes and interact
            with fellow cooking enthusiasts.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default RecipeDrive;
