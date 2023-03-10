import React from 'react';
import {  Typography, Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import Masonry from '@mui/lab/Masonry';
import ServicesLists from './servicesList';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { globalServices } from "../../constants/services";
import { GlobalServicesModelInterface } from "../../interface/services";


export default function Content() {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <Box sx={{ width: '100%', my: 3 }}>
                <Masonry columns={{ xs: 1, sm: 3 }} spacing={2} >
                    {globalServices.map((service: GlobalServicesModelInterface) => (
                        <Card sx={{ width: "100%", my: 4 }}>
                            <Box sx={{ height: '150px', width: '100%', my: 5 }} style={{ textAlign: 'center' }}>
                                <lord-icon trigger="loop" src={service.animatedIcon}
                                    style={{ width: "150px", height: "150px" }} >
                                </lord-icon>
                            </Box>
                            <CardContent style={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {t(service.title)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t(service.content)}
                                </Typography>

                                {service.techLogos !== undefined ? <Box sx={{ width: '100%', mt: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        {service.techLogos.map((logo) => (
                                            <img className="programmingLanguageLogo" src={logo} alt={logo} />
                                        ))}
                                    </Box>
                                </Box> : <React.Fragment></React.Fragment>}

                            </CardContent>
                            <CardActions style={{
                                display: "flex",
                                justifyContent: "center", textAlign: 'center'
                            }}>
                                <Button size="small" disableRipple={true}
                                    sx={{
                                        fontWeight: 600, textTransform: 'none', textDecoration: 'none',
                                        boxShadow: 1, backgroundColor: '#093138', borderRadius: 20, color: '#fff', px: 2,
                                        ":hover": {
                                            backgroundColor: '#093138',
                                            boxShadow: 0,
                                            color: '#fff'
                                        },
                                    }} href="/contact"  >
                                    {t("serviceContactMeText")}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Masonry>
            </Box>
            <ServicesLists />
        </React.Fragment >
    )
}