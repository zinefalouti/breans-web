import React from 'react'
import Dnld from '../img/downloadicon.png';
import GitIcon from '../img/githubicon.png';
import BackBTN from '../img/backbtn.png';
import {Link} from 'react-router-dom';

function DocHero({titleH, title, content, icon}) {
  return (
      <div className="grid grid-cols-12 gap-4">
       <div className="col-span-12 lg:col-span-8">
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
                    <Link to="/docs"><img src={BackBTN} alt="Back Button" className="BackBtn"/></Link>
                </div>
                
            </div>
       </div>
       <div className="hidden lg:block lg:col-span-4">
          <img src={icon} alt={title}/>
       </div>
       <div className="col-span-12 mb-4">
          <hr/>
       </div>
    </div>
  )
}

export default DocHero