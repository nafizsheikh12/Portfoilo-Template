import React from 'react'

const MCard = () => {
  return (
    <>
      <div className='col-lg-4'>
        <div className='prt-card'>
                             <div className='prt-card-img'>
                                <img src='img/bo.jpg'/>
                             </div>
                             <div className='row pt-3'>
                                <div className='col-lg-6'>
                                    <a className='dev' href='#'>Development</a>
                                </div>
                                <div className='col-lg-6'>
                                    <a className='prtcount' href='#'><i class="fa-solid fa-heart"></i>600</a>
                                </div>
                             </div>
                             <h4 className='prttitle pt-4 pb-3'>
                                 <a>The services provide for design </a>
                             </h4>
       </div>
      </div> 
    </>
  )
}

export default MCard