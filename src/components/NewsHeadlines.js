import React from 'react'
import Style from '../css-module/NewsHeadLine.module.css'
export default function NewsHeadlines(props) {
    
   const naviagte=()=>{window.open(props.headline.url, '_blank')}

    return (
        <div className={Style.headlines} onClick={naviagte} target="_blank">
            <h3>{props.headline.title}</h3>
            <h4>{props.headline.content}</h4>
            <img src={props.headline.urlToImage} className={Style.img} />
            <figcaption id="author">~{props.headline.author ? props.headline.author:"Confidential"}</figcaption>
        </div>
    )
}
