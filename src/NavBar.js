import React from "react";
import { FaWikipediaW } from "react-icons/fa"
import "./NavBar.css"
import { data } from "./data"


function NavElement({ icon, linkText , link }) {
    return (
        <div className="NavElement">
            { icon }
            <a href={link} target="_blank">{linkText}</a>
        </div >
    );
}

function WikiLogo() {
    return (
        <FaWikipediaW size={70} className="Wiki"/>
    );
}

export function NavBar() {
    return (
        <nav className="NavBar">
            <WikiLogo />
            {data.map((comp) => {
                return <NavElement {...comp}/>
            })}
        </nav>
    );
}
