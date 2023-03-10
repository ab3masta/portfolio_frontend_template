import React, { Component } from 'react';
import { Container, Grid, Box, CircularProgress } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import CollapsibleList from "./stickyProjectList";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import stickyProjectListData from '../../constants/stickyProjectListData';
import ProjectsData from '../../interface/projectData';
import ProjectItem from './projectItem';
import { getAllProjects } from "../../redux/actions/dataActions";
import Header from '../../components/projects/header';

class AllProjects extends Component<ProjectsProps & WithTranslation> {
  constructor(props: (ProjectsProps & WithTranslation)) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(): void {
    const { loadingAllProjects } = this.props.ui;
    if(loadingAllProjects === null){
      this.props.getAllProjects();
    }
  }
  componentWillUnmount(): void { }
  render() {
    const t = this.props.t;
    const { allProjects } = this.props.data;
    const { loadingAllProjects } = this.props.ui
    return (
      <Container fixed maxWidth="xl" sx={{ my: 8 }} >
        <Grid
          container spacing={2} direction={{ xs: "column", md: "row" }}
        >
          <Box
            component={Grid} item xs={3} sx={{ display: { xs: 'none', md: 'block' } }} >
            <CollapsibleList value={undefined} />
          </Box>
          <Grid container item xs={9} justifyContent="center"
            alignItems="center" >
            <Header />
            <List
              sx={{
                width: '100%',
                '& ul': { padding: 0 },
              }}
              subheader={<li />}
            >
              {
                loadingAllProjects === true ? <Box sx={{ width: '100%', flexGrow: 1, textAlign: 'center' }}>
                  <CircularProgress color="success" size={25} sx={{ ml: 1 }} thickness={5} style={{ 'color': '#093138' }} />
                  <Typography variant="body2" gutterBottom component="div" sx={{ my: 2, fontWeight: 700 }}>
                    {t("loadingText")}
                  </Typography>
                </Box> :
                  stickyProjectListData.map((data) => (
                    <li key={data.key}>
                      <ul>
                        <ListSubheader sx={{
                          width: '100%', ml: 0, pl: 0, justifyContent: "center",
                          alignItems: "center"
                        }}>{data.icon !== undefined ? <data.icon style={{ paddingRight: "1px" }} /> : <React.Fragment></React.Fragment>}{t(data.name)}</ListSubheader>

                        {data.listItems.map((listItem) => (
                          <React.Fragment>
                            <Typography id={listItem.name} justifyContent="start"
                              alignItems="start" variant="body2" gutterBottom component="div" sx={{ my: 2, fontWeight: 700 }} style={{ textAlign: "start" }}>
                              {t(listItem.name)}
                            </Typography>
                            <Box sx={{ width: '100%', flexGrow: 1 }}>
                              <Grid container spacing={2} direction={{ xs: "column", md: "row" }} columns={16}>  {
                                allProjects.map((project: ProjectsData) => (
                                  <React.Fragment>
                                    {project.projectKey === data.name && project.projectName === listItem.name ? <React.Fragment>
                                      <Grid item xs={8} >
                                        <ProjectItem
                                          title={project.title}
                                          content={project.content}
                                          bgImage={project.bgImage}
                                          completed={project.completed}
                                          projectKey={project.projectKey}
                                          projectName={project.projectName}
                                          screenshots={project.screenshots}
                                          frameworkLogoUsed={project.frameworkLogoUsed}
                                          features={project.features}
                                          viewProjectLink={project.viewProjectLink}
                                          sourceCodeLink={project.sourceCodeLink}
                                          playStoreLink={project.playStoreLink}
                                          appleStoreLink={project.appleStoreLink}
                                          amazonStoreLink={project.amazonStoreLink}
                                        />
                                      </Grid>
                                    </React.Fragment> : <React.Fragment>
                                    </React.Fragment>}
                                  </React.Fragment>
                                ))
                              }  </Grid>
                            </Box>
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>
                  ))}
            </List>

          </Grid>
        </Grid >

      </Container >
    )
  }
}

interface ProjectsProps {
  getAllProjects: () => void,
  data: {
    allProjects: ProjectsData[]
  }
  ui: {
    loadingAllProjects: boolean
  }

}

const mapStateToProps = (state: { data: any; ui: any }) => ({
  data: state.data,
  ui: state.ui
});

const mapActionsToProps = {
  getAllProjects
};

export default connect(mapStateToProps, mapActionsToProps)(withTranslation()(AllProjects));










