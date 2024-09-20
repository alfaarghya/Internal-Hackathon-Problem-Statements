const EcoScan = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">EcoScan</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Recycling is essential for environmental sustainability, but many
        individuals face challenges in correctly sorting their waste due to the
        complex and often region-specific recycling rules. Incorrect sorting can
        lead to contamination of recyclable materials, reducing the
        effectiveness of recycling efforts and increasing landfill waste. A key
        barrier to better recycling habits is the difficulty in identifying what
        materials are recyclable and how to properly dispose of them.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        Improving recycling practices can significantly reduce landfill waste,
        conserve natural resources, and lower the energy costs associated with
        producing new materials. An AI-powered tool that accurately identifies
        recyclable materials can empower individuals to make informed choices,
        leading to more effective recycling efforts and greater environmental
        impact.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The user will capture or upload an image or
        video of a wastage item.
        <br />
        <strong>Output:</strong> The system will separate each item as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Recyclable</li>
        <li>Non-recyclable</li>
        <li>Requires special disposal</li>
      </ul>
      <p className="mb-4">
        The application should provide localized information about how to
        dispose of the item based on regional recycling guidelines.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The model must handle diverse image inputs, varying lighting conditions,
        and different item orientations while maintaining high classification
        accuracy.
      </p>
    </div>
  );
};

export default EcoScan;
