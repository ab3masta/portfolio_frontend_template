import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Badge from '@mui/material/Badge';
import { useTranslation } from "react-i18next";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const pages = ["workNavBarText", "projectsNavBarText", "servicesNavBarText", "aboutNavBarText", "contactNavBarText"];

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}


const ResponsiveAppBar = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = async (language: string) => {
        i18n.changeLanguage(language);
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);

    };



    return (
        <React.Fragment >
            <ElevationScroll >
                <AppBar position="fixed" id="back-to-top-anchor">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                MyName
                            </Typography>



                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.split("NavBar")[0]}`}>
                                            <Typography textAlign="center">{t(page)}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="body2"
                                noWrap
                                component="a"
                                href="/"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                A.A. Aboubacar <ToggleButtonGroup
                                    size="small"
                                    color="primary"
                                    value={i18n.language}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="fr"
                                        onClick={() => changeLanguage("fr")} sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            color: 'inherit',
                                            textDecoration: 'none', p: 0.3, pl: 1, pr: 1
                                        }} >FR</ToggleButton>
                                    <ToggleButton value="en" onClick={() => changeLanguage("en")} sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'inherit',
                                        textDecoration: 'none', p: 0.3, pl: 1, pr: 1
                                    }}>EN</ToggleButton>
                                </ToggleButtonGroup>
                            </Typography>


                            <Box display="flex"
                                justifyContent="flex-end"
                                alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                                {pages.map((page) => (
                                    <React.Fragment>
                                        {page === "contactNavBarText" ?
                                            <Button size="small"
                                                key={page}
                                                onClick={handleCloseNavMenu} component={Link} to={`/${page.split("NavBar")[0]}`}
                                                sx={{
                                                    fontWeight: 700, fontSize: 20, fontFamily: 'monospace', textTransform: 'none', textDecoration: 'none', display: 'block',
                                                    boxShadow: 5, backgroundColor: '#fff', borderRadius: 20, color: '#093138', px: 2, mr: 5,
                                                    ":hover": {
                                                        backgroundColor: '#fff',
                                                        boxShadow: 2,
                                                        color: '#093138'
                                                    },
                                                }}
                                            >
                                                {t(page)}
                                            </Button> : <Badge color="success" badgeContent={t("newBadgeText")} sx={{ my: 2, mr: 5, }} invisible={page === "servicesNavBarText"  ? false : true} >
                                                <Button size="small"
                                                    key={page}
                                                    onClick={handleCloseNavMenu} component={Link} to={`/${page.split("NavBar")[0]}`}
                                                    sx={{ fontWeight: 700, textTransform: 'none', fontSize: 20, fontFamily: 'monospace', textDecoration: 'none', color: 'white', display: 'block' }}
                                                >
                                                    {t(page)}
                                                </Button></Badge>
                                        }
                                    </React.Fragment>
                                ))}
                                <ToggleButtonGroup
                                    size="small"
                                    color="primary"
                                    value={i18n.language}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="fr"
                                        onClick={() => changeLanguage("fr")} sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }} >FR</ToggleButton>
                                    <ToggleButton value="en" onClick={() => changeLanguage("en")} sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}>EN</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar >
            </ElevationScroll>
        </React.Fragment>
    );
};
export default ResponsiveAppBar;
