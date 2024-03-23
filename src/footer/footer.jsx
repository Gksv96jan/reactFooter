import React from "react";
import './footer.css';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';    
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';
import logo from '../assets/logo.png';

const Footer=()=>{
    return(
        <div className="Footer">
            <div className="sb_footer section_padding">
                
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div_left">
                    <h2>Contact Us</h2>
                        <div className="footer-link_first">
                            
                            <h3>For Business</h3>
                            <p>business@kfc.com</p>
                        </div>
                        <div className="footer-link_second">                        
                            <h3>For Careers</h3>
                            <p>hr@kfc.com</p>
                        </div>
                        <div className="footer-link_third">
                        
                            <h3>For Queries</h3>
                            <p>support@kfc.com</p>
                            <p>+91 86021 85525</p>
                        </div>
                        
                    </div>
                    <div className="sb_footer-links_div_right">
                        <img src={logo} alt="" />
                        <div className="socialmedia">
                            <a href="https://www.fb.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a>
                        </div>
                    </div>
                    
                </div>

                <hr />
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            Copyright 
                            @{new Date().getFullYear()} | Alright resevered.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/home"><div><p>Terms & Conditions</p></div></a>
                        <a href="/home"><div><p>Privacy</p></div></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;