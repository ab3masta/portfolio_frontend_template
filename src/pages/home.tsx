import React, { Component } from 'react';
import Tools from "../components/components/tools";
import Me from "../components/home/me";
import ExperienceOverview from "../components/home/experienceOverview";
import ExperienceNumber from "../components/home/experienceNumber";
import ContactForm from "../components/components/contactForm";
import NewsLetter from "../components/components/newsletter";
import { CssBaseline, Divider } from '@mui/material';
class Home extends Component {

    render() {
        return (
           
                <div className="pageHeight">
                    <CssBaseline />
                    <Me />
                    <Tools />
                    <ExperienceOverview />
                    <Divider light sx={{ borderBottomWidth: '1px', bgcolor: '#093138ec' }} />
                    <ExperienceNumber />
                    <Divider light sx={{ borderBottomWidth: '1px', bgcolor: '#093138ec' }} />
                    <NewsLetter />
                    <Divider light sx={{ borderBottomWidth: '1px', bgcolor: '#093138ec' }} />
                    <ContactForm />
                </div>

        );
    };
};

export default Home;