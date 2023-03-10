import { Container, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="xl">
            <Typography justifyContent="center"
                alignItems="center" variant="h3" sx={{ fontWeight: 700 }} style={{ textAlign: "center" }}>
                {t("Administration")}
            </Typography>
        </Container>
    )
}