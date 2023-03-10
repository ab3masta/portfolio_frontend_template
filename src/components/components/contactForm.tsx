import React, { Component } from 'react';
import { Container, Grid, TextField, Button, CircularProgress, Typography, Box } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { sendContactByEmail } from "../../redux/actions/actions";
import { clearSendContactByEmail } from "../../redux/actions/uiActions";
import toast, { Toaster } from 'react-hot-toast';
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineContentCopy } from "react-icons/md";
import { contactEmailAdress, contactWhatsAppNumber, contactPhoneNumber, contactAddress, } from "../../constants/constants";
const commonStyles = {
    bgcolor: '#093138ec',
    borderColor: '#093138',
    mr: 3,
    p: 1,
    border: 1,
    width: '50px',
    height: '50px',
};


class ContactForm extends Component<ContactFormProps & WithTranslation, State> {
    constructor(props: (ContactFormProps & WithTranslation)) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    }
    componentDidMount(): void { }
    componentWillUnmount(): void { }

    static getDerivedStateFromProps(nextProps: ContactFormProps, prevState: State): Partial<State> | null {
        return transformPropsToState(nextProps);
    }

    componentDidUpdate(props: (ContactFormProps & WithTranslation)) {
        if (this.props.ui.sendContactByEmail === true) {
            this.setState({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            this.props.clearSendContactByEmail();
            toast(this.props.t("successfullySendContactMessageText"), {
                icon: '✉️', duration: 4000, style: {
                    background: '#093138',
                    color: '#fff',
                },
            });
        } else if (this.props.ui.sendContactByEmail === false) {
            this.setState({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            this.props.clearSendContactByEmail();
        }
    }

    handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const contactData = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        };
        // send email
        this.props.sendContactByEmail(contactData);
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
        const { sendingContactByEmail } = this.props.ui

        return (
            <Container maxWidth="xl" sx={{ my: 8 }}>
                <Typography justifyContent="center"
                    alignItems="center" variant="h4" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} style={{ textAlign: "center" }}>
                    {t("contactTitleText")}
                </Typography>
                <Typography justifyContent="center"
                    alignItems="center" variant="h5" gutterBottom component="div" sx={{ my: 1, mb: 4 }} style={{ textAlign: "center" }}>
                    {t("contactSubTitleText")}
                </Typography>
                <Grid
                    container spacing={10} direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Grid item xs={6} justifyContent="center"
                        alignItems="center" >
                        <form onSubmit={this.handleSubmit}>
                            <TextField required fullWidth id="name" name="name" type="name" label={t("contactNameTextFieldText")} variant="outlined" value={this.state.name}
                                onChange={this.handleChange} sx={{ my: 1 }} />

                            <TextField required fullWidth id="email" name="email" type="email" label={t("contactEmailTextFieldText")} variant="outlined" value={this.state.email}
                                onChange={this.handleChange} sx={{ my: 1 }} />

                            <TextField required fullWidth id="subject" name="subject" type="text" label={t("contactSubjectTextFieldText")} variant="outlined" value={this.state.subject}
                                onChange={this.handleChange} sx={{ my: 1 }} />

                            <TextField required fullWidth multiline rows={10} id="message" name="message" type="text" label={t("contactMassageTextFieldText")} variant="outlined" value={this.state.message}
                                onChange={this.handleChange} sx={{ my: 1 }} />
                            <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit} style={{ textAlign: "center" }} sx={{
                                justifyContent: "flex-start",
                                alignItems: "flex-start"
                            }} disabled={sendingContactByEmail}>{t("contactSendContactText")} {(sendingContactByEmail &&
                                <CircularProgress color="success" size={25} sx={{ ml: 1 }} thickness={5} style={{ 'color': '#093138' }} />
                            )} </Button>
                            <Toaster position="top-right"
                                reverseOrder={true} />
                        </form>
                    </Grid>
                    <Grid item xs={4} justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography justifyContent="center"
                            alignItems="center" variant="h4" gutterBottom component="div" sx={{ msTextOverflow: 5, fontWeight: 700 }} >
                            {t("contactInfoText")}
                        </Typography>
                        <Typography justifyContent="center"
                            alignItems="center" variant="subtitle1" gutterBottom component="div" sx={{ my: 1, mb: 4 }} >
                            {t("contactInfoHelperText")}
                        </Typography>
                        {/* email address */}
                        <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: 5 }}>
                            <Box sx={{ ...commonStyles, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyItems: "center", width: "50px" }} >
                                <HiOutlineMail color="white" title="folder icon" className="additional-class-name" style={{ fontSize: "40px" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} > {t("contactInfoEmailText")}</Typography>
                                <Typography variant="body2" >
                                    {contactEmailAdress}
                                </Typography></Box>
                            <MdOutlineContentCopy color="#093138" title="folder icon" className="additional-class-name" style={{ fontSize: "30px", cursor: 'pointer' }} onClick={() => this.copyToClipboard(contactEmailAdress)} />
                        </Box>
                        {/* whatsapp */}
                        <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: 5 }}>
                            <Box sx={{ ...commonStyles, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyItems: "center", width: "50px" }} >
                                <ImWhatsapp color="white" title="folder icon" className="additional-class-name" style={{ fontSize: "40px" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} >{t("contactInfoWhatsappText")}</Typography>
                                <Typography variant="body2" >
                                    {contactWhatsAppNumber}
                                </Typography></Box>
                            <MdOutlineContentCopy color="#093138" title="folder icon" className="additional-class-name" style={{ fontSize: "30px", cursor: 'pointer' }} onClick={() => this.copyToClipboard(contactWhatsAppNumber)} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: 5 }}>
                            <Box sx={{ ...commonStyles, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyItems: "center", width: "50px" }} >
                                <HiPhone color="white" title="folder icon" className="additional-class-name" style={{ fontSize: "40px" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} >{t("contactInfoPhoneNumberext")}</Typography>
                                <Typography variant="body2" >
                                    {contactPhoneNumber}
                                </Typography></Box>
                            <MdOutlineContentCopy color="#093138" title="folder icon" className="additional-class-name" style={{ fontSize: "30px", cursor: 'pointer' }} onClick={() => this.copyToClipboard(contactPhoneNumber)} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "start", alignItems: 'center', justifyItems: "center", my: 5 }}>
                            <Box sx={{ ...commonStyles, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyItems: "center", width: "50px" }} >
                                <HiLocationMarker color="white" title="folder icon" className="additional-class-name" style={{ fontSize: "40px" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} >{t("contactInfoAddressText")}</Typography>
                                <Typography variant="body2" >
                                    {contactAddress}
                                </Typography></Box>
                            <MdOutlineContentCopy color="#093138" title="folder icon" className="additional-class-name" style={{ fontSize: "30px", cursor: 'pointer' }} onClick={() => this.copyToClipboard(contactAddress)} />

                        </Box>

                    </Grid>
                </Grid>
            </Container>
        )
    }

}


interface ContactFormProps {
    sendContactByEmail: (contact: Record<string, unknown>) => Promise<any>,
    clearSendContactByEmail: () => void,
    ui: {
        sendContactByEmail: boolean,
        sendingContactByEmail: boolean,
    };
}

interface ContactFormState {
    name?: string,
    email?: string,
    subject?: string,
    message?: string,
}

type State = ContactFormState & ReturnType<typeof transformPropsToState>;
function transformPropsToState(props: ContactFormProps) {
    return {
        // savedPropA: props.propA, // save for memoization
        // derivedState: props.propA,
    };
}

const mapStateToProps = (state: { ui: any; }) => ({
    ui: state.ui
});

const mapActionsToProps = {
    sendContactByEmail, clearSendContactByEmail
};

export default withTranslation()(connect(mapStateToProps, mapActionsToProps)(ContactForm));