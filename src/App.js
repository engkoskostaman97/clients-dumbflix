import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Addfilm from "./component/addfilm";
import TvseriesPage from './pages/TvseriesPage'
import MoviesPage from './pages/MoviesPage'
import Paymen from './pages/paymen'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import Tvshow from "./pages/tvshow";
import Movies from "./pages/movies";
import Profiles from "./pages/profiles";
import Detailfilm from "./pages/detailfilm";
import Admin from "./component/admin";
import Listfilms from "./component/listfilms";
import Listdetails from "./component/listdetails";
import './App.css';




class App extends Component {
  render() {
    return (
      <>
        <Routes>
          {/* router admin */}
          <Route path='/admin' element={<Admin />} />
          <Route path='/listfilms/:category' element={<Listfilms />} />
          <Route path='/listfilms' element={<Listfilms />} />
          <Route path='/addfilm' element={<Addfilm />} />
          <Route path='/listdetails' element={<Listdetails />} />
          {/* router user */}
          <Route path='/' element={<Home />} />
          <Route path="/tvshow" element={<TvseriesPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<Tvshow />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/paymen" element={<Paymen />} />
          <Route path="/detailfilm" element={<Detailfilm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </>
    );

  }
}

export default App;
