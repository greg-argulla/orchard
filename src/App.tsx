import Images1 from "./assets/component-01/Images";
import Images2 from "./assets/component-02/Images";
import "./App.css";

function App() {
  return (
    <div className="max-w-7xl">
      <div className="relative mb-32 mt-32 flex min-h-[540px] min-w-[320px] flex-wrap px-5 sm:flex-nowrap sm:gap-5 lg:px-0">
        <div
          className="h-[400px] w-3/6 bg-cover bg-center sm:mr-0 sm:h-[540px] sm:w-3/6 lg:w-2/6"
          style={{ backgroundImage: `url(${Images1.image1lg}` }}
        ></div>

        <div className="flex h-[400px] w-3/6 flex-col sm:h-[540px] sm:w-3/6 sm:gap-5 lg:w-2/6">
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${Images1.image2lg}` }}
          ></div>
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${Images1.image3lg}` }}
          ></div>
        </div>

        <div className="sw-full top-1/2 min-w-[320px] py-5 sm:absolute sm:-translate-y-1/2 sm:bg-black sm:bg-opacity-60 sm:px-5 lg:relative lg:top-0 lg:w-2/6 lg:translate-y-0 lg:bg-transparent lg:p-0">
          <div className="mb-6 border-b-2 pb-2 text-[26px] font-light">
            ANSWER YOUR BODY'S NEEDS
          </div>

          <div className="mb-8 text-left text-lg font-light text-white text-opacity-90">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </div>

          <div className="mb-4 text-lg text-red-600">BE MINDFUL</div>

          <div className="text-lg font-bold">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </div>
        </div>
      </div>

      <div className="mb-48 px-5">
        <div className="mb-12 text-center text-4xl font-light">
          ALL THE LASTEST FROM AEG
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-8 w-full px-2 md:w-1/3">
            <div
              className="mb-5 h-64 w-full border-b-4 border-red-600 bg-cover"
              style={{ backgroundImage: `url(${Images2.image1lg}` }}
            ></div>
            <div className="mb-1 font-bold">Summer Lunch Menu By Mark Best</div>
            <div className="gray mb-4 font-light text-white text-opacity-70">
              AEG ambassador Mark Best's summer eats are guaranteed to help you
              make the most of the warmer weather and entertaining at home.
            </div>
            <span className="border-b-2 border-red-700 p-1 font-bold">
              READ MORE
            </span>
          </div>

          <div className="mb-8 w-full px-2 md:w-1/3">
            <div
              className="mb-5 h-64 w-full border-b-4 border-red-600 bg-cover"
              style={{ backgroundImage: `url(${Images2.image2lg}` }}
            ></div>
            <div className="mb-1 text-lg font-bold">
              A Traditional Christmas Eve, Mark Best Style
            </div>
            <div className="mb-4 font-light text-white text-opacity-70">
              One of Australia's best chefs and AEG amabassador, Mark Best,
              shares his favourite Christmas Eve menu which is sure to impress
              your guests.
            </div>
            <span className="border-b-2 border-red-700 p-1 text-lg font-bold">
              READ MORE
            </span>
          </div>

          <div className="mb-8 w-full px-2 md:w-1/3">
            <div
              className="mb-5 h-64 w-full border-b-4 border-red-600 bg-cover"
              style={{ backgroundImage: `url(${Images2.image3lg}` }}
            ></div>
            <div className="mb-1 text-lg font-bold">Taking Taste Further</div>
            <div className="mb-5 font-light text-white text-opacity-70">
              This exclusive cookbook gives you all the know-how you need. We've
              designed it to make sure you get the most out of our products -
              and the best out of your food.
            </div>
            <span className="border-b-2 border-red-700 p-1 text-lg font-bold">
              READ MORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
