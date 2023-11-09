import ShareLaying from "../../share/shareLaying";

const Features = () => {
  return (
    <div className="bg-blue-900 p-8 md:p-20">
      <div className="text-center mb-10">
        <h2 className="text-lg font-bold italic text-white">Tours</h2>
        <h1 className="text-3xl font-bold text-white">Featured Tours</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-3 mt-5">
        <ShareLaying />
        <ShareLaying />
        <ShareLaying />
        <ShareLaying />
      </div>
    </div>
  );
};

export default Features;
