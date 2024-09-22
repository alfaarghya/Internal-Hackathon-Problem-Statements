import { ProblemCard } from "@/components/ui/ProblemCard";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { CardSpotlight, Step } from "@/components/ui/CardSpotlight";

import { TextRevealCard } from "@/components/ui/TextRevealCard";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-4 bg-black">
      <div className="h-screen w-full p-4">
        <BackgroundLines
          svgOptions={{ duration: 6 }}
          className="flex justify-center items-center flex-col h-full"
        >
          <div className=" flex justify-center items-center flex-col z-10 p-12">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-[#f5f5f5] pb-1">
              HACKFUSION
            </h1>

            <h3 className="md:text-4xl lg:text-6xl font-bold text-[#cfcfcf] z-10">
              Unlock Your True Potential
            </h3>
          </div>
          <p className="text-xs md:text-base md:w-3/5 text-center text-[#a7a7a7] z-10">
            Accelerate your journey from concept to creation in an environment
            designed to inspire innovation. Compete, collaborate, and create
            groundbreaking solutions with like-minded innovators.
          </p>
        </BackgroundLines>
      </div>

      <div className="flex h-screen flex-col sm:flex-row justify-center items-center p-4 gap-6 xl:gap-16">
        <CardSpotlight className=" md:w-1/2 xl:w-1/3">
          <div className="">
            <h3 className="text-xl font-bold relative z-20 mt-2 text-white">
              Basic Information
            </h3>
            <div className="text-neutral-200 mt-4 relative z-20 text-xs md:text-base">
              <ul className="list-none mt-2">
                <Step title="Team size: 3 to 4 members" />
                <Step title="Date: 27th of September (Showcase)" />
                <Step title="Finals: 28th of September at Parikalpana 2k24 Event " />
                <Step title="No copying from open-source platforms" />
                <Step title="Use of open-source models is allowed" />
              </ul>
            </div>
            <p className="text-neutral-500 mt-8 relative z-20 text-xs sm:text-sm ">
              For queries or guidance, join the WhatsApp group mentioned in the
              circulated email
            </p>
          </div>
        </CardSpotlight>

        <CardSpotlight className=" md:w-1/2 xl:w-1/3">
          <div className="">
            <h3 className="text-xl font-bold relative z-20 mt-2 text-white">
              Instruction
            </h3>
            <div className="text-neutral-200 mt-4 relative z-20 text-xs md:text-base">
              <ul className="list-none  mt-2">
                <Step title="Choose only 1 problem statement to solve" />
                <Step title="Make a 1-2 page documentation" />
                <Step title="Free to use any programming languages and frameworks" />
                <Step title="Submit complete source code with proper comments" />
                <Step title="Use Github to showcase source codes" />
                <Step title="No copying from open-source platforms" />
                <Step title="Prepare a powerpoint presentation along with system flow chart or a Block diagram or images" />
              </ul>
            </div>
          </div>
        </CardSpotlight>
      </div>

      <div className="flex items-center justify-center h-screen w-full  p-4">
        <TextRevealCard
          className=" xl:w-1/2"
          text="Push your limits"
          revealText="Break the barriers "
        ></TextRevealCard>
      </div>

      <div className=" p-4 h-full flex flex-col justify-center items-center w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-[#cfcfcf] p-8">
          Problem Statements
        </h2>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8">
          <ProblemCard title="EcoScan" />
          <ProblemCard title="SoundScape" />
          <ProblemCard title="GestureFlow" />
          <ProblemCard title="NutriAI" />
          <ProblemCard title="EmotiMap" />
          <ProblemCard title="SafeDrive" />
          <ProblemCard title="AgriVision" />
          <ProblemCard title="ExpenseTracker" />
          <ProblemCard title="RecipeDrive" />
          <ProblemCard title="DevsType" />
          <ProblemCard title="SCRSystem" />
          <ProblemCard title="PMDSystem" />
          <ProblemCard title="STMSystem" />
          <ProblemCard title="CEWSystem" />
          <ProblemCard title="AdaptiveLearning" />
          <ProblemCard title="SustainableEnergy" />
          <ProblemCard title="EnergyMonitoring" />
          <ProblemCard title="WaterManagement" />
          <ProblemCard title="PISystem" />
          <ProblemCard title="PDDetection" />
        </div>
      </div>

      <div className="h-screen">
        <BackgroundBeamsWithCollision className="">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
            Unleash the Power of Collaboration{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#247afb] via-[#46a5ca] to-[#19376d] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className=""> Innovate Together.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#247afb] via-[#46a5ca] to-[#19376d] py-4">
                <span className="">Innovate Together.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
}
