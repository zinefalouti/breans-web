import React from 'react'
import BreanIcon from '../img/breanicon.png';
import {Link} from 'react-router-dom';

function Block({title,subtitle,content,icon,link}) {
  return (
    <div className="Block">
        <div className="Block-Head">
            <img src={BreanIcon} alt="Breans Icon"/>
            <h3>{subtitle}</h3>
        </div>
        <h1>{title}</h1>
        <img src={icon} alt={title} className="Block-Icon"/>
        <p>{content}</p>
        <Link to={link} className="Link-Btn w-fit">Quickstart</Link>
    </div>
  )
}

export default Block;