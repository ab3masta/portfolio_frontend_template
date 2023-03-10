import React, { Component } from 'react';
import { Container } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import works from "../../constants/work";
import WorksItem from "./worksItem";

class Works extends Component<WorksProps & WithTranslation> {
  constructor(props: (WorksProps & WithTranslation)) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(): void {

  }
  componentWillUnmount(): void { }
  render() {

    return (
      <Container maxWidth={false} style={{ padding: "0px", margin: "0px" }}>
        {works.map((work, index) => (
          <WorksItem title={work.title} description={work.description} mockupImages={work.mockupImages} playstoreLink={work.playstoreLink}
            applestoreLink={work.applestoreLink} flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
            webLink={work.webLink} presentationLink={work.presentationLink} />
        ))}
      </Container >
    )
  }
}

interface WorksProps { }

const mapStateToProps = (state: { data: any; ui: any }) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(withTranslation()(Works));










