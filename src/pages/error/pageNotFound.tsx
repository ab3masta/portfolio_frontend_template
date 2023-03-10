import React, { Component } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';

class PageNotFound extends Component<WithTranslation> {

    render() {
        const t = this.props.t;
        return (


            <Container className="pageHeight" maxWidth="xl" sx={{ my: 8 }}>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", my: 1, flexDirection: { xs: "column", md: "row" }, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                        <lord-icon trigger="loop" src="./assets/json/warning.json"
                            style={{ width: "200px", height: "200px" }} ></lord-icon>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                        <Typography justifyContent="center"
                            alignItems="center" variant="h3" gutterBottom component="div" sx={{ my: 2 }} style={{ textAlign: "center" }}>
                            {t("pageNotFoundText")}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        );
    };
};

export default withTranslation()(PageNotFound);