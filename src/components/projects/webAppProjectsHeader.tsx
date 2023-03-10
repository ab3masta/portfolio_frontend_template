import { Container, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

export default function WebAppProjectsHeader() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="xl" sx={{ ml: 0, pl: 0 }}>
            <Typography justifyContent="start"
                alignItems="start" variant="h6" sx={{ mb: 2, ml: 0, pl: 0, fontWeight: 700 }} >
                {t("webAppText")}
            </Typography>
        </Container>
    )
}