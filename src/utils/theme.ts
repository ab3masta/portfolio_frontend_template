const themeFile = {
  palette: {
    primary: {
      main: "#093138",
      contrastText: "#fff",
    },
    secondary: {
      main: "#093138",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  spreadThis: {
    invisibleSeparator: {
      border: "none",
      margin: "4px",
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
    typography: {
      useNextvariants: true,
    },
    form: {
      textAlign: "center",
    },
    image: {
      height: "50px",
      width: "50px",
      margin: " 20px auto 20px auto",
    },
    pageTitle: {
      margin: " 10px auto 10px auto",
    },
    textField: {
      margin: " 10px auto 10px auto",
    },
    button: {
      marginTop: "20px",
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: "10px",
    },
    progress: {
      position: "absolute",
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#000000",
            backgroundColor: "#fefefe",
          },
          "&:hover": {
            color: "#000000",
            backgroundColor: "#fefefe",
          },
        },
      },
    },
  },
};

export default themeFile;
