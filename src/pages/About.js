import React from 'react'
import Header from '../comps/Header';
import InnerHero from '../comps/InnerHero';
import Footer from '../comps/Footer';
import AboutImg from '../img/aboutlogo.png';
import Creator from '../img/creator.png';


function About() {
  return (
    <>
      <Header activeIndex={3}/>
      <InnerHero titleH="About" title="Breans" 
      content="Breans is an open-source Java library designed to make machine learning and AI techniques approachable, 
      modular, and ready for real-world deployment. From building neural networks and regression models to performing 
      clustering, probabilistic simulations, and behavior-driven AI logic."
      />

      <div className="AboutHero">
          <h1><span>Reasons</span> For Making <span>Breans</span></h1>
      </div>

      <div className="Block Project">
        <p>
            Breans was created for Java developers who want to integrate machine learning and AI into their projects 
            without spending days or weeks building models from scratch. I know any developer can create these tools on their own; 
            nothing here is magic or impossible. But writing, testing, and optimizing neural networks, regressions, clustering, 
            or behavior trees often takes valuable time away from building the actual application. 
            Breans exists to save you that time, providing ready-to-use, modular components so you can focus on your ideas 
            and let the library handle the heavy lifting.
        </p>
      </div>

      <div className="AboutImage">
          <img src={AboutImg} alt="About Breans"/>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <div className="Block AboutBlock">
                <div>
                <h1><span>Thank You</span> For Using <span>Breans</span></h1>
                <p>Kind Regards, Zine El Abidine Falouti</p>
                </div>
                <img src={Creator} alt="Creator of Breans"/>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default About