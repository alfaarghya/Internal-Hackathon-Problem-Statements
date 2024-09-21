import { WobbleCard } from "@/components/ui/WobbleCard";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <div>
              <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
                Coming Soooon. . .
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
              <g clip-path="url(#clip0_231_793)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z"
                  fill="url(#paint0_linear_231_793)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_231_793"
                  x1="177"
                  y1="-9.23648e-06"
                  x2="39.5"
                  y2="152.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#B0B9FF" />{" "}
                  <stop offset="1" stop-color="#E7E9FF" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_231_793">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default ComingSoon;
