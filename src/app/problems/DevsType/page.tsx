import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const DevsType = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            In the present fast moving digital world, typing speed and accuracy
            are the most important skills that one needs to develop for jobs and
            even for daily activities. A website which allows its visitors to
            practice, test, and improve their typing skills while also competing
            with others is educative as well as entertaining. Inclusions of
            real-time progress tracking and competitive features like
            leaderboards and group challenges help make learning interesting and
            fun.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Users often seek ways to improve their typing skills and engage in
            friendly competition with others. Current solutions may lack
            features that allow for both individual skill tracking and
            competitive interactions. There is a need for a web application
            where users can test their typing speed and accuracy, track their
            progress on a leaderboard. The leaderboard should update at
            intervals set by users to minimize database strain, and competitions
            in rooms should provide real-time progress tracking.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <div>
              <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
                DevsType(Web)
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
            <Step title="Type Test: Design a feature-rich test that measures both the speed and accuracy of typing, with an intuitive interface. Real-time feedback should be provided to visually distinguish between correct and incorrect letters/words through color-coding during the test." />
            <Step title="Leaderboard Management Implementing a leaderboard that tracks and displays users’ performance, while reducing database load by updating periodically." />
            <Step title="User Authentication: Ensuring that users can create accounts and log in to access leaderboards, dashboard and competition features, with secure data storage and access control." />

            <p className="font-bold pt-4">
              📌 Bonus Point(not mandatory to complete, but they can provide an
              edge in the competition.)
            </p>
            <Step title="Custom Rooms: Implement the functionality of creating rooms for a live competition with friends. Rooms must accommodate at least 2 persons in them and reflect the completion process in real time." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            The development of an integrated typing test platform will not only
            help the users improve their typing but also enable them to
            participate in friendly competitions.In addition, setting up
            environments where users can compete with friends encourages
            community building and develops healthy competition.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default DevsType;
