import React, { Component } from 'react';
import { AdminAuthentication } from "../../utils/authentication";



class Admin extends Component {
    constructor(props: any) {
        super(props);
        AdminAuthentication();

    }
    componentDidMount(): void { }
    componentWillUnmount(): void { }
    render() {
        return (
            <div className="pageHeight">
                <p>Admin screen</p>
            </div>
        );
    };
};

export default Admin;