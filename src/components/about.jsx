import React from 'react';

class About extends React.Component {
    state = {
        skills: ['C/C++', 'Python', 'JavaScript', 'Node.js', 'React.js',
                'Data Structures', 'MySQL', 'AWS']
    };

    render() {
        return (
            <div className = "about" id = "about">
                <h2 className = "make">About Me</h2>
                <p>
                    Hello! I'm Priyanshu Dubey. I am Working as a SYSTEMS ENGINEER in TCS. I prefer working with  
                    web apps, Databases, and AWS. My goal is to build products
                    that provide pixel-perfect, performant experiences. These are a few technologies on which I have
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