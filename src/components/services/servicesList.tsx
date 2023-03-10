import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { onlineServices } from "../../constants/services";
import { OnlineServicesModelInterface } from "../../interface/services";


export default function ServicesLists() {
    const { t } = useTranslation();
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <React.Fragment>
            <Typography justifyContent="center"
                alignItems="center" variant="h4" sx={{ fontWeight: 700, my: 5 }} style={{ textAlign: 'center' }}>
                {t("servicesListText")}
            </Typography>
            <Typography justifyContent="center"
                alignItems="center" variant="body1" sx={{ fontWeight: 700, my: 2 }} style={{ textAlign: 'center' }}>

            </Typography>
            <Box sx={{ width: '100%', my: 3 }}>
                <Masonry columns={{ xs: 1, sm: 3 }} spacing={2} >
                    {onlineServices.map((service: OnlineServicesModelInterface) => (
                        <Card sx={{ width: "100%", my: 4 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={service.bgImage}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {t(service.title)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t(service.content)}
                                </Typography>
                            </CardContent>
                            <CardActions style={{
                                display: "flex",
                                justifyContent: "flex-end", textAlign: 'center'
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
                                    }} onClick={() => openInNewTab(service.previewAndCheckout)}  >
                                    {t("serviceViewAndCheckout")}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Masonry>
            </Box>
        </React.Fragment >
    )
}