const RecipeDrive = () => {
  return (
    <div className="min-h-screen p-4  ">
      <h1 className="text-3xl font-bold mb-4">
        Recipe Drive (Recipe Sharing Community)
      </h1>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        Cooking enthusiasts often seek ways to organize their favorite recipes
        and share culinary creations with others. Combining personal recipe
        management with community sharing can enhance the experience for users
        who want both to keep track of their recipes and engage with a broader
        community of food lovers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Importance</h2>
      <p className="mb-4">
        An integrated platform allows users to store, organize, and share
        recipes efficiently. By providing features for adding ingredients,
        cooking instructions, and categorizing recipes, users can easily manage
        their personal recipe collections. Additionally, sharing recipes with
        others, commenting on, and rating recipes fosters a vibrant community
        where users can discover new dishes and interact with fellow cooking
        enthusiasts.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
      <p className="mb-4">
        Users often face challenges in managing their personal recipe
        collections and engaging with others in the cooking community. Existing
        solutions might lack features for effective recipe organization,
        searching, and sharing. There is a need for a comprehensive platform
        that allows users to store and categorize their recipes, share them with
        others, and engage with the community through comments and ratings.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Recipe Management:</strong> Designing an intuitive interface
          for users to add, organize, and categorize their recipes with
          ingredients and cooking instructions, which can be shared publicly or
          kept private.
        </li>
        <li>
          <strong>Search and Filtering:</strong> Implementing robust search and
          filtering features to help users find recipes based on recipe name,
          ingredients, categories, or other criteria.
        </li>
        <li>
          <strong>Community Interaction:</strong> Creating features for users to
          share recipes, comment on others' recipes, and vote them to foster
          community engagement.
        </li>
        <li>
          <strong>User Experience:</strong> Developing a seamless experience for
          both managing personal recipes and participating in the community.
        </li>
        <li>
          <strong>Data Security:</strong> Implementing user login functionality
          to protect user data and ensure that only authorized individuals can
          access or modify their personal recipes and interactions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Bonus Point</h2>
      <p className="mb-4">
        <strong>Cousin Groups:</strong> Designing an intuitive interface for
        users to create Cousin Groups to build a small community. These groups
        can be open for everyone to join or require users to send requests for
        membership.
      </p>
      <p className="mt-4">
        📌 Bonus Points are not mandatory to complete, but they can provide an
        edge in the competition.
      </p>
    </div>
  );
};

export default RecipeDrive;
