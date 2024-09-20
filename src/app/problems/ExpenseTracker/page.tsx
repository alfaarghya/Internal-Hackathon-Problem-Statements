const ExpenseTracker = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">ExpenseTracker</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Managing personal finances effectively requires a clear understanding of
        spending habits and financial health. An expense tracking application
        helps users log and categorize their expenses, providing insights into
        their spending patterns. This enables better budgeting and financial
        planning.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        An expense tracking app offers users a way to monitor their financial
        health by tracking expenditures and income. By visualizing spending
        trends through charts and graphs, users can make informed decisions
        about their budget and spending habits. The ability to track and
        categorize transactions helps users identify areas where they can save
        money and improve their financial management.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        Many individuals struggle with managing their finances due to a lack of
        clear and organized tools for tracking expenses and income. Existing
        solutions may lack comprehensive reporting features, visual
        representations of spending and income, or the ability to download
        transaction data. There is a need for an expense tracking app that
        provides detailed insights into financial habits, offers visual
        representations, and supports downloading data for further analysis.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>User Interface Design:</strong> Creating a user-friendly and
          visually appealing interface that makes it easy for users to log,
          categorize, and view their expenses and income.
        </li>
        <li>
          <strong>Expense and Income Tracking:</strong> Implementing features to
          add, categorize, and track both expenses and income effectively.
        </li>
        <li>
          <strong>Visual Representation:</strong> Developing charts and graphs
          to visually represent spending trends and financial health, providing
          users with clear insights into their finances.
        </li>
        <li>
          <strong>Reporting:</strong> Providing tools for generating detailed
          reports on spending and income to help users analyze their financial
          data.
        </li>
        <li>
          <strong>Data Management:</strong> Ensuring that users can download
          their transaction data and reports for offline analysis and
          record-keeping.
        </li>
      </ul>
      <p className="mb-4">
        By addressing these challenges, the expense tracking app can offer a
        comprehensive solution for users to manage their finances, gain insights
        into their spending habits, and make informed budgeting decisions.
      </p>
    </div>
  );
};

export default ExpenseTracker;
