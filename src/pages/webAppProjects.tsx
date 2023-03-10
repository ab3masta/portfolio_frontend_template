import React, { Component } from 'react';

import WebAppProjects from '../components/projects/webAppProjects';

class WebAppProject extends Component {

    render() {
        return (
                <div className="pageHeight">
                    <WebAppProjects />
                </div>
        );
    };
};

export default WebAppProject;