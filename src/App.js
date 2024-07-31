import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Content from "./components/Content";


function App() {
  return (
    <div className="container">
      <div>
        <SideBar />
      </div>
      <div className="body">
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
