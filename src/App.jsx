import styles from "./style"; // Assuming you use external styles

const App = () => (
  <div className="bg-orange-100 min-h-screen flex justify-center items-center px-4 py-6">
    <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl p-6 md:p-10">
      <img
        className="rounded-2xl w-full object-cover"
        src="https://aaditamanugraha.github.io/recipe-page/assets/images/image-omelette.jpeg"
        alt="Omelette"
      />

      <div className="py-6">
        <h1 className="text-4xl font-youngSerif font-extrabold mb-4">
          Simple Omelette Recipe
        </h1>
        <p className="text-[#5f574e]">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>

      <div className="mb-6 bg-[#fbf3f7] p-6 rounded-2xl">
        <h2 className="mb-2 text-lg font-bold text-[#7b284f]">Preparation time</h2>
        <ul className="text-[#5f574e] list-disc list-inside">
          <li className="mb-2">Total: Approximately 10 minutes</li>
          <li className="mb-2">Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-youngSerif text-amber-800 mb-4">Ingredients</h2>
        <ul className="text-[#5f574e] list-disc list-inside">
          <li className="mb-2">2-3 large eggs</li>
          <li className="mb-2">Salt, to taste</li>
          <li className="mb-2">Pepper, to taste</li>
          <li className="mb-2">1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>

      <hr className="h-px my-8 bg-gray-200" />

      <div className="mb-6">
        <h2 className="text-3xl font-youngSerif text-amber-800 mb-4">Instructions</h2>
        <ol className="text-[#5f574e] list-decimal list-inside space-y-3">
          <li>
            <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
          </li>
          <li>
            <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
          </li>
          <li>
            <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
          </li>
          <li>
            <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
          </li>
        </ol>
      </div>

      <hr className="h-px my-8 bg-gray-200" />

      <div>
        <h2 className="text-3xl font-youngSerif text-amber-800 mb-4">Nutrition</h2>
        <p className="text-[#5f574e] mb-4">
          The table below shows nutritional values per serving without the additional fillings.
        </p>
        <table className="w-full text-[#5f574e] font-young">
          <tbody>
            <tr className="bg-[#f3f3f3]">
              <td className="py-2 px-4 font-semibold text-left">Calories</td>
              <td className="py-2 px-4 text-right">277 kcal</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 font-semibold text-left">Carbs</td>
              <td className="py-2 px-4 text-right">0 g</td>
            </tr>
            <tr className="bg-[#f3f3f3]">
              <td className="py-2 px-4 font-semibold text-left">Protein</td>
              <td className="py-2 px-4 text-right">20 g</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 font-semibold text-left">Fat</td>
              <td className="py-2 px-4 text-right">22 g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default App;
