const NutriAI = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">NutriAI</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Accurately tracking nutritional intake is vital for maintaining a
        healthy lifestyle, but the manual process of logging meals and
        estimating portion sizes is often time-consuming and prone to errors.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        An automated system for tracking nutrition could significantly improve
        the accuracy and ease of dietary monitoring, helping users make informed
        decisions about their food choices.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The user uploads or takes a photo of their meal.
        <br />
        <strong>Output:</strong> The system provides nutritional estimates such
        as calories and macronutrients, and offers personalized feedback.
      </p>
      <p className="mb-4">
        The application should allow users to track their nutritional intake
        over time, set dietary goals, and receive personalized meal
        recommendations.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The model must handle diverse food presentations and provide accurate
        portion size estimates, while the application should offer a seamless
        meal-tracking experience.
      </p>
    </div>
  );
};

export default NutriAI;
