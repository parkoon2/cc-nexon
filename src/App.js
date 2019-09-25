import React from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";

// Dummy Data
import banners from "./dummy/banners";
import Footer from "./component/Footer";
import MyInfo from "./component/MyInfo";
import Container from "./component/Shared/container";
import AllGames from "./component/AllGame";

function App() {
  return (
    <div>
      <Header />
      <Banner banners={banners} />
      <Container>
        <MyInfo />
        <AllGames />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
