import React from 'react'
import Dnld from '../img/downloadicon.png';
import GitIcon from '../img/githubicon.png';


function InnerHero({titleH,title,content}) {
  return (
    <div className="grid grid-cols-1 gap-4">
       <div className="col-span-1">
            <div className="InnerHero">
                <h1><span>{titleH}</span> {title}</h1>
                <p>
                    {content}
                </p>
                <div className="InnerHeroAction">
                    <a href="https://github.com/zinefalouti/breans/raw/refs/heads/main/jar/breans.jar" target="_blank" rel="noopener noreferrer">
                        <button className="btn-main">
                            Download JAR
                            <img src={Dnld} alt="Download Icon"/>
                        </button>
                        </a>
                        <a href="https://github.com/zinefalouti/breans" target="_blank" rel="noopener noreferrer">
                        <button className="btn-secondary">
                            Source Code
                            <img src={GitIcon} alt="Github Icon"/>
                        </button>
                    </a>
                </div>
            </div>
       </div>
    </div>
  )
}

export default InnerHero