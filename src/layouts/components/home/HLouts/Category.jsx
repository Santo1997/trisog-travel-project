const Category = () => {
  return (
    <div className="p-14 text-center">
      <div className="text-center">
        <h2 className="text-lg font-bold italic text-blue-900">
          Browse By Category
        </h2>
        <h1 className="text-3xl font-bold">Pick A Tour Type</h1>
      </div>

      <ul className="grid grid-cols-3 md:grid-cols-6 mt-5">
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">City Tours</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">Beaches</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">Boat Tours</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">Adventure</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">Food</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
        <li className="p-5 hover:shadow-md">
          <img
            src="./cat1.png"
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <h3 className="font-bold text-sm">Hiking</h3>
          <p className="text-sm text-gray-400">10 Tours+</p>
        </li>
      </ul>
    </div>
  );
};

export default Category;
