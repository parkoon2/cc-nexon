import React, { createRef } from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import MyInfo from "./component/MyInfo";
import Container from "./component/Shared/container";
import AllGames from "./component/AllGame";

// Dummy Data
import banners from "./dummy/banners";

// Context
import { ScrollProvider } from "./context/scrollContext";

function App() {
  return (
    <div>
      <Header />
      <Banner banners={banners} />

      <ScrollProvider>
        <Container>
          <MyInfo />
          <AllGames />
        </Container>
        <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
