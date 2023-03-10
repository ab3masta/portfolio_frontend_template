import React, { Component } from 'react';
import { Container, Typography, Box, ListItem } from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";

class TermsOfService extends Component<WithTranslation> {
    openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    render() {
        const t = this.props.t;
        return (
            <Container maxWidth="xl" className="pageHeight">
                <Box sx={{ width: "100%", px: { xs: 0, sm: 5, md: 10, lg: 20, xl: 40 } }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mt: 5 }}>
                        {t("termsOfServiceText")}
                    </Typography>
                    <Typography variant="caption" sx={{ my: 3 }}>
                        {t("termsOfServiceLatestUpdateText")}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 3 }}>
                        {t("theWebsiteTermsOfServiceText")}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection1Text")}
                    </Typography>

                    {t("termsOfServiceSubSection1Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection2Text")}
                    </Typography>

                    {t("termsOfServiceSubSection2Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection3Text")}
                    </Typography>

                    {t("termsOfServiceSubSection3Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection4Text")}
                    </Typography>

                    {t("termsOfServiceSubSection4Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection5Text")}
                    </Typography>

                    {t("termsOfServiceSubSection5Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection6Text")}
                    </Typography>

                    {t("termsOfServiceSubSection6Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection7Text")}
                    </Typography>

                    {t("termsOfServiceSubSection7Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection8Text")}
                    </Typography>

                    {t("termsOfServiceSubSection8Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection9Text")}
                    </Typography>

                    {t("termsOfServiceSubSection9Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection10Text")}
                    </Typography>

                    {t("termsOfServiceSubSection10Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}
                    {t("termsOfServiceSubSubSection10Text").split('\n').map((text) => (
                        <ListItem sx={{ display: 'list-item' }}>
                            {text}
                        </ListItem>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection11Text")}
                    </Typography>

                    {t("termsOfServiceSubSection11Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection12Text")}
                    </Typography>

                    {t("termsOfServiceSubSection12Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection13Text")}
                    </Typography>

                    {t("termsOfServiceSubSection13Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection14Text")}
                    </Typography>

                    {t("termsOfServiceSubSection14Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection15Text")}
                    </Typography>

                    {t("termsOfServiceSubSection15Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection16Text")}
                    </Typography>

                    {t("termsOfServiceSubSection16Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    {t("termsOfServiceSubSubSection16Text").split('\n').map((text) => (
                        <ListItem sx={{ display: 'list-item' }}>
                            {text}
                        </ListItem>
                    ))}


                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection17Text")}
                    </Typography>

                    {t("termsOfServiceSubSection17Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection18Text")}
                    </Typography>

                    {t("termsOfServiceSubSection18Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection19Text")}
                    </Typography>

                    {t("termsOfServiceSubSection19Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection20Text")}
                    </Typography>

                    {t("termsOfServiceSubSection20Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection21Text")}
                    </Typography>

                    {t("termsOfServiceSubSection21Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection22Text")}
                    </Typography>

                    {t("termsOfServiceSubSection22Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection23Text")}
                    </Typography>

                    {t("termsOfServiceSubSection23Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection24Text")}
                    </Typography>

                    {t("termsOfServiceSubSection24Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection25Text")}
                    </Typography>

                    {t("termsOfServiceSubSection25Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection26Text")}
                    </Typography>

                    {t("termsOfServiceSubSection26Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                    <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                        {t("termsOfServiceSection27Text")}
                    </Typography>

                    {t("termsOfServiceSubSection27Text").split('\n').map((text) => (
                        <Typography variant="body1" sx={{ my: 3 }} style={{ textAlign: 'justify', }}>{text}</Typography>
                    ))}

                </Box>
            </Container>
        );
    };
};

export default withTranslation()(TermsOfService);