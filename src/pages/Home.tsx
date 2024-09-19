import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Hackathon Instructions and Evaluation Criteria
      </h1>

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
          to="/EcoScan"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          EcoScan
        </Link>
        <Link
          to="/SoundScape"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          SoundScape
        </Link>
        <Link
          to="/GestureFlow"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          GestureFlow
        </Link>
        <Link
          to="/NutriAI"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          NutriAI
        </Link>
        <Link
          to="/EmotiMap"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          EmotiMap
        </Link>
        <Link
          to="/SafeDrive"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          SafeDrive
        </Link>
        <Link
          to="/AgriVision"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
        >
          AgriVision
        </Link>
        <Link
          to="/ExpenseTracker"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          ExpenseTracker
        </Link>
        <Link
          to="/RecipeDrive"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          RecipeDrive
        </Link>
        <Link
          to="/DevsType"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
        >
          DevsType
        </Link>
      </div>
    </div>
  );
};

export default Home;
