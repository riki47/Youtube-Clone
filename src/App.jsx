import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AppContext } from "./context/ContextApi";
import Header from "./assets/Header";
import Feed from "./assets/Feed";
import SearchResults from "./assets/SearchResults";
import VideoDetails from "./assets/VideoDetail";
import VideoCard from "./assets/VideoCard"
import SuggestionVideo from "./assets/SuggestionVideo"
import SearchResultVideo from "./assets/SearchResultVideo"
import LeftNav from "./assets/LeftNav"
import LeftNavMenu from "./assets/LeftNavMenu"

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full bg-black text-slate-100">
          <Header/>
          <Routes>
            <Route path = "/" exact element = {<Feed/>}/>
            <Route path = "/searchResult/:searchQuery" element = {<SearchResults/>}/>
            <Route path = "/video/:id" element = {<VideoDetails/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
