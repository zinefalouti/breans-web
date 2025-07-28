import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import KMeanIcon from '../img/kmeanicon.png';
import DocCore from '../comps/DocCore';
import DocKmean from '../comps/DocKmean';
import Footer from '../comps/Footer';

function KMean() {
   return (
    <>
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="K-Means"
          content="Breans K-Means provides a straightforward approach to cluster analysis, grouping similar data points 
          into distinct categories based on their features. With built-in K-Means++ initialization for improved centroid 
          selection and automatic export capabilities"
          icon={KMeanIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Load Your Data", "Run K-Means Clustering", 
            "Export Results (HTML)", "Export Results (CSV)", "Result Structure"
        ]
       }
       
       docs={<DocKmean/>}

       />
 
      <Footer/>
       

    </>
  )
}

export default KMean