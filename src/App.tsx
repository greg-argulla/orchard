import Images from "./assets/component-01/Images";
import "./App.css";

function App() {
  return (
    <div className="max-w-5xl">
      <div className="flex sm:gap-4 min-h-[500px] min-w-[320px] my-28 px-4 lg:px-0 flex-wrap sm:flex-nowrap">
        <div
          className="bg-cover lg:w-2/6 sm:w-3/6 h-[400px] sm:h-[500px] bg-center sm:mr-0 w-3/6"
          style={{ backgroundImage: `url(${Images.image1lg}` }}
        ></div>

        <div className="flex lg:w-2/6 sm:w-3/6 w-3/6 flex-col sm:gap-4 h-[400px] sm:h-[500px]">
          <div
            className="bg-cover h-full transform bg-center"
            style={{ backgroundImage: `url(${Images.image2lg}` }}
          ></div>
          <div
            className="bg-cover h-full bg-center transform"
            style={{ backgroundImage: `url(${Images.image3lg}` }}
          ></div>
        </div>

        <div className="lg:w-2/6 sw-full sm:absolute lg:relative top-1/4 min-w-[320px] p-4 lg:px-0 sm:bg-opacity-60 sm:bg-black lg:bg-transparent">
          <div className="text-2xl font-light border-b-2 py-2 mb-6">
            ANSWER YOUR BODY'S NEEDS
          </div>

          <div className="font-light text-left mb-8">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </div>

          <div className=" text-red-600 mb-4">BE MINDFUL</div>

          <div className="font-bold">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
