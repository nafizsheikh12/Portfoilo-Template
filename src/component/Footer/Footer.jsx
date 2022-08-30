import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <>
       <footer>
           <div className='container'>
               <div className='row'>
                   <div className='col-lg-12'>
                         <div className='footer-area text-center'>
                              <div className='footerlogo'>
                                  <a href='#'>
                                     <img src='/img/logo-vertical-dark.png'/>
                                  </a>
                              </div>
                              <p>© 2022. All rights reserved by <a href='#'>Rainbow Theme</a></p>
                         </div>
                   </div>
               </div>
           </div>
       </footer>
    </>
  )
}

export default Footer