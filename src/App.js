import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Faq from "./pages/Faq";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";
import Info from "./pages/Posts/Info";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Center as="header">
          <NavBar />
        </Center>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Posts />} />
          <Route path="/como-funciona" element={<Faq />} />
          <Route path="/publicar" element={<Submit />} />
          <Route path="/posts/:id" element={<Info />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
