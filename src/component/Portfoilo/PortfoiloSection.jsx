import React from 'react'
import './Portfoilo.css'

//component
import MCard from '../card/MCard'


const PortfoiloSection = () => {
  return (
    <>
       <div className='portfoiloSection section-gap section-separator'>
           <div className='container'>
               <span className='subtitle'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
               <h2 className='title'>My Portfoilo</h2>

               <div className='row'>
                   
                     
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
                    
                    
              </div>
              
           </div>
       </div>
    </>
  )
}

export default PortfoiloSection