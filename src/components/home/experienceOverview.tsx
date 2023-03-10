import { Typography, Container, Grid, Link } from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";


export default function ExperienceOverview() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{ my: 8 }}>
      <Typography justifyContent="center"
        alignItems="center" variant="h4" gutterBottom component="div" sx={{ my: 5, fontWeight: 700 }} style={{ textAlign: "center" }}>
        {t("experienceOverviewTitleText")}
      </Typography>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="space-around"
        alignItems="center" >
        {/* <Link to="/projects" style={{ cursor: 'pointer' ,textDecoration: 'none',color: 'black'}}></Link> */}
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Link href="/projects" underline="none">
            <React.Fragment>
              <img className="image" src="./assets/svg/apps.svg" alt="me" /> 
              <Typography justifyContent="center"
                alignItems="center" variant="h6" gutterBottom component="div" sx={{ my: 5, fontWeight: 600 }} >
                {t("experienceProjectOverviewTitleText")}
              </Typography>
            </React.Fragment>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Link href="/mobile-app-projects" underline="none">
            <React.Fragment>
              <img className="image" src="./assets/svg/mobile_app.svg" alt="me" />
              <Typography justifyContent="center"
                alignItems="center" variant="h6" gutterBottom component="div" sx={{ my: 5, fontWeight: 600 }} >
                {t("experienceMobileAppDevelopmentTitleText")}
              </Typography>
            </React.Fragment>
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Link href="/mobile-web-projects" underline="none">
            <React.Fragment>
              <img className="image" src="./assets/svg/progressive_app.svg" alt="me" />
              <Typography justifyContent="center"
                alignItems="center" variant="h6" gutterBottom component="div" sx={{ my: 5, fontWeight: 600 }} >
                {t("experienceWebAppDevelopmentTitleText")}
              </Typography>
            </React.Fragment>
          </Link>
        </Grid>
      </Grid>
    </Container >
  )
}
