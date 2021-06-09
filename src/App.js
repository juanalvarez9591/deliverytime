import Food from "./components/Food";
import data from "./components/menu.json";

const menu = data.chivito;

let FoodComp = menu.map((i) => (
  <Food
    title={i.title}
    subtitle={i.subtitle}
    price={i.price}
    url={i.url}
    key={i.key}
  />
));

function App() {
  return <div>{FoodComp}</div>;
}

export default App;
