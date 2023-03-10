import React, { Component } from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import { Container, Typography, Grid, Divider, Box, Chip, Avatar, Tooltip } from "@mui/material";
import { BiRocket } from "react-icons/bi";
import { GoMortarBoard } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import TimelineComponent from './timelineComponent';
import SkillLinearPropgressComponent from './skillComponent';
import formation from "../../constants/formation";
import parcours from "../../constants/parcours";
import skillProgress from "../../constants/skillProgress";
import {
    contactEmailAdress,
    contactWhatsAppNumber,
    contactPhoneNumber,
    contactAddress, professionalExperience
} from "../../constants/constants";
import { FacebookRounded, Instagram, GitHub, Twitter, LinkedIn } from "@mui/icons-material";


const socialMediaLinks = [
    {
        "name": "Facebook",
        "icon": FacebookRounded,
        "link": "https://web.facebook.com",
    },
    {
        "name": "GitHub",
        "icon": GitHub,
        "link": "https://github.com",
    },
    {
        "name": "Instagram",
        "icon": Instagram,
        "link": "https://www.instagram.com",
    },
    {
        "name": "Twitter",
        "icon": Twitter,
        "link": "https://twitter.com",
    },
    {
        "name": "LinkedIn",
        "icon": LinkedIn,
        "link": "https://www.linkedin.com",
    },

];


class AboutMe extends Component<WithTranslation> {
    openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    render() {
        const t = this.props.t;
        return (
            <Container maxWidth="xl" sx={{ my: 8 }}>
                <Typography justifyContent="center"
                    alignItems="center" variant="h3" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} style={{ textAlign: "center" }}>
                    {t("aboutMeResume")}
                </Typography>
                <Grid
                    container spacing={2} direction={{ xs: "column", md: "row" }} sx={{ my: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={4} justifyContent="center"
                        alignItems="center" >
                        <img className="mePhoto" src="./assets/images/me.jpg" alt="me" />
                    </Grid>
                    <Grid item xs={6} justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography justifyContent="center"
                            alignItems="center" variant="h5" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} >
                            {t("whatIam")}
                        </Typography>
                        <Typography justifyContent="center"
                            alignItems="center" variant="body2" align="justify" gutterBottom component="div" sx={{ my: 2, mb: 4 }} >
                            {t("aboutMeText")}
                        </Typography>
                        <Divider light sx={{ borderBottomWidth: '1px', bgcolor: '#093138ec' }} />

                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "start", my: 1, flexDirection: { xs: "column", md: "row" }, }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} >{t("aboutMeNameText")}</Typography>
                                <Typography variant="subtitle1" >
                                    MyName
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t("aboutMeExperienceText")} </Typography>
                                <Typography variant="subtitle1" >
                                    {professionalExperience + t("aboutMeYearExperienceText")}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "start", my: 1, flexDirection: { xs: "column", md: "row" }, }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t("aboutMeWhatsAppText")} </Typography>
                                <Typography variant="subtitle1" >
                                    {contactWhatsAppNumber}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t("aboutMeEmailAdressText")} </Typography>
                                <Typography variant="subtitle1" >
                                    {contactEmailAdress}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "start", my: 1, flexDirection: { xs: "column", md: "row" }, }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t('aboutMePhoneNumber')} </Typography>
                                <Typography variant="subtitle1" >
                                    {contactPhoneNumber}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t("aboutMeAdressText")} </Typography>
                                <Typography variant="subtitle1" >
                                    {contactAddress}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "flex-end", my: 2, flexDirection: "row" }}>
                            {socialMediaLinks.map((socialMedia) => (
                                <Tooltip title={socialMedia.name}>
                                    <socialMedia.icon className="socialIcon" onClick={() => this.openInNewTab(socialMedia.link)} sx={{ cursor: 'pointer', ml: 2 }} />
                                </Tooltip>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Divider>
                    <Chip color="primary" label={t("aboutEducationText")} avatar={<Avatar sx={{ bgcolor: "primary.main", }} alt="Remy Sharp"><GoMortarBoard color="#fff" style={{ fontSize: "20px", }} /> </Avatar>} sx={{ my: 2 }} />
                </Divider>
                <TimelineComponent data={formation} />
                <Divider>
                    <Chip color="primary" label={t("aboutExperienceText")} avatar={<Avatar sx={{ bgcolor: "primary.main", }} alt="Remy Sharp"><BiRocket color="#fff" style={{ fontSize: "20px", }} /> </Avatar>} sx={{ my: 2 }} />
                </Divider>
                <TimelineComponent data={parcours} />
                <Divider>
                    <Chip color="primary" label={t("aboutSkillText")} avatar={<Avatar sx={{ bgcolor: "primary.main", }} alt="Remy Sharp"><GiSkills color="#fff" style={{ fontSize: "20px", }} /> </Avatar>} sx={{ my: 2 }} />
                </Divider>
                <SkillLinearPropgressComponent data={skillProgress} />
            </Container>
        )
    }
}

export default withTranslation()(AboutMe);