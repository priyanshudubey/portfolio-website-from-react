import React from 'react';

class Projects extends React.Component {
    state = {
        list: [
            {
                name: 'BLACK DAY',
                detail: "Developing an operating system from scratch with my own kernel.",
                tools: ['C'],
                live: ' ',
                code: ' '
            },
            {
                name: 'LEARNING MANAGEMENT SYSTEM',
                detail: "Developed a learning management system which has two modules i.e. Quiz and Programming arena. It can be used to evaluate the students performance.",
                tools: ['Django','Python','PHP' , 'JavaScript'],
                live: 'https://github.com/priyanshudubey/Hack-Hive',
                code: 'https://github.com/priyanshudubey/Hack-Hive'
            },
            {
                name: 'CHAT BOT',
                detail: "Developed a chatbot for IT help desk where they can get their queries resolved related to some issues they are facing in their system. So, they can get those queries resolved within fraction of seconds in place of waiting for the IT support team.",
                tools: ['Dailogflow', 'Node.js', 'MySQL', 'HTML', 'CSS'],
                live: 'https://github.com/priyanshudubey/Chatbot',
                code: 'https://github.com/priyanshudubey/Chatbot'
            },
            {
                name: 'EYE BLINK DETECTION',
                detail: "Developed a Deep learning model which can detect the number of eye blinks from any video or from live camera feed.",
                tools: ['Python3'],
                live: 'https://github.com/priyanshudubey/Eye-Blink-Detection',
                code: 'https://github.com/priyanshudubey/Eye-Blink-Detection'
            },
            {
                name: 'PORTFOLIO WEBSITE',
                detail: "Build and deployed my own portfolio website.",
                tools: ['React.js', 'JavaScript', 'CSS'],
                live: 'https://priyanshudubey.me/',
                code: 'https://github.com/priyanshudubey/portfolio'
            },
            {
                name: 'MEME-GENERATOR',
                detail: "Developed a meme generator where you will get many famous meme pictures on which you can add some texts.",
                tools: ['JavaScript', 'HTML', 'CSS'],
                live: 'https://github.com/priyanshudubey/Meme-generator',
                code: 'https://github.com/priyanshudubey/Meme-generator'
            },
            {
                name: 'CPU & MEMORY USAGE',
                detail: "Developed a bash script which can be deployed on server and can track it's CPU and memory usage anw it will also send an alert email to the provided mail Id  when the server will cross the threshold. It can also be used on any individual system.",
                tools: ['Bash'],
                live: 'https://github.com/priyanshudubey/CPU-and-Memory-usage',
                code: 'https://github.com/priyanshudubey/CPU-and-Memory-usage'
            },
        ]
    };
    render() { 
        return (
            <div className = "project" id = "project">
                <h2 className = "make">Projects</h2>
                <ul>
                    {this.state.list.map(item => (
                        <li key = {item.detail}>
                            <div className = "cards">
                                <h4 className = "make"> {item.name} </h4>
                                <p> {item.detail} </p>
                                <p className = "tools"> {item.tools.map(tool => (
                                    <span key = {tool}> | {tool} | </span>
                                ))} </p>
                                <a href = {item.live} target="blank">Live</a>
                                <span> | </span>
                                <a href = {item.code} target="blank">Code</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Projects;