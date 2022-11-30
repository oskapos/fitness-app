import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='40px' bgcolor='#fff3f4'>
      <Stack gap='30px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h5' pb='40px' pt='40px'>
          Made with ❤ by oskapos
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
