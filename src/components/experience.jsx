import React from 'react';

class Experience extends React.Component {
    state = {
        list: [
            {
                name: 'TECHNOLOGY DEVELOPMENT INTERN',
                desig: 'Triluxo Technologies',
                dur: 'Oct 2020 - Dec 2020',
                detail: "Developed a chatbot for room services in hotel where visitor can get the room services, room cleaning, laundary and all such services throw the chatbot.",
                tools: ['Dailogflow', 'Node.js'],
                live: ' ',
                code: 'https://drive.google.com/file/d/1eoO8p-8-If7zU_lXi17mJAXzsycWH5bg/view?usp=sharing'
            },
            {
                name: 'SOFTWARE DEVELOPER INTERN',
                desig: 'GallantFusionTech',
                dur: 'July 2020 - Sept 2020',
                detail: "Developed few web apps on MERN stack and also worked on Rest API.",
                tools: ['MongoDB','Node.js','React', 'Express.js', 'Rest API' , 'MySQL'],
                live: ' ',
                code: ' '
            },
            {
                name: 'ASSOCIATE NLP ENGINEER',
                desig: 'Emphasis Corp',
                dur: 'Sept 2019 - Dec 2019',
                detail: "Developed a chatbot for IT help desk where they can get their queries resolved related to some issues they are facing in their system. So, they can get those queries resolved within fraction of seconds in place of waiting for the IT support team.",
                tools: ['Dailogflow', 'Node.js', 'MySQL', 'HTML', 'CSS'],
                live: ' ',
                code: ' '
            },
        ]
    };
    render() { 
        return (
            <div className = "project" id = "experience">
                <h2 className = "make">Experiences</h2>
                <ul>
                    {this.state.list.map(item => (
                        <li key = {item.detail}>
                            <div className = "cards">
                                <h4 className = "make"> {item.name}  </h4>
                                <h1 className = "make"> {item.desig} |  {item.dur}</h1>
                                <p> {item.detail} </p>
                                <p className = "tools"> {item.tools.map(tool => (
                                    <span key = {tool}> | {tool} | </span>
                                ))} </p>
                                <a href = {item.live} target="blank">Live Project</a>
                                <span> | </span>
                                <a href = {item.code} target="blank">Certificate</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Experience;