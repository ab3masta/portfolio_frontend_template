import React, { Component } from 'react';

import AllProjects from '../components/projects/allProjects';

class Projects extends Component {

    render() {
        return (
            <div className="pageHeight">
                <AllProjects />
            </div>
        );
    };
};

export default Projects;