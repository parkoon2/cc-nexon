import React from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";

// Dummy Data
import banners from "./dummy/banners";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner banners={banners} />
      <Footer />
    </div>
  );
}

export default App;
