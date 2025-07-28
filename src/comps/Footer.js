import React from 'react'
import Dnld from '../img/downloadicon.png';
import GitIcon from '../img/githubicon.png';
import Logo from '../img/logofooter.png';

function Footer() {

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
          <div className="PreFooter">
             <h1>Prepare your <span>Data</span>, design, build, <span>Train</span>, & <span>Predict</span></h1>
             <div className="Hero-Action mt-4">
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
      <div className="col-span-12">
          <div className="Footer">
              <img src={Logo} alt="Breans Footer Logo"/>
              <div className="Copyright">
                 © {currentYear} Breans. All Rights Reserved. <span>By Zine El Abidine Falouti</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer