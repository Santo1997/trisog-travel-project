import Map from "./Map";

const IntroSec = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:px-20 mt-3">
      <div className="md:col-span-2">
        <div>
          <img src="./keep1.jpg" className="w-full md:h-96" />
        </div>

        <div className="grid grid-cols-4 gap-1 md:gap-4 w-full justify-between mt-5">
          <img src="./keep3.jpg" className="md:h-24" />
          <img src="./keep3.jpg" className="md:h-24" />
          <img src="./keep3.jpg" className="md:h-24" />
          <img src="./keep3.jpg" className="md:h-24" />
        </div>

        <div className="mt-5 px-3">
          <h1 className="text-2xl font-bold mb-1">About Uk</h1>
          <p className="text-gray-600 text-justify md:text-left">
            Iastanbul, the vibrant and historic city stradddling the continents
            of Europe and Asia,offers an enchanting blend of cultures,sight,and
            experiences that captivate every travelers heart. As Turkeys
            cultural and economic hub,Istanbul seamlessly fuses its rich
            heritage with modernity,creating an unforgettable journey for
            visitors.
            <br />
            <br />
            The city is home to some of the worlds most iconic
            landmarks,including the awe-inspiring Hagia Sopgia,the majestic Blue
            Mosque,and the grand Topkapi Palace,each bearing witness to
            istanbuls illustrious past, Wandering through the bustling
            streets,you&apos;ll find an array of delightful bazaars,where you
            can haggle for unique souvenirs,immerse yourself in the aromatic
            spices,and savor traditional Turkish delights. As the sun sents,head
            to the banks of the Bosphorus strait for a magical view of Istanbuls
            skyline,a true testament to its allure as the crossroards between
            Europe and Asia.Prepare your taste buds for an unforgettable
            gastronomic adventure in Istanbul,where a delightful fusion of
            flavors awaits you at every turn.
          </p>
        </div>

        <div className="overflow-x-auto my-5  px-3">
          <h1 className="text-2xl font-bold mb-1">Basic Information</h1>
          <table className="table p-10 leading-none bg-[#f5f6f8] rounded-none ">
            <tbody>
              <tr>
                <th>Country</th>
                <td>Turkey</td>
              </tr>
              <tr>
                <th>Language</th>
                <td>Turkish, Kurdish, Arabic, Zaza</td>
              </tr>
              <tr>
                <th>Currency</th>
                <td>Turkish Lira </td>
              </tr>
              <tr>
                <th>Area</th>
                <td>2,036 Square Miles</td>
              </tr>
              <tr>
                <th>Population</th>
                <td>15M</td>
              </tr>
              <tr>
                <th>Time Zone</th>
                <td>UTC+2</td>
              </tr>
              <tr>
                <th>Time To Travel</th>
                <td>May, June, July, August</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-3">
        <div>
          <h1 className="text-lg font-bold mb-2">City Map</h1>
          <Map />
        </div>

        <div className="overflow-x-auto mt-5 p-4 bg-[#f5f6f8]">
          <h1 className="text-lg font-bold mb-2">Weather</h1>
          <table className="table p-10 leading-none  rounded-none ">
            <tbody>
              <tr>
                <th>Jan - Feb</th>
                <td>12oc - 18oc</td>
              </tr>
              <tr>
                <th>Mar - Apr</th>
                <td>12oc - 18oc</td>
              </tr>
              <tr>
                <th>May - Jun</th>
                <td>12oc - 18oc</td>
              </tr>
              <tr>
                <th>Jul - Aug</th>
                <td>12oc - 18oc</td>
              </tr>
              <tr>
                <th>sep - Oct</th>
                <td>12oc - 18oc</td>
              </tr>
              <tr>
                <th>Nov - Dec</th>
                <td>12oc - 18oc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntroSec;
