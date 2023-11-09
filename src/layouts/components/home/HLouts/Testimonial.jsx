const Testimonial = () => {
  return (
    <div
      className="md:px-20 py-5 mt-5 md:h-96 text-center bg-no-repeat md:bg-center	md:object-cover"
      style={{
        backgroundImage: "url(./testimonial.png)",
      }}
    >
      <div className="mb-10">
        <h2 className="text-lg font-bold italic text-blue-900">Testimonial</h2>
        <h1 className="text-3xl font-bold">What our customer says about us</h1>
      </div>

      <p className="grid gap-4 w-96 mx-auto mt-28 font-bold text-sm">
        <span>
          &quot; The UI designs he crafted are top-notch, and the design system
          he integrated allows for straight forward fixed and bulk updates
          throughout almost every area of the app.&ldquo;
        </span>

        <span className="text-gray-400">-By Molie Rosa, Photograph</span>
      </p>
    </div>
  );
};

export default Testimonial;
