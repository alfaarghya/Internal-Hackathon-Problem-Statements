import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 ">
      <BackgroundLines
        svgOptions={{ duration: 6 }}
        className="flex justify-center items-center flex-col"
      >
        <div className=" flex justify-center items-center flex-col z-10 p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] pb-1">
            HACKTNU
          </h1>

          <h3 className="sm:text-4xl xl:text-4xl font-bold text-[#cfcfcf] z-10">
            Unlock Your True Potential
          </h3>
        </div>
        <p className="text-xs md:text-base md:w-3/5 text-center text-[#a7a7a7] z-10">
          Accelerate your journey from concept to creation in an environment
          designed to inspire innovation. Compete, collaborate, and create
          groundbreaking solutions with like-minded innovators.
        </p>
      </BackgroundLines>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Team size must be 3 to 4 members.</li>
          <li>
            You are free to use any public datasets. No dataset will be given
            from our side.
          </li>
          <li>
            At the end, each team has to provide a 1-2 page document explaining
            the ML approach, models used, experiments, and conclusions.
          </li>
          <li>
            Submit complete source code with proper comments describing
            functions.
          </li>
          <li>Free to use any programming languages and frameworks.</li>
          <li>
            No copying from open-source platforms; using open-source models is
            allowed.
          </li>
          <li>
            Any form of cheating, including code plagiarism, will lead to
            disqualification.
          </li>
          <li>
            If you have any queries or guidance regarding the problem
            statements, please join the WhatsApp group linked in the email
            circulated to you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Evaluation Criteria</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Implementation Novelty: Originality and creativity of the solution.
          </li>
          <li>Code Presence: Completeness and organization of source code.</li>
          <li>
            Solution Completeness: How well the solution meets the problem
            statement.
          </li>
          <li>Idea Uniqueness: Uniqueness and innovation of the idea.</li>
          <li>
            Code Quality: Readability, maintainability, and documentation of the
            code.
          </li>
        </ul>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="problems/EcoScan"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          EcoScan
        </Link>
        <Link
          href="problems/SoundScape"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          SoundScape
        </Link>
        <Link
          href="problems/GestureFlow"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          GestureFlow
        </Link>
        <Link
          href="problems/NutriAI"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          NutriAI
        </Link>
        <Link
          href="problems/EmotiMap"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          EmotiMap
        </Link>
        <Link
          href="problems/SafeDrive"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          SafeDrive
        </Link>
        <Link
          href="problems/AgriVision"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          AgriVision
        </Link>
        <Link
          href="problems/ExpenseTracker"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          ExpenseTracker
        </Link>
        <Link
          href="problems/RecipeDrive"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          RecipeDrive
        </Link>
        <Link
          href="problems/DevsType"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          DevsType
        </Link>
      </div>

      <br />
    </div>
  );
}
