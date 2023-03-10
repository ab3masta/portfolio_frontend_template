import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from "react-i18next";



export default function Header() {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <Typography justifyContent="center"
                alignItems="center" variant="h2" sx={{ fontWeight: 700, my: 5 }} style={{ textAlign: 'center' }}>
                {t("servicesText")}
            </Typography>
        </React.Fragment>
    )
}