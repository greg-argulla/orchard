import Images1 from "./assets/component-01/Images";
import Images2 from "./assets/component-02/Images";
import "./App.css";
import { MainDisplay } from "./components/MainDisplay";
import { Articles } from "./components/Articles";

function App() {
  return (
    <main className="max-w-7xl">
      <MainDisplay
        image1={Images1.image1lg}
        image2={Images1.image2lg}
        image3={Images1.image3lg}
        header={"ANSWER YOUR BODY'S NEEDS"}
        content={
          "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops anappetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs."
        }
        warning={"BE MINDFUL"}
        footer={
          "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
        }
      />

      <Articles
        header={"ALL THE LASTEST FROM AEG"}
        articles={[
          {
            image: Images2.image1lg,
            title: "Summer Lunch Menu By Mark Best",
            details:
              "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
          },
          {
            image: Images2.image2lg,
            title: " A Traditional Christmas Eve, Mark Best Style",
            details:
              "One of Australia's best chefs and AEG amabassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
          },
          {
            image: Images2.image3lg,
            title: "Taking Taste Further",
            details:
              "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products and the best out of your food.",
          },
        ]}
      />
    </main>
  );
}

export default App;
