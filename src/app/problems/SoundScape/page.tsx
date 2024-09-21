import { Step } from "@/components/ui/CardSpotlight";
import { WobbleCard } from "@/components/ui/WobbleCard";

const SoundScape = () => {
  return (
    <div className="min-h-screen p-4 bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="f col-span-1 row-span-1 min-h-[300px] bg-[#501FA3]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            In music production and remixing, separating individual instruments
            from a complete audio track is often necessary but challenging.
            Current separation techniques frequently introduce artifacts or
            incomplete isolation, making it difficult for musicians and
            producers to work with clean, isolated tracks. A tool that can
            separate instruments accurately would provide more control over
            audio tracks, enabling a wider range of creative possibilities for
            remixing, producing, and analyzing music.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#A31F4D] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h2 className="  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Problem Statement
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200">
            <Step title="Input: The user uploads a mixed audio file." />
            <Step title="Output: The system separates the audio into distinct tracks." />
            <Step title="Vocals (must always be separated)" />
            <Step title="Instruments (the system should support separation of multiple instruments, such as guitar, drums, bass, piano, or others, depending on the track)" />

            <p className="font-bold pt-4">
              The separated tracks should be accessible in a web application
              that allows users to:
            </p>

            <Step title="Visualize the different audio tracks." />
            <Step title="Adjust the volume or mute individual tracks (both vocals and instruments) in real-time." />
            <Step title="Export individual tracks or custom mixes." />

            <p className="font-bold pt-4">The model should:</p>

            <Step title="Always separate vocals from the instrument tracks." />
            <Step title="Be capable of separating a variable number of instruments, depending on the complexity of the input." />
            <Step title="Minimize audio artefact and reduce “bleeding” between the tracks for clear separation." />
            <Step title="Ensure high-quality audio output for both vocals and instruments." />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#B60013] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col  md:flex-row w-full h-full justify-between items-center">
            <h2 className="  text-left text-balance text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.015em] text-white">
              SoundScape(ML)
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
            The model must handle a wide variety of audio files with different
            instruments, varying complexities, and overlapping frequencies. The
            web application should be responsive, allowing users to adjust the
            audio tracks in real-time without noticeable delays or quality
            degradation.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[#251FA3] min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-white">
            Importance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            A precise instrument separation tool could significantly enhance the
            flexibility and creative potential for musicians, producers, and
            sound engineers. It could enable them to isolate, manipulate, and
            remix sounds without compromising the quality of the original track.
            This would revolutionize the remixing process, aid in music
            education, and offer new ways for musicians to interact with their
            creations.
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export default SoundScape;
