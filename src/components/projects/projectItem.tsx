import * as React from 'react';
import ProjectsData from '../../interface/projectData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useTranslation } from "react-i18next";



import { Box } from '@mui/material';

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


export default function ProjectItem(project: ProjectsData) {

    const { t } = useTranslation();

    const openInNewTab = (url?: string) => {
        if (url !== null) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };
    return (
        <Card sx={{ width: "100%", my: 4 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={project.bgImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.content}
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ width: '100%', mr: 5 }}>
                        <BorderLinearProgress variant="determinate" value={project.completed} />
                    </Box>
                    <Box sx={{ minWidth: 100 }}>
                        <Typography variant="body2" color="primary" sx={{ my: 1, fontWeight: 600 }}>{`${Math.round(
                            project.completed,
                        )}% `+t("completedText")}</Typography>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ width: '100%', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
                            {project.frameworkLogoUsed !== null ? project.frameworkLogoUsed?.map((logo) => (
                                <img className="programmingLanguageLogo" src={logo} alt={logo} />
                            )) : <React.Fragment></React.Fragment>}
                            <Typography variant="body2" color="primary" sx={{ my: 1, mr: 20, mx: 1, fontWeight: 600 }}></Typography>
                        </Box>
                    </Box>

                </Box>

            </CardContent>
            <CardActions>
                {project.viewProjectLink !== null ? <Button size="small" onClick={() => openInNewTab(project.viewProjectLink)} >View projects</Button> : <React.Fragment></React.Fragment>}
                {project.sourceCodeLink !== null ? <Button size="small" onClick={() => openInNewTab(project.sourceCodeLink)} >source code</Button> : <React.Fragment></React.Fragment>}
            </CardActions>
        </Card>
    )
}