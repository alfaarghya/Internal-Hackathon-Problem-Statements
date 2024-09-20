const SoundScape = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">SoundScape</h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        In music production and remixing, separating individual instruments from
        a complete audio track is often necessary but challenging. Current
        separation techniques frequently introduce artifacts or incomplete
        isolation, making it difficult for musicians and producers to work with
        clean, isolated tracks.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        A precise instrument separation tool could significantly enhance the
        flexibility and creative potential for musicians, producers, and sound
        engineers. It could enable them to isolate, manipulate, and remix sounds
        without compromising the quality of the original track.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        <strong>Input:</strong> The user uploads a mixed audio file.
        <br />
        <strong>Output:</strong> The system separates the audio into distinct
        tracks, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Vocals (must always be separated)</li>
        <li>Instruments (e.g., guitar, drums, bass, piano, or others)</li>
      </ul>
      <p className="mb-4">
        The web application should allow users to adjust volume or mute
        individual tracks in real-time, and export individual tracks or custom
        mixes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
      <p className="mb-4">
        The model must handle various complexities in audio files, and the web
        application should allow real-time adjustments without delays.
      </p>
    </div>
  );
};

export default SoundScape;
