import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { BsFillPlayFill } from "react-icons/bs";
import WorkInterface from '../../interface/work';
import { useTranslation } from "react-i18next";


const commonStyles = {
  bgcolor: '#093138ec',
  borderColor: '#093138',
  mr: 3,
  p: 1,
  width: '50px',
  height: '50px',
};

export default function WorksItem(work: WorkInterface) {


  const { t, i18n } = useTranslation();

  return (
    <Container maxWidth={false} sx={{ my: 10 }} style={{ paddingLeft: "0px", marginLeft: "0px", paddingRight: "0px", marginRight: "0px" }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: work.flexDirection }, width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Typography variant="h3" gutterBottom component="div" sx={{ my: { xs: 0, md: 5 }, mx: { xs: 2, md: 5 }, fontWeight: 700 }}>
            {t(work.title)}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="subtitle1" gutterBottom component="div" sx={{ my: { xs: 0, md: 5 }, mx: { xs: 2, md: 5 } }}>
              {t(work.description)}
            </Typography>
          </Box>
          {work.presentationLink !== null ?
            <Link href={work.presentationLink} underline="none" >
              <Box sx={{ display: 'flex', flexDirection: 'row', mx: { xs: 2, md: 5 }, mt: { xs: 2, md: 0 }, alignItems: 'center', justifyItems: "center", }}>
                <Box sx={{ ...commonStyles, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyItems: "center", }} >
                  <BsFillPlayFill color="white" title="folder icon" className="additional-class-name" style={{ fontSize: "40px", textAlign: "center" }} />
                </Box>
                <Typography variant="h6" gutterBottom component="div" sx={{ color: "#092438", fontWeight: 500 }} style={{ color: "#092438" }} >
                  {t("workPresentationText")}
                </Typography>
              </Box>
            </Link> : <React.Fragment></React.Fragment>
          }
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mx: { xs: 2, md: 5 }, my: { xs: 2, md: 5 }, }}>
            {work.playstoreLink !== null ?
              <Link href={work.playstoreLink} underline="none" sx={{ mr: { xs: 2, md: 5 }, my: { xs: 1, md: 0 }, }}>
                <img className="storeImage" src={`./assets/images/store/android-${i18n.language}.png`} alt="store" />
              </Link> : <React.Fragment></React.Fragment>
            }
            {work.applestoreLink !== null ?
              <Link href={work.applestoreLink} underline="none" sx={{ mr: { xs: 2, md: 5 }, my: { xs: 1, md: 0 }, }}>
                <img className="storeImage" src={`./assets/images/store/ios-${i18n.language}.png`} alt="store" />
              </Link> : <React.Fragment></React.Fragment>
            }

          </Box>
        </Box>
        <Box sx={{ background: "#093138", width: '100%' }}>
          <Carousel indicators={false} sx={{ background: "#093138", width: '100%', justifyContent: "center", alignItems: 'center', justifyItems: "center", }}>
            {
              work.mockupImages.map((mockup) => (
                <Box sx={{ width: '100%', justifyContent: "center", alignItems: 'center', justifyItems: "center", }} style={{ textAlign: 'center' }}>
                  <img className="workMockupPhoto" src={mockup} alt="me" />
                </Box>
              ))
            }
          </Carousel>
        </Box>
      </Box>
    </Container >
  )

}











