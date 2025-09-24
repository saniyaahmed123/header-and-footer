import React from "react";
import "./Footer.css";

function Footer (){
    return(
    <footer className="footer">
        <div className="container">
            <div className="row">
                
                    
                
                <div className="footer-col">
                 <h3>Noor ul Qur’an</h3>
                    
                    <ul>
                        <li><a href="#">Hadith Collection</a></li>
                        <li><a href="#">Learn Tajweed</a></li>
                        <li><a href="#">Islamic Articles</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Support Us</h4>
                    <ul>
                        <li><a href="#">Donate</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Share with Others</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">Noor-ul-Qur’an@gmail.com</a></li>
                        <li><a href="#">+92 300 1234567</a></li>
                        <li><a href="#">Karachi, Pakistan</a></li>

                    </ul>
                </div>
                
                <div className="footer-col">
                    <h4>Folllow Us</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </footer>)
}


export default Footer;