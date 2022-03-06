import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import StreamCreate from "./components/streams/streamCreate";
import StreamDelete from "./components/streams/streamDelete";
import StreamEdit from "./components/streams/streamEdit";
import StreamList from "./components/streams/streamList";
import StreamShow from "./components/streams/streamShow";
 
function App() {
  return (     
    <div className="App ui container"> 
      <BrowserRouter >
      <Header /> 
      <Routes>
        <Route path={"/streams/new"} element={<StreamCreate/>} />
        <Route path={"/streams/edit/:id"} element={<StreamEdit/>} />
        <Route path={"/streams/delete/:id"} element={<StreamDelete/>} />
        <Route path={"/streams/show"} element={<StreamShow/>} />
        <Route path={"/"} element={<StreamList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
