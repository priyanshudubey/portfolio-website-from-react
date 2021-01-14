import React from 'react';

const Navbar = (props) => {
    return (
        <div className = "navbar" id="navbar">
            {/* <i class="far fa-file-code"></i> */}
            {/* <img src="././public/favicon.img">favicon</img> */}
            <a href = " " className = "favi"> ˂／˃ </a>
            <a href="https://drive.google.com/file/d/1syfR9C7Blu0aBZztCfdAibRd_vZ9dxVc/view?usp=sharing" 
            target="blank">Resume</a>
            <a href="#contact"> Contact</a>
            <a href="#interest"> Interest</a>
            <a href="#project"> Projects</a>
            <a href=" #experience">Experiences</a>
            <a href="#about"> About</a>
            <a className = "icon" href = "javascript:" onClick = {() => props.response()}>
                <i className = "fa fa-bars"></i>
            </a>
    </div>
    );
};

export default Navbar;