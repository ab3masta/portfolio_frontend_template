import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Fade } from '@mui/material';

interface Props {
  wdow?: () => Window;
  children: React.ReactElement;
}

export default function ScrollTop(props: Props) {
  const { children, wdow } = props;
  const trigger = useScrollTrigger({
    target: wdow ? wdow() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const goToIndexItem = (id: string) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation!.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => goToIndexItem("back-to-top-anchor")}
        role="presentation"
        sx={{ position: 'fixed', bottom: 30, right: 16, }}
      >
        {children}
      </Box>
    </Fade>
  );
}