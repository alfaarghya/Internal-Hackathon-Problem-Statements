const DevsType = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">
        DevsType (Typing Test Application)
      </h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        In the present fast-moving digital world, typing speed and accuracy are
        essential skills for jobs and daily activities. A website that allows
        its visitors to practice, test, and improve their typing skills while
        also competing with others is both educative and entertaining. Including
        real-time progress tracking and competitive features like leaderboards
        and group challenges helps make learning interesting and fun.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        The development of an integrated typing test platform will not only help
        users improve their typing but also enable them to participate in
        friendly competitions. Additionally, setting up environments where users
        can compete with friends encourages community building and develops
        healthy competition.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        Users often seek ways to improve their typing skills and engage in
        friendly competition with others. Current solutions may lack features
        that allow for both individual skill tracking and competitive
        interactions. There is a need for a web application where users can test
        their typing speed and accuracy, track their progress on a leaderboard.
        The leaderboard should update at intervals set by users to minimize
        database strain, and competitions in rooms should provide real-time
        progress tracking.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Type Test:</strong> Design a feature-rich test that measures
          both the speed and accuracy of typing, with an intuitive interface.
          Real-time feedback should be provided to visually distinguish between
          correct and incorrect letters/words through color-coding during the
          test.
        </li>
        <li>
          <strong>Leaderboard Management:</strong> Implementing a leaderboard
          that tracks and displays users' performance, while reducing database
          load by updating periodically.
        </li>
        <li>
          <strong>User Authentication:</strong> Ensuring that users can create
          accounts and log in to access leaderboards, dashboard, and competition
          features, with secure data storage and access control.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Bonus Point</h2>
      <p className="mb-4">
        <strong>Custom Rooms:</strong> Implement the functionality of creating
        rooms for live competition with friends. Rooms must accommodate at least
        2 persons in them and reflect the completion process in real-time.
        <p className="mt-4">
          📌 Bonus Points are not mandatory to complete, but they can provide an
          edge in the competition.
        </p>
      </p>
    </div>
  );
};

export default DevsType;
