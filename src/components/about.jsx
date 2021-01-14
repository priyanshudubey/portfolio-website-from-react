import React from 'react';

class About extends React.Component {
    state = {
        skills: ['C', 'C++', 'Python', 'JavaScript', 'Node.js', 'React.js', 'HTML', 'CSS',
                'Data Structures', 'mongoDB', 'MySQL', 'Django']
    };

    render() {
        return (
            <div className = "about" id = "about">
                <h2 className = "make">About Me</h2>
                <p>
                    Hello! I'm Priyanshu Dubey, a final year Computer science and Engineering Undergrad from Sagar 
                    Institute of Science and Technology, Bhopal. I enjoy making projects based on  
                    websites, ML/AI, Database, Flutter, etc. Mainly I prefer back-end development but I am also 
                    good with Front-end part. My goal is to  always build products
                    that provide pixel-perfect, performant experiences. These are few technologies on which I have
                    worked:
                </p>
                <ul>
                    {this.state.skills.map(skill => <li key = {skill}> {skill} </li>)}
                </ul>
            </div>
        );
    }
};

export default About;