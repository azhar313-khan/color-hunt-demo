const Sidebar = () => {
  const filters = ["Pastel", "Vintage", "Retro", "Neon", "Light", "Dark"];
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <ul>
        {filters.map((filter) => (
          <li key={filter} className="mb-2">
            <button className="text-gray-700 hover:text-blue-500">
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
