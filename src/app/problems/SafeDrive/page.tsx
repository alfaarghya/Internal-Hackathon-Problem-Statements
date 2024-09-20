const SafeDrive = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">SafeDrive</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Road accidents are a leading cause of injury and death globally. While
        vehicle safety systems can monitor some aspects of driving, integrating
        data from multiple sources, including video feeds and sensor data, for
        real-time accident detection is still a challenge. Detecting accidents
        accurately and promptly can significantly enhance emergency response and
        potentially save lives.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        An advanced system that can analyze real-time video and image data to
        detect road accidents can improve emergency response times and offer
        valuable insights into accident causation. By providing immediate alerts
        to first responders and automating accident detection, such a system can
        contribute to enhanced road safety and more effective emergency
        management.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The system analyzes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Video:</strong> Captured from cameras or roadside
          surveillance, providing real-time visual information of the traffic
          environment.
        </li>
        <li>
          <strong>Images:</strong> Static snapshots from the video feed or
          additional sources that offer detailed views of accident scenes.
        </li>
      </ul>
      <p className="mb-4">
        <strong>Output:</strong> The system provides:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Accident detection:</strong> Determines whether an accident
          has occurred based on the visual data, indicating the presence of a
          collision or sudden impact.
        </li>
        <li>
          <strong>Incident alerts:</strong> Sends real-time notifications to
          emergency services or relevant stakeholders if an accident is
          detected.
        </li>
      </ul>
      <p className="mb-4">The model should:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Accurately detect accidents:</strong> Achieve high precision
          in identifying collision events, reducing false positives and
          negatives.
        </li>
        <li>
          <strong>Process video and image data:</strong> Operate effectively
          with real-time video streams and image data to detect accidents
          promptly.
        </li>
        <li>
          <strong>Provide real-time feedback:</strong> Ensure minimal latency in
          detecting accidents and alerting emergency responders.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The system must handle varying visual conditions, including different
        weather scenarios, lighting, and road environments. The model should be
        robust against false positives from non-accident events and be capable
        of processing high-resolution video data efficiently. Real-time
        processing and accurate accident detection are critical for the system's
        effectiveness in enhancing road safety.
      </p>
    </div>
  );
};

export default SafeDrive;
