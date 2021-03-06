import React, { useState } from 'react'
import '../App.css';
export default function NavigationBar(props) {

    function updateUrl($event) {
        let categoryId = $event.target.id      
        document.getElementById($event.target.id).setAttribute("style",
            "background-color: black;color: white;cursor: pointer;border:3px solid rgb(248, 214, 162);border-radius: 37px;"); 
        props.url(`https://newsapi.org/v2/top-headlines?country=gb&category=${$event.target.id}&apiKey=15b1ea3c48914ad08226be4179b25c79`)
    }

    return (
        <li><a className="listItem" id={props.category} onClick={updateUrl}>{props.category.toUpperCase()}</a></li>
    )
}
