import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* <br color="black"></br> */}
            {/*  <i className = "fa fa-code" style = {{color: "#FF5252"}}></i>  */}
            <hr></hr>
            <p>All rights reserved to
                <a href="https://github.com/priyanshudubey" target="_blank" rel="noopener noreferrer">
                <span> </span> 
                <i class="fa fa-chevron-left" style = {{color: "#FF5252"}} aria-hidden="true"></i>
                Priyanshu Dubey<b style = {{color: "#FF5252"}} >/</b> 
                <i class="fa fa-chevron-right" style = {{color: "#FF5252"}} aria-hidden="true"></i>
                </a>
            </p>
        </footer>
    );
};

export default Footer;
