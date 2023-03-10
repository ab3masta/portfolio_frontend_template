import * as React from 'react';
import { Typography, Container, Box, Tooltip, Link } from '@mui/material';
import { useTranslation } from "react-i18next";

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
        "link": "https://github.com/AbdouAbarchiAboubacar",
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


const ResponsiveFooter = () => {
    const { t } = useTranslation();
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <Container maxWidth={false} sx={{ mt: 8, maxWidth: '100%', }} style={{
            background: '#093138',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', justifyItems: "center", pt: 2, pb: 1 }}>

                <Box sx={{ my: 1 }}>
                    <Box >
                        {socialMediaLinks.map((socialMedia) => (
                            <Tooltip title={socialMedia.name}>
                                <socialMedia.icon className="footerSocialIcon" onClick={() => openInNewTab(socialMedia.link)} />
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                            ml: 2,
                        },
                        my: 1
                    }}
                >
                    <Link href="/terms-of-service" underline='always' sx={{
                        color: 'white', ":hover": {
                            textDecoration: "underline",
                        },
                    }}>Terms of Service</Link>
                    <Link href="/privacy-policy" underline='always' sx={{ color: 'white' }}>
                        Privacy policy
                    </Link>
                </Box>
                <Box >
                    <Typography align="center" variant="body1" gutterBottom component="div" style={{ color: '#fff' }}>
                        {t("copyright").split("date")[0] + new Date().getFullYear() + t("copyright").split("date")[1]}
                    </Typography>
                </Box>
            </Box>
        </Container>

    );
};
export default ResponsiveFooter;