import React, { useEffect, useState } from 'react';
import './PageTitle.css'
import logo from './logo.png'

function PageTitle(props) {
const [offsetY, setOffsetY] = useState(0)
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [])
  return (
    <>
      <div className= "page-title"         
        style = {{transform: `translateY(${offsetY *0.6}px)`}} 
      >
        <h2 style = {{transform: `translateY(${offsetY *0.17}px)`}} >{props.title}</h2>
        <img src={logo} alt="logotip" style = {{transform: `translateY(${offsetY *0.1}px)`}} ></img>
      </div>
    </>
  );
}
export default PageTitle;