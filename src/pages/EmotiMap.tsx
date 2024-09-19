const EmotiMap = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">EmotiMap</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Understanding public sentiment and emotional reactions is crucial for
        making informed business decisions and conducting social research.
        Social media platforms present an opportunity to gain more comprehensive
        insights into public sentiment by analyzing both text and visual data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        An advanced sentiment analysis system that processes both text and image
        data could provide more accurate and nuanced insights into public
        opinion, enabling better-targeted campaigns and more informed
        policy-making.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The user provides social media posts containing
        text and images.
        <br />
        <strong>Output:</strong> The system categorizes posts based on sentiment
        (e.g., positive, negative, neutral) and maps emotional trends
        geographically.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The model must handle diverse languages, slang, and visual content,
        while the mapping system should display trends in real-time.
      </p>
    </div>
  );
};

export default EmotiMap;
