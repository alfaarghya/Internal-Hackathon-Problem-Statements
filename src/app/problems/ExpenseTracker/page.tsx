import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const ExpenseTracker = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Managing personal finances effectively requires a clear
            understanding of spending habits and financial health. An expense
            tracking application helps users log and categorize their expenses,
            providing insights into their spending patterns. This enables better
            budgeting and financial planning.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Many individuals struggle with managing their finances due to a lack
            of clear and organized tools for tracking expenses and income.
            Existing solutions may lack comprehensive reporting features, visual
            representations of spending and income, or the ability to download
            transaction data. There is a need for an expense tracking app that
            provides detailed insights into financial habits, offers visual
            representations, and supports downloading data for further analysis.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              ExpenseTracker(Web)
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
            <Step title="User Interface Design: Creating a user-friendly and visually appealing interface that makes it easy for users to log, categorize, and view their expenses and income." />
            <Step title="Expense and Income Tracking: Implementing features to add, categorize, and track both expenses and income effectively." />
            <Step title="Visual Representation: Developing charts and graphs to visually represent spending trends and financial health, providing users with clear insights into their finances." />
            <Step title="Reporting: Providing tools for generating detailed reports on spending and income to help users analyze their financial data." />
            <Step title="Data Management: Ensuring that users can download their transaction data and reports for offline analysis and record-keeping." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            An expense tracking app offers users a way to monitor their
            financial health by tracking expenditures and income. By visualizing
            spending trends through charts and graphs, users can make informed
            decisions about their budget and spending habits. The ability to
            track and categorize transactions helps users identify areas where
            they can save money and improve their financial management.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default ExpenseTracker;
