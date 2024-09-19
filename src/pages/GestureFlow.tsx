const GestureFlow = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">GestureFlow</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Traditional input devices like keyboards and mice are not always
        practical or accessible, particularly for individuals with mobility
        impairments. Gesture-based interaction provides a promising solution by
        allowing users to control devices through natural hand movements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        Gesture recognition technology can greatly enhance accessibility,
        enabling users with disabilities to interact with computers without
        traditional input devices. It is also valuable in sterile environments
        or industrial settings where hands are occupied.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The user interacts with a webcam or external
        camera, performing hand gestures.
        <br />
        <strong>Output:</strong> The system recognizes predefined hand gestures
        and translates them into computer actions such as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Click</li>
        <li>Scroll</li>
        <li>Navigate</li>
      </ul>
      <p className="mb-4">
        The application should allow users to customize gesture-to-action
        mappings and train the system to recognize new gestures.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The gesture recognition model must adapt to various lighting conditions
        and backgrounds, and the system should allow real-time interaction with
        low latency.
      </p>
    </div>
  );
};

export default GestureFlow;
