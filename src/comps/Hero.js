import React from 'react'
import Dnld from '../img/downloadicon.png';
import GitIcon from '../img/githubicon.png';
import JavaIcon from '../img/javaicon.png';

function Hero() {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
       <div className="col-span-12">
            <div className="Hero">
                <h1><span>Machine Learning</span> & <span>AI Tools</span> for Java</h1>
                <h2>Breans is a lighweight library, open source, and production-ready.</h2>
                <h3>OPEN SOURCE, COMMERCIALLY USABLE, MIT LICENSE</h3>
            </div>
        </div> 
        <div className="col-span-12">
           <div className="Hero-Action">
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
        <div className="col-span-12 xl:col-span-10 xl:col-start-2">
             
          <div className="Hero-Banner">
            <div className="Hero-Version w-fit justify-self-center mb-2">
               <h3><span>V 1.1.2 Available Now</span></h3>
            </div>
            <h1><span>Breans</span> is fully compatible with the <span>latest</span> Java releases.</h1>

            <div className="Hero-Version w-fit justify-self-center">
               <img src={JavaIcon} alt="Java Icon" className="hidden lg:block"/>
               <h3>BUILT & TESTED IN THIS ENVIRONMENT: <span>Java 23.0.2</span> (2025-01-21) – HotSpot <span>64-Bit JVM</span></h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero