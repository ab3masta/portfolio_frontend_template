import { Typography, Container, Avatar, Grid, Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import {
  programmintLanguageNumber,
  professionalExperienceYears,
  projectCompleted
} from "../../constants/constants";

export default function ExperienceNumber() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{ my: 8 }}>
      <Typography justifyContent="center"
        alignItems="center" variant="h4" gutterBottom component="div" sx={{ my: 5, fontWeight: 700 }} style={{ textAlign: "center" }}>
        {t("skillOverviewTitleText")}
      </Typography>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={4} className="flexGrid" alignItems="center"
        justifyContent="center"  >
        <Grid item xs={4}>
          <Box display="flex"
            alignItems="center"
            justifyContent="center">
            <Avatar sx={{
              bgcolor: "primary.main", height: '150px', width: '150px', display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} alt="Remy Sharp">
              <lord-icon trigger="loop" src="./assets/json/code.json"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "200px", height: "200px" }} ></lord-icon>

            </Avatar>
          </Box>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2, fontWeight: 600 }} style={{ textAlign: "center" }}>
            {programmintLanguageNumber}
          </Typography>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2 }} style={{ textAlign: "center" }}>
            {t("skillProgrammingLanguageText")}

          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex"
            alignItems="center"
            justifyContent="center"> <Avatar sx={{ bgcolor: "primary.main", height: '150px', width: '150px' }} alt="Remy Sharp">
              <lord-icon trigger="loop" src="./assets/json/lab-bottle.json"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "200px", height: "200px" }} ></lord-icon>
            </Avatar></Box>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2, fontWeight: 600 }} style={{ textAlign: "center" }}>
            {professionalExperienceYears}
          </Typography>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2 }} style={{ textAlign: "center" }}>
            {t("skillProfessionalExperienceText")}

          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex"
            alignItems="center"
            justifyContent="center">  <Avatar sx={{ bgcolor: "primary.main", height: '150px', width: '150px' }} alt="Remy Sharp">
              <lord-icon trigger="loop" src="./assets/json/rules.json"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "200px", height: "200px" }} ></lord-icon>
            </Avatar></Box>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2, fontWeight: 600 }} style={{ textAlign: "center" }}>
            {projectCompleted}
          </Typography>
          <Typography justifyContent="center"
            alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 2 }} style={{ textAlign: "center" }}>
            {t("skillCompletedProject")}

          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}