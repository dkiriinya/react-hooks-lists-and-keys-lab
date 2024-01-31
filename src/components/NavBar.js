import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map((link,index) => {
    return <li key={index}><a href={`#${link}`}>{link}</a></li>
  })
  const style = {
    display:"flex",
    listStyleType: "none"

  }

  return <nav>{/* display an <a> tag for each link here */}
  <ul style={style}>
  {linksElement}
  </ul></nav>;
}

export default NavBar;
