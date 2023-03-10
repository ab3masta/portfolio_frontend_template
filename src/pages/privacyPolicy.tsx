import React, { Component } from 'react';
import { Container, Typography, Box, ListItem } from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";


class PrivacyPolicy extends Component<WithTranslation> {
    openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    render() {
        const t = this.props.t;
        return (
            
                <Container maxWidth="xl" className="pageHeight">

                    <Box sx={{ width: "100%", px: { xs: 0, sm: 5, md: 10, lg: 20, xl: 40 } }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mt: 5 }}>
                            {t("privacyPolicyText")}
                        </Typography>
                        <Typography variant="caption" sx={{ my: 3 }}>
                            {t("privacyPolicyLatestUpdateText")}
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("theWebsitePrivacyPolicyText")}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyOverviewText")}
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyOverviewContentText")}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyPersonalInformationWeCollectText")}
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyPersonalInformationWeCollectContentText")}
                        </Typography>
                        <ListItem sx={{ display: 'list-item' }}>
                            {t("privacyPolicyPersonalInformationWeCollectContentListItem1Text")}
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            {t("privacyPolicyPersonalInformationWeCollectContentListItem2Text")}
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            {t("privacyPolicyPersonalInformationWeCollectContentListItem3Text")}
                        </ListItem>
                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyPersonalInformationWeCollectContent2Text")}
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyPersonalInformationWeCollectContent3Text")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyHowDoWeUseYourPersonalInformationText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyHowDoWeUseYourPersonalInformationContentText")}
                        </Typography>


                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyShareYourPersonalDataText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyShareYourPersonalDataContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyBehavioralAdvertisingText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyBehavioralAdvertisingContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyDoNotTrackText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyDoNotTrackContentText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyYourRightsText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyYourRightsContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyDataRetentionText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyDataRetentionContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyMinorsText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyMinorsContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyChangesText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyChangesContentText")}
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                            {t("privacyPolicyContactUsText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyContactUsContentText")}
                        </Typography>

                        <Typography variant="body1" sx={{ my: 3 }}>
                            {t("privacyPolicyAddressText")}
                        </Typography>



                    </Box>

                </Container>
        );
    };
};

export default withTranslation()(PrivacyPolicy);