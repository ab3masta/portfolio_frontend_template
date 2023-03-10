import { Typography, Container, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";
export default function Tools() {
  const { t } = useTranslation();
  const tools = [
    {
      "img": "./assets/svg/react.svg",
      "title": "React.js",
      "key": "1"
    },
    {
      "img": "./assets/svg/nodejs.svg",
      "title": "Node JS",
      "key": "2"
    },
    {
      "img": "./assets/svg/mongodb.svg",
      "title": "MongoDB",
      "key": "3"
    },
    {
      "img": "./assets/svg/firebase.svg",
      "title": "Firebase",
      "key": "4"
    },
    {
      "img": "./assets/svg/flutter.svg",
      "title": "Flutter",
      "key": "5"
    },
    {
      "img": "./assets/svg/gcp.svg",
      "title": "Google Cloud Platform",
      "key": "6"
    },
    {
      "img": "./assets/svg/heroku.svg",
      "title": "Heroku",
      "key": "7"
    },
    {
      "img": "./assets/svg/python.svg",
      "title": "Python",
      "key": "6"
    },
    {
      "img": "./assets/svg/jupyter.svg",
      "title": "Jupyter notebook",
      "key": "7"
    },
  ];
  return (
    <Container maxWidth={false} sx={{ my: 8, maxWidth: '100%' }} style={{ background: '#093138ec' }} >
      <Grid container
        direction="row" spacing={4} className="flexGrid" alignItems="center"
        justifyContent="center">
        {tools.map((tool, index) => {
          return (
            <Grid item key={tool.key} xs={6} sm={4} md={1} style={{ textAlign: "center" }}>
              <img className="tool" src={tool.img} alt="" />
              <Typography gutterBottom variant="body1" component="p" sx={{ fontWeight: 600, color: "white" }} >{tool.title}</Typography>
            </Grid>
          );
        })}
      </Grid>
      <Typography align="justify" variant="body1" gutterBottom component="div" sx={{ p: 4, color: "white" }}>
        {t("bio")}
      </Typography>
    </Container>
  )
}
