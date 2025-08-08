import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import DataIcon from '../img/datacheckicon.png';
import DocCore from '../comps/DocCore';
import DocDataCheck from '../comps/DocDatacheck';
import Footer from '../comps/Footer';

function Navigator() {
  return (
    <>
    
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Data Analyzer"
          content="The Data Analyzer is a utility for performing essential data exploration and transformation 
              tasks on datasets stored in CSV format. It includes methods for reading data, inspecting shapes, 
              detecting missing values, generating statistical summaries, visualizing data using bar charts, and exporting reports."
          icon={DataIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "CSV to Matrix", "Check dataset shape", 
            "Preview the data", "Find missing values", "Describe your columns", "Generate a full report",
            "Encode categorical columns", "Normalize numeric values", "Save the clean dataset"
        ]
       }
       
       docs={<DocDataCheck/>}

       />
 
      <Footer/>
    </>
  )
}

export default Navigator