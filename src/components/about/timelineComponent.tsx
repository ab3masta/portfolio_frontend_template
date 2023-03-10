import React, { Component } from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { BsFillCalendarEventFill } from "react-icons/bs";
import TimeLineDataInterface from "../../interface/timeline";


class TimelineComponent extends Component<TimeLineComponentPops & WithTranslation> {
    render() {
        const t = this.props.t;
        return (
            <React.Fragment>
                {this.props.data.length > 0 ?
                    <Timeline position="alternate">
                        {this.props.data.map((timeline) => (
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <BsFillCalendarEventFill color="#093138" style={{ fontSize: "12px", marginLeft: 4, marginRight: 4 }} />
                                    {t(timeline.date)}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }} component="span">
                                        {t(timeline.title)}
                                    </Typography>
                                    <Typography> {t(timeline.subTitle)}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline> : <Typography justifyContent="center"
                        alignItems="center" variant="body1" gutterBottom component="div" style={{ textAlign: "center" }}>
                        {t("nothingToShowText")}
                    </Typography>}
            </React.Fragment>

        )
    }
}

interface TimeLineComponentPops {
    data: TimeLineDataInterface[]
}


export default withTranslation()(TimelineComponent);