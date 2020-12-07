import React from 'react'
import {Link} from "react-router-dom";

import Banner from './images/banner-bg2.png'

import './Css/bootstrap.min.css'
import './Css/flex-slider.css'
import './Css/font-awesome.css'
import './Css/owl-carousel.css'
import './Css/templatemo-lava.css'



export default function index() {
    return (
        
        <>
             {/* <!-- ***** Header Area Start ***** --> */}
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link class='logo'> Reach</Link>
                                {/* <!-- ***** Logo End ***** -->
                                
                                <!-- ***** Menu Start ***** --> */}
                                <ul class="nav">
                                    <li class="scroll-to-section"><Link class="menu-item" to="/" >Home</Link></li>
                                    <li class="scroll-to-section"><Link class="menu-item" to="/about" >About</Link></li>
                                    <li class="scroll-to-section"><Link class="menu-item" to="/testimonials" >Testimonials</Link></li>
                                    <li class="scroll-to-section"><Link class="menu-item" to="contact_us" >Contact Us</Link></li>

                                    <li class="submenu">
                                        <a>login</a>
                                        <ul>
                                            <li class="scroll-to-section"><Link class="menu-item" to="/admin_login">Admin</Link></li>
                                            <li class="scroll-to-section"><Link class="menu-item" to="user_login">User</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class='menu-trigger dropdown'>
                                    <span></span>
                                </div>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div class="welcome-area" id="welcome" style={{backgroundImage: `url(${Banner})`}}>

                {/* <!-- ***** Header Text Start ***** --> */}
                <div class="header-text">
                    <div class="container">
                        <div class="row">
                            <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Simple App to <em>REACH</em> <br/>your audience</h1>
                                <p>Duis sagittis auctor facilisis. Aenean venenatis dui vitae laoreet euismod. Morbi aliquet tortor accumsan, hendrerit metus sit amet, tempor tortor. Nulla mollis turpis non arcu porttitor hendrerit. Integer facilisis enim id magna volutpat mollis.</p> 
                                <Link class="main-button-slider"> KNOW US BETTER</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Header Text End ***** --> */}
            </div>
            {/* <!-- ***** Welcome Area End ***** --> */}

            {/* <!-- ***** Footer Start ***** --> */}
            <footer id="contact-us">
                <div class="container">
                    <div class="footer-content">
                        <div class="row">
                            {/* <!-- ***** Contact Form Start ***** --> */}
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <form class="contact-form">
                                    <form id="contact" action="" method="post"/>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Full Name" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}/>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" id="email" placeholder="E-Mail Address" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}/>
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" id="message" placeholder="Your Message" required="" style={{backgroundColor: `rgba(250,250,250,0.3)`}}></textarea>
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" class="main-button">Send Message Now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* <!-- ***** Contact Form End ***** --> */}
                            <div class="right-content col-lg-6 col-md-12 col-sm-12">
                                <h2>More About <em>Reach</em></h2>
                                <p>
                                    Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio.
                                    Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                                    <br/>
                                    If you need this contact form to send email to your inbox, you may follow our 
                                    <Link>contact</Link> page for more detail.
                                </p>
                                <ul class="social">
                                    <li><Link><i class="fa fa-facebook"></i> </Link></li>
                                    <li><Link><i class="fa fa-twitter"></i> </Link></li>
                                    <li><Link><i class="fa fa-linkedin"></i> </Link></li>
                                    <li><Link><i class="fa fa-rss"></i> </Link></li>
                                    <li><Link><i class="fa fa-dribbble"></i> </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="sub-footer">
                                <p>Copyright &copy; 2020 Title Fight | Powered By <a rel="nofollow" href="https://wearetitlefight.com">Title Fight</a></p>
                            </div>  
                        </div>
                    </div>
                </div>
            </footer>            
        </>

        
    
    )
}
