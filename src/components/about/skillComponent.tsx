import React, { Component } from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import { Typography, Grid, Box, } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import SkillProgressDataInterface from "../../interface/skillProgress";
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        backgroundColor: '#093138',
    },
}));

class SkillLinearPropgressComponent extends Component<TimeLineComponentPops & WithTranslation> {
    render() {
        return (
            <React.Fragment>
                <Grid
                    container spacing={2} direction={{ xs: "column", md: "row", }} sx={{ my: 2 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    {this.props.data.map((skillProgress) => (
                        <Grid item key={skillProgress.key} xs={4} sx={{ my: 1 }} >
                            <Box sx={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                                <Box sx={{ width: '100%', mx: 4 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                                        {skillProgress.logos != null ?
                                            skillProgress.logos.map((logo) => (
                                                <img className="programmingLanguageLogo" src={logo} alt={skillProgress.name} />
                                            ))
                                            : <div />}

                                        <Typography variant="body2" color="primary" sx={{ my: 1, mr: 20, mx: 1, fontWeight: 600 }}>{skillProgress.name}</Typography>
                                    </Box>
                                    <BorderLinearProgress variant="determinate" value={skillProgress.progress} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="primary" sx={{ my: 1, fontWeight: 600 }}>{`${Math.round(
                                        skillProgress.progress,
                                    )}%`}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                    }
                </Grid>

            </React.Fragment >

        )
    }
}

interface TimeLineComponentPops {
    data: SkillProgressDataInterface[]
}


export default withTranslation()(SkillLinearPropgressComponent);