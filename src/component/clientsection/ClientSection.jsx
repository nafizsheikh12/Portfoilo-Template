import React from 'react'
import Tabarea from '../card/Tabarea'
import './clientsection.css'


const ClientSection = () => {
  return (
    <>
       <section id="clientSection">
          <div className='container'>
               <span className='subtitlef'>POPULAR CLIENTS</span>
               <h2 className='titlef'>Awesome Clients</h2>
               <div className='row'>
                   <div className='col-lg-4'>
                      <div className='clientleftbox'>
                           <div className='clientleftwrapper'>
                               <ul className='nav tab-navigation-button flex-column nav-pills me-3'>
                                   <li className='nav-item'>
                                      <a className='nav-link'>Javascript</a>
                                   </li>
                                   <li className='nav-item'>
                                      <a className='nav-link itemactive'>Javascript</a>
                                   </li>
                                   <li className='nav-item'>
                                      <a className='nav-link'>Javascript</a>
                                   </li>
                                   <li className='nav-item'>
                                      <a className='nav-link'>Javascript</a>
                                   </li>
                                   <li className='nav-item'>
                                      <a className='nav-link'>Javascript</a>
                                   </li>
                               </ul>
                           </div>
                      </div>
                   </div>

                   <div className='col-lg-8'>
                        <div className='row'>
                            
                                  <Tabarea/>
                                  <Tabarea/>
                                  <Tabarea/>
                                  <Tabarea/>
                                  <Tabarea/>
                                  <Tabarea/>
                             
                        </div>
                   </div>

               </div>
          </div>
       </section>
    </>
  )
}

export default ClientSection