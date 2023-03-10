import React, { Component } from 'react';
import { Container, TextField, Button, CircularProgress, Box, Checkbox } from '@mui/material';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { adminLogIn } from "../../redux/actions/userActions";
import { clearAdminLogin } from "../../redux/actions/uiActions";
import UserCredentialsInterface from "../../interface/projectData";
import toast, { Toaster } from 'react-hot-toast';

class LoginForm extends Component<LoginFormProps & WithTranslation, State> {
    constructor(props: (LoginFormProps & WithTranslation)) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

    }
    componentDidMount(): void { }
    componentWillUnmount(): void { }

    static getDerivedStateFromProps(nextProps: LoginFormProps, prevState: State): Partial<State> | null {
        return transformPropsToState(nextProps);
    }

    componentDidUpdate(props: (LoginFormProps & WithTranslation)) {
        if (this.props.ui.adminLogingInStatus === true) {
            this.setState({
                email: "",
                password: "",
            })
            this.props.clearAdminLogin();
            toast(" Successfully logedIn", {
                icon: '✉️', duration: 4000, style: {
                    background: '#093138',
                    color: '#fff',
                },
            });
            window.location.href = "/admin";
        } else if (this.props.ui.adminLogingInStatus === false) {
            this.setState({
                email: "",
                password: "",
            })
            this.props.clearAdminLogin();
        }
    }

    handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,

        };
        // admin login
        this.props.adminLogIn(data, this.props.history);
    }

    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { adminLogingIn } = this.props.ui;
        return (
            <Container maxWidth="xl" sx={{ my: 8 }}>
                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    alignItems: "center", width: "100%"
                }}>
                    <Box sx={{
                        display: "flex", flexDirection: "column", background: "white", borderRadius: 2, boxShadow: 1, maxWidth: "400px", p: 3,
                    }}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField required fullWidth id="email" name="email" type="email" label="Email" variant="outlined" value={this.state.email}
                                onChange={this.handleChange} sx={{ my: 1 }} />
                            <TextField required fullWidth id="password" name="password" type="password" label="Password" variant="outlined" value={this.state.password}
                                onChange={this.handleChange} sx={{ my: 1 }} />

                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "start",
                                alignItems: "center", width: "100%"
                            }}><Checkbox defaultChecked />
                                <Box sx={{
                                    display: "flex", flexDirection: "row", justifyContent: "start",
                                    alignItems: "start", width: "100%"
                                }}>
                                    <p>Remenber me</p>
                                </Box>
                            </Box>

                            <Box sx={{
                                display: "flex", flexDirection: "column", justifyContent: "center",
                                alignItems: "center", width: "100%"
                            }}>

                                <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit} style={{ textAlign: "center" }} sx={{
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start"
                                }} disabled={adminLogingIn}>LogIn{(adminLogingIn &&
                                    <CircularProgress color="success" size={25} sx={{ ml: 1 }} thickness={5} style={{ 'color': '#093138' }} />
                                )} </Button>
                                <Toaster position="top-right"
                                    reverseOrder={true} />

                            </Box>
                        </form>
                    </Box>
                </Box>
            </Container>
        )
    }
}


interface LoginFormProps {
    adminLogIn: (data: any, history: any) => void,
    clearAdminLogin: () => void,
    history: History;
    ui: {
        adminLogingIn: boolean,
        adminLogingInStatus: boolean,
    };
    user: {
        adminLogedInData: UserCredentialsInterface | null
    }
}

interface LoginFormState {
    email?: string,
    password?: string,
}

type State = LoginFormState & ReturnType<typeof transformPropsToState>;
function transformPropsToState(props: LoginFormProps) {
    return {
    };
}

const mapStateToProps = (state: { ui: any; user: any; }) => ({
    ui: state.ui,
    user: state.user
});

const mapActionsToProps = {
    adminLogIn, clearAdminLogin
};

export default withTranslation()(connect(mapStateToProps, mapActionsToProps)(LoginForm));