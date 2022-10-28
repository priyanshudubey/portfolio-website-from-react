import React from 'react';

class Profiles extends React.Component {

    state = {
        list: [
            {
                link: 'https://github.com/priyanshudubey',
                icon: 'fa fa-github fa-lg'
            },
            {
                link: 'https://www.linkedin.com/in/priyanshudubey/',
                icon: 'fa fa-linkedin fa-lg'
            },
            {
                link: 'https://wa.me/919570175896',
                icon: 'fa fa-whatsapp fa-lg'
            },
            {
                link: 'http://codeforces.com/profile/priyanshudubey',
                icon: 'fa fa-code fa-lg'
            },
            {
                link: 'mailto:priyanshu0dubey@gmail.com',
                icon: 'fa fa-envelope fa-lg'
            }
        ],
    };

    render() { 
        return (
            <div>
                <div className = 'links'>
                    {this.state.list.map(element => (
                        <a key = {element.link} href = {element.link} target="_blank" rel="noopener noreferrer">
                            <i className = {element.icon} aria-hidden = "true"></i>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Profiles;
