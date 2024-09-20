const AgriVision = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">AgriVision</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Precision agriculture leverages technology to optimize farming
        practices, but many small-scale farmers lack access to advanced tools
        and expertise. Monitoring crop health and soil conditions is crucial for
        maximizing yield and minimizing resource use, yet traditional methods
        often require costly technology and specialized knowledge. Accessible
        technology for analyzing agricultural data can greatly benefit farmers
        looking to improve their practices and outcomes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        A system that provides actionable insights into crop health and soil
        conditions can help farmers make informed decisions, boost crop yields,
        and reduce environmental impact. By democratizing access to precision
        agriculture tools, small-scale farmers can utilize advanced technology
        to enhance their farming practices and achieve greater sustainability.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The system analyzes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Weather data:</strong> Real-time and historical data on
          weather conditions affecting agriculture.
        </li>
        <li>
          <strong>Soil sensor data:</strong> Measurements of soil moisture,
          nutrient levels, and other parameters.
        </li>
      </ul>
      <p className="mb-4">
        <strong>Output:</strong> The system provides:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Crop health assessment:</strong> Detects diseases, pests, and
          nutrient deficiencies based on weather and soil data.
        </li>
        <li>
          <strong>Soil condition monitoring:</strong> Evaluates soil moisture
          levels, nutrient content, and other parameters from sensor data.
        </li>
        <li>
          <strong>Resource optimization recommendations:</strong> Offers
          actionable suggestions for irrigation, fertilization, and pest control
          based on integrated data.
        </li>
      </ul>
      <p className="mb-4">The model should:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Process multi-source data:</strong> Combine weather and soil
          sensor information to deliver comprehensive insights.
        </li>
        <li>
          <strong>Deliver actionable insights:</strong> Provide practical
          recommendations for improving crop management and resource use.
        </li>
        <li>
          <strong>Be accessible to farmers:</strong> Ensure the system is
          user-friendly and provides valuable information without requiring
          extensive technical expertise.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The system must effectively analyze and integrate data from different
        sources, including weather conditions and soil measurements. It should
        handle variations in data quality and environmental factors while
        ensuring that recommendations are practical and easily actionable for
        farmers. Making the system accessible and useful to those with varying
        levels of technological expertise is crucial for its success and
        adoption.
      </p>
    </div>
  );
};

export default AgriVision;
