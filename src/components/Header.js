import React, { useEffect, useState, useRef, useContext } from 'react'
import Style from '../css-module/Header.module.css'
import NavigationBar from '../components/NavigationBar'
export default function Header(props) {
  var categoryUrl = "http://localhost:9090/api/categories/6929e4f32c84416aafb7717803dafd48";
  var currentDateTime = new Date();

  var [categories, setCategory] = useState([])
  const inputRef = useRef(null)
  useEffect(() => {
    getGategories();
  }, [])

  const getGategories = async () => {
    const response = await fetch(categoryUrl);
    const categories = await response.clone().json();
    setCategory(categories);
  }

  function searchHandler() {
    if (inputRef.current.value != "")
      props.url(`https://newsapi.org/v2/top-headlines?country=gb&q=${inputRef.current.value}&apiKey=15b1ea3c48914ad08226be4179b25c79`)

  }
  return (
    <React.Fragment>
      <div className={Style.header}>
        <h1 className={Style.appname}>
          <span className={Style.uk}>UK </span> Times
          </h1>
        <h3 className={Style.date}>
          {currentDateTime.toDateString()}
        </h3>
      </div>
      <div className={Style.nav}>
        {categories.map(category => <NavigationBar key={category} category={category} url={props.url}></NavigationBar>)}
        <input className={Style.searchBox} type="text" ref={inputRef}></input> <button onClick={searchHandler}><i className="fa fa-search btn btn-primary"></i></button>
      </div>
    </React.Fragment>
  )
}
