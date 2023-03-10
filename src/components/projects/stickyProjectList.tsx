import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";

import stickyProjectListData from '../../constants/stickyProjectListData';

interface CollapsibleProjectListInterface {
    value?: string
}
export default function CollapsibleList(data: CollapsibleProjectListInterface) {

    const { t } = useTranslation();
    const [open, setOpen] = React.useState(stickyProjectListData[0].name);

    const handleClickAiProjects = (value: string) => {
        setOpen(value);
    };
    const goToIndexItem = (id: string) => {
        const violation = document.getElementById(id);
        window.scrollTo({
            top: violation!.offsetTop,
            behavior: "smooth"
        });
    };
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                overflow: 'auto',
                position: "sticky",
                top: "1rem",
                '& ul': { padding: 0 },
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"

        >
            {stickyProjectListData.filter(list => data.value === undefined ? true : list.name === data.value)
                .map((project) => (
                    <React.Fragment>
                        <ListItemButton onClick={() => handleClickAiProjects(project.name)}>
                            <ListItemIcon>
                                {project.icon !== undefined ? <project.icon /> : <React.Fragment></React.Fragment>}
                            </ListItemIcon>
                            <ListItemText primary={t(project.name)} />
                            {open === project.name ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open === project.name} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    project.listItems.map((listItem) => (
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => goToIndexItem(listItem.name)}>
                                            <ListItemIcon>
                                                {listItem.icon !== undefined ? <listItem.icon /> : <React.Fragment></React.Fragment>}
                                            </ListItemIcon>
                                            <ListItemText primary={t(listItem.name)} />
                                        </ListItemButton>
                                    ))
                                }
                            </List>
                        </Collapse>
                    </React.Fragment>
                ))}

        </List>
    );
}
