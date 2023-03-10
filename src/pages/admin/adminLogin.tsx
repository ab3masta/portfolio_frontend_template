import React, { Component } from 'react';
import LoginForm from "../../components/admin/loginForm";
import Header from "../../components/admin/header";
import { AdminAuthentication } from "../../utils/authentication";

class AdminLogin extends Component {
    constructor(props: any) {
        super(props);
        AdminAuthentication();

    }
    render() {
        return (
            <div className="pageHeight">
                <Header />
                <LoginForm history={window.history} />
            </div>
        );
    };
};

export default AdminLogin;