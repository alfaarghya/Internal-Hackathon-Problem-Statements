import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hackathon Website</h1>
      <p className="text-xl mb-8">
        Choose a problem statement to view details:
      </p>
      <Link
        to="/devtype"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        DevType Problem Statement
      </Link>
    </div>
  );
};

export default Home;
