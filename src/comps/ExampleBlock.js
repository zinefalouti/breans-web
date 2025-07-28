import React from 'react'
import BreanIcon from '../img/breanicon.png';
import GitIcon from '../img/githubicon.png';

function ExampleBlock({title, subtitle, content, link, img}) {
  return (
    <div className="Block Project">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
                <div className="Block-Head">
                    <img src={BreanIcon} alt="Breans Icon"/>
                    <h3>{subtitle}</h3>
                </div>
                <h1>{title}</h1>
                <p>{content}</p>
                <a href={link} target="_blank" rel="noreferrer">
                    <button className="btn-secondary">
                        Clone
                        <img src={GitIcon} alt="Github Icon"/>
                    </button>
                </a>
            </div>
            <div className="col-span-12 lg:col-span-4">
                <img src={img} alt={title}/>
            </div>
        </div>
    </div>
  )
}

export default ExampleBlock