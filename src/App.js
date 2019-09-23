import React from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";

// Dummy Data
import banners from "./dummy/banners";

function App() {
  return (
    <div>
      <Header />
      <Banner banners={banners} />
    </div>
  );
}

export default App;
