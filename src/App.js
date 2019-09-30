import React, { createRef } from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import MyInfo from "./component/MyInfo";
import Container from "./component/Shared/container";
import AllGames from "./component/AllGame";
import SideMenu from "./component/SideMenu";

// Dummy Data
import banners from "./dummy/banners";

// Context
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <div>
        <SideMenu />
        <Header />
        <Banner banners={banners} />

        <Container>
          <MyInfo />
          <AllGames />
        </Container>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
