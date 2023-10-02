import Images from "./assets/component-01/Images";
import "./App.css";

function App() {
  return (
    <div className="max-w-5xl">
      <div className="my-28 flex min-h-[500px] min-w-[320px] flex-wrap px-4 sm:flex-nowrap sm:gap-4 lg:px-0">
        <div
          className="h-[400px] w-3/6 bg-cover bg-center sm:mr-0 sm:h-[500px] sm:w-3/6 lg:w-2/6"
          style={{ backgroundImage: `url(${Images.image1lg}` }}
        ></div>

        <div className="flex h-[400px] w-3/6 flex-col sm:h-[500px] sm:w-3/6 sm:gap-4 lg:w-2/6">
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${Images.image2lg}` }}
          ></div>
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${Images.image3lg}` }}
          ></div>
        </div>

        <div className="sw-full top-1/4 min-w-[320px] p-4 sm:absolute sm:bg-black sm:bg-opacity-60 lg:relative lg:w-2/6 lg:bg-transparent lg:px-0">
          <div className="mb-6 border-b-2 py-2 text-2xl font-light">
            ANSWER YOUR BODY'S NEEDS
          </div>

          <div className="mb-8 text-left font-light">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </div>

          <div className="mb-4 text-red-600">BE MINDFUL</div>

          <div className="font-bold">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="mb-28 text-4xl font-light">
          ALL THE LASTEST FROM AEG
        </div>

        <div className="font-bold">Summer Lunch Menu By Mark Best</div>
        <div className="text-sm font-light">
          AEG ambassador Mark Best's summer eats are guaranteed to help you make
          the most of the warmer weather and entertaining at home.
        </div>
        <span className="border-b-2 border-red-700 p-1 font-bold">
          READ MORE
        </span>

        <div className="font-bold">
          A Traditional Christmas Eve, Mark Best Style
        </div>
        <div className="text-sm font-light">
          One of Australia's best chefs and AEG amabassador, Mark Best, shares
          his favourite Christmas Eve menu which is sure to impress your guests.
        </div>

        <div className="font-bold">Taking Taste Further</div>
        <div className="text-sm font-light">
          This exclusive cookbook gives you all the know-how you need. We've
          designed it to make sure you get the most out of our products - and
          the best out of your food.
        </div>
      </div>
    </div>
  );
}

export default App;
