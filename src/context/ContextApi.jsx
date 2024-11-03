import React from "react";
import { createContext, useState, useEffect } from "react";
import { FetchDataApi } from "../../utils/Api";

export const Context = createContext();

export const AppContext = (props) =>
{
  const[loading,setLoading] = useState(false);
  const[searchResult,setSearchResult] = useState(false);
  const[selectCatagories,setSelectCatagories] = useState("New");
  const[mobileMenu,setMobileMenu] = useState(false);

  useEffect(()=>{
    fetchSelectedCatagoryData(selectCatagories)
  },[selectCatagories])

  const fetchSelectedCatagoryData = (query) =>
  {
    setLoading(true)
    FetchDataApi(`search/?q=${query}`).then(({contents})=>{
      //console.log(contents);
      setSearchResult(contents);
      setLoading(false)
    })
  }

  return(
    <Context.Provider value = {{
      loading,setLoading,
      searchResult,setSearchResult,
      selectCatagories,setSelectCatagories,
      mobileMenu,setMobileMenu
    }}>
      {props.children}
    </Context.Provider>
  )

}

