import "./App.css";
import gif from "./component/gift-data.js";
import ImageWidget from "./component/image/index.js";
import TitleWidget from "./component/title/index.js";

const App = () => {
  return (
    <div className="App">
      <input />
      <button>Search</button>
      <TitleWidget title={gif.title} />
      <ImageWidget url={gif.url} />
    </div>
  );
};
export default App;
