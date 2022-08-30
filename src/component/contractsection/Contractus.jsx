import React from 'react'
import "./contract.css"


const Contractus = () => {
  return (
    <>
       <section id="contractUs">
            <div className='container'>
               <span className='subtitle'>Contract</span>
               <h2 className='title'>Contract With Me</h2>

               <div className='row contractrow'>
                     <div className='col-lg-5'>
                     
                        <div class="contact-about-area">
                            <div class="contractthumbnail">
                                <img src="img/contact1.png" alt="contact-img"/>
                            </div>
                            <div class="contract-title-area">
                                <h4 class="contract-title">Nevine Acotanza</h4>
                                <span>Chief Operating Officer</span>
                            </div>
                            <div class="contract-description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.
                                </p>
                                <span class="phone">Phone: <a href="tel:01941043264">+01234567890</a></span>
                                <span class="mail">Email: <a href="mailto:admin@example.com">admin@example.com</a></span>
                            </div>
                            <div class="social-area">
                                <div class="name">FIND WITH ME</div>
                                <div class="social-icone">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    
                     </div>
                     <div className='col-lg-7'>
                     <div class="contact-form-wrapper">
                            <div class="introduce">

                                <form class="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="contact-name">Your Name</label>
                                            <input class="form-control form-control-lg" name="contact-name" id="contact-name" type="text"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="contact-phone">Phone Number</label>
                                            <input class="form-control" name="contact-phone" id="contact-phone" type="text"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="contact-email">Email</label>
                                            <input class="form-control form-control-sm" id="contact-email" name="contact-email" type="email"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="subject">subject</label>
                                            <input class="form-control form-control-sm" id="subject" name="subject" type="text"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <button name="submit" type="submit" id="submit" class="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                     </div>
               </div>
            </div>
       </section>
    </>
  )
}

export default Contractus