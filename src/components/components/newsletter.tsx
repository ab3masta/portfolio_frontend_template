import React, { Component } from 'react';
import { Container, Grid, TextField, Button, Typography, Box } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { subscribeToNewsletter } from "../../redux/actions/actions";
import { clearSubscribeToNewsLetter } from "../../redux/actions/uiActions";
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineMail } from "react-icons/md";


class NewsLetter extends Component<NewsLetterProps & WithTranslation, State> {
    constructor(props: (NewsLetterProps & WithTranslation)) {
        super(props);
        this.state = {
            email: "",
        };
    }
    componentDidMount(): void { }
    componentWillUnmount(): void { }

    static getDerivedStateFromProps(nextProps: NewsLetterProps, prevState: State): Partial<State> | null {
        return transformPropsToState(nextProps);
    }

    componentDidUpdate(props: (NewsLetterProps & WithTranslation)) {
        if (this.props.ui.subscribeToNewsletter === true) {
            this.setState({
                email: "",
            })
            this.props.clearSubscribeToNewsLetter();
            toast(this.props.t("successfullySubscribeToNewsletterText"), {
                icon: '📧', duration: 4000, style: {
                    background: '#093138',
                    color: '#fff',
                },
            });
        } else if (this.props.ui.subscribeToNewsletter === false) {
            this.setState({
                email: "",
            })
            this.props.clearSubscribeToNewsLetter();
        }
    }

    handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
        };
        // send email
        this.props.subscribeToNewsletter(data);
    }
    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            toast(this.props.t("copiedToClipboardText"), {
                icon: '📋', duration: 4000, style: {
                    background: '#093138',
                    color: '#fff',
                },
            });
        }).catch((error) => {
            toast.error(this.props.t("copiedToClipboardErrorText"), {
                duration: 4000, style: {
                    background: '#093138',
                    color: '#fff',
                },
            });
        });
    }

    render() {
        const t = this.props.t;
        const { subscribingToNewsletter } = this.props.ui

        return (
            <Container maxWidth="xl" sx={{ my: 8 }}>
                <Typography justifyContent="center"
                    alignItems="center" variant="h4" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} style={{ textAlign: "center" }}>
                    {t("newsletterText")}
                </Typography>
                <Grid
                    container spacing={10} direction={{ xs: "column", md: "row", }}
                    justifyContent="center"
                    alignItems="center"
                >

                    <Grid item xs={4} justifyContent="center"
                        alignItems="center">
                        <Box sx={{
                            justifyContent: "center", alignContent: "center",
                            alignItems: "center", width: { xs: "200px", md: "400px" }, height: { xs: "200px", md: "400px" }
                        }}>
                            <lord-icon trigger="loop" src="./assets/json/email.json" style={{ width: "100%", height: "100%" }} >
                            </lord-icon>
                        </Box>

                    </Grid>

                    <Grid item xs={6} justifyContent="center"
                        alignItems="center" >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: 'start', justifyItems: "start", my: 5 }}>
                            <Typography justifyContent="start"
                                alignItems="start" variant="h6" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} style={{ textAlign: "start" }}>
                                {t("subscribeToNewsLetterText")}
                            </Typography>
                            <Typography justifyContent="start"
                                alignItems="start" variant="body1" gutterBottom component="div" sx={{ my: 1, mb: 2 }} style={{ textAlign: "start" }}>
                                {t("subscribeToNewsLetterBodyText")}
                            </Typography>
                        </Box>
                        <form onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>

                            <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: 5 }}>
                                <Box sx={{ width: "100%", display: 'flex', alignItems: 'flex-end' }}>
                                    <TextField required fullWidth id="email" name="email" type="email"
                                        placeholder={t("newsletterTextFieldLabel")}
                                        variant="standard" value={this.state.email}
                                        onChange={this.handleChange} sx={{
                                            pl: 1,
                                            my: 1, background: "#093138", backgroundColor: "#093138", input: {
                                                color: "white", height: "47px", pl: 2,
                                                background: "#093138",
                                                backgroundColor: "#093138",
                                                focus: {
                                                    background: "#093138",
                                                    backgroundColor: "#093138",
                                                },
                                            },
                                            label: {
                                                color: "#fff"
                                            },

                                        }}
                                        inputProps={{
                                            color: "white", background: "#093138", style: { background: "#093138", }
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: (
                                                <MdOutlineMail color="white" style={{ fontSize: "40px", textAlign: 'center', paddingRight: "5px" }} />
                                            ),
                                        }}

                                        style={{
                                            background: "#093138",
                                            backgroundColor: "#093138",
                                        }}

                                    />
                                </Box>
                                <Button variant="contained" color="primary" type="submit"
                                    onSubmit={this.handleSubmit}
                                    sx={{
                                        fontWeight: 600, textTransform: 'none', textDecoration: 'none', height: "56px",
                                        backgroundColor: '#B4550C', boxShadow: 0, borderRadius: 0, color: '#fff', px: 3,
                                        ":hover": {
                                            backgroundColor: '#B4550C',
                                            boxShadow: 5,
                                            color: '#fff'
                                        },
                                    }} style={{ textAlign: "center" }}
                                    disabled={subscribingToNewsletter}>{t("subscribeToNewsletterButtonText")} {(subscribingToNewsletter &&
                                        <Box sx={{ width: "80px", height: "80px" }}>
                                            <lord-icon trigger="loop" src="./assets/json/loader.json" stroke="25"
                                                style={{ width: "100%", height: "100%" }} >
                                            </lord-icon>
                                        </Box>
                                    )} </Button>
                                <Toaster position="top-right"
                                    reverseOrder={true} />
                            </Box>
                        </form>
                    </Grid>

                </Grid>
            </Container >
        )
    }
}


interface NewsLetterProps {
    subscribeToNewsletter: (contact: Record<string, unknown>) => Promise<any>,
    clearSubscribeToNewsLetter: () => void,
    ui: {
        subscribeToNewsletter: boolean,
        subscribingToNewsletter: boolean,
    };
}

interface NewsLetterState {
    email?: string
}

type State = NewsLetterState & ReturnType<typeof transformPropsToState>;
function transformPropsToState(props: NewsLetterProps) {
    return {
    };
}

const mapStateToProps = (state: { ui: any; }) => ({
    ui: state.ui
});

const mapActionsToProps = {
    subscribeToNewsletter, clearSubscribeToNewsLetter
};

export default withTranslation()(connect(mapStateToProps, mapActionsToProps)(NewsLetter));