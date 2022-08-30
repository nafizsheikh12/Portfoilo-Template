import React from 'react'
import "./blog.css"


//componetnt
import MCard from '../card/MCard'


const BlogSec = () => {
  return (
    <>
        
      <div className='blogsection'>
           <div className='container'>
               <span className='subtitle'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
               <h2 className='title'>My Blog</h2>

               <div className='row'>
                    
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
                         <MCard/>
               </div>
               <hr/>
           </div>
       </div>
    </>
  )
}

export default BlogSec