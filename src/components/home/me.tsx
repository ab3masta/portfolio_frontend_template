import { Component } from 'react';
import { Typography, Tooltip, Container, Grid, Box, Button } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { clientNumber, professionalExperienceYears, projectCompleted } from '../../constants/constants';

const socialMediaLinks = [
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


class Me extends Component<MeProps & WithTranslation> {
  render() {
    const t = this.props.t;
    const openInNewTab = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
      <Container maxWidth="xl" sx={{ my: 8 }}>
        <Grid
          container spacing={2} direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img className="mePhoto" src="./assets/images/me.jpg" alt="me" />
          </Grid>
          <Grid item xs={8} >
            <Box sx={{ width: '100%' }}>
              <Typography justifyContent="flex-start"
                alignItems="flex-start" variant="h4" gutterBottom component="div" sx={{
                  my: 2, fontFamily: 'monospace',
                  fontWeight: 700, color: "primary.main"
                }}>
                {t("hiText")}
              </Typography>
              <Typography justifyContent="flex-start"
                alignItems="flex-start" variant="h5" gutterBottom component="div">
                {t("whatIam")}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, justifyContent: "start", alignItems: 'start', justifyItems: "start", my: { xs: 0, md: 4 }, }}>
                <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: { xs: 1, md: 0 }, }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: "center" }} >
                    <lord-icon trigger="loop" src="./assets/json/circle.json"
                      style={{ width: "50px", height: "50px" }} >
                      <Typography variant="h6" sx={{ fontWeight: 700, ml: '15px', mt: "10px" }} >
                        {clientNumber}
                      </Typography>
                    </lord-icon>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, ml: 2 }} > {t("clientsText")} </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: { xs: 1, md: 0 }, ml: { xs: 0, md: 4 }, }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: "center" }} >
                    <lord-icon trigger="loop" src="./assets/json/circle.json"
                      style={{ width: "50px", height: "50px" }} >
                      <Typography variant="h6" sx={{ fontWeight: 700, ml: '15px', mt: "10px" }} >
                        {`+${professionalExperienceYears}`}
                      </Typography>
                    </lord-icon>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, ml: 2 }} > {t("skillProfessionalExperienceText")} </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: { xs: 1, md: 0 }, ml: { xs: 0, md: 4 }, }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: "center" }} >
                    <lord-icon trigger="loop" src="./assets/json/circle.json"
                      style={{ width: "50px", height: "50px" }} >
                      <Typography variant="h6" sx={{ fontWeight: 700, ml: '15px', mt: "10px" }} >
                        {`+${projectCompleted}`}
                      </Typography>
                    </lord-icon>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, ml: 2 }} > {t("skillCompletedProject")} </Typography>
                  </Box>
                </Box>

              </Box>

              <Box sx={{ my: 4 }} >
                <Button target="_blank" color="primary" size="small" href="https://www.fiverr.com/abdouabarchiabo?source=gig_page" variant="contained"
                  sx={{ textTransform: 'none', fontSize: 18, textDecoration: 'none', boxShadow: 0, borderRadius: 20, px: 2 }}

                >
                  Hire me
                </Button>
                <Button color="primary" size="small" component={Link} to={"/services"} variant="contained"
                  sx={{ textTransform: 'none', fontSize: 18, textDecoration: 'none', ml: 5, boxShadow: 0, borderRadius: 20, px: 2 }}
                >
                  Mes services
                </Button>
              </Box>


            </Box>
            <Grid container spacing={2}
              direction="column"
              justifyContent="space-between"
              alignItems="center">
              <Grid item xs={6} md={4} container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end" sx={{ mt: 5 }} >

                <Box >
                  {socialMediaLinks.map((socialMedia) => (
                    <Tooltip title={socialMedia.name}>
                      <socialMedia.icon fontSize="medium" color="primary" onClick={() => openInNewTab(socialMedia.link)} className="socialIcon" sx={{ mr: 2, cursor: 'pointer' }} />
                    </Tooltip>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

interface MeProps {
  // loading: () => void,
  // stopLoading: () => void,
  // appCheckToken: () => void,
  // data: { loading: boolean };
}

const mapStateToProps = (state: { data: any; }) => ({
  //data: state.data
});

const mapActionsToProps = {
  // loading, stopLoading, appCheckToken
};

export default connect(mapStateToProps, mapActionsToProps)(withTranslation()(Me));