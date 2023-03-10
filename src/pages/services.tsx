import React, { Component } from 'react';
import { Container } from "@mui/material";
import Header from "../components/services/header";
import Content from "../components/services/content";
class Services extends Component {

    render() {
        return (
                <Container maxWidth="xl" className="pageHeight">
                    <Header />
                    <Content />
                </Container>
        );
    };
};

export default Services;